#!/usr/bin/env node
// Encrypt a client portal's plain data.json so it can be committed to the public repo.
// Needs only the portal's public key, not its password.
// Usage: node tools/portal-encrypt.mjs hoplite/keys.json /path/outside/repo/data.json hoplite/data.enc.json
import { readFileSync, writeFileSync } from 'node:fs';
import { encryptData } from '../portal/crypto.js';

const [keysPath, dataPath, out] = process.argv.slice(2);
if (!keysPath || !dataPath || !out) {
  console.error('Usage: node tools/portal-encrypt.mjs <keys.json> <data.json> <data.enc.json>');
  process.exit(1);
}
const keys = JSON.parse(readFileSync(keysPath, 'utf8'));
const data = JSON.parse(readFileSync(dataPath, 'utf8'));
writeFileSync(out, JSON.stringify(await encryptData(keys, data)) + '\n');
console.log('Wrote ' + out);
