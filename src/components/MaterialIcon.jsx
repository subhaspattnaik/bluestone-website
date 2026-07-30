export default function MaterialIcon({ name, size = 24, fill = 0, className = '', style, ...rest }) {
  return (
    <span
      className={`material-symbols-outlined ${className}`.trim()}
      style={{
        fontSize: size,
        width: size,
        height: size,
        fontVariationSettings: `'FILL' ${fill}, 'wght' 400, 'GRAD' 0, 'opsz' ${size}`,
        ...style,
      }}
      aria-hidden="true"
      {...rest}
    >
      {name}
    </span>
  )
}
