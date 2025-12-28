'use client'

import Link from 'next/link'
import { processes } from '@/data/processes'

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
            <Link
              key={process.number}
              href={`/process/${process.slug}`}
              className="reveal process-card block group"
              style={{ transitionDelay: process.delay }}
            >
              <div className="text-4xl md:text-5xl mb-8 md:mb-12 font-thin opacity-10 serif italic transition-opacity group-hover:opacity-30">
                {process.number}
              </div>
              <h4 className="text-sm md:text-base uppercase tracking-[0.3em] mb-4 md:mb-6 font-medium transition-colors group-hover:text-gray-900">{process.title}</h4>
              <p 
                className="text-sm md:text-base leading-relaxed transition-colors group-hover:text-gray-700"
                style={{
                  fontFamily: 'var(--font-poppins)',
                  fontWeight: 400,
                  color: '#6B7280',
                }}
              >
                {process.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}


