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

## [1.0.0] - initial

- One-page marketing site built from Figma design (Nav, Hero, FieldGallery, ProblemSolution, Flywheel, TechStack, Stats, Stakeholders, Investors, Cta, Footer).
