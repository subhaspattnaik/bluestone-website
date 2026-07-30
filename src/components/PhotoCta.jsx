import ctaProduceTruck from '../assets/cta-produce-truck.jpg'

export default function PhotoCta() {
  return (
    <section className="photo-cta">
      <img src={ctaProduceTruck} alt="" className="photo-cta__bg" />
      <div className="photo-cta__inner reveal">
        <p className="photo-cta__eyebrow">LET&rsquo;S GET IN TOUCH</p>
        <h2 className="photo-cta__heading">Eliminate Liquidity Bottlenecks In Your Supply Chain</h2>
        <p className="photo-cta__body">
          Whether you are an MSME aggregator scaling procurement or a retailer securing consistent
          fresh volume, we are here to provide the trade infrastructure you need.
        </p>
        <a href="#contact" className="btn btn-primary photo-cta__btn">Contact Us</a>
      </div>
    </section>
  )
}
