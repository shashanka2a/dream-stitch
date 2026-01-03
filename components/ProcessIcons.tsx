'use client'

import { useEffect, useState } from 'react'

interface ProcessIconProps {
  slug: string
  className?: string
}

export function ProcessIcon({ slug, className = '' }: ProcessIconProps) {
  // Map slug to icon number
  const iconMap: Record<string, string> = {
    'design-development': '1',
    'fabric-sourcing': '2',
    'sample-development': '3',
    'manufacturing': '4',
    'photoshoots-content': '5',
    'marketing-support': '6',
  }

  const iconNumber = iconMap[slug]
  const [svgContent, setSvgContent] = useState<string>('')

  useEffect(() => {
    if (!iconNumber) return

    fetch(`/icons/${iconNumber}.svg`)
      .then((res) => res.text())
      .then((text) => {
        // Replace fill color from #E8E8E8 to #1A1A1A
        const updatedSvg = text.replace(/#E8E8E8/g, '#1A1A1A')
        setSvgContent(updatedSvg)
      })
      .catch((err) => console.error('Error loading icon:', err))
  }, [iconNumber])

  if (!iconNumber || !svgContent) {
    return null
  }

  return (
    <div 
      className={`w-full h-full ${className}`}
      dangerouslySetInnerHTML={{ __html: svgContent }}
    />
  )
}
