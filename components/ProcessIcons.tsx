import { 
  DesignServicesOutlined,
  Inventory2Outlined,
  ContentCutOutlined,
  CameraAltOutlined,
  CampaignOutlined
} from '@mui/icons-material'

interface ProcessIconProps {
  slug: string
  className?: string
}

// Custom Stitching Machine Icon - Light and subtle
function StitchingMachineIcon({ className }: { className?: string }) {
  return (
    <svg 
      className={className}
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Machine base */}
      <rect x="4" y="16" width="16" height="4" rx="1" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
      {/* Needle arm */}
      <path d="M12 4V16" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
      {/* Needle */}
      <path d="M12 16L10 18M12 16L14 18" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
      {/* Thread spool */}
      <circle cx="8" cy="8" r="2.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="8" cy="8" r="1" stroke="currentColor" strokeWidth="1" fill="none"/>
      {/* Control panel */}
      <rect x="14" y="6" width="4" height="6" rx="0.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="15.5" cy="8" r="0.5" stroke="currentColor" strokeWidth="1" fill="none"/>
      <circle cx="17.5" cy="8" r="0.5" stroke="currentColor" strokeWidth="1" fill="none"/>
    </svg>
  )
}

export function ProcessIcon({ slug, className = '' }: ProcessIconProps) {
  const iconClass = `w-full h-full hand-drawn-icon ${className}`
  
  switch (slug) {
    case 'design-development':
      return (
        <DesignServicesOutlined 
          className={iconClass}
          sx={{ fontSize: 'inherit', width: '100%', height: '100%' }}
        />
      )
    
    case 'fabric-sourcing':
      return (
        <Inventory2Outlined 
          className={iconClass}
          sx={{ fontSize: 'inherit', width: '100%', height: '100%' }}
        />
      )
    
    case 'sample-development':
      return (
        <ContentCutOutlined 
          className={iconClass}
          sx={{ fontSize: 'inherit', width: '100%', height: '100%' }}
        />
      )
    
    case 'manufacturing':
      return (
        <StitchingMachineIcon className={iconClass} />
      )
    
    case 'photoshoots-content':
      return (
        <CameraAltOutlined 
          className={iconClass}
          sx={{ fontSize: 'inherit', width: '100%', height: '100%' }}
        />
      )
    
    case 'marketing-support':
      return (
        <CampaignOutlined 
          className={iconClass}
          sx={{ fontSize: 'inherit', width: '100%', height: '100%' }}
        />
      )
    
    default:
      return null
  }
}
