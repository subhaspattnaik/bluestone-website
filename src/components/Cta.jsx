import { IconArrowRight } from './icons.jsx'
import ctaField from '../assets/cta-field.jpg'

export default function Cta() {
  return (
    <section className="cta section" id="cta">
      <div className="container">
        <div className="cta-panel">
          <img src={ctaField} alt="" className="cta-panel__bg" loading="lazy" />
          <div className="cta-panel__scrim" aria-hidden="true" />
          <div className="cta-panel__glow" aria-hidden="true" />
          <div className="cta-panel__content">
            <span className="cta-panel__pill">
              <span className="cta-panel__dot" /> Get Started
            </span>
            <h2 className="cta-panel__title">
              Trade for Impact. <span className="accent">Prosperity for All.</span>
            </h2>
            <p className="cta-panel__sub">
              Join the impact supply chain connecting farmers, capital and markets —
              and help build prosperity that lasts.
            </p>
            <div className="cta-panel__actions">
              <a href="#about" className="btn cta-panel__btn-light">
                Partner With Us
                <IconArrowRight width={16} height={16} />
              </a>
              <a href="#model" className="btn cta-panel__btn-outline">Explore Our Model</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
