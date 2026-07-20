import logomark from '../assets/logomark.png'

export default function ComingSoon() {
  return (
    <div className="coming-soon">
      <div className="coming-soon__content">
        <img src={logomark} alt="Blue Stone" className="coming-soon__logo" />
        <h1 className="coming-soon__title">BLUESTONE</h1>
        <p className="coming-soon__eyebrow">Trade for Impact. Prosperity for All.</p>
        <p className="coming-soon__message">Our new site is coming soon.</p>
      </div>
    </div>
  )
}
