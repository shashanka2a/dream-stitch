'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const nav = document.getElementById('main-nav')
    if (!nav) return

    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true)
        nav.classList.add('scrolled')
        nav.classList.remove('mix-blend-difference')
      } else {
        setScrolled(false)
        nav.classList.remove('scrolled')
        nav.classList.add('mix-blend-difference')
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav 
      id="main-nav" 
      className="fixed top-0 w-full z-50 mix-blend-difference text-white px-3 sm:px-4 md:px-8 py-4 sm:py-6 md:py-10 flex justify-between items-center"
    >
      <div className="w-[120px] h-[28px] sm:w-[140px] sm:h-[32px] md:w-[180px] md:h-[40px] relative transition-opacity duration-500 hover:opacity-80">
        <Image
          src="/logo.svg"
          alt="DreamStich"
          fill
          className="object-contain"
          style={{ filter: scrolled ? 'brightness(0)' : 'brightness(0) invert(1)' }}
        />
      </div>
      <div className="hidden sm:flex space-x-6 md:space-x-8 lg:space-x-12 text-[9px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.3em] font-light">
        <a href="#about" className="nav-link whitespace-nowrap">Partners</a>
        <a href="#expertise" className="nav-link whitespace-nowrap">Expertise</a>
        <a href="#solutions" className="nav-link whitespace-nowrap">Solutions</a>
        <a href="#contact" className="nav-link whitespace-nowrap">Contact</a>
      </div>
      <div className="md:hidden">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M4 8h16M4 16h16" />
        </svg>
      </div>
    </nav>
  )
}



