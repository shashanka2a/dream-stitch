'use client'

import Image from 'next/image'

export function PartnersSection() {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-[120px] px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-12 gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-center">
        <div className="md:col-span-7 reveal">
          <span className="uppercase tracking-[0.3em] text-[10px] opacity-40 block mb-4 md:mb-8">THE PARTNER</span>
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 sm:mb-6 md:mb-8 lg:mb-12"
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontWeight: 500,
            }}
          >
            Your fashion partner from concept to launch.
          </h2>
          <div className="space-y-4 sm:space-y-6 md:space-y-10 max-w-xl" style={{ textAlign: 'left', color: '#6B7280' }}>
            <p
              className="text-sm sm:text-base md:text-lg lg:text-xl"
              style={{
                fontFamily: 'var(--font-poppins)',
                fontWeight: 300,
                lineHeight: '1.5',
                letterSpacing: '0%',
              }}
            >
              DreamStich supports fashion startups, emerging designers, and established brands at every stage. We provide flexible, customizable solutions whether you need designs created from scratch, professional sample development, reliable manufacturing, or help bringing your collection to market.
            </p>
            <p
              className="text-sm sm:text-base md:text-lg lg:text-xl"
              style={{
                fontFamily: 'var(--font-poppins)',
                fontWeight: 300,
                lineHeight: '1.5',
                letterSpacing: '0%',
              }}
            >
              Low minimum order quantities, transparent processes, and complete support including photoshoots and marketing make fashion production accessible and scalable for brands ready to grow.
            </p>
          </div>
        </div>
        <div className="md:col-span-5 reveal mt-8 md:mt-0" style={{ transitionDelay: '300ms' }}>
          {/* Mobile: Simple 2x2 grid */}
          <div className="grid grid-cols-2 gap-3 md:hidden">
            <div className="img-container overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=600"
                alt="Fashion Design Sketches"
                width={600}
                height={400}
                className="w-full aspect-[4/3] object-cover stagger-img"
              />
            </div>
            <div className="img-container overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=600"
                alt="Fabric Sourcing"
                width={600}
                height={400}
                className="w-full aspect-[4/3] object-cover stagger-img"
              />
            </div>
            <div className="img-container overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&q=80&w=600"
                alt="Manufacturing Floor"
                width={600}
                height={400}
                className="w-full aspect-[4/3] object-cover stagger-img"
              />
            </div>
            <div className="img-container overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=600"
                alt="Photoshoot Setup"
                width={600}
                height={400}
                className="w-full aspect-[4/3] object-cover stagger-img"
              />
            </div>
          </div>
          
          {/* Desktop: 12-column grid layout */}
          <div className="hidden md:grid grid-cols-12 gap-4 auto-rows-auto">
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
            
            {/* Image 3: Fashion Design Sketches - 5 columns, bottom-right */}
            <div className="col-span-5 col-start-8 row-start-2 img-container overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=600"
                alt="Fashion Design Sketches"
                width={600}
                height={400}
                className="w-full h-full object-cover stagger-img"
              />
            </div>
            
            {/* Image 4: Photoshoot Setup - Full width, 12 columns, bottom row */}
            <div className="col-span-12 row-start-3 img-container overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200"
                alt="Photoshoot Setup"
                width={1200}
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


