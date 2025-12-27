'use client'

import { useEffect, useRef } from 'react'

const stats = [
  { value: 22, suffix: '+', label: 'Brands Supported', delay: '0ms' },
  { value: 10, suffix: '', label: 'Low MOQ Units', delay: '200ms' },
  { value: 2, suffix: '', label: 'Service Categories', delay: '400ms' },
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
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-[120px] bg-[#efeeea] px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 md:gap-14 lg:gap-16 text-center">
        {stats.map((stat, index) => (
          <div 
            key={stat.label} 
            className={`${index < stats.length - 1 ? 'stats-border' : ''} reveal group`}
            style={{ transitionDelay: stat.delay }}
          >
            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl serif mb-2 sm:mb-3 md:mb-4 transition-transform group-hover:scale-105 duration-700">
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


