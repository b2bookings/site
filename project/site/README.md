# B2 Bookings site

Static site. No build step.

## Files
- `index.html` — the whole site (home / cold call / direct mail / about, hash-routed)
- `support.js` — runtime that renders the page
- `_ds/` — Industry design system stylesheet + bundle
- `uploads/` — logo and photos
- `.nojekyll` — required so GitHub Pages serves the `_ds` folder (Jekyll ignores underscore-prefixed dirs)

## Hosting on GitHub Pages
1. Create a repo and upload the contents of this folder to the repo root.
2. Settings -> Pages -> Source: "Deploy from a branch", branch `main`, folder `/ (root)`.
3. Wait a minute, then open the URL Pages gives you.

Works the same on Netlify, Vercel, or Cloudflare Pages: drag the folder in, no build command, output directory = root.

## Notes
- React and Babel load from unpkg.com at runtime, so the site needs internet access.
- Routes are hash-based (`/#/cold-call`, `/#/direct-mail`, `/#/about`), so no server rewrite rules are needed.
