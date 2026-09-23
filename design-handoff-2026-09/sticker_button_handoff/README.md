# Handoff: Sticker CTA (option 1a, "Die-cut")

Add one element to the existing site. Do not replace or regenerate any other part of the page; the codebase has changes that are not in the design files.

## What it is
A tilted red starburst "sticker" that works as a link. Headline "See it for yourself!" (Fraunces 700, 30px, line-height 1, Paper `#EFF1F2`) over "HAVE CHASE COLD CALL YOU" (Inter 700, 12px, 0.12em tracking, Paper). Burst: uneven 13-point star, Signal `#9B2226` fill with a 12px Paper die-cut edge (rounded joins), and a solid Ink copy of the shape offset 7px/8px behind it. Size 320×260, rotated -9deg.

Links to `https://calendar.app.google/guHLMnYJKijZ5JNV8` (new tab). If the site already stores this URL in a constant, use that.

## Where it goes
Hero section, right column: **directly below the video's caption ("COLD CALL · FEATURED TESTIMONIAL")**, filling the empty space to the right of the hero numbers row ("THE PROOF IS IN THE NUMBERS").

- If a sticker placeholder already exists there, replace it with this one.
- Place it as the next sibling after the video `<figcaption>` (or after the `<figure>`, inside the same right-hand grid column).
- Center it horizontally in the column (`.b2-sticker-slot` does this), 48px below the caption. It should sit roughly level with the stats row; nudge `margin-top` if the left column height differs.
- At ≤720px the hero stacks. The sticker then sits under the video at 80% size, centered.

## Implementation
`sticker-button.html` is a self-contained snippet (markup + scoped CSS, `b2-sticker` class prefix). Port it to the site's component format (JSX/Vue/etc.) without changing values:
- JSX: `class` → `className`, `stroke-width` → `strokeWidth`, `stroke-linejoin` → `strokeLinejoin`.
- The design system's `base.css` gives every `<a>` a bottom border; the sticker must keep `border: 0` (already in the CSS) or a slanted hairline appears under it.

## States
- Hover / keyboard focus: rotation eases to -5deg and lifts (-2px, -3px). 180ms, `cubic-bezier(.22,.61,.36,1)`.
- Press: shifts (+4px, +5px) toward the dark offset shape, like it's being stamped down.
- `prefers-reduced-motion`: no transition.

## Note
This element deliberately breaks design-system rules (rotation, offset shape, hover lift) at the owner's request. Don't apply these treatments anywhere else.

## Preview
`Sticker Button.dc.html` in the design project shows it in context of the three explored options (1a is the chosen one).
