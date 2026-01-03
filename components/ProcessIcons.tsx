interface ProcessIconProps {
  slug: string
  className?: string
}

export function ProcessIcon({ slug, className = '' }: ProcessIconProps) {
  const iconClass = `w-full h-full ${className}`
  
  switch (slug) {
    case 'design-development':
      // Pencil/Design tool icon
      return (
        <svg className={iconClass} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M25 75L30 70L50 50L45 45L25 65V75Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M30 70L50 50M45 45L55 35L65 45L50 50" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M55 35L65 25L75 35L65 45" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    
    case 'fabric-sourcing':
      // Fabric/textile icon
      return (
        <svg className={iconClass} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="20" y="30" width="60" height="50" rx="2" stroke="currentColor" strokeWidth="2.5"/>
          <path d="M25 40H75M25 50H75M25 60H75M25 70H65" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="30" cy="35" r="2.5" fill="currentColor"/>
          <circle cx="70" cy="35" r="2.5" fill="currentColor"/>
          <circle cx="30" cy="75" r="2.5" fill="currentColor"/>
          <circle cx="70" cy="75" r="2.5" fill="currentColor"/>
        </svg>
      )
    
    case 'sample-development':
      // Scissors/sewing icon
      return (
        <svg className={iconClass} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30 25L20 40L30 55L40 50L50 65L60 60L70 75L80 70" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="20" cy="40" r="4" stroke="currentColor" strokeWidth="2.5"/>
          <circle cx="80" cy="70" r="4" stroke="currentColor" strokeWidth="2.5"/>
          <path d="M25 80L30 75L35 80L40 75L45 80L50 75L55 80L60 75" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    
    case 'manufacturing':
      // Factory/gear icon
      return (
        <svg className={iconClass} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="25" y="35" width="50" height="35" rx="2" stroke="currentColor" strokeWidth="2.5"/>
          <circle cx="35" cy="52.5" r="5" stroke="currentColor" strokeWidth="2.5"/>
          <circle cx="50" cy="52.5" r="5" stroke="currentColor" strokeWidth="2.5"/>
          <circle cx="65" cy="52.5" r="5" stroke="currentColor" strokeWidth="2.5"/>
          <path d="M20 52.5H25M75 52.5H80" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M30 25L35 35M50 25L50 35M70 25L65 35" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        </svg>
      )
    
    case 'photoshoots-content':
      // Camera icon
      return (
        <svg className={iconClass} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="25" y="35" width="50" height="35" rx="4" stroke="currentColor" strokeWidth="2.5"/>
          <circle cx="50" cy="52.5" r="10" stroke="currentColor" strokeWidth="2.5"/>
          <circle cx="50" cy="52.5" r="5" fill="currentColor"/>
          <rect x="38" y="25" width="8" height="6" rx="1" stroke="currentColor" strokeWidth="2"/>
          <path d="M30 48L25 52.5L30 57" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M70 48L75 52.5L70 57" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    
    case 'marketing-support':
      // Megaphone/marketing icon
      return (
        <svg className={iconClass} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M35 45L50 30L75 40V60L50 75L35 60V45Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M45 55L50 50L55 55" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M45 65L50 60L55 65" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="50" cy="55" r="2" fill="currentColor"/>
          <path d="M20 35L25 40M80 35L75 40" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M20 70L25 65M80 70L75 65" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    
    default:
      return null
  }
}

