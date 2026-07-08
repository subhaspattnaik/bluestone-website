import { useEffect, useRef, useState } from 'react'

const STATS = [
  { value: '25,000+', label: 'Farmers Connected' },
  { value: '300+', label: 'Aggregators Enabled' },
  { value: '50,000+ MT', label: 'Agri-Produce Transacted' },
  { value: '₹100+ Cr', label: 'Capital Circulated' },
  { value: '20+', label: 'Retail Partners' },
  { value: '2,500+', label: 'Rural Jobs Created' },
]

// Split "₹100+ Cr" -> prefix "₹", number 100, suffix "+ Cr"
function parseStat(value) {
  const m = value.match(/^([^\d]*)([\d,]+)(.*)$/)
  if (!m) return { prefix: '', target: 0, suffix: value, raw: value }
  return { prefix: m[1], target: parseInt(m[2].replace(/,/g, ''), 10), suffix: m[3], raw: value }
}

function StatValue({ value, run }) {
  const { prefix, target, suffix, raw } = parseStat(value)
  const [n, setN] = useState(0)

  useEffect(() => {
    if (!run || !target) return
    let frame
    const duration = 1200
    const start = performance.now()
    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - t, 3)
      setN(Math.round(eased * target))
      if (t < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [run, target])

  if (!target) return <span className="stat__value">{raw}</span>
  return (
    <span className="stat__value">
      {prefix}{n.toLocaleString('en-US')}{suffix}
    </span>
  )
}

export default function Stats() {
  const ref = useRef(null)
  const [run, setRun] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRun(true)
          io.disconnect()
        }
      },
      { threshold: 0.35 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section className="stats section" id="impact">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">By the Numbers</span>
          <h2>Our Impact at a Glance</h2>
          <p>Real produce, real capital, real livelihoods — measured and reported transparently.</p>
        </div>

        <div className="stats__panel" ref={ref}>
          {STATS.map((s, i) => (
            <div key={s.label} className="stat" style={{ '--i': i }}>
              <StatValue value={s.value} run={run} />
              <span className="stat__label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
