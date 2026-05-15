export function GardenBackground() {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 1280 720"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#fef3c7', stopOpacity: 1 }} />
          <stop offset="40%" style={{ stopColor: '#fde68a', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#faf5f0', stopOpacity: 1 }} />
        </linearGradient>

        <radialGradient id="sunGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" style={{ stopColor: '#fbbf24', stopOpacity: 0.8 }} />
          <stop offset="100%" style={{ stopColor: '#f59e0b', stopOpacity: 0 }} />
        </radialGradient>

        <filter id="sunGlow">
          <feGaussianBlur stdDeviation="8" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <filter id="leafShadow">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
        </filter>

        <style>{`
          @keyframes sway {
            0%, 100% { transform: translateX(0px) rotate(0deg); }
            50% { transform: translateX(2px) rotate(1deg); }
          }
          @keyframes floatUp {
            0% { opacity: 0; transform: translateY(20px); }
            50% { opacity: 1; }
            100% { opacity: 0; transform: translateY(-100px); }
          }
          @keyframes sunPulse {
            0%, 100% { r: 45px; }
            50% { r: 50px; }
          }
          .leaf { animation: sway 3s ease-in-out infinite; transform-box: fill-box; transform-origin: bottom center; }
          .petal { animation: floatUp 4s ease-in infinite; transform-box: fill-box; transform-origin: center; }
          .sun-circle { animation: sunPulse 4s ease-in-out infinite; transform-box: fill-box; transform-origin: center; }
        `}</style>
      </defs>

      {/* Sky background */}
      <rect width="1280" height="720" fill="url(#skyGradient)" />

      {/* Sun glow effect */}
      <circle cx="1100" cy="120" r="80" fill="url(#sunGradient)" filter="url(#sunGlow)" />
      <circle cx="1100" cy="120" r="45" fill="#fcd34d" className="sun-circle" />

      {/* Light rays */}
      <g opacity="0.3">
        <line x1="1100" y1="0" x2="1100" y2="720" stroke="#f59e0b" strokeWidth="2" />
        <line x1="900" y1="0" x2="1100" y2="720" stroke="#f59e0b" strokeWidth="1.5" />
        <line x1="1100" y1="0" x2="1300" y2="720" stroke="#f59e0b" strokeWidth="1.5" />
      </g>

      {/* Distant hills */}
      <ellipse cx="640" cy="550" rx="600" ry="150" fill="#e8dcc8" opacity="0.6" />
      <ellipse cx="200" cy="580" rx="400" ry="120" fill="#ede3d6" opacity="0.5" />
      <ellipse cx="1100" cy="600" rx="350" ry="100" fill="#ede3d6" opacity="0.5" />

      {/* Grass field */}
      <rect y="600" width="1280" height="120" fill="#d4c5a0" />

      {/* Decorative flowers and plants */}
      {/* Flower group 1 - left */}
      <g transform="translate(150, 580)">
        {/* Stem */}
        <line x1="0" y1="0" x2="0" y2="40" stroke="#8b7355" strokeWidth="2" />
        {/* Petals */}
        <circle cx="-8" cy="-8" r="6" fill="#d4af37" opacity="0.8" />
        <circle cx="8" cy="-8" r="6" fill="#d4af37" opacity="0.8" />
        <circle cx="-12" cy="0" r="6" fill="#d4af37" opacity="0.8" />
        <circle cx="12" cy="0" r="6" fill="#d4af37" opacity="0.8" />
        <circle cx="0" cy="-12" r="7" fill="#fcd34d" />
      </g>

      {/* Flower group 2 - center */}
      <g transform="translate(640, 590)">
        <line x1="0" y1="0" x2="0" y2="30" stroke="#8b7355" strokeWidth="2" />
        <circle cx="-7" cy="-7" r="5" fill="#d4af37" opacity="0.8" />
        <circle cx="7" cy="-7" r="5" fill="#d4af37" opacity="0.8" />
        <circle cx="-10" cy="0" r="5" fill="#d4af37" opacity="0.8" />
        <circle cx="10" cy="0" r="5" fill="#d4af37" opacity="0.8" />
        <circle cx="0" cy="-10" r="6" fill="#fcd34d" />
      </g>

      {/* Flower group 3 - right */}
      <g transform="translate(1100, 585)">
        <line x1="0" y1="0" x2="0" y2="35" stroke="#8b7355" strokeWidth="2" />
        <circle cx="-8" cy="-8" r="6" fill="#d4af37" opacity="0.8" />
        <circle cx="8" cy="-8" r="6" fill="#d4af37" opacity="0.8" />
        <circle cx="-12" cy="0" r="6" fill="#d4af37" opacity="0.8" />
        <circle cx="12" cy="0" r="6" fill="#d4af37" opacity="0.8" />
        <circle cx="0" cy="-12" r="7" fill="#fcd34d" />
      </g>

      {/* Decorative leaves */}
      {[0, 1, 2, 3, 4].map((i) => (
        <g key={`leaf-${i}`} transform={`translate(${200 + i * 200}, ${520 + Math.sin(i) * 20})`}>
          <ellipse
            cx="0"
            cy="0"
            rx="8"
            ry="12"
            fill="#a0926d"
            opacity="0.6"
            className="leaf"
            style={{ animationDelay: `${i * 0.3}s` }}
          />
        </g>
      ))}

      {/* Floating petals */}
      {[0, 1, 2, 3].map((i) => (
        <circle
          key={`petal-${i}`}
          cx={100 + i * 300}
          cy="100"
          r="3"
          fill="#d4af37"
          opacity="0.7"
          className="petal"
          style={{ animationDelay: `${i * 1}s` }}
        />
      ))}

      {/* Subtle light rays from sun */}
      <g opacity="0.15">
        <rect x="1050" y="0" width="30" height="720" fill="#fbbf24" />
        <rect x="950" y="100" width="20" height="620" fill="#fbbf24" />
        <rect x="1150" y="100" width="20" height="620" fill="#fbbf24" />
      </g>
    </svg>
  );
}
