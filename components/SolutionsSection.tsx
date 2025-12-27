'use client'

import Image from 'next/image'

export function SolutionsSection() {
  return (
    <section id="solutions" className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-[120px] px-4 sm:px-6 md:px-8 bg-white">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-24 items-start">
          <div className="reveal">
            <div className="mb-8">
              <Image
                src="https://images.unsplash.com/photo-1551232864-3f0890e580d9?auto=format&fit=crop&q=80&w=1200"
                alt="Flexible Services"
                width={1200}
                height={800}
                className="w-full aspect-[3/2] object-cover rounded-lg border border-gray-100 shadow-sm"
              />
            </div>
            <h3 
              className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6 text-gray-900"
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontWeight: 600,
              }}
            >
              Flexible Services
            </h3>
            <p 
              className="text-sm md:text-base lg:text-lg leading-relaxed"
              style={{
                fontFamily: 'var(--font-poppins)',
                fontWeight: 400,
                color: '#6B7280',
              }}
            >
              Choose full end-to-end support or individual services: design, sample development, fabric sourcing, manufacturing, or marketing. We adapt to your needs, not the other way around.
            </p>
          </div>
          <div className="reveal">
            <div className="mb-8">
              <Image
                src="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&q=80&w=1200"
                alt="Startup Friendly"
                width={1200}
                height={800}
                className="w-full aspect-[3/2] object-cover rounded-lg border border-gray-100 shadow-sm"
              />
            </div>
            <h3 
              className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6 text-gray-900"
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontWeight: 600,
              }}
            >
              Startup Friendly
            </h3>
            <p 
              className="text-sm md:text-base lg:text-lg leading-relaxed"
              style={{
                fontFamily: 'var(--font-poppins)',
                fontWeight: 400,
                color: '#6B7280',
              }}
            >
              Low minimum order quantities make quality production accessible from day one. Scale at your pace, with transparent pricing and support that grows with your brand.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}


