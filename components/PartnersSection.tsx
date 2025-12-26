'use client'

import Image from 'next/image'

export function PartnersSection() {
  return (
    <section id="about" className="py-32 md:py-56 px-8 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-12 gap-16 items-center">
        <div className="md:col-span-7 reveal">
          <span className="uppercase tracking-[0.3em] text-[10px] opacity-40 block mb-8">THE PARTNER</span>
          <h2 className="text-4xl md:text-6xl mb-12 leading-[1.1] font-light">
            Your fashion partner from concept to launch.
          </h2>
          <div className="space-y-10 text-xl leading-relaxed text-gray-600 max-w-xl font-light">
            <p>
              DreamStich supports fashion startups, emerging designers, and established brands at every stage. We provide flexible, customizable solutions whether you need designs created from scratch, professional sample development, reliable manufacturing, or help bringing your collection to market.
            </p>
            <p>
              Low minimum order quantities, transparent processes, and complete support including photoshoots and marketing make fashion production accessible and scalable for brands ready to grow.
            </p>
          </div>
        </div>
        <div className="md:col-span-5 reveal" style={{ transitionDelay: '300ms' }}>
          <div className="grid grid-cols-12 gap-4 auto-rows-auto">
            {/* Image 1: Manufacturing Floor - Dominant, 7 columns, 2 rows */}
            <div className="col-span-7 row-span-2 img-container overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&q=80&w=800"
                alt="Manufacturing Floor"
                width={800}
                height={1000}
                className="w-full h-full object-cover stagger-img"
              />
            </div>
            
            {/* Image 2: Fabric Sourcing - 5 columns, top-right */}
            <div className="col-span-5 col-start-8 row-start-1 img-container overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=600"
                alt="Fabric Sourcing"
                width={600}
                height={400}
                className="w-full h-full object-cover stagger-img"
              />
            </div>
            
            {/* Image 3: Fashion Design Sketches - 5 columns, bottom-left (but Image 1 is there, so this goes in row 2, columns 8-12) */}
            <div className="col-span-5 col-start-8 row-start-2 img-container overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=600"
                alt="Fashion Design Sketches"
                width={600}
                height={400}
                className="w-full h-full object-cover stagger-img"
              />
            </div>
            
            {/* Image 4: Photoshoot Setup - 7 columns, bottom-right (row 3, columns 6-12) */}
            <div className="col-span-7 col-start-6 row-start-3 img-container overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800"
                alt="Photoshoot Setup"
                width={800}
                height={400}
                className="w-full h-full object-cover stagger-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


