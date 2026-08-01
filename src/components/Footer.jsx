import Logo from './Logo.jsx'
import MaterialIcon from './MaterialIcon.jsx'

const QUICK_LINKS = [
  { label: 'Home', href: '#top' },
  { label: 'Our Model', href: '#model' },
  { label: 'Impact', href: '#impact' },
  { label: 'Stakeholders', href: '#stakeholders' },
]

const CONTACT_ROWS = [
  { icon: 'apartment', lines: ['BLUESTONE AGRO TRADE PRIVATE LIMITED'] },
  { icon: 'id_card', lines: ['Corporate Identity Number', 'U01619HR2023PTC113058'] },
  { icon: 'call', lines: ['+91 999 920 1638'] },
]

const GENERAL_INQUIRY_ROW = { icon: 'mail', lines: ['info@bluestoneagro.com'] }

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__columns">
        <div className="footer__brand">
          <Logo height={38} />
          <p className="footer__tagline">
            <span className="footer__tagline-green">Moving</span> Produce.{' '}
            <span className="footer__tagline-blue">Growing</span> Markets.
          </p>
          <div className="footer__blurb">
            <p>
              Bluestone connects farmers, suppliers, and retailers through efficient procurement,
              reliable logistics, and disciplined working capital—helping fresh produce move from
              farms to markets with greater speed, consistency, and trust.
            </p>
            <p>
              We believe stronger agricultural markets are built by improving how produce and
              capital move across the supply chain.
            </p>
            <p>
              Bluestone is building that foundation—one trusted relationship, one efficient
              transaction, and one growing ecosystem at a time.
            </p>
          </div>
        </div>

        <nav className="footer__col" aria-label="Quick links">
          <p className="footer__col-title">Quick Links</p>
          {QUICK_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="footer__link">{l.label}</a>
          ))}
        </nav>

        <div className="footer__col footer__contact">
          <p className="footer__col-title">Contact</p>
          {CONTACT_ROWS.map((row, i) => (
            <div className="footer__contact-row" key={i}>
              <span className="icon-chip icon-chip--sm">
                <MaterialIcon name={row.icon} size={24} />
              </span>
              <span className="footer__contact-text">
                {row.lines.map((line, j) => <span key={j}>{line}</span>)}
              </span>
            </div>
          ))}

          <p className="footer__contact-heading">For general inquiries, reach out to:</p>
          <div className="footer__contact-row">
            <span className="icon-chip icon-chip--sm">
              <MaterialIcon name={GENERAL_INQUIRY_ROW.icon} size={24} />
            </span>
            <span className="footer__contact-text">
              {GENERAL_INQUIRY_ROW.lines.map((line, j) => <span key={j}>{line}</span>)}
            </span>
          </div>
        </div>
      </div>

      <div className="container">
        <hr className="footer__rule" />
        <div className="footer__bottom">
          <p>© 2026 Bluestone. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
