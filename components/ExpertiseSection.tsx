'use client'

const processes = [
  {
    number: '01',
    title: 'Design & Development',
    description: 'From concept to creation, we design from scratch or refine your existing ideas into production-ready collections.',
    delay: '0ms',
  },
  {
    number: '02',
    title: 'Fabric Sourcing',
    description: 'Leveraging global networks to source the perfect materials that align with your brand vision and budget.',
    delay: '100ms',
  },
  {
    number: '03',
    title: 'Sample Development',
    description: 'Professional prototype creation ensuring perfect fit, quality, and alignment with your design intent.',
    delay: '200ms',
  },
  {
    number: '04',
    title: 'Manufacturing',
    description: 'Scalable production with low MOQs, maintaining craftsmanship standards from small batches to full volume runs.',
    delay: '300ms',
  },
  {
    number: '05',
    title: 'Photoshoots & Content',
    description: 'Bringing your collection to market with professional photoshoots, lookbooks, and visual content that captures your brand identity.',
    delay: '400ms',
  },
  {
    number: '06',
    title: 'Marketing Support',
    description: 'Complete brand presentation services to ensure your designs are not only well-made but market-ready and launch-ready.',
    delay: '500ms',
  },
]

export function ExpertiseSection() {
  return (
    <section id="expertise" className="bg-white py-12 sm:py-16 md:py-20 lg:py-24 xl:py-[120px] px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6 sm:mb-8 md:mb-10 lg:mb-12 reveal text-left">
          <span className="uppercase tracking-[0.3em] text-[9px] sm:text-[10px] opacity-40 block mb-3 sm:mb-4 md:mb-6">The Process</span>
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontWeight: 600,
            }}
          >
            Your Complete Journey
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 sm:gap-x-8 md:gap-x-12 gap-y-10 sm:gap-y-12 md:gap-y-16 lg:gap-y-20 xl:gap-y-24">
          {processes.map((process) => (
            <div 
              key={process.number} 
              className="reveal process-card"
              style={{ transitionDelay: process.delay }}
            >
              <div className="text-4xl md:text-5xl mb-8 md:mb-12 font-thin opacity-10 serif italic transition-opacity hover:opacity-30">
                {process.number}
              </div>
              <h4 className="text-sm md:text-base uppercase tracking-[0.3em] mb-4 md:mb-6 font-medium">{process.title}</h4>
              <p 
                className="text-sm md:text-base leading-relaxed"
                style={{
                  fontFamily: 'var(--font-poppins)',
                  fontWeight: 400,
                  color: '#6B7280',
                }}
              >
                {process.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


