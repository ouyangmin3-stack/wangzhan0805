import type { Metadata } from 'next'
import './globals.css'
import ClientBody from './ClientBody'

export const metadata: Metadata = {
  title: 'Style by Savina | Minimalist Fashion Blog',
  description: 'UK sustainable fashion blogger bringing you the best tips and inspiration when it comes to capsule wardrobe, minimalist fashion, and sustainable style.',
  keywords: 'fashion blog, minimalist fashion, capsule wardrobe, sustainable style, fashion tips',
  authors: [{ name: 'Savina Nikolova' }],
  openGraph: {
    title: 'Style by Savina | Minimalist Fashion Blog',
    description: 'UK sustainable fashion blogger bringing you the best tips and inspiration when it comes to capsule wardrobe, minimalist fashion, and sustainable style.',
    type: 'website',
    locale: 'en_UK',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <ClientBody>{children}</ClientBody>
    </html>
  )
}
