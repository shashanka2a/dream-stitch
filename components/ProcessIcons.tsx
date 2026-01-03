import Image from 'next/image'

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
  
  if (!iconNumber) {
    return null
  }

  return (
    <div className={`w-full h-full ${className}`}>
      <Image
        src={`/icons/${iconNumber}.svg`}
        alt={`${slug} icon`}
        width={64}
        height={64}
        className="w-full h-full object-contain"
      />
    </div>
  )
}
