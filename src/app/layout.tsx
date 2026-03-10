import type { Metadata } from 'next'
import { Bebas_Neue, Manrope } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { siteConfig, seo } from '@/content/site'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: seo.home.title,
    template: '%s | Trolley Dogs',
  },
  description: seo.home.description,
  keywords: ['food truck', 'catering', 'Boston', 'Massachusetts', 'hot dogs', 'event catering', 'New England', 'food truck catering'],
  openGraph: {
    siteName: siteConfig.name,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
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
    <html lang="en" className={`${bebasNeue.variable} ${manrope.variable}`}>
      <body className="antialiased" style={{ fontFamily: 'var(--font-manrope), sans-serif', backgroundColor: 'white', color: '#2D1A14' }}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
