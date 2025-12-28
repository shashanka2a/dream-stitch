'use client'

import Link from 'next/link'
import Image from 'next/image'
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

  // Default images if not provided
  const processImages = process.images || [
    'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800',
  ]

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

        {/* Main Content Grid - Left: Text, Right: Images */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 sm:gap-20 md:gap-24 lg:gap-28 mb-16 sm:mb-20 md:mb-24">
          {/* Left Column - Text Content */}
          <div className="reveal">
            {/* Section Number */}
            <div 
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-medium opacity-20 mb-6 sm:mb-8"
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontWeight: 500,
              }}
            >
              {process.number}
            </div>
            
            {/* Title */}
            <h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 sm:mb-6 leading-tight"
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontWeight: 600,
                color: '#1a1a1a',
              }}
            >
              {process.title}
            </h1>
            
            {/* Description */}
            <p 
              className="text-sm sm:text-base md:text-lg text-gray-900 leading-relaxed mb-8 sm:mb-10 md:mb-12"
              style={{
                fontFamily: 'var(--font-poppins)',
                fontWeight: 400,
                color: '#1a1a1a',
              }}
            >
              {process.description}
            </p>

            {/* What's Included Section */}
            <div className="mb-8 sm:mb-10 md:mb-12">
              <h2 
                className="text-xs sm:text-sm md:text-base uppercase tracking-[0.15em] mb-4 sm:mb-6"
                style={{
                  fontFamily: 'var(--font-poppins)',
                  fontWeight: 400,
                  color: '#1a1a1a',
                  letterSpacing: '0.15em',
                }}
              >
                What's included:
              </h2>
              <ul className="space-y-2 sm:space-y-3">
                {process.included.map((item, index) => (
                  <li 
                    key={index}
                    className="text-sm sm:text-base md:text-lg leading-relaxed"
                    style={{
                      fontFamily: 'var(--font-poppins)',
                      fontWeight: 400,
                      color: '#1a1a1a',
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Ideal For Section */}
            <div>
              <h2 
                className="text-xs sm:text-sm md:text-base uppercase tracking-[0.15em] mb-3 sm:mb-4"
                style={{
                  fontFamily: 'var(--font-poppins)',
                  fontWeight: 400,
                  color: '#1a1a1a',
                  letterSpacing: '0.15em',
                }}
              >
                Ideal for:
              </h2>
              <p 
                className="text-sm sm:text-base md:text-lg leading-relaxed"
                style={{
                  fontFamily: 'var(--font-poppins)',
                  fontWeight: 400,
                  color: '#1a1a1a',
                }}
              >
                {process.idealFor}
              </p>
            </div>
          </div>

          {/* Right Column - Image Grid */}
          <div className="reveal flex items-start justify-center lg:justify-start">
            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-5 w-full max-w-md lg:max-w-full">
              {processImages.slice(0, 4).map((image, index) => (
                <div 
                  key={index}
                  className="relative aspect-square overflow-hidden bg-gray-100 group cursor-pointer"
                >
                  <Image
                    src={image}
                    alt={`${process.title} - Image ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 50vw, 40vw"
                  />
                </div>
              ))}
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

