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

  const otherProcesses = processes.filter((p) => p.slug !== process.slug)

  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-24 lg:min-h-screen flex flex-col lg:flex-row items-center gap-16">
        
        {/* Ghost Number */}
        <div 
          className="absolute top-10 lg:top-20 left-6 lg:left-20 text-[120px] md:text-[200px] lg:text-[280px] leading-none pointer-events-none"
          style={{
            fontFamily: 'var(--font-playfair)',
            fontStyle: 'italic',
            opacity: 0.08,
            color: '#1A1A1A',
          }}
        >
          {process.number}
        </div>

        {/* Content */}
        <div className="relative z-10 w-full lg:w-1/2 reveal">
          <h1 
            className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight mb-8"
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontWeight: 600,
              color: '#1A1A1A',
            }}
          >
            {process.title.includes(' & ') ? (
              <>
                {process.title.split(' & ')[0]} & <br className="hidden md:block" />
                {process.title.split(' & ')[1]}
              </>
            ) : (
              process.title
            )}
          </h1>
          
          <p 
            className="text-gray-500 text-base md:text-lg mb-12 max-w-lg leading-relaxed"
            style={{
              fontFamily: 'var(--font-poppins)',
              fontWeight: 300,
            }}
          >
            {process.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 
                className="text-[11px] font-semibold uppercase mb-6 opacity-40"
                style={{
                  fontFamily: 'var(--font-inter)',
                  letterSpacing: '0.3em',
                }}
              >
                What's Included
              </h3>
              <ul className="space-y-3 text-gray-500 text-sm" style={{ fontFamily: 'var(--font-poppins)', fontWeight: 300 }}>
                {process.included.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 
                className="text-[11px] font-semibold uppercase mb-6 opacity-40"
                style={{
                  fontFamily: 'var(--font-inter)',
                  letterSpacing: '0.3em',
                }}
              >
                Ideal For
              </h3>
              <p 
                className="text-gray-500 text-sm leading-relaxed"
                style={{
                  fontFamily: 'var(--font-poppins)',
                  fontWeight: 300,
                }}
              >
                {process.idealFor}
              </p>
            </div>
          </div>
        </div>

        {/* Responsive Image Gallery */}
        <div className="relative w-full lg:w-1/2 h-[450px] md:h-[600px] reveal">
          {/* Background Image (Large) */}
          <div className="absolute top-0 right-0 w-[70%] lg:w-[350px] aspect-[3/4] overflow-hidden shadow-2xl lg:rotate-[3deg]">
            <Image
              src={processImages[0] || processImages[1]}
              alt={`${process.title} - Image 1`}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 70vw, 350px"
            />
          </div>
          {/* Mid Image (Horizontal) */}
          <div className="absolute top-1/4 left-0 w-[60%] lg:w-[320px] aspect-video overflow-hidden shadow-2xl border-4 border-white lg:rotate-[-2deg]">
            <Image
              src={processImages[1] || processImages[2]}
              alt={`${process.title} - Image 2`}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 60vw, 320px"
            />
          </div>
          {/* Small Image (Detail) */}
          <div className="absolute bottom-0 right-1/4 w-[120px] md:w-[180px] aspect-square overflow-hidden shadow-2xl border-4 md:border-8 border-white lg:rotate-[-1deg]">
            <Image
              src={processImages[2] || processImages[3]}
              alt={`${process.title} - Image 3`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 120px, 180px"
            />
          </div>
        </div>
      </section>

      {/* Expanded Other Services Section */}
      <section className="bg-white py-24 md:py-32 border-t border-gray-100">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
          <h2 
            className="text-4xl md:text-6xl font-bold mb-20"
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontWeight: 700,
              color: '#1A1A1A',
            }}
          >
            Explore Other Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {otherProcesses.slice(0, 5).map((relatedProcess, index) => (
              <Link
                key={relatedProcess.slug}
                href={`/process/${relatedProcess.slug}`}
                className={`group p-8 md:p-12 flex flex-col justify-between min-h-[320px] border border-gray-200 hover:border-gray-900 transition-all duration-500 hover:bg-white hover:-translate-y-1 ${index === 4 ? 'lg:col-span-2' : ''}`}
              >
                <span 
                  className="text-5xl leading-none pointer-events-none"
                  style={{
                    fontFamily: 'var(--font-playfair)',
                    fontStyle: 'italic',
                    opacity: 0.08,
                    color: '#1A1A1A',
                  }}
                >
                  {relatedProcess.number}
                </span>
                <div className={index === 4 ? 'max-w-md' : ''}>
                  <h4 
                    className="text-sm font-semibold uppercase mb-4"
                    style={{
                      fontFamily: 'var(--font-inter)',
                      letterSpacing: '0.3em',
                      color: '#1A1A1A',
                    }}
                  >
                    {relatedProcess.title}
                  </h4>
                  <p 
                    className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-600 transition-colors"
                    style={{
                      fontFamily: 'var(--font-poppins)',
                      fontWeight: 300,
                    }}
                  >
                    {relatedProcess.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
