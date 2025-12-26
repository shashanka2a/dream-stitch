'use client'

import { useEffect, useState } from 'react'

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
      className="fixed top-0 w-full z-50 mix-blend-difference text-white px-8 py-10 flex justify-between items-center"
    >
      <div className="text-xl font-light tracking-[0.2em] uppercase transition-all duration-500 hover:tracking-[0.3em]">
        Dream Stitch
      </div>
      <div className="hidden md:flex space-x-12 text-[10px] uppercase tracking-[0.3em] font-light">
        <a href="#about" className="nav-link">Partners</a>
        <a href="#expertise" className="nav-link">Expertise</a>
        <a href="#solutions" className="nav-link">Solutions</a>
        <a href="#contact" className="nav-link">Contact</a>
      </div>
      <div className="md:hidden">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M4 8h16M4 16h16" />
        </svg>
      </div>
    </nav>
  )
}



