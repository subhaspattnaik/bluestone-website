import CountUp from './CountUp.jsx'
import logoReliance from '../assets/partner-logo-reliance.png'
import logoFlipkart from '../assets/partner-logo-flipkart.png'
import logoBlinkit from '../assets/partner-logo-blinkit.png'
import logoSpencers from '../assets/partner-logo-spencers.png'
import logoZepto from '../assets/partner-logo-zepto.png'

const METRICS = [
  { value: '523+', title: 'Farmers onboarded', caption: 'Spanning major fertile agricultural belts' },
  { value: '23', title: 'Channel partners', caption: 'Trusted micro-aggregators in active operation' },
  { value: '11', title: 'FPOs & Farm Groups', caption: 'Cooperative societies pooling high-yield resources' },
  { value: '355k', title: 'Kg Produce Traded', caption: 'Seamlessly cataloged, graded and dispatched' },
  { value: '$3.7M+', title: 'Annual Run Rate', caption: 'Sustained volume through enterprise buyer demand' },
  { value: '3', title: 'Indian States', caption: 'Rapid geographical expansion every single quarter' },
]

// marginTop aligns each logo's own vertical center to the same ~47.5px anchor point
// used across all five placeholder cards in the Figma file (cards are not simply
// center-aligned — every logo shares one common center line despite differing heights).
// height defaults to 36px (see CSS); blinkit's source PNG is a tight, near-edge-to-edge
// crop (no breathing room baked in like the others), so at the default height its
// wordmark reads far larger/heavier than its row-mates — rendered smaller here to match.
const LOGOS = [
  { src: logoReliance, alt: 'Reliance Retail', marginTop: 16 },
  { src: logoFlipkart, alt: 'Flipkart', marginTop: 22 },
  { src: logoBlinkit, alt: 'blinkit', marginTop: 21, height: 24, shiftX: 11 },
  { src: logoSpencers, alt: "Spencer's", marginTop: 20 },
  { src: logoZepto, alt: 'zepto', marginTop: 24 },
]

export default function TractionMetrics() {
  return (
    <section className="traction section" id="impact">
      <div className="container traction__head reveal">
        <div>
          <span className="eyebrow">Impact</span>
          <h2>Traction Backed By Real Operational Data</h2>
        </div>
        <div className="traction__head-right">
          <span className="eyebrow">Retail</span>
          <h2>Demand Validation</h2>
        </div>
      </div>

      <div className="container traction__body">
        <div className="traction__metrics-col">
          <div className="traction__grid reveal-stagger">
            {METRICS.map((m) => (
              <div key={m.title} className="metric-card">
                <CountUp value={m.value} as="p" className="metric-card__value" />
                <div>
                  <p className="metric-card__title">{m.title}</p>
                  <p className="metric-card__caption">{m.caption}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="traction__footnote">
            *Data is based on operational metrics as of June 2026. For further details or to verify current
            figures at any time, you are welcome to contact Subhas Pattnaik.
          </p>
        </div>

        <div className="traction__logos-col reveal-stagger">
          {LOGOS.map((l) => (
            <div key={l.alt} className="traction__logo">
              <img
                src={l.src}
                alt={l.alt}
                style={{
                  '--logo-offset': `${l.marginTop}px`,
                  ...(l.height ? { '--logo-height': `${l.height}px` } : {}),
                  ...(l.shiftX ? { '--logo-shift-x': `${l.shiftX}px` } : {}),
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
