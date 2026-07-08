import { IconArrowRight, IconPlay } from './icons.jsx'
import storyFarmer from '../assets/story-farmer.jpg'
import storyAggregator from '../assets/story-aggregator.jpg'
import storyRetail from '../assets/story-retail.jpg'
import storyInvestor from '../assets/story-investor.jpg'

const STORIES = [
  { img: storyFarmer, tag: 'FARMER_STORY', title: 'From Uncertainty to Stability: Ramesh’s Journey' },
  { img: storyAggregator, tag: 'AGGREGATOR', title: 'How Liquidity Transformed Our Business' },
  { img: storyRetail, tag: 'RETAIL', title: 'Building Reliable & Responsible Supply Chains' },
  { img: storyInvestor, tag: 'INVESTOR', title: 'Why We Invested in Blue Stone' },
]

export default function Stories() {
  return (
    <section className="stories section" id="insights">
      <div className="container">
        <div className="stories__head">
          <div>
            <span className="eyebrow">From the Field</span>
            <h2 className="stories__title">Stories of Prosperity</h2>
          </div>
          <a href="#insights" className="btn btn-ghost">
            View All Stories
            <IconArrowRight width={16} height={16} />
          </a>
        </div>

        <div className="stories__grid">
          {STORIES.map((s) => (
            <article key={s.title} className="story-card">
              <a href="#insights" className="story-card__media" aria-label={`Play: ${s.title}`}>
                <img src={s.img} alt={s.title} loading="lazy" />
                <span className="story-card__tag">{s.tag}</span>
                <span className="story-card__play"><IconPlay width={20} height={20} /></span>
              </a>
              <div className="story-card__body">
                <h3 className="story-card__title">{s.title}</h3>
                <a href="#insights" className="story-card__more">
                  Read More <IconArrowRight width={15} height={15} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
