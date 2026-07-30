import { animate, stagger, onScroll } from 'animejs'

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

const REVEAL = {
  opacity: [0, 1],
  translateY: [24, 0],
  duration: 700,
  ease: 'outQuad',
}

// `animTargets` is what gets tweened; `scrollTarget` is the single element whose
// position in the viewport decides when the tween plays (matters when they differ,
// e.g. a staggered group of children scrolled against their shared container).
function revealOnScroll(animTargets, scrollTarget, params) {
  animate(animTargets, {
    ...REVEAL,
    ...params,
    // enter is "containerBound targetBound": trigger a little before the target's
    // top (start) would otherwise reach the viewport's bottom (end).
    autoplay: onScroll({ target: scrollTarget, enter: 'end-=10% start' }),
  })
}

// Fades/slides in individually-marked elements and staggers the direct
// children of any `.reveal-stagger` container as they scroll into view.
export function initScrollAnimations() {
  if (prefersReducedMotion()) return

  document.querySelectorAll('.reveal:not([data-anim-ready])').forEach((el) => {
    el.setAttribute('data-anim-ready', '')
    revealOnScroll(el, el, {})
  })

  document.querySelectorAll('.reveal-stagger:not([data-anim-ready])').forEach((group) => {
    group.setAttribute('data-anim-ready', '')
    revealOnScroll(Array.from(group.children), group, { delay: stagger(80) })
  })
}
