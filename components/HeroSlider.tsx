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
            backgroundImage: `linear-gradient(rgba(0,0,0,0.15), rgba(0,0,0,0.15)), url(${slide})`,
          }}
        />
      ))}
      
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-6xl md:text-9xl font-light mb-8 reveal active hero-text-shadow leading-tight overflow-hidden">
          <span className="block translate-y-full transition-transform duration-1000 delay-300">From Idea</span>
          <span className="block italic translate-y-full transition-transform duration-1000 delay-500">to Market.</span>
        </h1>
        <p 
          className="text-[10px] md:text-xs tracking-[0.5em] uppercase font-light max-w-2xl opacity-90 reveal active hero-text-shadow mt-4" 
          style={{ transitionDelay: '800ms' }}
        >
          End-to-end fashion design, production, and brand support
        </p>
        <div className="mt-16 reveal active" style={{ transitionDelay: '1000ms' }}>
            <a 
            href="#contact" 
            className="px-12 py-4 border border-white text-[10px] uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all"
          >
            Start Your Journey
          </a>
        </div>
      </div>
    </header>
  )
}


