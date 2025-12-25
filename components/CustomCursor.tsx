'use client'

import { useEffect, useRef } from 'react'

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const followerRef = useRef<HTMLDivElement>(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const cursorPosRef = useRef({ x: 0, y: 0 })
  const followerPosRef = useRef({ x: 0, y: 0 })
  const isHoveringRef = useRef(false)
  const animationFrameRef = useRef<number | null>(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const follower = followerRef.current
    if (!cursor || !follower) return

    let isAnimating = true

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX
      mouseRef.current.y = e.clientY
    }

    const animate = () => {
      if (!isAnimating) return

      const { x: mouseX, y: mouseY } = mouseRef.current
      const cursorPos = cursorPosRef.current
      const followerPos = followerPosRef.current

      // Smooth cursor position (immediate but with easing for follower)
      cursorPos.x = mouseX - 6
      cursorPos.y = mouseY - 6
      cursor.style.transform = `translate3d(${cursorPos.x}px, ${cursorPos.y}px, 0) scale(${isHoveringRef.current ? 0.5 : 1})`

      // Smooth follower position with easing
      const ease = 0.15
      followerPos.x += (mouseX - 20 - followerPos.x) * ease
      followerPos.y += (mouseY - 20 - followerPos.y) * ease
      follower.style.transform = `translate3d(${followerPos.x}px, ${followerPos.y}px, 0) scale(${isHoveringRef.current ? 1.5 : 1})`

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    // Start animation loop
    animate()

    // Throttled mouse move handler
    document.addEventListener('mousemove', handleMouseMove, { passive: true })

    // Cursor interactions
    const handleMouseEnter = () => {
      isHoveringRef.current = true
      if (follower) {
        follower.style.background = 'rgba(0,0,0,0.02)'
      }
    }

    const handleMouseLeave = () => {
      isHoveringRef.current = false
      if (follower) {
        follower.style.background = 'none'
      }
    }

    const links = document.querySelectorAll('a, button, .process-card')
    links.forEach(link => {
      link.addEventListener('mouseenter', handleMouseEnter)
      link.addEventListener('mouseleave', handleMouseLeave)
    })

    return () => {
      isAnimating = false
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
      document.removeEventListener('mousemove', handleMouseMove)
      links.forEach(link => {
        link.removeEventListener('mouseenter', handleMouseEnter)
        link.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [])

  return (
    <>
      <div ref={cursorRef} id="cursor" />
      <div ref={followerRef} id="cursor-follower" />
    </>
  )
}


