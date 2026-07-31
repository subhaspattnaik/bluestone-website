import { useEffect, useRef } from 'react'
import { animate, stagger } from 'animejs'
import heroImage from '../assets/hero-farm-warehouse.jpg'

export default function Hero() {
  const innerRef = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const el = innerRef.current
    if (!el) return
    const animation = animate(el.children, {
      opacity: [0, 1],
      translateY: [24, 0],
      duration: 800,
      delay: stagger(120, { start: 150 }),
      ease: 'outQuad',
    })
    return () => animation.revert()
  }, [])

  return (
    <section className="hero">
      <div className="hero__media" aria-hidden="true">
        <img src={heroImage} alt="" />
        <div className="hero__overlay" />
      </div>
      <div className="hero__inner" ref={innerRef}>
        <h1 className="hero__title">
          <span className="hero__title-gradient">Moving</span> Produce.
          <br />
          Growing Markets.
        </h1>
        <p className="hero__lead">
          Bluestone connects farmers, suppliers, and retailers through efficient procurement,
          reliable logistics, and disciplined working capital—helping fresh produce move from
          farms to markets with greater speed, consistency, and trust.
        </p>
        <p className="hero__sub">
          We believe stronger agricultural markets are built by improving how produce and capital
          move across the supply chain. Bluestone is building that foundation—one trusted
          relationship, one efficient transaction, and one growing ecosystem at a time.
        </p>
        <a href="#contact" className="btn btn-primary hero__cta">Contact Us</a>
      </div>
    </section>
  )
}
