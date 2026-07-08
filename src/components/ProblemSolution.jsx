const PROBLEM = ['Fragmented Farmers', 'Multiple Intermediaries', 'Liquidity Gap', 'Higher Costs', 'Limited Value']
const SOLUTION = ['Farmers', 'Aggregators', 'Accredited Suppliers', 'Organized Retail', 'Consumers']

function Chain({ items, tone }) {
  return (
    <div className="ps-chain">
      {items.map((label, i) => (
        <span key={label} className="ps-chain__item">
          <span className={`ps-chip ps-chip--${tone}`}>
            <span className="ps-chip__dot" />
            {label}
          </span>
          {i < items.length - 1 && <span className="ps-chain__arrow">→</span>}
        </span>
      ))}
    </div>
  )
}

export default function ProblemSolution() {
  return (
    <section className="ps section" id="model">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">The Challenge &amp; Our Model</span>
          <h2>From Broken Chains to Shared Prosperity</h2>
        </div>

        <div className="ps-grid">
          <article className="ps-card">
            <p className="ps-card__label ps-card__label--problem">The Problem</p>
            <h3 className="ps-card__title">Traditional Supply Chains Are Broken</h3>
            <Chain items={PROBLEM} tone="problem" />
            <hr className="ps-card__rule" />
            <p className="ps-card__foot ps-card__foot--problem">
              <span className="ps-chip__dot" /> High waste · Low income · No transparency · Limited scale
            </p>
          </article>

          <div className="ps-vs" aria-hidden="true">VS</div>

          <article className="ps-card">
            <p className="ps-card__label ps-card__label--solution">The Solution</p>
            <h3 className="ps-card__title">The Blue Stone Impact Supply Chain</h3>
            <Chain items={SOLUTION} tone="solution" />
            <hr className="ps-card__rule" />
            <p className="ps-card__foot ps-card__foot--solution">
              <span className="ps-chip__dot" /> Fair prices · Full transparency · Reliable liquidity · Scalable impact
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}
