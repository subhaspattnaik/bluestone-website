import { IconArrowRight, IconChart, IconUsers, IconLeaf } from './icons.jsx'
import investorTeam from '../assets/investor-team.jpg'

const TAGS = ['Working Capital Funds', 'Impact Debt', 'Blended Finance', 'ESG Capital', 'Family Office Partnerships']

const FLOATERS = [
  { icon: IconChart, title: 'Financial Returns', meta: 'predictable · short-cycle', cls: 'inv-float--1' },
  { icon: IconUsers, title: 'Social Impact', meta: 'livelihoods uplifted', cls: 'inv-float--2' },
  { icon: IconLeaf, title: 'Environmental Impact', meta: 'sustainable sourcing', cls: 'inv-float--3' },
]

export default function Investors() {
  return (
    <section className="inv section" id="about">
      <div className="container">
        <div className="inv-panel">
          <div className="inv-panel__text">
            <span className="eyebrow">For Investors</span>
            <h2 className="inv-panel__title">
              Impact Capital. <span className="accent">Measurable Returns.</span>
            </h2>
            <p className="inv-panel__body">
              Blue Stone offers impact investment opportunities that generate financial returns
              while creating measurable social, economic and environmental impact.
            </p>
            <div className="inv-panel__tags">
              {TAGS.map((t) => <span key={t} className="inv-tag">{t}</span>)}
            </div>
            <a href="#cta" className="btn btn-primary inv-panel__cta">
              Invest With Purpose
              <IconArrowRight width={16} height={16} />
            </a>
          </div>

          <div className="inv-panel__visual">
            <img src={investorTeam} alt="Blue Stone investment team in discussion" loading="lazy" />
            <div className="inv-panel__scrim" aria-hidden="true" />
            {FLOATERS.map((f) => (
              <div key={f.title} className={`inv-float ${f.cls}`}>
                <span className="inv-float__icon"><f.icon width={20} height={20} /></span>
                <div>
                  <p className="inv-float__title">{f.title}</p>
                  <p className="inv-float__meta">{f.meta}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
