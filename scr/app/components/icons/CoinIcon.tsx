export function CoinIcon({ className = "w-6 h-6", premium = false }: { className?: string; premium?: boolean }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={premium ? "premiumGradient" : "freeGradient"} x1="0%" y1="0%" x2="100%" y2="100%">
          {premium ? (
            <>
              <stop offset="0%" stopColor="#b8a5d6" />
              <stop offset="100%" stopColor="#9482AE" />
            </>
          ) : (
            <>
              <stop offset="0%" stopColor="#9482AE" />
              <stop offset="100%" stopColor="#7c6a9a" />
            </>
          )}
        </linearGradient>
        <filter id="coinShadow">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.3"/>
        </filter>
      </defs>

      <g filter="url(#coinShadow)">
        {/* Outer ring */}
        <circle cx="50" cy="50" r="45" fill={`url(#${premium ? "premiumGradient" : "freeGradient"})`} />

        {/* Inner ring */}
        <circle cx="50" cy="50" r="38" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.3" />

        {/* Center symbol */}
        {premium ? (
          <path
            d="M 40 35 L 50 25 L 60 35 L 55 35 L 55 55 L 60 60 L 50 70 L 40 60 L 45 55 L 45 35 Z"
            fill="currentColor"
            opacity="0.8"
          />
        ) : (
          <text
            x="50"
            y="65"
            fontSize="40"
            fontWeight="bold"
            textAnchor="middle"
            fill="currentColor"
            opacity="0.8"
          >
            ₽
          </text>
        )}

        {/* Shine effect */}
        <path
          d="M 30 25 Q 35 30, 40 25 Q 45 20, 50 25"
          stroke="white"
          strokeWidth="2"
          fill="none"
          opacity="0.4"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}
