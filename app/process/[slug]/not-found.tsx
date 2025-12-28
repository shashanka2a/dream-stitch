import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="bg-white min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h1 
          className="text-4xl sm:text-5xl md:text-6xl mb-4"
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontWeight: 600,
          }}
        >
          Process Not Found
        </h1>
        <p 
          className="text-base md:text-lg mb-8 text-gray-600"
          style={{
            fontFamily: 'var(--font-poppins)',
            fontWeight: 300,
          }}
        >
          The process you're looking for doesn't exist.
        </p>
        <Link
          href="/#expertise"
          className="inline-block px-6 py-3 border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-all text-sm uppercase tracking-[0.3em]"
          style={{
            fontFamily: 'var(--font-poppins)',
          }}
        >
          Back to Process
        </Link>
      </div>
    </main>
  )
}

