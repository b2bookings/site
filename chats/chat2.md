# GitHub hosting setup

_Started 2026-09-04 16:27 UTC_

---

## User

Continuing from "Two sales offerings overview".

## Assistant

We're building a two-offering B2B prospecting website with hash-based routing: a home chooser directing visitors to either the cold-call page (B2 Bookings outbound calling) or direct-mail page (personalized packages), plus an About page. Both offerings stay accessible across the site.

The cold-call page now features a large continuously-scrolling carousel (five phone-sourced results: $5M, $2M, $1M+, $500K+, $250K+ ARR) positioned above section 02, a full-width featured testimonial video below the hero, and numbered sections (01–05) with visual dividers and color-coded bands using the Industry palette (steel accents, reversed fields, tinted surfaces).

The direct-mail page opens with three vertical photos (compass, letter, gift box) below the header, followed by a "What they wrote back" band with two-up quote attributions (bolded text, steel-blue underlines on company size), a speech-bubble testimonial from a $170M electrical contractor, the "I don't give a s$%t about activity" Millis quote and YouTube link, eight numbered steps with solid plates, and proof section with three YouTube videos embedded or click-through.

Both pages anchor to calendar booking embeds (Google Calendar iframe with fallback button), the header and footer use your cropped logo at full size, and visual hierarchy is enforced through color bands, numbered kickers, hairline rules, and tinted surfaces throughout.

Remaining: the rotating carousel should scroll continuously without pausing on hover — verify it's working as intended.

Files: B2 Bookings Site.dc.html, support.js

## User

can you package this up into a folder I can upload to github for hosting?

## Assistant

_[tool: grep]_

_[tool: run_script]_

_[tool: copy_files]_

_[tool: run_script]_

_[tool: run_script]_

_[tool: present_fs_item_for_download]_

Zip is above. Unzip and upload the contents to your repo root, then Settings → Pages → deploy from `main` / root.

Two things to know: `.nojekyll` is included and must stay — without it GitHub Pages hides the `_ds` folder and the site loses its styles. And React loads from unpkg at runtime, so it needs internet (fine for public hosting).

