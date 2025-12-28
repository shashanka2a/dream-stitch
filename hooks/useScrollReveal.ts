'use client'

import { useEffect } from 'react'

export function useScrollReveal() {
  useEffect(() => {
    // Scroll Reveal Animation
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active')
          }
        })
      },
      { threshold: 0.15 }
    )

    const revealElements = document.querySelectorAll('.reveal')
    revealElements.forEach(el => revealObserver.observe(el))

    // Smooth Parallax for Images
    const handleScroll = () => {
      const images = document.querySelectorAll('.stagger-img')
      images.forEach(img => {
        const speed = 0.05
        const rect = img.getBoundingClientRect()
        const visible = rect.top < window.innerHeight && rect.bottom > 0
        if (visible) {
          const htmlImg = img as HTMLElement
          const yPos = (window.innerHeight - rect.top) * speed
          htmlImg.style.transform = `translate3d(0, ${yPos}px, 0) scale(1.1)`
        }
      })
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      revealElements.forEach(el => revealObserver.unobserve(el))
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
}






