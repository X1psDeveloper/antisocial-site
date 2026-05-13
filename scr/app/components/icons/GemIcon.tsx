export function GemIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gemGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#b8a5d6" />
          <stop offset="50%" stopColor="#9482AE" />
          <stop offset="100%" stopColor="#7c6a9a" />
        </linearGradient>
        <filter id="gemGlow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      <g filter="url(#gemGlow)">
        {/* Top facets */}
        <polygon points="50,15 30,35 50,30 70,35" fill="url(#gemGradient)" opacity="0.9" />
        <polygon points="30,35 50,30 50,85 20,45" fill="url(#gemGradient)" opacity="0.7" />
        <polygon points="70,35 50,30 50,85 80,45" fill="url(#gemGradient)" opacity="0.8" />

        {/* Bottom facets */}
        <polygon points="50,85 20,45 30,35" fill="url(#gemGradient)" opacity="0.6" />
        <polygon points="50,85 80,45 70,35" fill="url(#gemGradient)" opacity="0.65" />

        {/* Highlights */}
        <polygon points="50,20 45,28 50,30 55,28" fill="white" opacity="0.6" />
        <line x1="35" y1="38" x2="42" y2="45" stroke="white" strokeWidth="2" opacity="0.4" strokeLinecap="round" />
      </g>
    </svg>
  );
}
