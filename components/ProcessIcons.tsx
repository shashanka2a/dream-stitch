import { 
  PencilSimple, 
  Package, 
  Scissors, 
  Factory, 
  Camera, 
  Megaphone 
} from '@phosphor-icons/react'

interface ProcessIconProps {
  slug: string
  className?: string
}

export function ProcessIcon({ slug, className = '' }: ProcessIconProps) {
  const iconClass = `w-full h-full hand-drawn-icon ${className}`
  
  switch (slug) {
    case 'design-development':
      return (
        <PencilSimple 
          className={iconClass} 
          weight="regular"
        />
      )
    
    case 'fabric-sourcing':
      return (
        <Package 
          className={iconClass} 
          weight="regular"
        />
      )
    
    case 'sample-development':
      return (
        <Scissors 
          className={iconClass} 
          weight="regular"
        />
      )
    
    case 'manufacturing':
      return (
        <Factory 
          className={iconClass} 
          weight="regular"
        />
      )
    
    case 'photoshoots-content':
      return (
        <Camera 
          className={iconClass} 
          weight="regular"
        />
      )
    
    case 'marketing-support':
      return (
        <Megaphone 
          className={iconClass} 
          weight="regular"
        />
      )
    
    default:
      return null
  }
}
