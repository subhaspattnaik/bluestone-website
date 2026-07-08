import { IconNetwork, IconBadgeCheck, IconClipboard, IconWallet, IconCard, IconRecycle, IconBolt, IconCheck } from './icons.jsx'

const STEPS = [
  { n: '01', icon: IconNetwork, title: 'Aggregation', body: 'We work with FPOs, PACS and local networks to aggregate quality produce.' },
  { n: '02', icon: IconBadgeCheck, title: 'Accredited Suppliers', body: 'Partnering with reliable suppliers who ensure quality and timely delivery.' },
  { n: '03', icon: IconClipboard, title: 'Registered Vendor', body: 'A recognized supplier to organized retailers, receiving GRN on delivery.' },
  { n: '04', icon: IconWallet, title: 'Liquidity Support', body: 'Immediate liquidity to suppliers, bridging the 10–15 day payment gap.' },
  { n: '05', icon: IconCard, title: 'Retail Payment', body: 'Retailers make payment within 10–15 days on standard commercial terms.' },
  { n: '06', icon: IconRecycle, title: 'Capital Recycling', body: 'Capital is recycled back into the system to enable more supply and impact.' },
]

const FEATURES = ['Real-time visibility', 'Full traceability', 'Intelligent analytics', 'Impact measurement']

function StepCard({ n, icon: Icon, title, body }) {
  return (
    <article className="fw-card">
      <div className="fw-card__top">
        <span className="fw-card__icon"><Icon width={23} height={23} /></span>
        <span className="fw-card__n">{n}</span>
      </div>
      <h3 className="fw-card__title">{title}</h3>
      <p className="fw-card__body">{body}</p>
    </article>
  )
}

export default function Flywheel() {
  return (
    <section className="fw section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">A Six-Step Flywheel</span>
          <h2>How Blue Stone Works</h2>
          <p>A self-reinforcing cycle that moves produce, payments and prosperity — one turn at a time.</p>
        </div>

        <div className="fw-grid">
          {STEPS.slice(0, 4).map((s) => <StepCard key={s.n} {...s} />)}
        </div>

        <div className="fw-grid fw-grid--bottom">
          {STEPS.slice(4).map((s) => <StepCard key={s.n} {...s} />)}

          <article className="fw-digital">
            <div className="fw-digital__glow" aria-hidden="true" />
            <span className="fw-digital__pill">
              <IconBolt width={14} height={14} /> Digital Backbone
            </span>
            <h3 className="fw-digital__title">Powered by Digital Technology</h3>
            <ul className="fw-digital__features">
              {FEATURES.map((f) => (
                <li key={f}>
                  <IconCheck width={18} height={18} className="fw-digital__check" />
                  {f}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}
