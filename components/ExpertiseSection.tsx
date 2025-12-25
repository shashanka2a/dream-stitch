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
    <section id="expertise" className="bg-white py-32 md:py-56 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-32 reveal text-center md:text-left">
          <span className="uppercase tracking-[0.3em] text-[10px] opacity-40 block mb-6">The Process</span>
          <h2 className="text-4xl md:text-7xl font-light">Your Complete Journey</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-32">
          {processes.map((process) => (
            <div 
              key={process.number} 
              className="reveal process-card"
              style={{ transitionDelay: process.delay }}
            >
              <div className="text-5xl mb-12 font-thin opacity-10 serif italic transition-opacity hover:opacity-30">
                {process.number}
              </div>
              <h4 className="text-xs uppercase tracking-[0.3em] mb-6 font-medium">{process.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed font-light">{process.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


