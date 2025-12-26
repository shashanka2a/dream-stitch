'use client'

interface LogoProps {
  className?: string
  width?: number
  height?: number
}

export function Logo({ className = '', width = 320, height = 80 }: LogoProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 320 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* DREAMST text */}
      <text
        x="0"
        y="42"
        fontFamily="Playfair Display, serif"
        fontSize="30"
        fontWeight="400"
        fill="currentColor"
        letterSpacing="0.03em"
      >
        DREAMST
      </text>

      {/* T text (positioned before bobbin) */}
      <text
        x="138"
        y="42"
        fontFamily="Playfair Display, serif"
        fontSize="30"
        fontWeight="400"
        fill="currentColor"
        letterSpacing="0.03em"
      >
        T
      </text>

      {/* Bobbin/Spool replacing the "I" - hourglass shape */}
      <g transform="translate(155, 15)">
        {/* Main bobbin body (hourglass/waisted shape) */}
        <path
          d="M 4 8
             L 6 10
             L 6 18
             L 4 20
             L 2 18
             L 2 10
             Z"
          fill="currentColor"
        />
        {/* Top flange (wider top) */}
        <ellipse cx="4" cy="8" rx="4" ry="2" fill="currentColor" />
        {/* Bottom flange (wider bottom) */}
        <ellipse cx="4" cy="20" rx="4" ry="2" fill="currentColor" />
        {/* Center hole */}
        <circle cx="4" cy="14" r="1.2" fill="transparent" stroke="currentColor" strokeWidth="0.4" opacity="0.4" />
      </g>

      {/* CH text - positioned inside the thread loop */}
      <text
        x="175"
        y="42"
        fontFamily="Playfair Display, serif"
        fontSize="30"
        fontWeight="400"
        fill="currentColor"
        letterSpacing="0.03em"
      >
        CH
      </text>

      {/* Sewing Needle - horizontal line below text, extending full width */}
      <line
        x1="0"
        y1="52"
        x2="320"
        y2="52"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      
      {/* Needle point (sharp left side) */}
      <path
        d="M 0 52 L 6 48 L 6 56 Z"
        fill="currentColor"
      />
      
      {/* Needle eye (right side, below CH) */}
      <g transform="translate(295, 52)">
        <circle
          cx="0"
          cy="0"
          r="3.5"
          fill="transparent"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <circle
          cx="0"
          cy="0"
          r="1.8"
          fill="currentColor"
        />
      </g>

      {/* Thread loop - angular path from needle eye, up, right, down, to bobbin */}
      {/* This creates the loop that outlines T and CH */}
      <path
        d="M 295 52 
           L 295 25 
           L 210 25 
           L 210 12 
           L 159 12"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="miter"
      />
      
      {/* Thread connection to bobbin top */}
      <line
        x1="159"
        y1="12"
        x2="159"
        y2="10"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  )
}

