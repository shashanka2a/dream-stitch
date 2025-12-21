import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
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

export const metadata: Metadata = {
  title: 'Dream Stitch | Precision Manufacturing',
  description: 'Manufacturing excellence for modern fashion. Reliable infrastructure for growing brands with precision craftsmanship and global sourcing.',
  keywords: ['fashion manufacturing', 'precision manufacturing', 'garment production', 'fashion production', 'textile manufacturing', 'Dream Stitch'],
  authors: [{ name: 'Dream Stitch' }],
  creator: 'Dream Stitch',
  publisher: 'Dream Stitch',
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
    title: 'Dream Stitch | Precision Manufacturing',
    description: 'Manufacturing excellence for modern fashion. Reliable infrastructure for growing brands.',
    url: 'https://dreamstitch.com',
    siteName: 'Dream Stitch',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dream Stitch | Precision Manufacturing',
    description: 'Manufacturing excellence for modern fashion. Reliable infrastructure for growing brands.',
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
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <CustomCursor />
        <ScrollProgress />
        <Navigation />
        {children}
      </body>
    </html>
  )
}

