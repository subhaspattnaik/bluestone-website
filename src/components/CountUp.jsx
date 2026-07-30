import { useEffect, useRef } from 'react'
import { animate, onScroll } from 'animejs'

// Parses stats like "523+", "1.4B+", "$48B+", "$22-35B" into a prefix, the first
// numeric run (decimals preserved), and everything after it, then counts that
// number up from 0 when the element scrolls into view.
export default function CountUp({ value, as: Tag = 'span', className }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const match = value.match(/^(\D*)(\d+(?:\.\d+)?)(.*)$/)
    if (!match || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.textContent = value
      return
    }

    const [, prefix, numStr, suffix] = match
    const decimals = numStr.includes('.') ? numStr.split('.')[1].length : 0
    const target = { n: 0 }
    el.textContent = `${prefix}0${suffix}`

    const animation = animate(target, {
      n: parseFloat(numStr),
      duration: 1400,
      ease: 'outExpo',
      autoplay: onScroll({ target: el, enter: 'end-=10% start' }),
      onUpdate: () => {
        el.textContent = `${prefix}${target.n.toFixed(decimals)}${suffix}`
      },
    })

    return () => animation.revert()
  }, [value])

  return <Tag ref={ref} className={className}>{value}</Tag>
}
