import MaterialIcon from './MaterialIcon.jsx'

const FEATURES = [
  { icon: 'payments', label: 'Faster supplier settlements' },
  { icon: 'verified_user', label: 'Reliable buyer fulfilment' },
  { icon: 'account_tree', label: 'Structured procurement' },
  { icon: 'psychiatry', label: 'Multi-crop sourcing' },
  { icon: 'published_with_changes', label: 'Higher capital rotation' },
  { icon: 'trending_down', label: 'Lower idle working capital' },
  { icon: 'cycle', label: 'Continuous procurement cycles' },
  { icon: 'analytics', label: 'Predictable supply' },
]

export default function FeatureGrid() {
  return (
    <section className="feature-grid">
      <div className="container feature-grid__inner reveal-stagger">
        {FEATURES.map((f) => (
          <div className="feature-grid__item" key={f.label}>
            <span className="icon-chip icon-chip--lg feature-grid__icon">
              <MaterialIcon name={f.icon} size={32} />
            </span>
            <p className="feature-grid__label">{f.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
