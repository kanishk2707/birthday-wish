export function StarryNightBackground() {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 1280 720"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="nightSkyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#0f172a', stopOpacity: 1 }} />
          <stop offset="40%" style={{ stopColor: '#1e1b4b', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#312e81', stopOpacity: 1 }} />
        </linearGradient>

        <radialGradient id="moonGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" style={{ stopColor: '#fef08a', stopOpacity: 0.8 }} />
          <stop offset="100%" style={{ stopColor: '#fef08a', stopOpacity: 0 }} />
        </radialGradient>

        <linearGradient id="cloudGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#ffffff', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#cbd5e1', stopOpacity: 0.8 }} />
        </linearGradient>

        <style>{`
          @keyframes twinkle {
            0%, 100% { opacity: 0.2; }
            50% { opacity: 1; }
          }
          @keyframes floatCloud {
            0% { transform: translateX(-100px); opacity: 0; }
            10% { opacity: 0.4; }
            90% { opacity: 0.4; }
            100% { transform: translateX(1380px); opacity: 0; }
          }
          @keyframes shootingStar {
            0% { transform: translate(0, 0) rotate(-45deg); opacity: 1; }
            100% { transform: translate(-500px, 500px) rotate(-45deg); opacity: 0; }
          }
          .star { animation: twinkle 3s ease-in-out infinite; }
          .cloud { animation: floatCloud 40s linear infinite; }
          .shooting-star { animation: shootingStar 6s ease-in infinite; transform-origin: left top; }
        `}</style>
      </defs>

      {/* Night Sky Background */}
      <rect width="1280" height="720" fill="url(#nightSkyGradient)" />

      {/* Moon */}
      <g transform="translate(1000, 150)">
        <circle cx="0" cy="0" r="80" fill="url(#moonGlow)" opacity="0.6" />
        <circle cx="0" cy="0" r="40" fill="#fef08a" />
        {/* Moon craters for detail */}
        <circle cx="10" cy="-10" r="8" fill="#fde047" opacity="0.4" />
        <circle cx="-15" cy="5" r="5" fill="#fde047" opacity="0.4" />
        <circle cx="5" cy="15" r="12" fill="#fde047" opacity="0.4" />
      </g>

      {/* Stars */}
      {[...Array(150)].map((_, i) => {
        const x = Math.random() * 1280;
        const y = Math.random() * 720;
        const r = Math.random() * 1.5 + 0.5;
        const delay = Math.random() * 5;
        const duration = Math.random() * 3 + 2;
        return (
          <circle
            key={`star-${i}`}
            cx={x}
            cy={y}
            r={r}
            fill="#ffffff"
            className="star"
            style={{
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`
            }}
          />
        );
      })}

      {/* Shooting Stars */}
      {[...Array(3)].map((_, i) => {
        const x = Math.random() * 800 + 400;
        const y = Math.random() * 200;
        const delay = Math.random() * 10 + i * 5;
        return (
          <g key={`shooting-star-${i}`} className="shooting-star" style={{ animationDelay: `${delay}s` }} transform={`translate(${x}, ${y})`}>
            <line x1="0" y1="0" x2="-60" y2="0" stroke="url(#moonGlow)" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
            <circle cx="0" cy="0" r="1.5" fill="#ffffff" />
          </g>
        );
      })}

      {/* Beautiful Majestic Clouds */}
      {[...Array(4)].map((_, i) => {
        const y = Math.random() * 250 + 100;
        const delay = Math.random() * -20; // negative delay so they start already on screen
        const duration = Math.random() * 40 + 60; // slow, serene floating
        const scale = Math.random() * 0.8 + 0.6;
        const opacity = Math.random() * 0.3 + 0.4;
        
        return (
          <g 
            key={`cloud-${i}`} 
            className="cloud" 
            style={{ 
              animationDelay: `${delay}s`, 
              animationDuration: `${duration}s`,
              opacity: opacity
            }} 
            transform={`translate(-200, ${y}) scale(${scale})`}
          >
            {/* Soft backdrop blur glow for the cloud */}
            <path 
              d="M170 80 A 50 50 0 0 1 250 50 A 60 60 0 0 1 350 70 A 40 40 0 0 1 380 120 L 140 120 A 40 40 0 0 1 170 80 Z" 
              fill="#e2e8f0" 
              filter="blur(12px)"
              opacity="0.6"
            />
            {/* Main cloud body */}
            <path 
              d="M170 80 A 50 50 0 0 1 250 50 A 60 60 0 0 1 350 70 A 40 40 0 0 1 380 120 L 140 120 A 40 40 0 0 1 170 80 Z" 
              fill="url(#cloudGradient)" 
            />
            {/* Cloud highlights */}
            <path 
              d="M180 85 A 40 40 0 0 1 245 60 A 50 50 0 0 1 330 75 A 30 30 0 0 1 350 110 L 160 110 A 30 30 0 0 1 180 85 Z" 
              fill="#ffffff" 
              opacity="0.3"
            />
          </g>
        );
      })}
    </svg>
  );
}
