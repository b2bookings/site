# B2 Bookings site

Static site. No build step. Single page (previously a multi-page site with a
chooser, cold-call, direct-mail, and about page — replaced 2026-09 with a
one-page site focused entirely on the cold-calling offering).

## Files
- `index.html` — the whole site: nav, hero, method, unit-economics calculator, proof, booking CTA, footer
- `support.js` — runtime that renders the page
- `_ds/b2-bookings-design-system-4e1b02b7-c4a7-4a19-845f-3e44248a64b9/` — design-system tokens, stylesheet, and compiled component bundle
- `.nojekyll` — required so GitHub Pages serves the `_ds` folder (Jekyll ignores underscore-prefixed dirs)
- `build_standalone.py` — bundles `index.html` + `support.js` + the `_ds` CSS/JS (+ any `uploads/` images) into one self-contained `index.standalone.html` for manual upload when direct git push isn't available. React, ReactDOM, Babel-standalone, and Google Fonts stay as CDN references.

## Hosting on GitHub Pages
1. Push this repo (contents already at the repo root).
2. Settings -> Pages -> Source: "Deploy from a branch", branch `main`, folder `/ (root)`.
3. Wait a minute, then open the URL Pages gives you.

Works the same on Netlify, Vercel, or Cloudflare Pages: drag the folder in, no build command, output directory = root.

## Notes
- React and Babel load from unpkg.com at runtime, so the site needs internet access.
- Single page, in-page anchors only (`#method`, `#numbers`, `#proof`, `#book`) with a 64px sticky-nav scroll offset — no server rewrite rules needed.
- Booking link everywhere: `https://calendar.app.google/guHLMnYJKijZ5JNV8` (link-out button only, no embedded calendar iframe).

## Original design source
Design handoff bundles (chat transcripts, editable `.dc.html` source, and design-system files each export was generated from) are preserved for reference:
- `project/` and `chats/` — the original multi-page chooser/cold-call/direct-mail/about site (Industry design system).
- `design-handoff-2026-09/` — the current single-page rebuild (B2 Bookings design system).
