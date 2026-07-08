import { useEffect, useState } from 'react'
import Logo from './Logo.jsx'

const LINKS = [
  { label: 'Home', href: '#top' },
  { label: 'Our Model', href: '#model' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Stakeholders', href: '#stakeholders' },
  { label: 'Impact', href: '#impact' },
  { label: 'Insights', href: '#insights' },
  { label: 'About Us', href: '#about' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <Logo />
        <nav className="nav__links" aria-label="Primary">
          {LINKS.map((l, i) => (
            <a key={l.href} href={l.href} className={i === 0 ? 'is-active' : ''}>
              {l.label}
            </a>
          ))}
        </nav>
        <div className="nav__actions">
          <a href="#about" className="btn btn-ghost">Contact Us</a>
          <a href="#cta" className="btn btn-primary">Partner With Us</a>
        </div>
      </div>
    </header>
  )
}
