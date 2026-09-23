# Chat transcript 01 — Sales proof media and case studies (summary)

Condensed record of the design session that produced `B2 Bookings Site.dc.html`. Decisions are listed in the order they were made.

## Direction
- Site built from the bound B2 Bookings Design System (`_ds/b2-bookings-design-system-4e1b02b7-…`). Every component is mounted from the DS bundle (`B2BookingsDesignSystem_4e1b02.*`).
- User supplied media resources (YouTube testimonial, client results, prospect reply quotes). Screenshots in `uploads/`.

## Changes requested and applied
1. Headline swapped to "Predictable Outbound Pipeline for B2B SaaS". Subtitle: "Full outsourced BDR team, managed, trained and integrated into your systems. 60+ Sales opportunities in 90 days or we work for free."
2. Proof section restructured around cold call results and prospect replies. All direct mail / mailer references removed site-wide.
3. Removed the ADVISA testimonial and the "Three packages, three deals" section.
4. Results carousel label set to "Cold call · Prospect replies" (replies list) and "Cold call · Phone-sourced results" (carousel).
5. Reply cards redesigned as a simple list: one row per quote, serif (Fraunces) quote, attribution on the right, thin hairline dividers.
6. StartProto industry changed from "machine shops" to "Machinery".
7. Footer cleaned up: "Operated, not consulted." removed.
8. Unit economics calculator rebuilt to the real pricing model:
   - Retainer is dynamic = conversations × per-conversation rate.
   - Rate tiers: $125 at ≤200 convos, $100 at 300, $75 at 600+, linearly interpolated between tiers.
   - Meetings = 10% of conversations. Closed deals = meetings × close rate. Revenue = deals × deal size.
   - In-house comparison inside the widget: in-house cost = conversations × $150, shown as two horizontal bars (Ink = in-house, Ledger Green = B2 Bookings) that resize with the sliders.
   - The earlier standalone comparison table was removed.

## Open items at handoff
- Pricing table still shows old pod prices (One rep $9,500 / Two reps $17,800 / Three reps $25,200). Undecided whether to replace with the 200 / 300 / 600+ tiered model.
- Hero scorecard third stat label still reads "Machine shops · 21 wk"; results card uses "Machinery". Align if desired.

## Session 02 — this turn
- User requested a handoff bundle in the same format as the original: README, chat transcripts, project files including the .dc.html and the b2-bookings-design-system folder.
