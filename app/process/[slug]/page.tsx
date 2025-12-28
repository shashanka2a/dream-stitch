'use client'

import Link from 'next/link'
import { useEffect, use } from 'react'
import { processes } from '@/data/processes'
import { useScrollReveal } from '@/hooks/useScrollReveal'

interface ProcessPageProps {
  params: Promise<{
    slug: string
  }>
}

export default function ProcessPage({ params }: ProcessPageProps) {
  useScrollReveal()
  const resolvedParams = use(params)
  const process = processes.find((p) => p.slug === resolvedParams.slug)

  if (!process) {
    return (
      <main className="bg-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 
            className="text-4xl sm:text-5xl md:text-6xl mb-4"
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontWeight: 600,
            }}
          >
            Process Not Found
          </h1>
          <Link
            href="/#expertise"
            className="text-sm md:text-base opacity-60 hover:opacity-100 transition-opacity"
            style={{
              fontFamily: 'var(--font-poppins)',
            }}
          >
            Back to Process
          </Link>
        </div>
      </main>
    )
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-[120px]">
        {/* Back Button */}
        <Link
          href="/#expertise"
          className="inline-flex items-center gap-2 mb-8 sm:mb-12 text-sm md:text-base opacity-60 hover:opacity-100 transition-opacity"
          style={{
            fontFamily: 'var(--font-poppins)',
          }}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Process
        </Link>

        {/* Header */}
        <div className="mb-12 sm:mb-16 md:mb-20 lg:mb-24 reveal">
          <div className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[12rem] font-thin opacity-10 serif italic mb-6 sm:mb-8">
            {process.number}
          </div>
          <h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-4 sm:mb-6 leading-tight"
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontWeight: 600,
            }}
          >
            {process.title}
          </h1>
          <p 
            className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed"
            style={{
              fontFamily: 'var(--font-poppins)',
              fontWeight: 300,
            }}
          >
            {process.subtitle}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 sm:gap-16 md:gap-20 lg:gap-24">
          {/* What's Included Section */}
          <div className="lg:col-span-2 reveal">
            <h2 
              className="text-2xl sm:text-3xl md:text-4xl mb-8 sm:mb-10 md:mb-12"
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontWeight: 600,
              }}
            >
              What's included:
            </h2>
            <ul className="space-y-4 sm:space-y-5 md:space-y-6">
              {process.included.map((item, index) => (
                <li 
                  key={index}
                  className="flex items-start gap-4 text-base sm:text-lg md:text-xl leading-relaxed"
                  style={{
                    fontFamily: 'var(--font-poppins)',
                    fontWeight: 300,
                    color: '#4B5563',
                  }}
                >
                  <span className="text-gray-400 mt-2 flex-shrink-0">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Ideal For Section */}
          <div className="lg:col-span-1 reveal">
            <div className="sticky top-24">
              <h2 
                className="text-2xl sm:text-3xl md:text-4xl mb-6 sm:mb-8 md:mb-10"
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontWeight: 600,
                }}
              >
                Ideal for:
              </h2>
              <p 
                className="text-base sm:text-lg md:text-xl leading-relaxed"
                style={{
                  fontFamily: 'var(--font-poppins)',
                  fontWeight: 300,
                  color: '#4B5563',
                }}
              >
                {process.idealFor}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation to Other Processes */}
        <div className="mt-20 sm:mt-24 md:mt-32 lg:mt-40 pt-12 sm:pt-16 md:pt-20 border-t border-gray-200 reveal">
          <h3 
            className="text-2xl sm:text-3xl md:text-4xl mb-8 sm:mb-10 md:mb-12"
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontWeight: 600,
            }}
          >
            Explore Other Services
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {processes
              .filter((p) => p.slug !== process.slug)
              .slice(0, 3)
              .map((relatedProcess) => (
                <Link
                  key={relatedProcess.slug}
                  href={`/process/${relatedProcess.slug}`}
                  className="group block p-6 sm:p-8 border border-gray-200 hover:border-gray-900 transition-colors"
                >
                  <div className="text-3xl sm:text-4xl font-thin opacity-10 serif italic mb-4 sm:mb-6 group-hover:opacity-20 transition-opacity">
                    {relatedProcess.number}
                  </div>
                  <h4 className="text-sm sm:text-base uppercase tracking-[0.3em] mb-3 sm:mb-4 font-medium">
                    {relatedProcess.title}
                  </h4>
                  <p 
                    className="text-sm sm:text-base leading-relaxed text-gray-600 group-hover:text-gray-900 transition-colors"
                    style={{
                      fontFamily: 'var(--font-poppins)',
                      fontWeight: 300,
                    }}
                  >
                    {relatedProcess.description}
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </main>
  )
}

