'use client'

const processes = [
  {
    number: '01',
    title: 'Consultation',
    description: 'Aligning brand vision with manufacturing feasibility and strategic roadmaps.',
    delay: '0ms',
  },
  {
    number: '02',
    title: 'Material Sourcing',
    description: 'Leveraging global networks to procure ethical, high-quality fabrics and trims.',
    delay: '100ms',
  },
  {
    number: '03',
    title: 'Technical Design',
    description: 'Translating concepts into precise tech packs and digitized pattern modules.',
    delay: '200ms',
  },
  {
    number: '04',
    title: 'Proto Development',
    description: 'Meticulous sample creation to verify fit, silhouette, and material behavior.',
    delay: '300ms',
  },
  {
    number: '05',
    title: 'Scaled Assembly',
    description: 'Transitioning to state-of-the-art production lines for bulk manufacturing.',
    delay: '400ms',
  },
  {
    number: '06',
    title: 'Quality Audit',
    description: 'Final rigorous inspection and logistics orchestration for global delivery.',
    delay: '500ms',
  },
]

export function ExpertiseSection() {
  return (
    <section id="expertise" className="bg-white py-32 md:py-56 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-32 reveal text-center md:text-left">
          <span className="uppercase tracking-[0.3em] text-[10px] opacity-40 block mb-6">The Process</span>
          <h2 className="text-4xl md:text-7xl font-light">Our Production Cycle</h2>
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

