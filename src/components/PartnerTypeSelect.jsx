import { useEffect, useRef, useState } from 'react'
import MaterialIcon from './MaterialIcon.jsx'

const OPTIONS = [
  {
    title: 'Channel Partner',
    description: 'We help market, distribute, or sell your products and services in our region.',
  },
  {
    title: 'Supplier',
    description: 'We provide the raw materials, goods, or operational services your business needs.',
  },
  {
    title: 'Aggregator',
    description: 'We bundle and consolidate goods or services from multiple providers onto one platform.',
  },
  {
    title: 'Retail Partner',
    description: 'We sell finished products directly to the end consumers through our shops or website.',
  },
]

export default function PartnerTypeSelect({ name }) {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState(null)
  const rootRef = useRef(null)

  useEffect(() => {
    if (!open) return
    const onClickOutside = (e) => {
      if (rootRef.current && !rootRef.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [open])

  return (
    <div className="partner-select" ref={rootRef}>
      <input type="hidden" name={name} value={selected?.title || ''} />
      <span className="contact__label">Partner Type *</span>
      <button
        type="button"
        className="partner-select__trigger"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <span className={selected ? 'partner-select__value' : 'partner-select__placeholder'}>
          {selected ? selected.title : 'Select type'}
        </span>
        <MaterialIcon
          name="expand_more"
          size={20}
          className="partner-select__chevron"
          style={{ transform: open ? 'rotate(180deg)' : 'none' }}
        />
      </button>

      <div
        className={`partner-select__panel${open ? ' partner-select__panel--open' : ''}`}
        role="listbox"
        aria-hidden={!open}
      >
        {OPTIONS.map((opt) => (
          <button
            type="button"
            key={opt.title}
            className="partner-select__option"
            role="option"
            tabIndex={open ? 0 : -1}
            aria-selected={selected?.title === opt.title}
            onClick={() => {
              setSelected(opt)
              setOpen(false)
            }}
          >
            <span className="partner-select__option-title">{opt.title}</span>
            <span className="partner-select__option-desc">{opt.description}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
