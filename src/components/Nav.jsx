import { useEffect, useState } from 'react'
import Logo from './Logo.jsx'
import MaterialIcon from './MaterialIcon.jsx'

const LINKS = [
  { label: 'Home', href: '#top' },
  { label: 'Our Model', href: '#model' },
  { label: 'Impact', href: '#impact' },
  { label: 'Stakeholders', href: '#stakeholders' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const onKeyDown = (e) => e.key === 'Escape' && setMenuOpen(false)
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header className={`nav${scrolled ? ' nav--scrolled' : ''}${menuOpen ? ' nav--menu-open' : ''}`}>
      <div className="nav__inner">
        <Logo responsive />
        <nav className="nav__links" aria-label="Primary">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>
        <div className="nav__actions">
          <a href="#contact" className="btn btn-ghost">Partner With Us</a>
        </div>
        <button
          type="button"
          className="nav__toggle"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <MaterialIcon name={menuOpen ? 'close' : 'menu'} size={28} />
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`nav__mobile-menu${menuOpen ? ' nav__mobile-menu--open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <nav className="nav__mobile-links" aria-label="Mobile">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} tabIndex={menuOpen ? 0 : -1} onClick={() => setMenuOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="btn btn-primary nav__mobile-cta"
          tabIndex={menuOpen ? 0 : -1}
          onClick={() => setMenuOpen(false)}
        >
          Partner With Us
        </a>
      </div>
    </header>
  )
}
