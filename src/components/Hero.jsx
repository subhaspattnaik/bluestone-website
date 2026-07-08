const FLOW = ['Farmers', 'Aggregators', 'Accredited Suppliers', 'Organized Retail', 'Consumers']

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__glow" aria-hidden="true" />
      <div className="hero__inner container">
        <span className="hero__pill">Trade for Impact · Prosperity for All</span>

        <h1 className="hero__title">
          Building Responsible <span className="accent">Impact Supply Chains</span> Powered by Digital Technology
        </h1>

        <p className="hero__sub">
          We connect smallholder farmers and local aggregators with organized retail markets
          through liquidity, technology and trust — creating prosperity for all.
        </p>

        <div className="hero__actions">
          <a href="#model" className="btn hero__btn-light">
            Explore Our Model
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h9M8.5 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a href="#cta" className="btn btn-ghost">Partner With Us</a>
        </div>

        <div className="pipeline">
          <div className="pipeline__bar">
            <span className="pipeline__dots">
              <i style={{ background: '#ff5f57' }} />
              <i style={{ background: '#febc2e' }} />
              <i style={{ background: '#28c840' }} />
            </span>
            <span className="pipeline__file">impact_supply_chain.flow</span>
          </div>
          <div className="pipeline__body">
            <div className="pipeline__flow">
              {FLOW.map((node, i) => (
                <span key={node} className="pipeline__step">
                  <span className="pipeline__node">
                    <span className="pipeline__dot" />
                    {node}
                  </span>
                  {i < FLOW.length - 1 && <span className="pipeline__arrow">→</span>}
                </span>
              ))}
            </div>
            <p className="pipeline__caption">liquidity · transparency · reliability · sustainable prosperity</p>
          </div>
        </div>
      </div>
    </section>
  )
}
