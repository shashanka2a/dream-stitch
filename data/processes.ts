export interface ProcessDetail {
  number: string
  title: string
  description: string
  subtitle: string
  included: string[]
  idealFor: string
  slug: string
  delay: string
  images: string[]
}

export const processes: ProcessDetail[] = [
  {
    number: '01',
    title: 'Design & Development',
    description: 'From concept to creation, we design from scratch or refine your existing ideas into production-ready collections.',
    subtitle: 'From idea to production-ready designs',
    included: [
      'Concept development & creative direction',
      'Trend research & mood boards',
      'Garment design & silhouette development',
      'Collection planning (drops / capsules / seasons)',
      'Technical sketches & spec sheets',
      'Design refinement based on feedback',
      'Design support for startups & new brands',
    ],
    idealFor: 'Brands starting from scratch or refining an existing concept.',
    slug: 'design-development',
    delay: '0ms',
    images: [
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800&h=800', // Fashion design sketches
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=800&h=800', // Fabric sourcing
      'https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&q=80&w=800&h=800', // Manufacturing
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800&h=800', // Photoshoot
    ],
  },
  {
    number: '02',
    title: 'Fabric Sourcing',
    description: 'Leveraging global networks to source the perfect materials that align with your brand vision and budget.',
    subtitle: 'Materials that match your vision, quality & budget',
    included: [
      'Fabric research based on design requirements',
      'Sourcing from trusted mills & suppliers',
      'Quality, GSM & texture matching',
      'Sustainable & custom fabric options',
      'Color & swatch selection',
      'Trim, accessory & embellishment sourcing',
      'Cost optimization support',
    ],
    idealFor: 'Brands looking for the right materials without supplier hassles.',
    slug: 'fabric-sourcing',
    delay: '100ms',
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=800&h=800', // Fabric rolls
      'https://images.unsplash.com/photo-1583292650898-7d22cd27ca6f?auto=format&fit=crop&q=80&w=800&h=800', // Fabric texture
      'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?auto=format&fit=crop&q=80&w=800&h=800', // Fabric selection
      'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?auto=format&fit=crop&q=80&w=800&h=800', // Fabric warehouse
    ],
  },
  {
    number: '03',
    title: 'Sample Development',
    description: 'Professional prototype creation ensuring perfect fit, quality, and alignment with your design intent.',
    subtitle: 'Turning designs into wearable, production-ready samples',
    included: [
      'Pattern making & pattern corrections',
      'Sample stitching & construction',
      'Fit trials & fitting corrections',
      'Design detailing & finishing',
      'Prototype development',
      'Revision rounds before final approval',
      'Pre-production sample support',
    ],
    idealFor: 'Brands with designs that need professional execution.',
    slug: 'sample-development',
    delay: '200ms',
    images: [
      'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?auto=format&fit=crop&q=80&w=800&h=800', // Pattern making
      'https://images.unsplash.com/photo-1583292650898-7d22cd27ca6f?auto=format&fit=crop&q=80&w=800&h=800', // Sample garment
      'https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&q=80&w=800&h=800', // Sewing
      'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&q=80&w=800&h=800', // Fitting
    ],
  },
  {
    number: '04',
    title: 'Manufacturing',
    description: 'Scalable production with low MOQs, maintaining craftsmanship standards from small batches to full volume runs.',
    subtitle: 'Flexible, scalable & reliable production',
    included: [
      'Small-batch & bulk manufacturing',
      'Low minimum order quantities (MOQs)',
      'Production planning & scheduling',
      'Quality control at every stage',
      'Craftsmanship-focused production',
      'Ethical & transparent processes',
      'Full production lifecycle management',
    ],
    idealFor: 'Brands ready to produce without rigid MOQ pressure.',
    slug: 'manufacturing',
    delay: '300ms',
    images: [
      'https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&q=80&w=800&h=800', // Factory floor
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800&h=800', // Production line
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=800&h=800', // Quality control
      'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&q=80&w=800&h=800', // Garment finishing
    ],
  },
  {
    number: '05',
    title: 'Photoshoots',
    description: 'Bringing your collection to market with professional photoshoots and visual content that captures your brand identity.',
    subtitle: 'Showcase your collection with strong visuals',
    included: [
      'Product photoshoots',
      'Lookbook & catalog shoots',
      'Styling coordination',
      'Shoot planning & execution support',
      'Brand-aligned visual direction',
      'Content suitable for website & marketing',
    ],
    idealFor: 'Brands preparing for launches or online sales.',
    slug: 'photoshoots-content',
    delay: '400ms',
    images: [
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800&h=800', // Fashion photoshoot
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800&h=800', // Studio setup
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800&h=800', // Model shoot
      'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&q=80&w=800&h=800', // Lookbook
    ],
  },
  {
    number: '06',
    title: 'Marketing Support',
    description: 'Complete brand presentation services to ensure your designs are not only well-made but market-ready and launch-ready.',
    subtitle: 'Helping your brand go to market confidently',
    included: [
      'Launch-ready brand presentation support',
      'Visual branding guidance',
      'Content planning for digital platforms',
      'Marketing asset support',
      'Go-to-market consultation',
      'Alignment between product & brand identity',
    ],
    idealFor: 'Startups and brands building visibility and traction.',
    slug: 'marketing-support',
    delay: '500ms',
    images: [
      'https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&q=80&w=800&h=800', // Brand presentation
      'https://images.unsplash.com/photo-1558655146-364adaf1fcc9?auto=format&fit=crop&q=80&w=800&h=800', // Marketing strategy
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800&h=800', // Digital marketing
      'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800&h=800', // Social media content
    ],
  },
]

