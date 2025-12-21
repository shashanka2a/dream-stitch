'use client'

import { useEffect, useRef } from 'react'

const stats = [
  { value: 500, suffix: 'K+', label: 'Monthly Units', delay: '0ms' },
  { value: 50, suffix: '+', label: 'Global Partners', delay: '200ms' },
  { value: 12, suffix: '', label: 'Markets Served', delay: '400ms' },
]

export function StatsSection() {
  const countersRef = useRef<(HTMLSpanElement | null)[]>([])

  useEffect(() => {
    const animateNumbers = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const counter = entry.target as HTMLSpanElement
          const target = parseInt(counter.getAttribute('data-target') || '0')
          const duration = 2000
          const startTime = performance.now()

          const updateCount = (currentTime: number) => {
            const elapsed = currentTime - startTime
            const progress = Math.min(elapsed / duration, 1)
            const easeOutQuad = (t: number) => t * (2 - t)
            const currentCount = Math.floor(easeOutQuad(progress) * target)

            counter.innerText = currentCount.toString()

            if (progress < 1) {
              requestAnimationFrame(updateCount)
            } else {
              counter.innerText = target.toString()
            }
          }

          requestAnimationFrame(updateCount)
        }
      })
    }

    const numberObserver = new IntersectionObserver(animateNumbers, { threshold: 0.5 })
    countersRef.current.forEach(counter => {
      if (counter) numberObserver.observe(counter)
    })

    return () => {
      countersRef.current.forEach(counter => {
        if (counter) numberObserver.unobserve(counter)
      })
    }
  }, [])

  return (
    <section className="py-32 bg-[#efeeea] px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-16 text-center">
        {stats.map((stat, index) => (
          <div 
            key={stat.label} 
            className={`${index < stats.length - 1 ? 'stats-border' : ''} reveal group`}
            style={{ transitionDelay: stat.delay }}
          >
            <div className="text-6xl md:text-7xl serif mb-4 transition-transform group-hover:scale-105 duration-700">
              <span 
                ref={(el) => { countersRef.current[index] = el }}
                className="counter" 
                data-target={stat.value}
              >
                0
              </span>
              {stat.suffix}
            </div>
            <div className="uppercase tracking-[0.3em] text-[10px] opacity-40">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

