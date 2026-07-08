import farmNetworks from '../assets/gallery-farm-networks.jpg'
import aggregationHubs from '../assets/gallery-aggregation-hubs.jpg'
import localMarkets from '../assets/gallery-local-markets.jpg'
import qualityProduce from '../assets/gallery-quality-produce.jpg'

const CARDS = [
  { img: farmNetworks, label: 'Farm Networks' },
  { img: aggregationHubs, label: 'Aggregation Hubs' },
  { img: localMarkets, label: 'Local Markets' },
  { img: qualityProduce, label: 'Quality Produce' },
]

export default function FieldGallery() {
  return (
    <section className="gallery">
      <div className="container">
        <div className="gallery__head">
          <div>
            <p className="mono-eyebrow">// FROM THE GROUND UP</p>
            <h3 className="gallery__title">Prosperity you can see</h3>
          </div>
          <p className="gallery__meta">Real produce · real people · real livelihoods</p>
        </div>

        <div className="gallery__grid">
          {CARDS.map((c) => (
            <figure key={c.label} className="gallery__card">
              <img src={c.img} alt={c.label} loading="lazy" />
              <figcaption>
                <span className="gallery__dot" />
                {c.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
