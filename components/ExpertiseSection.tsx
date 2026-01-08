'use client'

import Link from 'next/link'
import { processes } from '@/data/processes'
import { ProcessIcon } from './ProcessIcons'

export function ExpertiseSection() {
  return (
    <section id="expertise" className="bg-white py-12 sm:py-16 md:py-20 lg:py-24 xl:py-[120px] px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6 sm:mb-8 md:mb-10 lg:mb-12 reveal text-left">
          <span className="uppercase tracking-[0.3em] text-[11px] sm:text-[12px] md:text-[13px] opacity-40 block mb-3 sm:mb-4 md:mb-6 font-medium">The Process</span>
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-8 sm:mb-10 md:mb-12"
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
              <div className="w-[48px] h-[48px] md:w-[56px] md:h-[56px] mb-8 md:mb-12 opacity-10 transition-opacity group-hover:opacity-30">
                <ProcessIcon slug={process.slug} />
              </div>
              <div className="flex items-start justify-between gap-4 mb-4 md:mb-6">
                <h4 className="text-sm md:text-base uppercase tracking-[0.3em] font-medium transition-colors group-hover:text-gray-900 flex-1 whitespace-nowrap overflow-hidden text-ellipsis min-w-0">{process.title}</h4>
                <svg 
                  className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-gray-900 transition-all group-hover:translate-x-1 flex-shrink-0 mt-0.5 opacity-0 group-hover:opacity-100" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                </svg>
              </div>
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
