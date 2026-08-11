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

    const match = value.match(/^(\D*)([\d,]+(?:\.\d+)?)(.*)$/)
    if (!match || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.textContent = value
      return
    }

    const [, prefix, numRaw, suffix] = match
    const decimals = numRaw.includes('.') ? numRaw.split('.')[1].length : 0
    const target = { n: 0 }

    const fmt = (n) => {
      const fixed = n.toFixed(decimals)
      if (!numRaw.includes(',')) return fixed
      const [int, dec] = fixed.split('.')
      return `${int.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}${dec ? `.${dec}` : ''}`
    }

    el.textContent = `${prefix}${fmt(0)}${suffix}`

    const animation = animate(target, {
      n: parseFloat(numRaw.replace(/,/g, '')),
      duration: 1400,
      ease: 'outExpo',
      autoplay: onScroll({ target: el, enter: 'end-=10% start' }),
      onUpdate: () => {
        el.textContent = `${prefix}${fmt(target.n)}${suffix}`
      },
    })

    return () => animation.revert()
  }, [value])

  return <Tag ref={ref} className={className}>{value}</Tag>
}
