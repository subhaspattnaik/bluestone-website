import { useEffect, useState } from 'react'
import Logo from './Logo.jsx'

const LINKS = [
  { label: 'Home', href: '#top' },
  { label: 'Our Model', href: '#model' },
  { label: 'Impact', href: '#impact' },
  { label: 'Stakeholders', href: '#stakeholders' },
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
    <header className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <Logo />
        <nav className="nav__links" aria-label="Primary">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>
        <div className="nav__actions">
          <a href="#contact" className="btn btn-ghost">Partner With Us</a>
        </div>
      </div>
    </header>
  )
}
