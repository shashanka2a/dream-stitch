'use client'

import { useEffect } from 'react'

export function ScrollProgress() {
  useEffect(() => {
    const scrollProgress = document.getElementById('scroll-progress')
    if (!scrollProgress) return

    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = (winScroll / height) * 100
      scrollProgress.style.width = scrolled + '%'
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return <div id="scroll-progress" />
}





