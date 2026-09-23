# B2 Bookings — Design System

B2 Bookings is a full outsourced BDR team for sales-led B2B SaaS companies at $3M to $8M ARR. Ramped and delivering within three weeks. Management, training, refinement, reporting and integrations are handled in house. The product is high volume pipeline production through phone conversations at scale, tracked and reported on. Not a consulting shop selling a playbook, not a single operator dialing part time.

The buyer is a founder or sales leader who wants 15+ qualified opportunities a month and a growth lever they can turn up or down. They are tired of unpredictable pipeline, AEs burning time on non-ICP deals, SDR turnover and rising CAC. They trust specificity over polish and want to pay for results, not headcount.

## Messaging pillars

Every visual and interactive decision traces back to one of these. If an element does not reinforce predictability, ICP fit, paying for outcomes, cost efficiency or scalability, cut it.

1. **Predictable pipeline, not pipeline roulette.** 15+ qualified opportunities a month, consistent and repeatable.
2. **ICP-fit conversations, not activity for its own sake.** Sales efficiency comes from who gets called, not how many calls happen.
3. **Pay for results, not headcount.** No hiring risk, no ramp time, no tool stack to manage.
4. **Volume at scale drives cost down.** High volume outbound conversations, tracked and reported on every one.
5. **Turn it up or down.** A growth lever, not a fixed cost.

## The idea the system carries

Predictability and control, made visible. The system communicates that through structure: tracked numbers, tabular data, scorecards, ledger discipline applied to every surface. Closer to a well-run ledger or a field report than a marketing brochure. Everyone else in outbound looks like software. This should look like proof.

## Sources

This system was built from a written brand brief (B2 Bookings — Design System Brief, 19 Sep 2026, by Chase). No codebase, Figma file, existing site export, logo file, photography or font binaries were supplied. `startupoutbound.com` is referenced in the brief as a mechanics reference only (calculator, count-ups, staged scroll sequence), never as an aesthetic reference. Everything visual here is authored from the brief.

---

## CONTENT FUNDAMENTALS

**Voice.** Direct, dry, practitioner-voiced, dense with concrete detail. Written by someone who has personally made the calls and kept the records.

**Person.** "You" for the buyer, "we" for the team. Never "our clients see results" in the third person when "you get the objection log" is available.

**Casing.** Sentence case for headlines and body. UPPERCASE with 0.1em tracking for labels, eyebrows, table heads, badges and nav links only. No Title Case Headlines.

**Punctuation.** No em dashes. Periods over exclamation points. No hashtags, no emoji, ever. Commas and full stops do the work.

**Numbers.** Always specific and always tabular: `1,912 conversations`, `3.5% convo to meeting`, `$17,800 / mo`. A range is fine (`15+`, `$3M to $8M`), a vague intensifier is not ("dramatically more pipeline").

**Do write:**
- "Predictable pipeline, not pipeline roulette."
- "Sales efficiency comes from who gets called, not how many calls happen."
- "Objections logged verbatim, grouped weekly, fed back into the script. You see the log, not a summary of it."
- "Billed monthly in advance. 30 days notice either side."

**Do not write:**
- "Unlock explosive growth with our world-class SDR solution."
- "Let's be honest — outbound is broken."
- "We're passionate about pipeline 🚀"
- Anything that opens with a rhetorical question or a one-word sentence for effect.

**Labels are the signature.** Every section, card, stat and form field carries a small-caps label: `CASE STUDY 03`, `UNIT ECONOMICS`, `WEEK 1`, `SOURCE: DIALER EXPORT, SEP 2026`. Metadata is treated as content, not chrome.

**Claims carry their receipt.** A number appears with its source or qualifier next to it. "41 meetings" is always "41 meetings · 90 days · mining services, $6M ARR".

---

## VISUAL FOUNDATIONS

**Palette.** Six colors, no more. Ink `#14181C` (text, headlines, line art), Paper `#EFF1F2` (page, a cool light neutral, never pure white), Paper Deep `#E2E6E8` (cards, contrast sections, zebra rows), Ledger Green `#1F3D2B` (serious anchor: data viz, proposal section heads, credibility markers), Signal `#9B2226` (one CTA or one number per screen, two at absolute maximum), Rule Gray `#8A8478` (captions, metadata, hairlines). About 90% of any layout is Ink on Paper. Tints exist only as hairline and wash values (`--rule-40`, `--ink-12`, `--signal-12`) and never as fields of their own. No fourth accent color is ever added, not even for one page.

**Type.** Fraunces for display and headlines (56–72px hero at 1.05 leading, -0.02em tracking), Inter for body, UI and all numerals. H3 steps down into Inter Semibold at 20px on purpose: the serif is for statements, the sans for working text. Every stat, rate and dollar amount uses Inter tabular lining figures so columns do not jitter. Fraunces italic appears once per section at most, on a single word. No third typeface, ever, and no script or decorative faces.

**Backgrounds.** Flat fields only. Paper for default, Paper Deep for contrast sections and cards, Ink for reverse contexts (`.on-ink`), which are the exception rather than a parallel dark mode. The only texture is a halftone dot field (radial-gradient dots, 6px pitch) at 3.5–4.5% opacity, behind hero sections and dividers, never over type. No gradients anywhere. No background images beyond real photography.

**Imagery.** Real, unstaged, on-location: industrial plants, mailers being written by hand, call recordings on a desk. Warm and plain, shot on site, no filters and no styling. Never stock photography of people at laptops. None was supplied, so every kit uses `PhotoSlot`, a captioned Paper Deep placeholder naming the shot that belongs there.

**Layout.** 12 columns, 1140px content max, 80px side margins on large screens, 68ch prose measure. Asymmetric by default: 7/5 splits with the headline left and the stat, table or image right. Left-aligned headlines and body. Centered layouts are reserved for end cards. Nothing is full bleed except photography.

**Spacing.** 4px base: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128. 96–128px between major sections, 12–32px inside them. Density signals confidence inside a section; air between sections signals the same thing at the page level. White space is an element. When a layout feels thin, remove something rather than add a decoration.

**Cards and containers.** Flat Paper Deep field, 1px Rule Gray hairline border, 4px radius, 32px minimum internal padding, no shadow. Interactive zones (calculator, dashboards, live tallies) use the same field wrapped as a `LedgerPanel` with a hairline header, so a working zone reads as distinct from static editorial page around it.

**Borders, rules and shadows.** 1px hairlines (`--rule-40`) divide sections, table rows and stat cells. A 1px Ink rule closes a table head; 2px Ink opens a major document section. There are no drop shadows, no inner shadows, no glows, no glassmorphism and no protection gradients. Where a shadow would normally sit, use a hairline.

**Radii.** 0–4px only. 2px on badges and tags, 3px on buttons and inputs, 4px on cards and panels. Nothing is pill-shaped except nothing; there are no pills.

**Transparency and blur.** Blur is never used. Transparency is limited to the four tint tokens for rules and washes, plus a 60% Ink scrim behind modals. Text is always full opacity so contrast holds.

**Animation.** Fades and 16px upward slides on scroll-into-view, 150–250ms, `cubic-bezier(.22,.61,.36,1)`. Count-ups run once from zero, never loop. Stagger between siblings stays under 150ms. No bounce, no spring, no parallax, no looping background motion, no autoplay video. Motion exists to reveal information; if it only decorates, it gets cut. `prefers-reduced-motion` collapses all durations to zero and renders final values.

**Hover states.** Color shifts and hairline underlines only. Primary buttons fill from Ink to Signal, like a stamp landing. Text links and nav go Ink to Signal and gain a Signal underline. Slider fills go Ledger Green to Signal while dragging. No scale, no zoom, no lift, no shadow growth, no lighter tints.

**Press and focus states.** Press is the hover color held, with no scale change. Focus is a 1px Ink underline on inputs (the bottom rule darkening from Rule Gray to Ink) and the browser outline elsewhere; nothing glows.

**Forms.** Underline inputs, bottom border only, no boxed or filled fields. Uppercase tracked Rule Gray label above every field. Errors turn the underline Signal and add a Signal caption; no red is introduced.

**Icons.** Line-based, 1.75px stroke, no fill, Ink or Rule Gray only. Lucide from CDN (see ICONOGRAPHY).

**Data visualization.** Bar charts and simple line charts only. Ledger Green series, one Signal bar for the point being made, Ink axis, Rule Gray gridlines, tabular value labels. No pie, donut, 3D, area-fill or illustrated chart styles. A chart should look like it came out of an annual report.

**Fixed elements.** The nav is the only sticky element, and it carries one hairline. No floating CTAs, no sticky banners, no cookie-style bars in the mocks.

---

## ICONOGRAPHY

No icon set, icon font, SVG sprite or logo file was supplied with the brief, so nothing could be copied in. `assets/` is intentionally empty of marks.

**Substitution, flagged:** [Lucide](https://lucide.dev) v0.460.0 is linked from CDN (`https://unpkg.com/lucide@0.460.0/dist/umd/lucide.min.js`) as the closest match to the brief's spec: line-based, no fill, uniform stroke, a plain `phone` handset rather than a stylized one. Override the stroke to 1.75px and the color to Ink or Rule Gray; Lucide's 2px default is slightly heavier than this system wants. If B2 Bookings has or wants its own drawn set, replace the CDN link and drop the SVGs into `assets/icons/`.

**Usage rules.** Icons illustrate process, not decoration: phone, list, check, calendar, minus. Treat an icon the way a ledger treats a checkbox, functional and small. Never colored beyond Ink or Rule Gray, never inside a filled circle or badge, never at display size as a hero graphic. No emoji, ever. No unicode characters standing in as icons except the multiplication sign used as a close glyph and the arrows in `IconButton` examples. Avoid the clichés the brief names: stock telephones, upward growth arrows, handshakes, gradient blobs.

**Logo.** No mark exists in this system. The wordmark is type: "B2 Bookings" set in Fraunces Semibold, Ink on Paper, reverse for dark contexts only, clear space equal to the cap height of the B. The `Wordmark` component is the only lockup. The optional stamp device described in the brief has deliberately **not** been drawn: it needs a designer or an illustrator, not an approximation. Ask for it, or brief it out.

---

## INDEX

Root files:

- `styles.css` — the entry point consumers link. Import lines only.
- `readme.md` — this file.
- `SKILL.md` — Agent Skills wrapper so this system can be used inside Claude Code.
- `thumbnail.html` — homepage tile.

`tokens/` — `fonts.css` (Google Fonts import for Fraunces and Inter), `colors.css`, `typography.css`, `spacing.css`, `borders.css`, `motion.css`, `texture.css`, `base.css`.

`guidelines/` — foundation specimen cards rendered in the Design System tab: Colors (Ink and Paper, Surfaces, Ledger Green and Signal, Rule Gray and tints, Usage discipline, Reverse context, Data viz palette), Type (Display, Headings, Body, Eyebrow label, Tabular figures, Fraunces italic), Spacing (Spacing scale, Section rhythm, Grid and measure), Brand (Wordmark, Halftone field, Rules and borders, Motion).

### Components

`components/brand/` — **Wordmark**

`components/core/` — **Button**, **IconButton**, **Label**, **Badge**, **Tag**, **Card**, **Rule**

`components/forms/` — **Input**, **Select**, **Checkbox**, **RadioGroup**, **Switch**, **Slider**

`components/data/` — **StatDisplay**, **Scorecard**, **DataTable**, **BarChart**, **LedgerPanel**

`components/navigation/` — **Nav**, **Tabs**

`components/feedback/` — **Dialog**, **Toast**, **Tooltip**

`components/interactive/` — **CountUp**, **Reveal**, **ProcessSequence**, **RoiCalculator**

Each component directory holds `<Name>.jsx`, `<Name>.d.ts`, `<Name>.prompt.md` and one `@dsCard` HTML showing its states.

### UI kits

- `ui_kits/website/` — the marketing site: hero on pillar one, live ROI calculator, staged method sequence, proof organized by pillar, pricing, footer. Interactive: nav scrolls, tabs switch proof, the booking dialog runs two steps.
- `ui_kits/proposal/` — four Letter-size proposal pages: cover, scope, unit economics, terms.
- `ui_kits/media/` — YouTube thumbnail, lower third, end card, LinkedIn quote card.

### Intentional additions

No source defined a component inventory, so the set above is authored from the brief. Beyond the standard primitives, five components exist because the brief names them specifically: `Label` (the small-caps eyebrow, called the system's signature move), `Scorecard` and `StatDisplay` (ledger tally displays), `LedgerPanel` (the bordered working zone for live elements), `ProcessSequence` (List Build → The Call → The Objection Log → The Booked Meeting) and `RoiCalculator` (the flagship interactive element). `Reveal` and `CountUp` exist to keep motion inside the 150–250ms fade-and-slide rule rather than leaving it to each implementer.

### Known gaps

- No logo file, no stamp mark, no photography, no font binaries were supplied. Fonts load from Google Fonts; photography is placeholdered; no mark was drawn.
- Line charts are specified in the brief but only `BarChart` is built. Add `LineChart` when a real dataset exists to draw.
