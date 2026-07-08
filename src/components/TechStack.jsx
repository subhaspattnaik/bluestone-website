import { IconChart, IconServer, IconLink, IconNetwork, IconShield, IconBadgeCheck } from './icons.jsx'
import platformPreview from '../assets/platform-preview.jpg'

const CARDS = [
  { icon: IconChart, title: 'Supply Chain Intelligence', body: 'AI-powered demand forecasting and actionable insights.' },
  { icon: IconServer, title: 'Working Capital Engine', body: 'Embedded finance that flows with supply, in real time.' },
  { icon: IconLink, title: 'Traceability Platform', body: 'End-to-end visibility from farm to retail shelf.' },
  { icon: IconChart, title: 'AI & Data Analytics', body: 'Data-driven decisions for better outcomes and impact.' },
  { icon: IconNetwork, title: 'Ecosystem Management', body: 'Digital onboarding, monitoring and enablement.' },
  { icon: IconShield, title: 'Impact Dashboard', body: 'Real-time impact tracking and transparent reporting.' },
]

export default function TechStack() {
  return (
    <section className="tech section" id="solutions">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Technology Stack</span>
          <h2>Powered by Our Digital Platform</h2>
          <p>One connected platform orchestrating supply, capital and impact — end to end.</p>
        </div>

        <div className="tech-grid">
          {CARDS.map((c) => (
            <article key={c.title} className="tech-card">
              <span className="tech-card__icon"><c.icon width={23} height={23} /></span>
              <h3 className="tech-card__title">{c.title}</h3>
              <p className="tech-card__body">{c.body}</p>
            </article>
          ))}
        </div>

        <div className="platform">
          <div className="platform__bar">
            <span className="platform__dots">
              <i style={{ background: '#ff5f57' }} />
              <i style={{ background: '#febc2e' }} />
              <i style={{ background: '#28c840' }} />
            </span>
            <span className="platform__url">app.bluestone.io/impact-dashboard</span>
          </div>
          <div className="platform__shot">
            <img src={platformPreview} alt="Blue Stone impact dashboard preview" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  )
}
