# Blue Stone — Website

One-page marketing site for **Blue Stone** — *Trade for Impact. Prosperity for All.*
Built as a static React (Vite) app from the Figma design
[eKutir Website New Designs → Bluestone (Sinas · Visual)](https://www.figma.com/design/6sNedsAAknFua9RiWkVuLh/eKutir-Website-New-Designs?node-id=387-2).

## Stack

- **React 18** + **Vite 6** — no runtime UI framework, plain CSS with design tokens
- **Fonts:** Montserrat (display) + Roboto (body), loaded from Google Fonts
- Fully static — builds to plain HTML/CSS/JS in `dist/`

## Getting started

```bash
npm install
npm run dev      # local dev server at http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Structure

```
src/
  index.css              Global design tokens + shared helpers (.container, .btn, .card, .eyebrow…)
  App.jsx                Section composition
  components/
    Nav / Hero / FieldGallery / ProblemSolution / Flywheel / TechStack /
    Stats / Stakeholders / Investors / Stories / Testimonial / Cta / Footer
    icons.jsx            Inline SVG icon set (lucide-style + brand/social marks)
    <section>.css        One stylesheet per section
  assets/                Photography + logomark (imported by components)
```

## Design notes

- **Palette:** near-black surfaces (`#08090c` → `#1c1f28`), electric blue accent `#4c7dff` / `#7aa0ff`,
  with green/red/cyan/gold used sparingly for status. All defined as CSS variables in `index.css`.
- **Sections** (top → bottom): sticky nav · hero with pipeline panel · field gallery ·
  problem-vs-solution · six-step flywheel · technology platform · impact stats ·
  stakeholder value cards · investor split panel · stories · testimonial · CTA · footer.
- The impact stat numbers **count up** when scrolled into view.
- Responsive down to ~360px; the primary nav links collapse on small screens.
