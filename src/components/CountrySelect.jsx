import { useEffect, useMemo, useRef, useState } from 'react'
import { getCountryCallingCode } from 'react-phone-number-input'
import MaterialIcon from './MaterialIcon.jsx'

export default function CountrySelect({ value, onChange, options, iconComponent: Icon, disabled, readOnly }) {
  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState('')
  const rootRef = useRef(null)
  const searchRef = useRef(null)

  useEffect(() => {
    if (!open) return
    const onClickOutside = (e) => {
      if (rootRef.current && !rootRef.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [open])

  useEffect(() => {
    if (!open) {
      setSearch('')
      return
    }
    // The panel stays mounted (for the open/close transition), so `autoFocus`
    // only fires once on initial mount — focus the search box manually instead.
    searchRef.current?.focus()
  }, [open])

  const countryOptions = useMemo(() => options.filter((opt) => !opt.divider), [options])
  const selected = countryOptions.find((opt) => opt.value === value)
  const filtered = useMemo(() => {
    if (!search) return countryOptions
    const q = search.toLowerCase()
    return countryOptions.filter((opt) => opt.label.toLowerCase().includes(q))
  }, [countryOptions, search])

  return (
    <div className="country-select" ref={rootRef}>
      <button
        type="button"
        className="country-select__trigger"
        aria-haspopup="listbox"
        aria-expanded={open}
        disabled={disabled || readOnly}
        onClick={() => setOpen((o) => !o)}
      >
        <Icon country={selected?.value} label={selected?.label || 'International'} />
        <MaterialIcon
          name="expand_more"
          size={18}
          className="country-select__chevron"
          style={{ transform: open ? 'rotate(180deg)' : 'none' }}
        />
      </button>

      <div
        className={`country-select__panel${open ? ' country-select__panel--open' : ''}`}
        role="listbox"
        aria-hidden={!open}
        data-lenis-prevent
      >
        <input
          ref={searchRef}
          type="text"
          className="country-select__search"
          placeholder="Search country..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          tabIndex={open ? 0 : -1}
        />
        <div className="country-select__options">
          {filtered.map((opt) => (
            <button
              type="button"
              key={opt.value || 'ZZ'}
              className="country-select__option"
              role="option"
              tabIndex={open ? 0 : -1}
              aria-selected={opt.value === value}
              onClick={() => {
                onChange(opt.value)
                setOpen(false)
              }}
            >
              <Icon country={opt.value} label={opt.label} />
              <span className="country-select__option-label">{opt.label}</span>
              {opt.value && (
                <span className="country-select__option-code">+{getCountryCallingCode(opt.value)}</span>
              )}
            </button>
          ))}
          {filtered.length === 0 && <p className="country-select__empty">No countries found.</p>}
        </div>
      </div>
    </div>
  )
}
