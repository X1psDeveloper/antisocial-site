export function ButterflyIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#glow)">
        {/* Body */}
        <ellipse cx="50" cy="50" rx="4" ry="18" fill="currentColor" />

        {/* Left upper wing */}
        <path
          d="M46 35 C 35 30, 20 25, 15 20 C 10 15, 10 10, 15 10 C 20 10, 30 15, 38 22 C 42 26, 45 30, 46 35 Z"
          fill="currentColor"
          opacity="0.9"
        />

        {/* Right upper wing */}
        <path
          d="M54 35 C 65 30, 80 25, 85 20 C 90 15, 90 10, 85 10 C 80 10, 70 15, 62 22 C 58 26, 55 30, 54 35 Z"
          fill="currentColor"
          opacity="0.9"
        />

        {/* Left lower wing */}
        <path
          d="M46 65 C 35 70, 20 75, 15 80 C 10 85, 10 90, 15 90 C 20 90, 30 85, 38 78 C 42 74, 45 70, 46 65 Z"
          fill="currentColor"
          opacity="0.8"
        />

        {/* Right lower wing */}
        <path
          d="M54 65 C 65 70, 80 75, 85 80 C 90 85, 90 90, 85 90 C 80 90, 70 85, 62 78 C 58 74, 55 70, 54 65 Z"
          fill="currentColor"
          opacity="0.8"
        />

        {/* Wing details */}
        <circle cx="30" cy="25" r="3" fill="currentColor" opacity="0.6" />
        <circle cx="70" cy="25" r="3" fill="currentColor" opacity="0.6" />
        <circle cx="30" cy="75" r="2.5" fill="currentColor" opacity="0.5" />
        <circle cx="70" cy="75" r="2.5" fill="currentColor" opacity="0.5" />

        {/* Antennae */}
        <path d="M48 32 Q 42 20, 38 15" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M52 32 Q 58 20, 62 15" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <circle cx="38" cy="15" r="2" fill="currentColor" />
        <circle cx="62" cy="15" r="2" fill="currentColor" />
      </g>

      <defs>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
    </svg>
  );
}
