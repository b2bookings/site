# Two sales offerings overview

_Started 2026-09-03 16:13 UTC_

---

## User

These are my two offerings. I want to build a multi-page website that starts with a question for the visitor with two selection options: 

Which best describes your goals?

Fast Market Capture
- Large TAM
- Distinct competitive advantage
- Cutting edge
- Fast moving space
- Aggressive growth goals
- Best for software and technology with

Intentional Client Acquisition
- Smaller TAM
- Large, long-term contracts
- More people/process oriented
- Relationships build slowly
- Growing at your own pace
- Best for more established industries 

After the user selects one of these two, I want them to get directed to the corresponding page - option 1 takes them to the cold call offering. Option 2 takes them to the personalized gift option.


**B2 Bookings: Done-For-You Outbound Prospecting**

B2 Bookings is a phone-first outbound prospecting and revenue operations agency for B2B companies. We book meetings the way meetings have always actually gotten booked: real conversations, not automated sequences hoping someone replies.

Seven years of cold calling experience, mostly in SaaS, taught us one thing that most agencies skip past: volume alone doesn't work. The phone outperforms email because it creates real conversations, not because dialing more numbers is a strategy. Success comes from asking the right person for the right thing at the right time. Skip any part of that and you're just generating noise.

What that means in practice: we run fractional outbound sales and RevOps for clients who need pipeline without building an internal team to get it. That includes list building and data hygiene, campaign structure, live calling and qualification, and full contractor management, the operational work that would otherwise require a dedicated hire. We handle it as an extension of your team, not a black box that hands you a spreadsheet at the end of the month.

Engagement tiers scale from a defined block of conversations up to a fully dedicated operator running discovery calls before handoff to your AEs. Performance is measured on qualified conversations per volume of dials, tracked on a rolling basis, with accountability built into the terms rather than left as a vague promise.

If you're a BDR manager who can't get consistent output, an early sales hire trying to find traction, or a founder who knows outbound works but can't get it running, this is built for that gap.

The Personalized Direct Mail Campaign: How It Works

The core idea: Instead of a cold email or a generic mass mailer, each target prospect receives one fully personalized physical package, built around real research on them and their company, that funnels into a custom digital experience and ends in a live conversation with a salesperson.

Step 1 — Targeting & Research

Every prospect is vetted against the client's ideal customer profile: company size, industry, and — critically — an active trigger event (new leadership, an acquisition, rapid growth, a funding event, an ownership change, or similar). Only accounts that fit the profile and have a live trigger make the send list.

Once a prospect qualifies, individual research is done company-by-company: size, ownership structure, the specific trigger and its date, the decision-maker's background and public statements, and any personal detail — education, community involvement, a recent quote or post — that lets the outreach feel individually written, because it is.

Step 2 — The Personalized Gift

Each recipient gets one physical gift chosen specifically for them, not a generic branded item. The goal is a conversation hook: something distinctive enough that a stranger's assistant won't quietly toss it before it reaches the desk.

Step 3 — The Handwritten Letter

A real, handwritten letter accompanies the gift. It opens by naming the specific thing that just happened at their company, acknowledges something true and specific about what they've built, names the kind of problem that typically shows up at their current stage without pitching yet, briefly explains why this gift was chosen for them, and closes with a simple invitation to scan a card and talk. Kept short, plainspoken, and never salesy.

Step 4 — The QR Code Card

A separate small card, clipped to the letter, carries a QR code pointing to a URL built just for that person. This turns a passive mailer into a trackable, digital-first funnel — the moment they scan, the sender knows engagement has started.

Step 5 — The Custom Landing Page

Scanning the code lands them on a one-off page built entirely around them: their name in the headline, their company's branding, a short explanation of what's in the box, a personal video, proof points relevant to their specific industry and situation, and a direct call-to-action to book time with the closer. Nothing generic — the page exists because they exist.

Step 6 — The Personal Video

A short video of the sender packing that specific box and explaining why the gift was chosen. It's proof the whole thing wasn't automated — a real person did this for them specifically.

Step 7 — The Scan-Triggered Follow-Up Sequence

Once the QR is scanned, a short sequence of personal emails begins — almost entirely about the prospect, with only a single sentence about the sending company in each one. Each message references the prospect's own trigger, situation, or public statements, and nudges gently toward a short call, escalating across several touches, ending in a warm, low-pressure "no hard feelings" close that leaves the door open.

Step 8 — The Human Handoff

The endpoint of the whole system isn't a sale — it's a scheduled conversation with a closer. The researcher's job is to open the door with something that feels unmistakably personal; the close happens live, backed by everything the prospect has already seen about their own situation.

## Assistant

## Assistant

## Assistant

## Assistant



## Assistant

_[tool: ask_user]_

Waiting on your answers to the form — mainly the visual direction, site structure, and what proof material you have.

## User

Answered — design_system: Picked a design system (now attached); structure: Three pages + a shared About/contact page; cta: Book a call (calendar embed placeholder); chooser_behavior: Choice is a soft filter, both stay reachable; proof: Case studies with numbers, Testimonials, Video; tone: Plainspoken operator; anything: I have an existing logo

## Assistant

_[tool: list_files]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: grep]_

_[tool: dc_write]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

Built as one site with hash routing: chooser home → `#/cold-call` (Fast Market Capture) → `#/direct-mail` (Intentional Client Acquisition) → `#/about`. Your logo is in the header and footer; both offering pages cross-link so nothing is locked off.

Placeholders to fill: calendar embeds (3), case study numbers, testimonials, video embeds, and contact details on About. Send those and I'll drop them in.

## User

Found issues — fixing…

## Assistant

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

Cropped the logo's transparent margins with `object-fit: cover` so the wordmark reads at full size in both the header and footer.

## User

Found issues — fixing…

## Assistant

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

Matched the crop box to the wordmark's own aspect ratio, so the full logo shows uncut in both places.

## User

it cut off the logo at the bottom.

## Assistant

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

Replaced the crop with a tight window sized to the wordmark's actual ink bounds — nothing should be clipped now.

Note: you're at 90% of your usage quota, so this is a good stopping point.

## User

For intentional Client Acquisition, I would want it to show a few things

I want it to say that this video + Package (will add a picture of the package that was sent) led to a $150k/yr closed won deal
https://youtube.com/shorts/6TpgJFeyFFo?si=TjCl6Zxz8lVUtkBg

This led to the largest outbound contract ever sourced by the company - and getting THANKED for it. (include placeholder of their response via email) horizontal screenshot.

https://youtube.com/shorts/wjOHXk2Nj8k?si=Y7Jn1C1ifbeSLKyH

This effort not only secured a contract for a brand new offering and long-term potential upsell, but led to a 33% expansion in contract size because this client wanted to learn to implement this exact method for their sales team:

https://youtube.com/shorts/bZoL7XKwS4g?si=U-wGE_3OBlKFTm8K

Include this quote with it - Their CPO said at the end of the call "I've been doing this a long time and I've only seen something like this one other time. This is the ONLY reason we're having this conversation right now"

## Assistant

_[tool: dc_html_str_replace]_

_[tool: dc_js_str_replace]_

## Assistant

_[tool: ready_for_verification]_

## Assistant

The Intentional Client Acquisition page now has a three-send proof section, each with its YouTube short embedded vertically alongside the result:

01 — $150k/yr closed won, with a slot for the package photo.
02 — Largest outbound contract the company ever sourced, with a horizontal slot for their thank-you email screenshot.
03 — 33% contract expansion, with the CPO quote pulled out.

Two image placeholders left to fill: the package photo and the email screenshot. Drop them in and I'll place them.

## User

"I don't give a s$%t about activity, I give a s$%t about results, and you're the first booking company I've worked with that never lost site of that"

I want that to be on the page along with a placeholder embed towards the top of the page under the header but above the 8 steps

## Assistant

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

Quote added verbatim, paired with a 16:9 video embed placeholder, sitting between the intro and the eight steps. Attribution line is a placeholder — send the name/title/company when you want it filled.

## User

Brian Millis, VP of Sales & Marketing, ADVISA

That's the name title and company

## Assistant

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

Attribution set.

## User

can you generate a youtube thumbnail from this? I want it to say "I don't give a s$%t about activity" on the video in a way that encourages people to click on the video to learn more

## Assistant

_[tool: image_metadata]_

_[tool: dc_write]_

_[tool: show_html]_

_[tool: show_html]_

_[tool: show_to_user]_

_[tool: snapshot_element]_

_[tool: view_image]_

_[tool: dc_html_str_replace]_

_[tool: snapshot_element]_

_[tool: view_image]_

_[tool: show_to_user]_

_[tool: snapshot_element]_

_[tool: view_image]_

_[tool: run_script]_

_[tool: dc_html_str_replace]_

_[tool: snapshot_element]_

_[tool: view_image]_

_[tool: run_script]_

_[tool: view_image]_

_[tool: run_script]_

_[tool: view_image]_

_[tool: run_script]_

_[tool: view_image]_

_[tool: present_fs_item_for_download]_

_[tool: run_script]_

_[tool: view_image]_

_[tool: present_fs_item_for_download]_

Unsharp mask plus a small contrast/saturation lift. It's a compressed video still upscaled, so there's a ceiling — a higher-res frame grab would sharpen further.

## User

embed this video at the top of the intentional acquisition page to the right of his quote

## Assistant

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

Embedded next to the quote on the Intentional Client Acquisition page.

## User

Include both of these photos toward the top, as well as the youtube thumbnail of the sterling example - the "largest outbound contract..."

I want that to go toward the top of the page. Below the header and sub paragraph but above everything else. format these photos in a way that makes sense.

It should ask the question - when is the last time you were genuinely grateful for sales outreach?

Show people you care, show people you took the time to get to know them, THAT's what create's lifelong customers that talk about you to their peers.



side note change contract to "deal" in the brief snippet about the sterling example

## Assistant

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

Added a three-panel row (compass, letter, Sterling video thumbnail) under the intro with your question as the section headline. "Contract" → "deal" in the Sterling snippet and its heading.

The Sterling panel pulls YouTube's own thumbnail — if you'd rather use the custom one I built, say so and I'll swap it in.

## User

Found issues — fixing…

## Assistant

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

All three panels now share a 320px image height, so captions sit on one baseline; the Sterling thumbnail keeps a 16:9 box instead of being cropped to portrait.

## User

Found issues — fixing…

## Assistant

_[tool: run_script]_

_[tool: ready_for_verification]_

Figures now flex (1 / 1 / 2.2) with a shared 320px image height, so the row fits any width and captions stay on one baseline.

## User

Include 2 quotes
 - "Ok... you have my attention. Normally I throw these away - let's find some time to grab dinner or a drink next week"
CEO of a $70M mining company

"First off, I want to say thank you. I would be happy to set aside 30 minutes and am genuinely looking forward to learning what you have to offer"
- COO of a 500+ national real estate development firm

## Assistant

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

Both quotes added verbatim as a two-up row directly under the photo panels, above the Millis quote and video.

## User

there should be a backdrop behind the titles of the people that those quotes belog to so they stand out more

## Assistant

_[tool: run_script]_

_[tool: grep]_

_[tool: ready_for_verification]_

Both attributions now sit on a solid steel-blue plate with reversed type.

## User

bold the text inside those clocks
also provide some visual differentiation - right now everything kind of flows into each other - its overwhelming because its not broken up at all

## Assistant

_[tool: run_script]_

_[tool: ready_for_verification]_

Attribution plates bolded and enlarged. The page now breaks into numbered bands (01 What a send looks like / 02 What they wrote back / 03 What the client said / 04 How it works / 05 Proof), each with a rule above it, and the reply-quotes band sits on a tinted surface to separate it from the rest.

Separately: your screenshot shows "Video player configuration error 153" on the Millis video — YouTube is blocking embedding for that video. You'd need to enable embedding in its YouTube settings, or I can link out to it instead.

## User

Found issues — fixing…

## Assistant

_[tool: run_script]_

_[tool: ready_for_verification]_

Millis attribution now uses the same reversed plate, and his video is a click-through poster ("Watch on YouTube") since YouTube blocks that embed. If you enable embedding on it, I'll switch it back to an inline player.

## User

Found issues — fixing…

## Assistant

_[tool: run_script]_

_[tool: ready_for_verification]_

Moved the "Watch on YouTube" affordance to the bottom-right corner in dark neutral, so it no longer collides with the blue plate baked into the thumbnail.

## User

use this as the third vertical photo in that first section below the header - to the right of the letter:

## Assistant

_[tool: run_script]_

_[tool: read_file]_

Structure is correct.

_[tool: ready_for_verification]_

Added it as the third portrait, right of the letter. The three verticals now share one row and the Sterling video thumbnail moved to its own row below, so nothing gets crushed.

## User

here is the meeting link for the calendar embed
https://calendar.app.google/J8tbc5CbvkR2Lrxj7

## Assistant

_[tool: run_script]_

_[tool: grep]_

_[tool: ready_for_verification]_

All three booking spots plus the header button now point at your scheduler.

One note: Google blocks `calendar.app.google` short links from loading inside an iframe, so these are prominent "Pick a time" cards rather than a live inline grid. If you open the appointment schedule in Google Calendar and copy its embed code (the long `calendar.google.com/calendar/appointments/schedules/...?gv=true` URL), I can drop in a true inline embed.

## User

Found issues — fixing…

## Assistant

_[tool: run_script]_

_[tool: web_fetch]_

_[tool: grep]_

_[tool: read_file]_

_[tool: run_script]_

_[tool: ready_for_verification]_

Live iframes now in all three slots (both offering pages and About), each with a "Pick a time" button beneath as fallback. If Google refuses the frame in your browser, the button still works — tell me and I'll go back to button-only.

## User

get rig of the sterling video preview in the section below the header. Just have the three vertical images.

## Assistant

_[tool: run_script]_

_[tool: read_file]_

_[tool: ready_for_verification]_

Removed. That section is now just the three vertical photos. The Sterling video is still in the proof section further down.

## User

use this as my headshot. put it on the get in touch page

## Assistant

_[tool: read_file]_

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

Headshot added above "Get in touch" on the About page, framed like the other figures. Name caption is on the plate — say the word if you want a title line under it.

## User

add more visual interest throughout - experiment with more clear section deliniators and color mods

## Assistant

_[tool: run_script]_

_[tool: ready_for_verification]_

Changes, all within the Industry palette (steel accent, accent-900 field, tinted surface):

Home — the chooser question now sits in a reversed steel-blue field with registration marks; option kickers became solid plates.

Cold call — numbered kickers 01–04 with hairline rules, the tiers band moved to accent-900 with corner marks, "Who this is built for" on a tinted band with numbered plates, CTA block on a tinted surface.

Direct mail — the eight step numbers became solid numbered plates; CTA on tinted surface.

## User

these look like bottons. remove bg but bold and enlarge text for emphasis

## Assistant

_[tool: run_script]_

_[tool: grep]_

_[tool: ready_for_verification]_

Backgrounds removed on all three attributions; text is now bold 19px steel-blue.

## User

add stylized underline under company size indication

## Assistant

_[tool: run_script]_

_[tool: ready_for_verification]_

"$70M" and "500+" now carry a 3px steel-blue rule beneath them.

## User

500+ employee** make that change

## Assistant

_[tool: run_script]_

_[tool: ready_for_verification]_

Done — "COO of a 500+ employee national real estate development firm."

## User

add a quote in triangle format "Without Chase, there is no way we (CEO and CPO) would be sitting here talking to you today"

$170M electrical contracting company

## Assistant

_[tool: run_script]_

_[tool: ready_for_verification]_

Added below the two-up pair in the "What they wrote back" band, as a speech bubble with a triangular tail pointing down to the attribution.

## User

A separate small card, **printed on** the letter, carries a QR code

## Assistant

_[tool: run_script]_

_[tool: ready_for_verification]_

Changed.

## User

add this as the feature testimonial on the calling page: https://youtu.be/ca962i59Nls

## Assistant

_[tool: run_script]_

_[tool: grep]_

_[tool: run_script]_

_[tool: ready_for_verification]_

Added as "04 / Featured testimonial" on the calling page, above Proof (now 05), using the click-through poster pattern since your other video blocked embedding. If this one allows embeds I'll switch it to an inline player.

## User

should be just below the header and bigger

## Assistant

_[tool: run_script]_

_[tool: ready_for_verification]_

Moved directly under the hero on the calling page and widened to full content width. Proof went back to 04.

## User

include some of these results (most impressive and defensible) in a large rotating banner just above the header and right above the start of section 2

## Assistant

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: run_script]_

_[tool: ready_for_verification]_

Added a large rotating results banner on the calling page, directly above section 02. It cycles every 5 seconds through the five phone-sourced results, with numbered buttons to jump manually:

WhoIsXML & Attaxion $5M pipeline / Micro Estimating $2M / StartProto $1M+ / Paperless Parts $500K+ / GetCrux.ai $250K+ ARR

I left out the email/LinkedIn-sourced ones (Bandalier, Four Pillars) since this page is phone-first. Say the word if you want them in.

## User

it should be a moving carousel

## Assistant

_[tool: run_script]_

_[tool: run_script]_

_[tool: ready_for_verification]_

Now a continuously scrolling marquee — five result cards on a seamless loop, edges faded, pauses on hover, and respects reduced-motion settings.

## User

dont stop scroll on mouse hover

## Assistant

_[tool: run_script]_

_[tool: ready_for_verification]_

It now scrolls continuously regardless of hover.

