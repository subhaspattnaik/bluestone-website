import benefitsFarmers from '../assets/benefits-farmers.jpg'
import benefitsRetail from '../assets/benefits-retail.jpg'
import MaterialIcon from './MaterialIcon.jsx'

const COLUMNS = [
  {
    key: 'farmers',
    image: benefitsFarmers,
    eyebrow: 'FOR FARMERS & CHANNEL PARTNERS',
    eyebrowClass: 'stakeholder-benefits__eyebrow--green',
    heading: 'Fair Prices. Faster payments. A market that finally works for you.',
    checkClass: 'stakeholder-benefits__check--green',
    points: [
      'Direct market access - fewer intermediaries between your harvest and organized retail.',
      'Transparent, quality-based grading and pricing instead of arbitrary trader-set rates.',
      'Shorter payment cycles, ensuring your working capital keeps flowing.',
    ],
  },
  {
    key: 'retailers',
    image: benefitsRetail,
    eyebrow: 'FOR RETAILERS & ORGANIZED BUYERS',
    eyebrowClass: 'stakeholder-benefits__eyebrow--blue',
    heading: 'Reliable, standardized supply - delivered at enterprise speed.',
    checkClass: 'stakeholder-benefits__check--blue',
    points: [
      'Consistent, standardized quality assured via automated regional grading hubs.',
      'Predictable cold-chain supply matching quick-commerce and supermarket demand.',
      'Complete end-to-end traceability from harvest origin to shelf.',
    ],
  },
]

export default function StakeholderBenefits() {
  return (
    <section className="stakeholder-benefits section" id="ecosystem">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">OUR VALUE</span>
          <h2>To The Ecosystem</h2>
        </div>
        <div className="stakeholder-benefits__grid reveal-stagger">
          {COLUMNS.map((col) => (
            <div className="stakeholder-benefits__card" key={col.key}>
              <div className="stakeholder-benefits__image-wrap">
                <img src={col.image} alt="" className="stakeholder-benefits__image" />
              </div>
              <div className="stakeholder-benefits__body">
                <p className={`stakeholder-benefits__eyebrow ${col.eyebrowClass}`}>{col.eyebrow}</p>
                <h3>{col.heading}</h3>
                <ul className="stakeholder-benefits__list">
                  {col.points.map((point) => (
                    <li key={point}>
                      <MaterialIcon name="check_circle" size={24} className={col.checkClass} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
