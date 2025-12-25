'use client'

import { useEffect } from 'react'

export function CustomCursor() {
  useEffect(() => {
    const cursor = document.getElementById('cursor')
    const follower = document.getElementById('cursor-follower')
    if (!cursor || !follower) return

    let mouseX = 0, mouseY = 0
    let followerX = 0, followerY = 0

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      cursor.style.transform = `translate3d(${mouseX - 6}px, ${mouseY - 6}px, 0)`
    }

    const animateFollower = () => {
      followerX += (mouseX - followerX - 20) * 0.1
      followerY += (mouseY - followerY - 20) * 0.1
      follower.style.transform = `translate3d(${followerX}px, ${followerY}px, 0)`
      requestAnimationFrame(animateFollower)
    }

    document.addEventListener('mousemove', handleMouseMove)
    animateFollower()

    // Cursor interactions
    const links = document.querySelectorAll('a, button, .process-card')
    links.forEach(link => {
      link.addEventListener('mouseenter', () => {
        follower.style.transform += ' scale(1.5)'
        follower.style.background = 'rgba(0,0,0,0.02)'
        cursor.style.transform += ' scale(0.5)'
      })
      link.addEventListener('mouseleave', () => {
        follower.style.background = 'none'
        const currentTransform = cursor.style.transform
        cursor.style.transform = currentTransform.replace(' scale(0.5)', '')
      })
    })

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <>
      <div id="cursor" />
      <div id="cursor-follower" />
    </>
  )
}


