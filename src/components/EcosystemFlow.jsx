import { Fragment, useEffect, useRef } from 'react'
import standaloneLogo from '../assets/standalone_logo.png'
import MaterialIcon from './MaterialIcon.jsx'

const STEPS = [
  { icon: 'grocery', title: 'Farmers', copy: 'Quality produce' },
  { icon: 'handshake', title: 'Channel Partners', copy: 'Aggregation & Collection' },
  { icon: null, image: standaloneLogo, title: 'Bluestone', copy: 'Procurement · Quality · Liquidity' },
  { icon: 'storefront', title: 'Retailers', copy: 'Reliable supply, consistent quality' },
  { icon: 'groups', title: 'Consumers', copy: 'Fresh, safe, reliable' },
]

export default function EcosystemFlow() {
  const scrollRef = useRef(null)
  const drag = useRef({ active: false, moved: false, startX: 0, startScrollLeft: 0 })

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const el = scrollRef.current
    if (!el || el.scrollWidth <= el.clientWidth + 4) return

    const nudge = setTimeout(() => {
      el.scrollTo({ left: 64, behavior: 'smooth' })
      setTimeout(() => el.scrollTo({ left: 0, behavior: 'smooth' }), 650)
    }, 800)
    return () => clearTimeout(nudge)
  }, [])

  useEffect(() => {
    const el = scrollRef.current
    if (!el || el.scrollWidth <= el.clientWidth + 4) return

    const onPointerDown = (e) => {
      // Touch/pen already get native scrolling — only mouse needs the manual drag-to-scroll.
      if (e.pointerType !== 'mouse') return
      drag.current = { active: true, moved: false, startX: e.clientX, startScrollLeft: el.scrollLeft }
      el.classList.add('ecosystem-flow__scroll--dragging')
    }
    const onPointerMove = (e) => {
      if (!drag.current.active) return
      const delta = e.clientX - drag.current.startX
      if (Math.abs(delta) > 3) drag.current.moved = true
      el.scrollLeft = drag.current.startScrollLeft - delta
    }
    const endDrag = () => {
      if (!drag.current.active) return
      drag.current.active = false
      el.classList.remove('ecosystem-flow__scroll--dragging')
    }
    // Suppress the click on a step/link right after a drag so dragging past
    // a link doesn't also trigger navigation.
    const onClickCapture = (e) => {
      if (drag.current.moved) {
        e.preventDefault()
        e.stopPropagation()
        drag.current.moved = false
      }
    }

    el.addEventListener('pointerdown', onPointerDown)
    window.addEventListener('pointermove', onPointerMove)
    window.addEventListener('pointerup', endDrag)
    el.addEventListener('pointerleave', endDrag)
    el.addEventListener('click', onClickCapture, true)
    return () => {
      el.removeEventListener('pointerdown', onPointerDown)
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('pointerup', endDrag)
      el.removeEventListener('pointerleave', endDrag)
      el.removeEventListener('click', onClickCapture, true)
    }
  }, [])

  return (
    <section className="ecosystem-flow">
      <div className="ecosystem-flow__scroll" ref={scrollRef}>
        <div className="ecosystem-flow__row reveal-stagger">
          {STEPS.map((step, i) => (
            <Fragment key={step.title}>
              <div className="ecosystem-flow__step">
                <span className="icon-chip icon-chip--lg">
                  {step.image ? (
                    <img src={step.image} alt="" className="ecosystem-flow__logo" />
                  ) : (
                    <MaterialIcon name={step.icon} size={32} />
                  )}
                </span>
                <p className="ecosystem-flow__title">{step.title}</p>
                <p className="ecosystem-flow__copy">{step.copy}</p>
              </div>
              {i < STEPS.length - 1 && (
                <span className="ecosystem-flow__arrow-wrap">
                  <MaterialIcon name="east" size={40} className="ecosystem-flow__arrow" />
                </span>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}
