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
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to load icon ${iconNumber}.svg`)
        }
        return res.text()
      })
      .then((text) => {
        // Replace fill and stroke colors from #E8E8E8 to #1a1a1a
        let updatedSvg = text.replace(/#E8E8E8/g, '#1a1a1a')
        // Replace fixed width and height with 100% to respect container size
        updatedSvg = updatedSvg.replace(/width="[^"]*"/g, 'width="100%"')
        updatedSvg = updatedSvg.replace(/height="[^"]*"/g, 'height="100%"')
        // Ensure viewBox is preserved for proper scaling
        if (!updatedSvg.includes('viewBox') && text.includes('viewBox')) {
          const viewBoxMatch = text.match(/viewBox="[^"]*"/)
          if (viewBoxMatch) {
            updatedSvg = updatedSvg.replace(/<svg/, `<svg ${viewBoxMatch[0]}`)
          }
        }
        setSvgContent(updatedSvg)
      })
      .catch((err) => {
        console.error('Error loading icon:', err)
        // Don't set svgContent on error, will show fallback
      })
  }, [iconNumber])

  if (!iconNumber) {
    return null
  }

  if (!svgContent) {
    // Show loading state or fallback
    return (
      <div className={`w-full h-full ${className}`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="w-full h-full bg-gray-200 animate-pulse" />
      </div>
    )
  }

  return (
    <div 
      className={`w-full h-full ${className}`}
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <div
        className="w-full h-full"
        style={{ display: 'inline-block' }}
        dangerouslySetInnerHTML={{ __html: svgContent }}
      />
    </div>
  )
}

