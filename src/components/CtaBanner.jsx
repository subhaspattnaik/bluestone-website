import blobLeft from '../assets/cta-blob-left.svg'
import blobRight from '../assets/cta-blob-right.svg'
import dotTop from '../assets/cta-dot-top.svg'
import glowEllipse from '../assets/cta-glow-ellipse.svg'

export default function CtaBanner({
  heading = 'Bluestone is not just moving fruits and vegetables.',
  body = "We are building the transactional pipelines, credit links, and grading systems that enable India's fresh produce economy to thrive.",
  buttonLabel = 'Contact Us',
  buttonHref = '#contact',
}) {
  return (
    <section className="cta-banner">
      <img src={blobLeft} alt="" className="cta-banner__blob cta-banner__blob--left" aria-hidden="true" />
      <img src={blobRight} alt="" className="cta-banner__blob cta-banner__blob--right" aria-hidden="true" />
      <img src={blobRight} alt="" className="cta-banner__blob cta-banner__blob--bottom-left" aria-hidden="true" />
      <img src={blobLeft} alt="" className="cta-banner__blob cta-banner__blob--bottom-right" aria-hidden="true" />
      <img src={dotTop} alt="" className="cta-banner__dot" aria-hidden="true" />
      <img src={dotTop} alt="" className="cta-banner__dot cta-banner__dot--bottom" aria-hidden="true" />
      <img src={glowEllipse} alt="" className="cta-banner__glow" aria-hidden="true" />
      <div className="cta-banner__inner reveal">
        <h2 className="cta-banner__heading">{heading}</h2>
        <p className="cta-banner__body">{body}</p>
        <a href={buttonHref} className="btn btn-primary cta-banner__btn">{buttonLabel}</a>
      </div>
    </section>
  )
}
