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
    // Hero Text Reveal
    const heroSpans = document.querySelectorAll('h1 span')
    heroSpans.forEach(span => {
      const htmlSpan = span as HTMLElement
      htmlSpan.style.transform = 'translateY(0)'
    })
  }, [])

  return (
    <header className="slider-container">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? 'active' : ''}`}
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.4)), url(${slide})`,
          }}
        />
      ))}
      
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 md:px-8">
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 reveal active hero-text-shadow">
          <h1 
            className="overflow-hidden"
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontWeight: 600,
              fontSize: 'clamp(48px, 8vw, 128px)',
              lineHeight: 1,
              letterSpacing: '0%',
            }}
          >
            <span className="inline-block translate-y-full transition-transform duration-1000 delay-300">From Idea</span>
            <span className="inline-block italic translate-y-full transition-transform duration-1000 delay-500 ml-2 md:ml-3">to Market.</span>
          </h1>
          <p 
            className="text-[9px] sm:text-[10px] md:text-xs tracking-[0.3em] md:tracking-[0.5em] uppercase font-light opacity-90" 
            style={{ transitionDelay: '800ms' }}
          >
            End-to-end fashion design, production, and brand support
          </p>
        </div>
        <div className="mt-8 md:mt-16 reveal active" style={{ transitionDelay: '1000ms' }}>
            <a 
            href="#contact" 
            className="px-8 md:px-12 py-3 md:py-4 border border-white text-[9px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] hover:bg-white hover:text-black transition-all"
          >
            Start Your Journey
          </a>
        </div>
      </div>
    </header>
  )
}


