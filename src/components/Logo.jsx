import logomark from '../assets/logomark.svg'

export default function Logo({ height = 30 }) {
  return (
    <a href="#top" className="logo" aria-label="Blue Stone home">
      <img src={logomark} alt="" style={{ width: height * 0.97, height, flexShrink: 0 }} />
      <span className="logo__wordmark">BLUESTONE</span>
    </a>
  )
}
