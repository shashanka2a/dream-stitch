'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, use } from 'react'
import { processes } from '@/data/processes'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { Footer } from '@/components/Footer'
import { ProcessIcon } from '@/components/ProcessIcons'

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
    'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=1000&fit=crop',
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=800&fit=crop',
    'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800&h=800&fit=crop',
    'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop',
  ]

  const otherProcesses = processes.filter((p) => p.slug !== process.slug)

  return (
    <main className="bg-white min-h-screen">
      {/* Back to Home Button - Below Navigation */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pt-24 md:pt-28 lg:pt-32 pb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm md:text-base opacity-60 hover:opacity-100 transition-opacity"
          style={{
            fontFamily: 'var(--font-poppins)',
          }}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-8 md:py-12 lg:py-16 lg:min-h-screen flex flex-col lg:flex-row items-center gap-16">
        
        {/* Content */}
        <div className="relative z-10 w-full lg:w-1/2 reveal">
          <h1 
            className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight mb-8 pb-4 md:pb-6 overflow-hidden"
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontWeight: 600,
              color: '#1A1A1A',
              whiteSpace: 'nowrap',
            }}
          >
            {process.title}
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

          <div className="space-y-12 mb-12">
            <div>
              <h3 
                className="text-sm md:text-base font-bold uppercase mb-6 opacity-60"
                style={{
                  fontFamily: 'var(--font-inter)',
                  letterSpacing: '0.3em',
                  fontWeight: 600,
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
                className="text-sm md:text-base font-bold uppercase mb-6 opacity-60"
                style={{
                  fontFamily: 'var(--font-inter)',
                  letterSpacing: '0.3em',
                  fontWeight: 600,
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

        {/* Google Photos Style Image Grid */}
        <div className="w-full lg:w-1/2 reveal">
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-5">
            {processImages.slice(0, 4).map((image, index) => (
              <div 
                key={index}
                className={`relative overflow-hidden bg-gray-100 group cursor-pointer ${
                  index === 0 ? 'aspect-[4/5]' : 
                  index === 1 ? 'aspect-square' : 
                  index === 2 ? 'aspect-square' : 
                  'aspect-[4/3]'
                }`}
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
      </section>

      {/* Expanded Other Services Section */}
      <section className="bg-white py-16 md:py-24 lg:py-32 border-t border-gray-100">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
          <h2 
            className="text-4xl md:text-6xl font-bold mb-12 md:mb-20"
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
                className={`group p-6 md:p-8 lg:p-12 flex flex-col min-h-[280px] md:min-h-[320px] border border-gray-200 hover:border-gray-900 transition-all duration-500 hover:bg-white hover:-translate-y-1 ${index === 4 ? 'lg:col-span-2' : ''}`}
              >
                <div 
                  className="w-[34px] h-[34px] md:w-[39px] md:h-[39px] mb-12 pointer-events-none"
                  style={{ opacity: 0.08 }}
                >
                  <ProcessIcon slug={relatedProcess.slug} />
                </div>
                <div className={index === 4 ? 'max-w-md' : ''}>
                  <h4 
                    className="text-sm font-semibold uppercase mb-6 leading-tight"
                    style={{
                      fontFamily: 'var(--font-inter)',
                      letterSpacing: '0.3em',
                      color: '#1A1A1A',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
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

      {/* Footer */}
      <Footer />
    </main>
  )
}
