'use client'

import Image from 'next/image'

export function PartnersSection() {
  return (
    <section id="about" className="py-32 md:py-56 px-8 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-12 gap-16 items-center">
        <div className="md:col-span-7 reveal">
          <span className="uppercase tracking-[0.3em] text-[10px] opacity-40 block mb-8">The Partner</span>
          <h2 className="text-4xl md:text-6xl mb-12 leading-[1.1] font-light">
            Your complete fashion partner—from concept to launch.
          </h2>
          <div className="space-y-10 text-xl leading-relaxed text-gray-600 max-w-xl font-light">
            <p>
              DreamStich supports fashion startups, emerging designers, and established brands at every stage. Whether you need designs created from scratch, professional sample development, reliable manufacturing, or help bringing your collection to market—we provide flexible, customizable solutions tailored to your journey.
            </p>
            <p>
              With low minimum order quantities, transparent processes, and end-to-end support including photoshoots and marketing, we make fashion production accessible and scalable for brands ready to grow.
            </p>
          </div>
        </div>
        <div className="md:col-span-5 reveal" style={{ transitionDelay: '300ms' }}>
          <div className="img-container shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&q=80&w=1000"
              alt="Garment Craftsmanship"
              width={1000}
              height={750}
              className="w-full h-[750px] object-cover stagger-img"
            />
          </div>
        </div>
      </div>
    </section>
  )
}


