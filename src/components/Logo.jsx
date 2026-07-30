import bluestoneLogo from '../assets/bluestone-logo.png'

export default function Logo({ height = 30, className = '' }) {
  return (
    <a href="#top" className={`logo ${className}`.trim()} aria-label="Bluestone home">
      <img src={bluestoneLogo} alt="Bluestone" style={{ height, width: 'auto', flexShrink: 0 }} />
    </a>
  )
}
