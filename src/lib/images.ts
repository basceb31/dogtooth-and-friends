export const images = {
  elevate: `<svg width="800" height="600" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="elevate-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#1a1a1a;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#0B0B0B;stop-opacity:1" />
      </linearGradient>
      <filter id="noise">
        <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch"/>
        <feComposite operator="in" in2="SourceGraphic" result="noisy"/>
      </filter>
    </defs>
    <rect width="100%" height="100%" fill="url(#elevate-gradient)" />
    <g filter="url(#noise)" opacity="0.1">
      <rect width="100%" height="100%" fill="#f48c06"/>
    </g>
    <g opacity="0.4">
      <circle cx="100" cy="100" r="200" fill="#f48c06" filter="url(#noise)"/>
      <circle cx="700" cy="500" r="150" fill="#f48c06" filter="url(#noise)"/>
    </g>
  </svg>`,
  project1: `<svg width="800" height="600" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="project1-gradient" x1="100%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style="stop-color:#1a1a1a;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#0B0B0B;stop-opacity:1" />
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#project1-gradient)" />
    <g opacity="0.3">
      <rect x="100" y="100" width="600" height="400" stroke="#f48c06" stroke-width="2" fill="none" rx="10"/>
      <line x1="100" y1="200" x2="700" y2="200" stroke="#f48c06" stroke-width="1"/>
      <rect x="150" y="250" width="200" height="100" fill="#f48c06" opacity="0.2"/>
    </g>
  </svg>`,
  project2: `<svg width="800" height="600" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="project2-gradient" cx="50%" cy="50%" r="50%">
        <stop offset="0%" style="stop-color:#1a1a1a;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#0B0B0B;stop-opacity:1" />
      </radialGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#project2-gradient)" />
    <g opacity="0.5">
      <path d="M 200 200 Q 400 100 600 200 T 1000 200" stroke="#f48c06" stroke-width="3" fill="none"/>
      <path d="M 200 400 Q 400 500 600 400 T 1000 400" stroke="#f48c06" stroke-width="3" fill="none"/>
    </g>
  </svg>`
};
