import MaterialIcon from './MaterialIcon.jsx'

const STEPS = [
  {
    icon: 'agriculture',
    title: 'Procure',
    copy: 'Direct sourcing from verified farmers and established regional supplier networks.',
  },
  {
    icon: 'hub',
    title: 'Aggregate',
    copy: 'Centralized regional hubs managed by trusted local channel partners.',
  },
  {
    icon: 'verified',
    title: 'Grade & Assure',
    copy: 'Rigorous quality checks, automated grading, and precise standardization.',
  },
  {
    icon: 'local_shipping',
    title: 'Logistics',
    copy: 'Optimized cold-chain routing minimizing transit delays and field-heat decay.',
  },
  {
    icon: 'storefront',
    title: 'Retail/B2B',
    copy: 'Direct wholesale fulfillment to organized retail chains and quick-commerce dark stores.',
  },
  {
    icon: 'price_check',
    title: 'Settle & Circulate',
    copy: 'Near-instantaneous digital payments ensuring working capital never halts.',
  },
]

export default function PathToShelf() {
  return (
    <section className="path section" id="model">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Our Model</span>
          <h2>A Seamless Path From Farm To Shelf</h2>
          <p>We provide integrated procurement &amp; liquidity infrastructure.</p>
        </div>
        <div className="path__grid reveal-stagger">
          {STEPS.map((step) => (
            <div key={step.title} className="path__card">
              <span className="icon-chip icon-chip--lg path__icon">
                <MaterialIcon name={step.icon} size={32} />
              </span>
              <p className="path__title">{step.title}</p>
              <p className="path__copy">{step.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
