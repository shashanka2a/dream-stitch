import type { Metadata } from 'next'
import { Inter, Playfair_Display, Cormorant_Garamond } from 'next/font/google'
import './globals.css'
import { CustomCursor } from '@/components/CustomCursor'
import { ScrollProgress } from '@/components/ScrollProgress'
import { Navigation } from '@/components/Navigation'

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-playfair',
})

const cormorant = Cormorant_Garamond({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
})

export const metadata: Metadata = {
  title: 'DreamStich | End-to-End Fashion Design, Production & Brand Support',
  description: 'Complete fashion solutions for startups, emerging designers, and established brands. From design to launch, flexible services including design, sample development, manufacturing, photoshoots, and marketing support with low MOQs.',
  keywords: ['fashion design', 'fashion manufacturing', 'fashion startup support', 'low MOQ manufacturing', 'fashion photoshoots', 'fashion brand support', 'sample development', 'fabric sourcing', 'fashion production', 'DreamStich'],
  authors: [{ name: 'DreamStich' }],
  creator: 'DreamStich',
  publisher: 'DreamStich',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://dreamstitch.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'DreamStich | End-to-End Fashion Design, Production & Brand Support',
    description: 'Complete fashion solutions from idea to market. Design, production, photoshoots, and marketing support for fashion startups and established brands.',
    url: 'https://dreamstitch.com',
    siteName: 'DreamStich',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DreamStich | End-to-End Fashion Design, Production & Brand Support',
    description: 'Complete fashion solutions from idea to market. Design, production, photoshoots, and marketing support for fashion startups and established brands.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${cormorant.variable}`}>
      <body>
        <CustomCursor />
        <ScrollProgress />
        <Navigation />
        {children}
      </body>
    </html>
  )
}

