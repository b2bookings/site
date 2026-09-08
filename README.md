# B2 Bookings site

Static site. No build step.

## Files
- `index.html` — the whole site (home / cold call / direct mail / about, hash-routed)
- `support.js` — runtime that renders the page
- `_ds/` — Industry design system stylesheet + bundle
- `uploads/` — logo and photos
- `.nojekyll` — required so GitHub Pages serves the `_ds` folder (Jekyll ignores underscore-prefixed dirs)

## Hosting on GitHub Pages
1. Push this repo (contents already at the repo root).
2. Settings -> Pages -> Source: "Deploy from a branch", branch `main`, folder `/ (root)`.
3. Wait a minute, then open the URL Pages gives you.

Works the same on Netlify, Vercel, or Cloudflare Pages: drag the folder in, no build command, output directory = root.

## Notes
- React and Babel load from unpkg.com at runtime, so the site needs internet access.
- Routes are hash-based (`/#/cold-call`, `/#/direct-mail`, `/#/about`), so no server rewrite rules are needed.

## Known placeholders still to fill in
These are stubbed in the current design and need real content before launch — ask Claude Code to swap them in once you have the assets/copy:
- **Direct Mail page — proof section, send 01** ($150k/yr closed won): package-photo slot is an empty dashed box labeled `[ photo of the package that was sent ]`.
- **Direct Mail page — proof section, send 02** (largest outbound deal): thank-you-email screenshot slot is an empty dashed box labeled `[ horizontal screenshot of their thank-you email ]`.

## Original design source
The original Claude Design handoff bundle (chat transcripts, editable `.dc.html` source, and design-system files this export was generated from) is preserved under `project/` and `chats/` for reference.
