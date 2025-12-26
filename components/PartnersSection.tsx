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
          <div className="relative h-[700px] md:h-[800px]">
            {/* Dominant Image: Manufacturing Floor - Large, bottom-left, dominant */}
            <div className="absolute bottom-0 left-0 w-[60%] md:w-[65%] pb-12 md:pb-16">
              <div className="img-container overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&q=80&w=800"
                  alt="Manufacturing Floor"
                  width={800}
                  height={1000}
                  className="w-full aspect-[3/4] object-cover stagger-img"
                />
              </div>
            </div>

            {/* Secondary Image 1: Fashion Design Sketches - Small, top-left */}
            <div className="absolute top-0 left-0 w-[38%] md:w-[40%] pt-0">
              <div className="img-container overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=500"
                  alt="Fashion Design Sketches"
                  width={500}
                  height={600}
                  className="w-full aspect-[4/5] object-cover stagger-img"
                />
              </div>
            </div>

            {/* Secondary Image 2: Fabric Sourcing - Medium, top-right */}
            <div className="absolute top-0 right-0 w-[52%] md:w-[55%] pt-0 pr-0">
              <div className="img-container overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=600"
                  alt="Fabric Sourcing"
                  width={600}
                  height={400}
                  className="w-full aspect-[5/4] object-cover stagger-img"
                />
              </div>
            </div>

            {/* Secondary Image 3: Photoshoot Setup - Small, bottom-right, overlapping with dominant */}
            <div className="absolute bottom-12 md:bottom-16 right-0 w-[35%] md:w-[38%] z-10">
              <div className="img-container overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=500"
                  alt="Photoshoot Setup"
                  width={500}
                  height={500}
                  className="w-full aspect-square object-cover stagger-img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


