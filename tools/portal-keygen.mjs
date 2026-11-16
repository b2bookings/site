#!/usr/bin/env node
// Create (or replace) a client portal's keys.json.
// Usage: PORTAL_PASSWORD='...' node tools/portal-keygen.mjs hoplite/keys.json
// Replacing the keys changes the password; re-encrypt the current data afterwards
// with tools/portal-encrypt.mjs so the portal opens with the new one.
import { writeFileSync } from 'node:fs';
import { createKeys } from '../portal/crypto.js';

const [out] = process.argv.slice(2);
const password = process.env.PORTAL_PASSWORD;
if (!out || !password) {
  console.error("Usage: PORTAL_PASSWORD='...' node tools/portal-keygen.mjs <client>/keys.json");
  process.exit(1);
}
writeFileSync(out, JSON.stringify(await createKeys(password), null, 2) + '\n');
console.log('Wrote ' + out);
