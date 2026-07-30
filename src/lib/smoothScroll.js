import Lenis from 'lenis'

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

// Adds inertia/easing to wheel & anchor-link scrolling; drives the real
// `window` scroll position each frame (via `wrapper.scrollTo`), so anything
// reading `window.scrollY` or listening for the native `scroll` event
// (e.g. the anime.js reveal animations, Nav's shrink-on-scroll) keeps working
// unmodified.
export function initSmoothScroll() {
  if (prefersReducedMotion()) return null

  return new Lenis({
    autoRaf: true,
    anchors: true,
  })
}
