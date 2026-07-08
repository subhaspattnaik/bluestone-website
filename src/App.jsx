import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import FieldGallery from './components/FieldGallery.jsx'
import ProblemSolution from './components/ProblemSolution.jsx'
import Flywheel from './components/Flywheel.jsx'
import TechStack from './components/TechStack.jsx'
import Stats from './components/Stats.jsx'
import Stakeholders from './components/Stakeholders.jsx'
import Investors from './components/Investors.jsx'
import Stories from './components/Stories.jsx'
import Testimonial from './components/Testimonial.jsx'
import Cta from './components/Cta.jsx'
import Footer from './components/Footer.jsx'

import './components/nav.css'
import './components/hero.css'
import './components/gallery.css'
import './components/ps.css'
import './components/flywheel.css'
import './components/tech.css'
import './components/stats.css'
import './components/stakeholders.css'
import './components/investors.css'
import './components/stories.css'
import './components/testimonial.css'
import './components/cta.css'
import './components/footer.css'

export default function App() {
  return (
    <div id="top">
      <Nav />
      <main>
        <Hero />
        <FieldGallery />
        <ProblemSolution />
        <Flywheel />
        <TechStack />
        <Stats />
        <Stakeholders />
        <Investors />
        {/* Hidden until content is ready:
        <Stories />
        <Testimonial /> */}
        <Cta />
      </main>
      <Footer />
    </div>
  )
}
