// Lightweight inline icon set (lucide-style, 24x24, currentColor stroke)
const base = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export const IconNetwork = (p) => (
  <svg {...base} {...p}><circle cx="12" cy="5" r="2.4" /><circle cx="5" cy="18" r="2.4" /><circle cx="19" cy="18" r="2.4" /><path d="M10.6 6.9 6.4 15.8M13.4 6.9l4.2 8.9M7.4 18h9.2" /></svg>
)
export const IconBadgeCheck = (p) => (
  <svg {...base} {...p}><path d="M12 2.5l2.3 1.6 2.8-.2 1 2.6 2.3 1.6-.7 2.7.7 2.7-2.3 1.6-1 2.6-2.8-.2L12 21.5l-2.3-1.6-2.8.2-1-2.6-2.3-1.6.7-2.7-.7-2.7 2.3-1.6 1-2.6 2.8.2z" /><path d="M9 12l2 2 4-4" /></svg>
)
export const IconClipboard = (p) => (
  <svg {...base} {...p}><rect x="6" y="4" width="12" height="17" rx="2" /><path d="M9 4V3h6v1M9 10h6M9 14h4" /></svg>
)
export const IconWallet = (p) => (
  <svg {...base} {...p}><rect x="3" y="6" width="18" height="13" rx="2.5" /><path d="M3 10h18M16.5 14.5h1.5" /></svg>
)
export const IconCard = (p) => (
  <svg {...base} {...p}><rect x="3" y="5" width="18" height="14" rx="2.5" /><path d="M3 9.5h18M6.5 15h4" /></svg>
)
export const IconRecycle = (p) => (
  <svg {...base} {...p}><path d="M7 8l-2.5 4L7 16M17 16l2.5-4L17 8" /><path d="M4.5 12H9M15 12h4.5M12 4.5l2 3.5h-4z" /></svg>
)
export const IconBolt = (p) => (
  <svg {...base} {...p}><path d="M13 2 4 14h7l-1 8 9-12h-7z" /></svg>
)
export const IconCheck = (p) => (
  <svg {...base} {...p}><circle cx="12" cy="12" r="9" /><path d="M8.5 12.2l2.4 2.4 4.6-5" /></svg>
)
export const IconServer = (p) => (
  <svg {...base} {...p}><rect x="4" y="4" width="16" height="7" rx="2" /><rect x="4" y="13" width="16" height="7" rx="2" /><path d="M7.5 7.5h.01M7.5 16.5h.01" /></svg>
)
export const IconChart = (p) => (
  <svg {...base} {...p}><path d="M4 4v16h16" /><path d="M8 15l3-4 3 2 4-6" /></svg>
)
export const IconShield = (p) => (
  <svg {...base} {...p}><path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z" /><path d="M9 12l2 2 4-4" /></svg>
)
export const IconLink = (p) => (
  <svg {...base} {...p}><path d="M9 15l6-6" /><path d="M10.5 6.5l1-1a3.5 3.5 0 0 1 5 5l-1 1M8.5 12l-1 1a3.5 3.5 0 0 0 5 5l1-1" /></svg>
)
export const IconLeaf = (p) => (
  <svg {...base} {...p}><path d="M5 19c8 2 14-3 14-11 0-1-.2-2-.2-2s-1 .2-2 .2C9 6.2 4 11 5 19z" /><path d="M8 16c3-4 6-6 8-7" /></svg>
)
export const IconArrowRight = (p) => (
  <svg {...base} {...p}><path d="M4 12h15M13 6l6 6-6 6" /></svg>
)
export const IconPlay = (p) => (
  <svg {...base} fill="currentColor" stroke="none" {...p}><path d="M8 5.5v13l11-6.5z" /></svg>
)
export const IconQuote = (p) => (
  <svg {...base} fill="currentColor" stroke="none" {...p}><path d="M9 6H5a3 3 0 0 0-3 3v3a3 3 0 0 0 3 3h2v-1a3 3 0 0 1-2-2.8V11h4zM20 6h-4a3 3 0 0 0-3 3v3a3 3 0 0 0 3 3h2v-1a3 3 0 0 1-2-2.8V11h4z" /></svg>
)
export const IconUsers = (p) => (
  <svg {...base} {...p}><circle cx="9" cy="8" r="3" /><path d="M3.5 19a5.5 5.5 0 0 1 11 0M16 6.5a3 3 0 0 1 0 5.8M17.5 19a5.5 5.5 0 0 0-2-4.3" /></svg>
)
export const IconTruck = (p) => (
  <svg {...base} {...p}><rect x="2" y="7" width="12" height="9" rx="1.5" /><path d="M14 10h4l3 3v3h-7z" /><circle cx="7" cy="18" r="1.8" /><circle cx="17" cy="18" r="1.8" /></svg>
)
export const IconStore = (p) => (
  <svg {...base} {...p}><path d="M4 9l1-5h14l1 5M5 9v10h14V9M4 9h16" /><path d="M9 19v-5h6v5" /></svg>
)
export const IconCoins = (p) => (
  <svg {...base} {...p}><ellipse cx="9" cy="7" rx="5" ry="2.5" /><path d="M4 7v5c0 1.4 2.2 2.5 5 2.5s5-1.1 5-2.5V7" /><path d="M14 10.5c2.4.2 5 1.2 5 2.8 0 1.4-2.2 2.5-5 2.5-.8 0-1.6-.1-2.3-.3" /></svg>
)
export const IconCube = (p) => (
  <svg {...base} {...p}><path d="M12 3l7.5 4v10L12 21l-7.5-4V7z" /><path d="M4.5 7l7.5 4 7.5-4M12 11v10" /></svg>
)
export const IconCart = (p) => (
  <svg {...base} {...p}><path d="M3 4h2l2.2 11.2a1.5 1.5 0 0 0 1.5 1.2h8a1.5 1.5 0 0 0 1.5-1.2L21 8H6" /><circle cx="9.5" cy="20" r="1.3" /><circle cx="17.5" cy="20" r="1.3" /></svg>
)
export const IconBank = (p) => (
  <svg {...base} {...p}><path d="M4 10h16M5 10v8M9.5 10v8M14.5 10v8M19 10v8M3.5 18h17M12 3l8 5H4z" /></svg>
)
export const IconTick = (p) => (
  <svg {...base} {...p}><path d="M4.5 12.5l4.5 4.5L19.5 6" /></svg>
)

// Brand / social — solid fills
const solid = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'currentColor' }
export const IconLinkedIn = (p) => (
  <svg {...solid} {...p}><path d="M6.94 5a1.94 1.94 0 1 1-3.88 0 1.94 1.94 0 0 1 3.88 0zM3.4 8.4h3.06V21H3.4zM9.1 8.4h2.93v1.72h.04c.41-.77 1.4-1.58 2.88-1.58 3.08 0 3.65 2.03 3.65 4.66V21h-3.05v-5.2c0-1.24-.02-2.83-1.73-2.83-1.73 0-1.99 1.35-1.99 2.74V21H9.1z" /></svg>
)
export const IconX = (p) => (
  <svg {...solid} {...p}><path d="M17.5 3h3.2l-7 8 8.2 10h-6.4l-5-6.1L8 21H4.8l7.5-8.5L4.4 3h6.6l4.5 5.6zm-1.1 16h1.8L7.7 4.8H5.8z" /></svg>
)
export const IconFacebook = (p) => (
  <svg {...solid} {...p}><path d="M22 12a10 10 0 1 0-11.56 9.88v-7H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.9h-2.34v7A10 10 0 0 0 22 12z" /></svg>
)
export const IconInstagram = (p) => (
  <svg {...base} {...p}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.3" cy="6.7" r="0.9" fill="currentColor" stroke="none" /></svg>
)
export const IconYouTube = (p) => (
  <svg {...solid} {...p}><path d="M22.5 7.2a2.75 2.75 0 0 0-1.93-1.94C18.85 4.8 12 4.8 12 4.8s-6.85 0-8.57.46A2.75 2.75 0 0 0 1.5 7.2 28.7 28.7 0 0 0 1.04 12c0 1.62.15 3.24.46 4.8a2.75 2.75 0 0 0 1.93 1.94C5.15 19.2 12 19.2 12 19.2s6.85 0 8.57-.46a2.75 2.75 0 0 0 1.93-1.94c.31-1.56.46-3.18.46-4.8 0-1.62-.15-3.24-.46-4.8zM9.9 15.3V8.7l5.7 3.3z" /></svg>
)
