'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

const slides = [
  'https://images.unsplash.com/photo-1558603668-6570496b66f8?auto=format&fit=crop&q=80&w=2000',
  'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=2000',
  'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=2000',
]

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    // Hero Text Reveal - Trigger animation after a brief delay
    const timer = setTimeout(() => {
      const heroSpans = document.querySelectorAll('h1 span')
      heroSpans.forEach(span => {
        const htmlSpan = span as HTMLElement
        htmlSpan.style.transform = 'translateY(0)'
      })
    }, 50) // Small delay to ensure DOM is ready
    
    return () => clearTimeout(timer)
  }, [])

  return (
    <header className="slider-container">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? 'active' : ''}`}
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.6)), url(${slide})`,
          }}
        />
      ))}
      
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 md:px-8 py-6 sm:py-8 md:py-12">
        <div className="flex flex-col items-center justify-center gap-2 sm:gap-3 md:gap-4 reveal active hero-text-shadow w-full max-w-[95%] md:max-w-none">
          <h1 
            className="overflow-hidden w-full"
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontWeight: 600,
              fontSize: 'clamp(32px, 8vw, 128px)',
              lineHeight: 1.1,
              letterSpacing: '0%',
            }}
          >
            <span className="inline-block translate-y-full transition-transform duration-[600ms] delay-100 ease-out">From Idea</span>
            <span className="inline-block italic translate-y-full transition-transform duration-[600ms] delay-200 ease-out ml-1 sm:ml-2 md:ml-3">to Market.</span>
          </h1>
          <p 
            className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.3em] lg:tracking-[0.5em] uppercase text-white px-2" 
            style={{ 
              transitionDelay: '400ms',
              fontFamily: 'var(--font-poppins)',
              fontWeight: 400,
            }}
          >
            <span className="hidden sm:inline">End-to-end fashion design, production, and brand support</span>
            <span className="sm:hidden">End-to-end fashion design & production</span>
          </p>
        </div>
        <div className="mt-4 sm:mt-6 md:mt-8 lg:mt-12 xl:mt-16 reveal active" style={{ transitionDelay: '500ms' }}>
            <a 
            href="#contact" 
            className="px-5 sm:px-6 md:px-8 lg:px-12 py-2 sm:py-2.5 md:py-3 lg:py-4 border border-white text-[8px] sm:text-[9px] md:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.3em] hover:bg-white hover:text-black transition-all whitespace-nowrap"
          >
            Start Your Journey
          </a>
        </div>
      </div>
    </header>
  )
}


