# Changelog

## Unreleased

- Replaced the live site with a "Coming Soon" placeholder page (`src/components/ComingSoon.jsx`), pending relaunch. Full marketing site is preserved on the `full-site-backup` branch and in `develop`; `App.jsx` and `index.html` were swapped to render only the placeholder.
- Updated the Coming Soon page to a white/light theme and swapped in the new logo (`src/assets/logomark.png`), replacing the dark theme and previous SVG logomark.
- Restyled the Coming Soon title to "BLUESTONE" (all caps, Montserrat, `#0D3B66`) and the tagline to `#2FB344`.
- Enlarged the Coming Soon logo for better proportion against the title text.
- Made the Coming Soon page fully responsive: logo, title, tagline, and message now scale with fluid `clamp()` sizing and a max-width content column, tested down to ~320px-wide screens.

## [1.0.0] - initial

- One-page marketing site built from Figma design (Nav, Hero, FieldGallery, ProblemSolution, Flywheel, TechStack, Stats, Stakeholders, Investors, Cta, Footer).
