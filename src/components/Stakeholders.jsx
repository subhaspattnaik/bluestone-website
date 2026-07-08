import { IconLeaf, IconCube, IconStore, IconCart, IconChart, IconBank, IconTick } from './icons.jsx'
import farmers from '../assets/stakeholder-farmers.jpg'
import aggregators from '../assets/stakeholder-aggregators.jpg'
import retail from '../assets/stakeholder-retail.jpg'
import consumers from '../assets/stakeholder-consumers.jpg'
import investors from '../assets/stakeholder-investors.jpg'
import banks from '../assets/stakeholder-banks.jpg'

const CARDS = [
  { img: farmers, icon: IconLeaf, title: 'Farmers', items: ['Better prices', 'Assured markets', 'Income stability', 'Financial inclusion'] },
  { img: aggregators, icon: IconCube, title: 'Aggregators & Suppliers', items: ['Working capital', 'Business growth', 'Higher turnover', 'Digital enablement'] },
  { img: retail, icon: IconStore, title: 'Retail Chains', items: ['Reliable supply', 'Quality assurance', 'Full traceability', 'Lower risk'] },
  { img: consumers, icon: IconCart, title: 'Consumers', items: ['Safe & quality food', 'Transparency', 'Responsible sourcing', 'Better choices'] },
  { img: investors, icon: IconChart, title: 'Investors', items: ['Predictable returns', 'Scalable impact', 'Short-duration cycles', 'Capital efficiency'] },
  { img: banks, icon: IconBank, title: 'Banks & NBFCs', items: ['De-risked lending', 'Supply-chain financing', 'New opportunities', 'Priority-sector goals'] },
]

export default function Stakeholders() {
  return (
    <section className="stk section" id="stakeholders">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">The Ecosystem</span>
          <h2>Value for Every Stakeholder</h2>
          <p>Blue Stone is built so that everyone in the chain wins — from the field to the boardroom.</p>
        </div>

        <div className="stk-grid">
          {CARDS.map((c) => (
            <article key={c.title} className="stk-card">
              <div className="stk-card__media">
                <img src={c.img} alt={c.title} loading="lazy" />
                <span className="stk-card__badge"><c.icon width={21} height={21} /></span>
              </div>
              <div className="stk-card__body">
                <h3 className="stk-card__title">{c.title}</h3>
                <hr className="stk-card__rule" />
                <ul className="stk-card__list">
                  {c.items.map((it) => (
                    <li key={it}>
                      <IconTick width={16} height={16} className="stk-card__tick" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
