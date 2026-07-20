import { useEffect, useRef } from 'react'
import { animate, stagger, utils } from 'animejs'
import logomark from '../assets/logomark.png'

export default function ComingSoon() {
  const blobsRef = useRef(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion || !blobsRef.current) return

    const blobs = blobsRef.current.querySelectorAll('.coming-soon__blob')

    const animation = animate(blobs, {
      translateX: () => utils.random(-90, 90),
      translateY: () => utils.random(-70, 70),
      scale: () => utils.random(85, 125) / 100,
      duration: () => utils.random(4000, 7000),
      delay: stagger(400),
      ease: 'inOutSine',
      loop: true,
      alternate: true,
    })

    return () => animation.revert()
  }, [])

  return (
    <div className="coming-soon">
      <div className="coming-soon__bg" ref={blobsRef} aria-hidden="true">
        <span className="coming-soon__blob coming-soon__blob--navy" />
        <span className="coming-soon__blob coming-soon__blob--green" />
        <span className="coming-soon__blob coming-soon__blob--blue" />
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
