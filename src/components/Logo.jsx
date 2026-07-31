import bluestoneLogo from '../assets/bluestone-logo.png'
import standaloneLogo from '../assets/standalone_logo.png'

export default function Logo({ height = 30, className = '', responsive = false }) {
  return (
    <a href="#top" className={`logo ${responsive ? 'logo--responsive' : ''} ${className}`.trim()} aria-label="Bluestone home">
      <img src={bluestoneLogo} alt="Bluestone" className="logo__full" style={{ height, width: 'auto' }} />
      {responsive && (
        <img src={standaloneLogo} alt="Bluestone" className="logo__mark" style={{ width: 'auto' }} />
      )}
    </a>
  )
}
