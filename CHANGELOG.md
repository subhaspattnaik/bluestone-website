# Changelog

## Unreleased

- Replaced the live site with a "Coming Soon" placeholder page (`src/components/ComingSoon.jsx`), pending relaunch. Full marketing site is preserved on the `full-site-backup` branch and in `develop`; `App.jsx` and `index.html` were swapped to render only the placeholder.
- Updated the Coming Soon page to a white/light theme and swapped in the new logo (`src/assets/logomark.png`), replacing the dark theme and previous SVG logomark.
- Restyled the Coming Soon title to "BLUESTONE" (all caps, Montserrat, `#0D3B66`) and the tagline to `#2FB344`.
- Enlarged the Coming Soon logo for better proportion against the title text.
- Made the Coming Soon page fully responsive: logo, title, tagline, and message now scale with fluid `clamp()` sizing and a max-width content column, tested down to ~320px-wide screens.
- Added a soft, looping brand-colored blob animation to the Coming Soon background using anime.js (`animejs` dependency added); respects `prefers-reduced-motion`.
- Sped up and increased the amplitude of the background blob animation (was too slow/subtle to read as moving at a glance) so the drift is clearly perceptible while staying soft.
- Sped up the background blob animation another 4x (cycle duration 4-7s → 1-1.75s) per feedback that it was still too slow.
- Changed the blob motion from bouncing back-and-forth on a fixed axis to wandering: each blob now animates to a freshly randomized position/scale every cycle (self-relaunching via `onComplete`), so movement reads as random-direction drift instead of a repeating back-and-forth.
- Reworked the background into 10 bubble-like blobs of varying size/color/opacity that continuously rise from the bottom to above the top with a gentle horizontal drift, then loop back to the bottom at a new random spot — reading as floating bubbles instead of wandering blobs.
- Replaced the bubble effect (read as unprofessional) with a slow-drifting, heavily blurred multi-color gradient wash: three large brand-colored orbs (navy/green/blue) that drift and scale via pure CSS `@keyframes`, blending into each other for a shifting-gradient look. Dropped the `animejs` dependency since the background no longer needs JS-driven animation.
- Sped up the gradient orb drift (24-28s cycles → 6-8s) per feedback that the motion was too slow to notice.
- Replaced the corner-orb gradient with a full-screen animated brand gradient (navy → blue → green, `background-size: 300% 300%` panning via `@keyframes`, 8s loop) so color covers the entire viewport instead of just the edges. Content now sits in a frosted white card (`rgba(255,255,255,0.9)` + `backdrop-filter: blur`) for legibility over the moving color.
- Split the frosted-glass card into its own full-screen layer (`.coming-soon__glass`, `rgba(255,255,255,0.55)` + `blur(80px)`) sitting between the animated gradient and the text content, instead of a small card — the whole page now reads as glass over a moving gradient, with the text sitting directly on top.
- Re-added a frosted card (`rgba(255,255,255,0.65)` + `blur(24px)` + drop shadow, rounded corners) around the logo/title/tagline/message on top of the full-screen glass layer, for extra contrast so the text reads clearly against the moving gradient.
- Made the content card full viewport height (100vh), keeping its width (max-width 640px) unchanged; content is vertically centered inside the tall card.
- Reverted the 100vh card height and made the content card a full circle instead (`border-radius: 50%`, equal width/height sized via `min(640px, 82vmin)`), content centered inside.

## [1.0.0] - initial

- One-page marketing site built from Figma design (Nav, Hero, FieldGallery, ProblemSolution, Flywheel, TechStack, Stats, Stakeholders, Investors, Cta, Footer).
