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
                alt="Detail"
                width={1200}
                height={1500}
                className="w-full aspect-[4/5] object-cover stagger-img"
              />
            </div>
            <h3 className="text-4xl font-light mb-6">Precision Sampling</h3>
            <p className="text-gray-500 text-base font-light max-w-sm leading-relaxed">
              Flawless translation from design to physical prototype, ensuring every stitch carries your brand's intent.
            </p>
          </div>
          <div className="reveal md:mt-80">
            <div className="img-container mb-12">
              <Image
                src="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&q=80&w=1200"
                alt="Bulk Production"
                width={1200}
                height={1500}
                className="w-full aspect-[4/5] object-cover stagger-img"
              />
            </div>
            <h3 className="text-4xl font-light mb-6">Volume Output</h3>
            <p className="text-gray-500 text-base font-light max-w-sm leading-relaxed">
              Optimized workflows for large-scale fashion distribution without sacrificing the soul of craftsmanship.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

