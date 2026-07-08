import Logo from './Logo.jsx'
import { IconLinkedIn, IconX, IconFacebook, IconInstagram, IconYouTube } from './icons.jsx'

const COLUMNS = [
  { title: 'Our Model', links: ['The Problem', 'Our Solution', 'Impact Flywheel', 'How It Works'] },
  { title: 'Solutions', links: ['Market Access', 'Liquidity Support', 'Supply-Chain Finance', 'Technology Platform'] },
  { title: 'Stakeholders', links: ['Farmers', 'Aggregators', 'Retailers', 'Investors', 'Banks'] },
  { title: 'Impact', links: ['Economic Impact', 'Social Impact', 'Environmental Impact', 'Impact Dashboard'] },
]

const SOCIALS = [
  { icon: IconLinkedIn, label: 'LinkedIn' },
  { icon: IconX, label: 'X' },
  { icon: IconFacebook, label: 'Facebook' },
  { icon: IconInstagram, label: 'Instagram' },
  { icon: IconYouTube, label: 'YouTube' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <Logo />
            <p className="footer__eyebrow">Trade for Impact · Prosperity for All</p>
            <p className="footer__blurb">
              Building responsible impact supply chains through liquidity, technology and trust —
              creating prosperity for all.
            </p>
            <div className="footer__socials">
              {SOCIALS.map((s) => (
                <a key={s.label} href="#top" className="footer__social" aria-label={s.label}>
                  <s.icon width={17} height={17} />
                </a>
              ))}
            </div>
          </div>

          {COLUMNS.map((col) => (
            <nav key={col.title} className="footer__col" aria-label={col.title}>
              <p className="footer__col-title">{col.title}</p>
              {col.links.map((l) => (
                <a key={l} href="#top" className="footer__link">{l}</a>
              ))}
            </nav>
          ))}

          <div className="footer__news">
            <p className="footer__col-title">Newsletter</p>
            <p className="footer__blurb">Stay updated with our latest impact stories and insights.</p>
            <form className="footer__form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="you@email.com" aria-label="Email address" />
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
          </div>
        </div>

        <hr className="footer__rule" />

        <div className="footer__bottom">
          <p>© 2026 BLUE STONE · ALL RIGHTS RESERVED</p>
          <div className="footer__legal">
            <a href="#top">Privacy Policy</a>
            <a href="#top">Terms of Use</a>
            <a href="#top">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
