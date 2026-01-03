import { 
  DesignServicesOutlined,
  Inventory2Outlined,
  ContentCutOutlined,
  FactoryOutlined,
  CameraAltOutlined,
  CampaignOutlined
} from '@mui/icons-material'

interface ProcessIconProps {
  slug: string
  className?: string
}

export function ProcessIcon({ slug, className = '' }: ProcessIconProps) {
  const iconClass = `w-full h-full hand-drawn-icon ${className}`
  
  switch (slug) {
    case 'design-development':
      return (
        <DesignServicesOutlined 
          className={iconClass}
          sx={{ fontSize: 'inherit' }}
        />
      )
    
    case 'fabric-sourcing':
      return (
        <Inventory2Outlined 
          className={iconClass}
          sx={{ fontSize: 'inherit' }}
        />
      )
    
    case 'sample-development':
      return (
        <ContentCutOutlined 
          className={iconClass}
          sx={{ fontSize: 'inherit' }}
        />
      )
    
    case 'manufacturing':
      return (
        <FactoryOutlined 
          className={iconClass}
          sx={{ fontSize: 'inherit' }}
        />
      )
    
    case 'photoshoots-content':
      return (
        <CameraAltOutlined 
          className={iconClass}
          sx={{ fontSize: 'inherit' }}
        />
      )
    
    case 'marketing-support':
      return (
        <CampaignOutlined 
          className={iconClass}
          sx={{ fontSize: 'inherit' }}
        />
      )
    
    default:
      return null
  }
}
