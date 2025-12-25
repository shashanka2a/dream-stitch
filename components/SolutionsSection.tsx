'use client'

import Image from 'next/image'

export function SolutionsSection() {
  return (
    <section id="solutions" className="py-48 px-8 bg-white">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-2 gap-40 items-start">
          <div className="reveal">
            <div className="img-container mb-12">
              <Image
                src="https://images.unsplash.com/photo-1551232864-3f0890e580d9?auto=format&fit=crop&q=80&w=1200"
                alt="Design & Development"
                width={1200}
                height={1500}
                className="w-full aspect-[4/5] object-cover stagger-img"
              />
            </div>
            <h3 className="text-4xl font-light mb-6">Flexible Services</h3>
            <p className="text-gray-500 text-base font-light max-w-sm leading-relaxed">
              Choose full end-to-end support or individual services: design, sample development, fabric sourcing, manufacturing, or marketing. We adapt to your needs, not the other way around.
            </p>
          </div>
          <div className="reveal md:mt-80">
            <div className="img-container mb-12">
              <Image
                src="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&q=80&w=1200"
                alt="Startup Support"
                width={1200}
                height={1500}
                className="w-full aspect-[4/5] object-cover stagger-img"
              />
            </div>
            <h3 className="text-4xl font-light mb-6">Startup-Friendly</h3>
            <p className="text-gray-500 text-base font-light max-w-sm leading-relaxed">
              Low minimum order quantities make quality production accessible from day one. Scale at your pace, with transparent pricing and support that grows with your brand.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}


