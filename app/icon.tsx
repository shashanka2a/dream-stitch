import { ImageResponse } from 'next/og'

export const size = {
  width: 32,
  height: 32,
}

export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="black"
          strokeWidth="1.5"
        >
          <path
            d="M12 2v20M12 2c-2.5 0-4.5 2-4.5 4.5S9.5 11 12 11s4.5-2.5 4.5-5S14.5 2 12 2zM12 13c2.5 0 4.5 2 4.5 4.5S14.5 22 12 22s-4.5-2.5-4.5-5S9.5 13 12 13z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="7" r="1" fill="black" />
          <circle cx="12" cy="17" r="1" fill="black" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  )
}

