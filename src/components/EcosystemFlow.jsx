import { Fragment } from 'react'
import standaloneLogo from '../assets/standalone_logo.png'
import MaterialIcon from './MaterialIcon.jsx'

const STEPS = [
  { icon: 'grocery', title: 'Farmers', copy: 'Quality produce' },
  { icon: 'handshake', title: 'Channel Partners', copy: 'Aggregation & Collection' },
  { icon: null, image: standaloneLogo, title: 'Bluestone', copy: 'Procurement · Quality · Liquidity' },
  { icon: 'storefront', title: 'Retailers', copy: 'Reliable supply, consistent quality' },
  { icon: 'groups', title: 'Consumers', copy: 'Fresh, safe, reliable' },
]

export default function EcosystemFlow() {
  return (
    <section className="ecosystem-flow">
      <div className="ecosystem-flow__row reveal-stagger">
        {STEPS.map((step, i) => (
          <Fragment key={step.title}>
            <div className="ecosystem-flow__step">
              <span className="icon-chip icon-chip--lg">
                {step.image ? (
                  <img src={step.image} alt="" className="ecosystem-flow__logo" />
                ) : (
                  <MaterialIcon name={step.icon} size={32} />
                )}
              </span>
              <p className="ecosystem-flow__title">{step.title}</p>
              <p className="ecosystem-flow__copy">{step.copy}</p>
            </div>
            {i < STEPS.length - 1 && (
              <MaterialIcon name="east" size={40} className="ecosystem-flow__arrow" />
            )}
          </Fragment>
        ))}
      </div>
    </section>
  )
}
