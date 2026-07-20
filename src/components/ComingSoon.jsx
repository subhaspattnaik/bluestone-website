import logomark from '../assets/logomark.png'

export default function ComingSoon() {
  return (
    <div className="coming-soon">
      <div className="coming-soon__bg" aria-hidden="true">
        <span className="coming-soon__orb coming-soon__orb--navy" />
        <span className="coming-soon__orb coming-soon__orb--green" />
        <span className="coming-soon__orb coming-soon__orb--blue" />
      </div>
      <div className="coming-soon__content">
        <img src={logomark} alt="Blue Stone" className="coming-soon__logo" />
        <h1 className="coming-soon__title">BLUESTONE</h1>
        <p className="coming-soon__eyebrow">Trade for Impact. Prosperity for All.</p>
        <p className="coming-soon__message">Our new site is coming soon.</p>
      </div>
    </div>
  )
}
