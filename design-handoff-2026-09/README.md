# Handoff: B2 Bookings marketing site

## Overview
Single-page marketing site for B2 Bookings, an outsourced BDR team for sales-led B2B SaaS ($3M–$8M ARR). The page sells predictable phone-sourced pipeline: hero with video testimonial, four-stage method, live unit economics calculator with in-house comparison, cold call proof (case study video, results carousel, prospect replies), booking CTA. No pricing section (removed; current prices are not published on the site), footer.

## About the design files
The files in this bundle are **design references created in HTML**: prototypes showing intended look and behavior, not production code to copy directly. Recreate them in the target codebase's existing environment (React, Next.js, Astro, etc.) using its established patterns. If no environment exists, pick an appropriate framework (a static React/Next.js or Astro site fits well) and implement there.

`B2 Bookings Site.dc.html` opens directly in a browser (serve the folder over a local HTTP server so relative `_ds/` and `support.js` paths resolve). It composes components from the bundled design system; the JSX source for those components lives in the design system project and their compiled form is in `_ds/.../_ds_bundle.js`.

## Fidelity
**High-fidelity.** Final colors, type, spacing, copy and interactions. Recreate pixel-accurately using the design system tokens below.

## Page structure (top to bottom)
Content column: max-width `var(--content-max)` (1140px), side padding `var(--page-margin)` (80px desktop). Sections separated by 1px `--border-hairline` top borders, 96px vertical padding (Book section 128px). Two-column blocks use `grid-template-columns: repeat(auto-fit, minmax(min(100%, 380–420px), 1fr))` so they stack on narrow screens.

### 1. Nav (sticky)
- DS `Nav`, sticky top 0, z-index 20, 64px tall, one hairline.
- Items: Method, Numbers, Proof (items hide when their section is toggled off). Click scrolls smoothly to the section with a 64px offset and sets active state.
- Right action: small `Button` "Book a call" → booking URL.

### 2. Hero
- Halftone dot field behind (radial-gradient Ink dots, 1.1px, 6px pitch, opacity 0.035).
- Left column: `Label` "Outsourced BDR team · Live in 3 weeks"; H1 "Predictable Outbound Pipeline for B2B *SaaS*" (Fraunces, clamp(2.75rem, 5.4vw, 4rem), 1.05 leading, -0.02em, max 18ch, "SaaS" in italic weight 400); body-lg subtitle "Full outsourced BDR team, managed, trained and integrated into your systems. 60+ Sales opportunities in 90 days or we work for free." (max 52ch).
- Buttons: `Button variant="signal" size="lg"` "Book a call" (booking URL) + `Button variant="ghost"` "See the proof" (#proof).
- Below a hairline: `Scorecard` label "Phone-sourced pipeline", stats: $5M "Cybersecurity · 9 mo" (green), $2M "B2B SaaS · 4 mo", $1M+ "Machine shops · 21 wk".
- Right column: `Label` "What it looks like from the client's side"; 16:9 YouTube embed `https://www.youtube-nocookie.com/embed/ca962i59Nls?rel=0` on Ink, 1px hairline, 4px radius; caption "Cold call · Featured testimonial" (caption size, uppercase, tracked, Rule Gray, 600).

### 3. Method (`#method`, toggleable)
- Label "The method"; H2 "Four stages, all of them visible to you"; side paragraph "Sales efficiency comes from who gets called, not how many calls happen. Each stage produces an artifact you can read."
- DS `ProcessSequence` with steps:
  - List Build · Week 1 — "Named accounts only. Titles, triggers and disqualifiers agreed before a single dial. No scraped lists, no spray."
  - The Call · Week 2 — "Phone first. Every conversation recorded, scored against the ICP definition and attached to the account record."
  - The Objection Log · Ongoing — "Objections logged verbatim, grouped weekly, fed back into the script. You see the log, not a summary of it."
  - The Booked Meeting · Week 3 on — "15+ qualified opportunities a month, handed to your AEs with the call notes and the recording attached."

### 4. Unit economics (`#numbers`, toggleable)
- Section background Paper Deep. Label "Unit economics"; H2 "Run the math before you talk to us"; paragraph "Three inputs, no email gate. If the return does not clear 3x on the retainer, we will tell you that in the first call."
- DS `LedgerPanel` (label "Unit economics", title "Run your own numbers", meta "Retainer $X / mo", background Paper).
- Top row, two columns:
  - Sliders (DS `Slider`): Conversations / month 200–1500 step 50 (default 300); Average deal size $5,000–$150,000 step 1,000 (default $24,000); Close rate 5–50% step 1 (default 22%).
  - Output rows (caption label left, body-lg 600 tabular value right, hairline under each): Retainer / mo, Meetings booked / mo, Closed deals / mo (1 decimal), Revenue / mo, Cost per closed deal.
- Bottom row, above a 1px Ink rule:
  - Comparison bars: header "In-house vs B2 Bookings / mo" + "{n} convos". Grid 96px label / bar. In-house bar Ink, B2 Bookings bar Ledger Green, 20px tall, 2px radius, width transitions 200ms `cubic-bezier(.22,.61,.36,1)`. Value label beside each bar.
  - Ratio: stat-size tabular number "{x.x}x" (Signal when ≥ 3, else Ink) + Fraunces H3 verdict: "return on retainer. The math works." or "return on retainer. Raise deal size or close rate."

#### Calculator math
```
rate(c) = 125                       if c <= 200
        = 125 - (c-200) * 25/100    if c <= 300
        = 100 - (c-300) * 25/300    if c <= 600
        = 75                        otherwise
retainer   = convos * rate(convos)
meetings   = round(convos * 0.10)
wins       = meetings * close%
revenue    = wins * dealSize
costPerWin = retainer / wins
ratio      = revenue / retainer          (works if >= 3)
inHouse    = convos * 150
barWidth   = cost / (1500 * 150) * 70%   (same scale for both bars)
```
Currency: `$` + rounded, en-US thousands separators.

### 5. Proof (`#proof`)
- Label "Proof · Cold call"; H2 "Told by the people who took the meetings"; paragraph "Client testimonials on video, and the pipeline each phone program produced."
- Featured case study (two columns, hairline below): same YouTube embed; `Label tone="green"` "Case study · Featured testimonial"; Fraunces H2-size 600 headline "Cold calls become the primary driver of sales opportunities in 3 months."; blockquote with 1px Ink left rule: "There was no doubt that within a couple months of Chase implementing cold calling, cold calling was the number one driver of pipeline".
- Results carousel: Label "Cold call · Phone-sourced results", Inter 20px 600 heading "Pipeline produced on the phone, by client". Right: counter "01 / 05" (tabular, Rule Gray) + secondary sm buttons "← Prev" / "Next →".
  - Horizontal scroll-snap track, card width ≈ (100% − 2 gaps) / 2.4, min 300px, 24px gap, hidden scrollbar. Scrolling updates the counter; Prev/Next smooth-scroll one card.
  - Card: Paper Deep, 1px hairline, 4px radius, 32px padding, min-height 280px. Row: industry `Label` + index "01". Value 44px Inter 600 tabular Ledger Green, -0.02em. Unit caption uppercase. Detail body-sm. Footer hairline: client (600) left, duration (Rule Gray) right.
  - Data:
    1. WhoIsXML & Attaxion · Cybersecurity · $5M Pipeline · "150 booked meetings, 100+ demos." · 9 months
    2. Micro Estimating Systems · B2B SaaS · $2M Pipeline · "64 demos, 22 discovery calls, 58 proposals." · 4 months
    3. StartProto · Machinery · $1M+ Pipeline · "10–12 meetings/month at $12K–$25K ACV, 176 leads." · 21 weeks
    4. Paperless Parts · Manufacturing · $500K+ Pipeline · "50+ meetings (Enterprise)." · 16 weeks
    5. GetCrux.ai · Marketing analytics · $250K+ ARR · "40+ meetings in the first 60 days, enterprise accounts (HubSpot, Truist, Robinhood)." · 6+ months
- Prospect replies (96px above): Label "Cold call · Prospect replies", heading "What they wrote back". List opened by 1px Ink rule; each row 32px vertical padding, hairline bottom, flex-wrap: index (48px, caption, Rule Gray) · Fraunces 24px / 1.4 quote (max 44ch) · attribution body-sm (240px).
  1. "Ok... you have my attention. Normally I throw these away - let's find some time to grab dinner or a drink next week" — CEO of a $70M mining company
  2. "First off, I want to say thank you. I would be happy to set aside 30 minutes and am genuinely looking forward to learning what you have to offer" — COO of a 500+ employee national real estate development firm
  3. "Without Chase, there is no way we (CEO and CPO) would be sitting here talking to you today" — $170M electrical contracting company

### 6. Book (`#book`)
- Halftone field, centered (end card), max 720px, 128px padding. Label "Cold call · Fast Market Capture"; H2 "Thirty minutes on the phone, then you decide"; signal lg Button "Book a call".

### 7. Footer
- 1px Ink top rule. `Wordmark` size 26 + "Outsourced BDR teams for sales-led B2B SaaS." Contact column: Label "Contact", mailto `chase@b2bookings.com`, "Book a call" link.
- Bottom bar (hairline): Labels "© 2026 B2 Bookings" and "Numbers current to Sep 2026".

## Interactions & behavior
- Booking URL everywhere: `https://calendar.app.google/guHLMnYJKijZ5JNV8`.
- Nav smooth-scroll with 64px sticky offset; active item state.
- Carousel: scroll-snap, Prev/Next clamp at ends, counter tracks the nearest card (last card when scrolled to end).
- Calculator recomputes live on slider change; bars animate width 200ms.
- Links: Ink, hover Signal with Signal underline. Primary buttons fill Ink → Signal on hover. No shadows, scale or lift.
- Respect `prefers-reduced-motion` (zero durations).
- Responsive: all grids use auto-fit minmax and stack below ~800px.

## State
- `active` (nav item), `idx` (carousel index), `convos`, `deal`, `close` (calculator inputs).
- Section toggles (props): `showMethod`, `showCalculator` (default true). Can be dropped in production or kept as CMS flags.
- No data fetching; all content static.

## Design tokens
Defined in `_ds/.../tokens/*.css`; use those files as the source of truth.
- Colors: Ink `#14181C`, Paper `#EFF1F2`, Paper Deep `#E2E6E8`, Ledger Green `#1F3D2B`, Signal `#9B2226`, Rule Gray `#8A8478`. Tints: `--rule-40`, `--ink-12`, `--signal-12` (hairlines/washes only).
- Type: Fraunces (display/headlines), Inter (body, UI, all numerals with `tabular-nums lining-nums`). Labels uppercase, 0.1em tracking.
- Spacing (4px base): 4, 8, 12, 16, 24, 32, 48, 64, 96, 128.
- Radii: 2px badges/bars, 3px buttons/inputs, 4px cards/panels.
- Shadows: none. Hairlines instead.
- Motion: 150–250ms, `cubic-bezier(.22,.61,.36,1)`.

## Assets
- YouTube video `ca962i59Nls` (featured testimonial, used twice).
- `uploads/` — screenshots supplied by the user during the session (reference only).
- Fonts via Google Fonts (`tokens/fonts.css`). No logo file; wordmark is typeset Fraunces Semibold.
- Icons: none used on this page (DS specifies Lucide 0.460.0, 1.75px stroke, if needed).

## Files
- `B2 Bookings Site.dc.html` — the full page (template + logic class with all content and calculator math).
- `support.js` — runtime needed to open the .dc.html in a browser (prototype only, not for production).
- `_ds/b2-bookings-design-system-4e1b02b7-c4a7-4a19-845f-3e44248a64b9/` — design system tokens, styles, compiled component bundle, manifest and readme.
- `uploads/` — user-supplied reference screenshots.
- `chat_transcripts/` — summary of the design session and decisions.
