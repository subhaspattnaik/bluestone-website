import { useEffect, useRef } from 'react'
import { animate, utils } from 'animejs'
import logomark from '../assets/logomark.png'

const BUBBLE_COLORS = ['#0D3B66', '#2FB344', '#4c7dff']

const BUBBLES = [
  { size: 320, left: 6, opacity: 0.22 },
  { size: 140, left: 16, opacity: 0.28 },
  { size: 220, left: 27, opacity: 0.2 },
  { size: 90, left: 38, opacity: 0.3 },
  { size: 260, left: 48, opacity: 0.18 },
  { size: 120, left: 58, opacity: 0.26 },
  { size: 340, left: 68, opacity: 0.16 },
  { size: 160, left: 78, opacity: 0.24 },
  { size: 200, left: 88, opacity: 0.2 },
  { size: 100, left: 95, opacity: 0.28 },
].map((b, i) => ({ ...b, color: BUBBLE_COLORS[i % BUBBLE_COLORS.length] }))

export default function ComingSoon() {
  const bgRef = useRef(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const container = bgRef.current
    if (prefersReducedMotion || !container) return

    const bubbles = Array.from(container.querySelectorAll('.coming-soon__blob'))
    let active = true

    function rise(el) {
      if (!active) return
      const riseDistance = container.clientHeight + el.offsetHeight
      el.style.left = `${utils.random(-5, 95, 1)}%`
      utils.set(el, { translateY: 0, translateX: 0 })

      animate(el, {
        translateY: -riseDistance,
        translateX: utils.random(-70, 70),
        duration: utils.random(6000, 9000),
        ease: 'inOutSine',
        onComplete: () => rise(el),
      })
    }

    bubbles.forEach((el, i) => {
      utils.set(el, { translateY: -utils.random(0, container.clientHeight) })
      setTimeout(() => rise(el), i * 300)
    })

    return () => {
      active = false
      utils.remove(bubbles)
    }
  }, [])

  return (
    <div className="coming-soon">
      <div className="coming-soon__bg" ref={bgRef} aria-hidden="true">
        {BUBBLES.map((b, i) => (
          <span
            key={i}
            className="coming-soon__blob"
            style={{
              width: b.size,
              height: b.size,
              left: `${b.left}%`,
              background: b.color,
              opacity: b.opacity,
            }}
          />
        ))}
      </div>
      <div className="coming-soon__content">
        <img src={logomark} alt="Blue Stone" className="coming-soon__logo" />
        <h1 className="coming-soon__title">BLUESTONE</h1>
        <p className="coming-soon__eyebrow">Trade for Impact. Prosperity for All.</p>
        <p className="coming-soon__message">Our new site is coming soon.</p>
      </div>
    </div>
  )
}
