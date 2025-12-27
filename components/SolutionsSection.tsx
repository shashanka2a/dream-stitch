'use client'

import Image from 'next/image'

export function SolutionsSection() {
  return (
    <section id="solutions" className="py-16 md:py-32 lg:py-48 px-4 md:px-8 bg-white">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 lg:gap-24 items-start">
          <div className="reveal">
            <div className="mb-8">
              <Image
                src="https://images.unsplash.com/photo-1551232864-3f0890e580d9?auto=format&fit=crop&q=80&w=1200"
                alt="Flexible Services"
                width={1200}
                height={800}
                className="w-full aspect-[3/4] object-cover rounded-lg border border-gray-100 shadow-sm"
              />
            </div>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-light mb-4 md:mb-6 text-gray-900">Flexible Services</h3>
            <p className="text-gray-500 text-sm md:text-base lg:text-lg font-light leading-relaxed">
              Choose full end-to-end support or individual services: design, sample development, fabric sourcing, manufacturing, or marketing. We adapt to your needs, not the other way around.
            </p>
          </div>
          <div className="reveal">
            <div className="mb-8">
              <Image
                src="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&q=80&w=1200"
                alt="Startup-Friendly"
                width={1200}
                height={800}
                className="w-full aspect-[3/4] object-cover rounded-lg border border-gray-100 shadow-sm"
              />
            </div>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-light mb-4 md:mb-6 text-gray-900">Startup-Friendly</h3>
            <p className="text-gray-500 text-sm md:text-base lg:text-lg font-light leading-relaxed">
              Low minimum order quantities make quality production accessible from day one. Scale at your pace, with transparent pricing and support that grows with your brand.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}


