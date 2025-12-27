# Dream Stitch - Next.js App

A production-ready Next.js 16+ application with Tailwind CSS v3, SEO optimization, and modern React components.

## Features

- ✅ Next.js 16+ with App Router
- ✅ Tailwind CSS v3
- ✅ TypeScript
- ✅ SEO meta tags (Open Graph, Twitter Cards, etc.)
- ✅ Lucide icon favicon
- ✅ Custom cursor interactions
- ✅ Scroll animations and reveals
- ✅ Responsive design
- ✅ Image optimization with Next.js Image component

## Getting Started

### Install Dependencies

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

Create a production build:

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## Project Structure

```
dream-stitch/
├── app/
│   ├── layout.tsx       # Root layout with metadata and fonts
│   ├── page.tsx         # Home page
│   ├── globals.css      # Global styles and Tailwind
│   └── icon.tsx         # Favicon component (Lucide icon)
├── components/
│   ├── CustomCursor.tsx
│   ├── Navigation.tsx
│   ├── ScrollProgress.tsx
│   ├── HeroSlider.tsx
│   ├── PartnersSection.tsx
│   ├── ExpertiseSection.tsx
│   ├── StatsSection.tsx
│   ├── SolutionsSection.tsx
│   └── Footer.tsx
├── hooks/
│   └── useScrollReveal.ts
└── package.json
```

## SEO Features

The app includes comprehensive SEO metadata:
- Title and description
- Open Graph tags for social sharing
- Twitter Card metadata
- Canonical URLs
- Robots meta tags
- Structured data ready

## Customization

### Update Metadata

Edit `app/layout.tsx` to update SEO metadata, including:
- Site title and description
- Open Graph images
- Twitter card settings
- Canonical URLs

### Change Favicon

The favicon is defined in `app/icon.tsx` using a Lucide icon. Replace the SVG content with your preferred icon.

## Technologies

- **Next.js 16+** - React framework
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS v3** - Styling
- **Lucide React** - Icons
- **Next/Font** - Font optimization





