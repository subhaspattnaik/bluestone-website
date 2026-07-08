import { IconQuote } from './icons.jsx'
import avatar from '../assets/testimonial-avatar.png'

export default function Testimonial() {
  return (
    <section className="tst">
      <div className="container">
        <figure className="tst-card">
          <div className="tst-card__glow" aria-hidden="true" />
          <span className="tst-card__mark"><IconQuote width={40} height={40} /></span>
          <blockquote className="tst-card__quote">
            Blue Stone gave our farmer collective real bargaining power — assured markets,
            fair prices, and payments that arrive on time. It changed what our families can plan for.
          </blockquote>
          <figcaption className="tst-card__author">
            <img src={avatar} alt="" className="tst-card__avatar" />
            <span>
              <span className="tst-card__name">Lakshmi Devi</span>
              <span className="tst-card__role">FPO Leader · Kalahandi, Odisha</span>
            </span>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
