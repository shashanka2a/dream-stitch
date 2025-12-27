'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const testimonials = [
  {
    name: 'Anoki',
    role: 'Founder of Mirakhi',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    text: 'DreamStich transformed our vision into reality. Their attention to detail, from design to production, exceeded our expectations. The low MOQ made it possible for us to launch our first collection without breaking the bank.',
  },
  {
    name: 'Sarah Chen',
    role: 'Creative Director at Luxe Apparel',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200',
    text: 'Working with DreamStich has been a game-changer. Their end-to-end support, including photoshoots and marketing, helped us launch our brand successfully. Highly recommend their services.',
  },
  {
    name: 'Michael Rodriguez',
    role: 'Founder of Urban Threads',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    text: 'The team at DreamStich understood our brand from day one. Their flexible approach allowed us to scale at our own pace, and the quality has been consistently outstanding.',
  },
  {
    name: 'Emma Thompson',
    role: 'Designer at Minimalist Studio',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
    text: 'From initial sketches to final production, DreamStich guided us through every step. Their expertise in fabric sourcing and sample development saved us countless hours and headaches.',
  },
  {
    name: 'James Park',
    role: 'CEO of Streetwear Co.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200',
    text: 'The low minimum order quantities were perfect for our startup. We could test the market without huge upfront costs, and the quality matched our expectations every time.',
  },
  {
    name: 'Lisa Anderson',
    role: 'Founder of Sustainable Fashion Co.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200',
    text: 'DreamStich\'s transparent processes and ethical sourcing aligned perfectly with our brand values. They helped us create beautiful, sustainable fashion without compromising on quality.',
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const getItemsPerView = () => isMobile ? 1 : 2

  const nextTestimonial = () => {
    setCurrentIndex((prev) => {
      const itemsPerView = getItemsPerView()
      // Calculate how many positions we can move forward
      // If showing 2 items, we can start at positions 0, 1, 2, 3, 4 (for 6 testimonials)
      const maxIndex = Math.max(0, testimonials.length - itemsPerView)
      if (prev >= maxIndex) {
        return 0 // Wrap to beginning
      }
      return prev + 1
    })
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => {
      const itemsPerView = getItemsPerView()
      const maxIndex = Math.max(0, testimonials.length - itemsPerView)
      if (prev <= 0) {
        return maxIndex // Wrap to end
      }
      return prev - 1
    })
  }

  const itemsPerView = getItemsPerView()
  // Get visible testimonials, wrapping around if needed
  const getVisibleTestimonials = () => {
    const visible = []
    for (let i = 0; i < itemsPerView; i++) {
      const index = (currentIndex + i) % testimonials.length
      visible.push(testimonials[index])
    }
    return visible
  }
  const visibleTestimonials = getVisibleTestimonials()

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-[120px] px-4 sm:px-6 md:px-8 bg-[#F8F7F4]">
      <div className="max-w-7xl mx-auto">
        <div className="relative reveal">
          <div className="mb-8 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24 flex items-start gap-2 sm:gap-4 md:gap-6 lg:gap-8">
            <div className="hidden md:block flex-shrink-0 w-5 h-5 md:w-6 md:h-6"></div>
            <div className="flex-1 text-center md:text-left">
              <span className="uppercase tracking-[0.3em] text-[9px] sm:text-[10px] opacity-40 block mb-3 sm:mb-4 md:mb-6">REVIEWS</span>
              <h2 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontWeight: 600,
                }}
              >
                Testimonials
              </h2>
            </div>
          </div>
          
          {/* Mobile: Horizontal Scroll */}
          <div className="md:hidden overflow-x-auto pb-4 -mx-4 px-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <div className="flex gap-4" style={{ width: 'max-content' }}>
              {testimonials.map((testimonial, idx) => (
                <div 
                  key={`${idx}-${testimonial.name}`} 
                  className="bg-white p-6 rounded-lg border border-black/5 flex-shrink-0"
                  style={{
                    boxShadow: '0px 25px 50px -12px rgba(0, 0, 0, 0.25)',
                    width: 'calc(100vw - 3rem)',
                    maxWidth: '400px',
                  }}
                >
                  <div className="flex flex-col items-start mb-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden mb-3">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-2 font-light">
                      {testimonial.role}
                    </p>
                    <h4 className="text-base font-semibold text-gray-900">{testimonial.name}</h4>
                  </div>
                  <p 
                    className="text-sm leading-relaxed mb-4 text-left"
                    style={{
                      fontFamily: 'var(--font-poppins)',
                      fontWeight: 400,
                      color: '#6B7280',
                    }}
                  >
                    {testimonial.text}
                  </p>
                  <div className="flex justify-start gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Mobile: Scroll Indicator Dots */}
          <div className="md:hidden flex justify-center gap-2 mt-4">
            <div className="w-2 h-2 rounded-full bg-gray-400"></div>
            <div className="w-2 h-2 rounded-full bg-gray-400"></div>
            <div className="w-2 h-2 rounded-full bg-gray-400"></div>
          </div>

          {/* Desktop: Arrow Navigation */}
          <div className="hidden md:flex items-center gap-2 sm:gap-4 md:gap-6 lg:gap-8">
            <button
              onClick={prevTestimonial}
              className="flex-shrink-0 text-gray-400 hover:text-black transition-colors p-2 -ml-2 md:ml-0"
              aria-label="Previous testimonial"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
              {visibleTestimonials.map((testimonial, idx) => {
                const actualIndex = (currentIndex + idx) % testimonials.length
                return (
                <div 
                  key={`${actualIndex}-${testimonial.name}`} 
                  className="bg-white p-6 md:p-8 rounded-lg border border-black/5"
                  style={{
                    boxShadow: '0px 25px 50px -12px rgba(0, 0, 0, 0.25)',
                  }}
                >
                  <div className="flex flex-col items-start mb-4 md:mb-6">
                    <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden mb-3 md:mb-4">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-gray-500 mb-2 font-light">
                      {testimonial.role}
                    </p>
                    <h4 className="text-base md:text-lg font-semibold text-gray-900">{testimonial.name}</h4>
                  </div>
                  <p 
                    className="text-sm md:text-base leading-relaxed mb-4 md:mb-6 text-left"
                    style={{
                      fontFamily: 'var(--font-poppins)',
                      fontWeight: 400,
                      color: '#6B7280',
                    }}
                  >
                    {testimonial.text}
                  </p>
                  <div className="flex justify-start gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 md:w-5 md:h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                )
              })}
            </div>

            <button
              onClick={nextTestimonial}
              className="flex-shrink-0 text-gray-400 hover:text-black transition-colors p-2 -mr-2 md:mr-0"
              aria-label="Next testimonial"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

