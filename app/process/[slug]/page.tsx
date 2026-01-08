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
    'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800',
  ]

  return (
    <>
      <main className="bg-white min-h-screen">
        <div className="max-w-6xl mx-auto px-5 sm:px-7 md:px-10 lg:px-14 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-[120px]">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 mb-8 sm:mb-12 text-sm md:text-base opacity-60 hover:opacity-100 transition-opacity"
          style={{
            fontFamily: 'var(--font-poppins)',
          }}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>

        {/* Main Content */}
        <div className="mb-16 sm:mb-20 md:mb-24">
          <div className="reveal">
            {/* Title */}
            <h1 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight"
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontWeight: 600,
                color: '#1A1A1A',
              }}
            >
              {process.title}
            </h1>

            {/* Content row: description on left, images right-aligned just under title */}
            <div className="mt-8 sm:mt-10 lg:mt-12 flex flex-col lg:flex-row lg:items-stretch gap-12 lg:gap-16">
              {/* Left column - description + sections */}
              <div className="flex-1 flex flex-col">
                <p 
                  className="text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 max-w-[580px] line-clamp-2"
                  style={{
                    fontFamily: 'var(--font-poppins)',
                    fontWeight: 400,
                    color: '#6B7280',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
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
                      fontWeight: 600,
                      color: '#1a1a1a',
                      letterSpacing: '0.15em',
                    }}
                  >
                    What's Included
                  </h2>
                  <ul className="space-y-2 sm:space-y-3">
                    {process.included.map((item, index) => (
                      <li 
                        key={index}
                        className="text-sm sm:text-base md:text-lg leading-relaxed"
                        style={{
                          fontFamily: 'var(--font-poppins)',
                          fontWeight: 400,
                          color: '#6B7280',
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
                      fontWeight: 600,
                      color: '#1a1a1a',
                      letterSpacing: '0.15em',
                    }}
                  >
                    Ideal For
                  </h2>
                  <p 
                    className="text-sm sm:text-base md:text-lg leading-relaxed"
                    style={{
                      fontFamily: 'var(--font-poppins)',
                      fontWeight: 400,
                      color: '#6B7280',
                    }}
                  >
                    {process.idealFor}
                  </p>
                </div>
              </div>

              {/* Right column - overlapping image grid, right aligned under title */}
              <div className="w-full lg:w-auto lg:flex-shrink-0 lg:ml-auto flex self-stretch">
                <div className="reveal w-full h-full">
                  <div className="relative w-full lg:w-[500px] xl:w-[550px] h-full" style={{ minHeight: '600px' }}>
                    {/* Image 1 - Top Left (Design Sketching) - Overlaps downward */}
                    <div 
                      className="absolute top-0 left-0 w-[48%] h-[48%] overflow-hidden bg-gray-100 group cursor-pointer z-20"
                      style={{
                        boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                        transform: 'translateY(8px)',
                      }}
                    >
                      <Image
                        src={processImages[0] || 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=400&h=400'}
                        alt={`${process.title} - Design Sketching`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 40vw, 32vw"
                      />
                    </div>
                    
                    {/* Image 2 - Top Right (Fabric Sourcing) - Standard position */}
                    <div 
                      className="absolute top-0 right-0 w-[48%] h-[48%] overflow-hidden bg-gray-100 group cursor-pointer z-10"
                      style={{
                        boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                      }}
                    >
                      <Image
                        src={processImages[1] || 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=400&h=400'}
                        alt={`${process.title} - Fabric Sourcing`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 40vw, 32vw"
                      />
                    </div>
                    
                    {/* Image 3 - Bottom Left (Manufacturing) - Overlaps upward with top-left */}
                    <div 
                      className="absolute bottom-0 left-0 w-[48%] h-[48%] overflow-hidden bg-gray-100 group cursor-pointer z-30"
                      style={{
                        boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                        transform: 'translateY(-8px)',
                      }}
                    >
                      <Image
                        src={processImages[2] || 'https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&q=80&w=400&h=400'}
                        alt={`${process.title} - Manufacturing`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 40vw, 32vw"
                      />
                    </div>
                    
                    {/* Image 4 - Bottom Right (Photoshoot) - Slight overlap with bottom-left */}
                    <div 
                      className="absolute bottom-0 right-0 w-[48%] h-[48%] overflow-hidden bg-gray-100 group cursor-pointer z-20"
                      style={{
                        boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                        transform: 'translateX(-4px)',
                      }}
                    >
                      <Image
                        src={processImages[3] || 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=400&h=400'}
                        alt={`${process.title} - Photoshoot`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 40vw, 32vw"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation to Other Processes */}
        <div className="mt-20 sm:mt-24 md:mt-32 lg:mt-40 pt-12 sm:pt-16 md:pt-20 border-t border-gray-200 reveal">
          <h3 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-12 sm:mb-16 md:mb-20"
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontWeight: 600,
              color: '#1A1A1A',
            }}
          >
            Explore Other Services
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-6">
            {processes
              .filter((p) => p.slug !== process.slug)
              .map((relatedProcess) => (
                <Link
                  key={relatedProcess.slug}
                  href={`/process/${relatedProcess.slug}`}
                  className="group block relative border border-[#E5E7EB] hover:border-gray-900 transition-colors overflow-hidden"
                  style={{
                    width: '100%',
                    maxWidth: '456px',
                    minHeight: '242px',
                    padding: '33px',
                  }}
                >
                  {/* Icon - Replace number with icon */}
                  <div 
                    className="absolute opacity-10 group-hover:opacity-20 transition-opacity"
                    style={{
                      left: '33px',
                      top: '33px',
                      width: '40px',
                      height: '40px',
                    }}
                  >
                    <ProcessIcon slug={relatedProcess.slug} />
                  </div>
                  
                  {/* Title - Inter, 16px, uppercase, letter-spacing 4.80px */}
                  <h4 
                    className="uppercase mb-3"
                    style={{
                      marginTop: '64px',
                      fontFamily: 'var(--font-inter)',
                      fontSize: '16px',
                      fontWeight: 500,
                      lineHeight: '24px',
                      letterSpacing: '4.80px',
                      color: '#1A1A1A',
                    }}
                  >
                    {relatedProcess.title}
                  </h4>
                  
                  {/* Description - Poppins, 16px, font-weight 300, color #4B5563 */}
                  <p 
                    className="leading-relaxed"
                    style={{
                      fontFamily: 'var(--font-poppins)',
                      fontSize: '16px',
                      fontWeight: 300,
                      lineHeight: '24px',
                      color: '#4B5563',
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
      <Footer />
    </>
  )
}

