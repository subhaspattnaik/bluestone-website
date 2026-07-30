import { useEffect } from 'react'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Intro from './components/Intro.jsx'
import FeatureGrid from './components/FeatureGrid.jsx'
import MarketStats from './components/MarketStats.jsx'
import PathToShelf from './components/PathToShelf.jsx'
import EcosystemFlow from './components/EcosystemFlow.jsx'
import CtaBanner from './components/CtaBanner.jsx'
import StakeholderBenefits from './components/StakeholderBenefits.jsx'
import PhotoCta from './components/PhotoCta.jsx'
import TractionMetrics from './components/TractionMetrics.jsx'
import Team from './components/Team.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import { initScrollAnimations } from './lib/scrollAnimations.js'
import { initSmoothScroll } from './lib/smoothScroll.js'

import './components/nav.css'
import './components/hero.css'
import './components/intro.css'
import './components/feature-grid.css'
import './components/market-stats.css'
import './components/path-to-shelf.css'
import './components/ecosystem-flow.css'
import './components/cta-banner.css'
import './components/stakeholder-benefits.css'
import './components/photo-cta.css'
import './components/traction-metrics.css'
import './components/team.css'
import './components/contact.css'
import './components/footer.css'

export default function App() {
  useEffect(() => {
    const lenis = initSmoothScroll()
    initScrollAnimations()
    return () => lenis?.destroy()
  }, [])

  return (
    <div id="top">
      <Nav />
      <main>
        <Hero />
        <Intro />
        <FeatureGrid />
        <MarketStats />
        <PathToShelf />
        <EcosystemFlow />
        <CtaBanner />
        <StakeholderBenefits />
        <PhotoCta />
        <TractionMetrics />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
