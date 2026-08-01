import produceImage from '../assets/market-stats-produce.jpg'
import CountUp from './CountUp.jsx'

const STATS = [
  { value: '330M+', label: 'Tonnes F&V produced annually' },
  { value: '1.4B+', label: 'Growing Consumer Base' },
  { value: '$48B+', label: 'Annual F&V Market in India, yet the sector remains under-financed' },
  { value: '$22-35B', label: 'Supply Chain Finance Opportunities' },
]

export default function MarketStats() {
  return (
    <section className="market-stats">
      <div className="market-stats__grid">
        <div className="market-stats__copy reveal">
          <span className="eyebrow">The Problem</span>
          <h2 className="market-stats__title">A Market This Big Should Run Efficiently.</h2>
          <p className="market-stats__body">
            Fresh produce isn&rsquo;t like other commodities - value deteriorates by the hour. Every delay between
            harvest and shelf adds spoilage, quality loss, price volatility, and cost.
          </p>
          <p className="market-stats__body market-stats__body--small">
            The businesses holding this market together - thousands of local aggregators, agents, logistics
            operators, and distributors - are structurally undercapitalized.
          </p>
          <p className="market-stats__pull">
            When capital moves slowly,
            <br />
            the whole supply chain slows with it.
          </p>
          <div className="market-stats__row reveal-stagger">
            {STATS.map((s) => (
              <div className="market-stats__stat" key={s.label}>
                <CountUp value={s.value} as="p" className="market-stats__value" />
                <p className="market-stats__label">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="market-stats__media reveal">
          <img src={produceImage} alt="Fresh produce at a wholesale market" />
        </div>
      </div>
    </section>
  )
}
