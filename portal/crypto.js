// Client portal encryption, shared by the browser page and the Node tools in /tools.
//
// Each portal has a P-256 key pair. The public key is stored in plain text in <client>/keys.json,
// so anything that refreshes the data can encrypt it without knowing the password. The private
// key is stored in the same file, encrypted with a key derived from the portal password
// (PBKDF2-SHA256). The browser asks for the password, unwraps the private key and decrypts the
// data. Only encrypted data is ever committed to the public repository.
//
// Data envelope: ephemeral ECDH P-256 with the portal public key, HKDF-SHA256 to an AES-GCM key.

const subtle = globalThis.crypto.subtle;
const enc = new TextEncoder();
const dec = new TextDecoder();
const INFO = enc.encode('b2-portal-v1');
const ITERATIONS = 600000;

export const b64 = buf => {
  const bytes = new Uint8Array(buf);
  let s = '';
  for (let i = 0; i < bytes.length; i += 0x8000) s += String.fromCharCode(...bytes.subarray(i, i + 0x8000));
  return btoa(s);
};
export const unb64 = str => Uint8Array.from(atob(str), c => c.charCodeAt(0));

async function passwordKey(password, salt, iterations) {
  const base = await subtle.importKey('raw', enc.encode(password), 'PBKDF2', false, ['deriveKey']);
  return subtle.deriveKey({ name: 'PBKDF2', hash: 'SHA-256', salt, iterations },
    base, { name: 'AES-GCM', length: 256 }, false, ['encrypt', 'decrypt']);
}

async function envelopeKey(privateKey, publicKey, epkRaw) {
  const shared = await subtle.deriveBits({ name: 'ECDH', public: publicKey }, privateKey, 256);
  const ikm = await subtle.importKey('raw', shared, 'HKDF', false, ['deriveKey']);
  return subtle.deriveKey({ name: 'HKDF', hash: 'SHA-256', salt: epkRaw, info: INFO },
    ikm, { name: 'AES-GCM', length: 256 }, false, ['encrypt', 'decrypt']);
}

// Make a new keys.json object for a portal protected by `password`.
export async function createKeys(password) {
  const pair = await subtle.generateKey({ name: 'ECDH', namedCurve: 'P-256' }, true, ['deriveBits']);
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const wrapKey = await passwordKey(password, salt, ITERATIONS);
  const pkcs8 = await subtle.exportKey('pkcs8', pair.privateKey);
  return {
    v: 1,
    publicKey: b64(await subtle.exportKey('raw', pair.publicKey)),
    kdf: { name: 'PBKDF2', hash: 'SHA-256', iterations: ITERATIONS, salt: b64(salt) },
    privateKey: { iv: b64(iv), ct: b64(await subtle.encrypt({ name: 'AES-GCM', iv }, wrapKey, pkcs8)) },
  };
}

// Password -> private key (pkcs8 bytes). Throws if the password is wrong.
export async function unlockKey(keys, password) {
  const wrapKey = await passwordKey(password, unb64(keys.kdf.salt), keys.kdf.iterations);
  return new Uint8Array(await subtle.decrypt({ name: 'AES-GCM', iv: unb64(keys.privateKey.iv) },
    wrapKey, unb64(keys.privateKey.ct)));
}

// Encrypt any JSON value to the portal's public key.
export async function encryptData(keys, value) {
  const portalPub = await subtle.importKey('raw', unb64(keys.publicKey), { name: 'ECDH', namedCurve: 'P-256' }, false, []);
  const eph = await subtle.generateKey({ name: 'ECDH', namedCurve: 'P-256' }, true, ['deriveBits']);
  const epkRaw = new Uint8Array(await subtle.exportKey('raw', eph.publicKey));
  const key = await envelopeKey(eph.privateKey, portalPub, epkRaw);
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const ct = await subtle.encrypt({ name: 'AES-GCM', iv }, key, enc.encode(JSON.stringify(value)));
  return { v: 1, epk: b64(epkRaw), iv: b64(iv), ct: b64(ct) };
}

// Decrypt an envelope with the private key bytes from unlockKey.
export async function decryptData(pkcs8, envelope) {
  const priv = await subtle.importKey('pkcs8', pkcs8, { name: 'ECDH', namedCurve: 'P-256' }, false, ['deriveBits']);
  const epkRaw = unb64(envelope.epk);
  const epk = await subtle.importKey('raw', epkRaw, { name: 'ECDH', namedCurve: 'P-256' }, false, []);
  const key = await envelopeKey(priv, epk, epkRaw);
  const pt = await subtle.decrypt({ name: 'AES-GCM', iv: unb64(envelope.iv) }, key, unb64(envelope.ct));
  return JSON.parse(dec.decode(pt));
}
