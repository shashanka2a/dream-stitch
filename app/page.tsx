'use client'

import { useEffect } from 'react'
import { HeroSlider } from '@/components/HeroSlider'
import { PartnersSection } from '@/components/PartnersSection'
import { ExpertiseSection } from '@/components/ExpertiseSection'
import { StatsSection } from '@/components/StatsSection'
import { SolutionsSection } from '@/components/SolutionsSection'
import { Footer } from '@/components/Footer'
import { useScrollReveal } from '@/hooks/useScrollReveal'

export default function Home() {
  useScrollReveal()

  useEffect(() => {
    // Smooth Scroll
    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest('a[href^="#"]')
      if (anchor) {
        e.preventDefault()
        const targetId = anchor.getAttribute('href')
        if (targetId === '#') return
        const targetElement = document.querySelector(targetId || '')
        if (targetElement) {
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.scrollY - 60,
            behavior: 'smooth'
          })
        }
      }
    }

    document.addEventListener('click', handleSmoothScroll)
    return () => document.removeEventListener('click', handleSmoothScroll)
  }, [])

  return (
    <main>
      <HeroSlider />
      <PartnersSection />
      <ExpertiseSection />
      <StatsSection />
      <SolutionsSection />
      <Footer />
    </main>
  )
}

