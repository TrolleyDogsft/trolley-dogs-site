import type { Metadata } from 'next'
import { Lobster, Oswald, Nunito_Sans } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { NewsletterPopup } from '@/components/newsletter-popup'
import { siteConfig, seo } from '@/content/site'

const lobster = Lobster({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-brand',
  display: 'swap',
})

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-head',
  display: 'swap',
})

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  variable: '--font-body',
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
    <html lang="en" className={`${lobster.variable} ${oswald.variable} ${nunitoSans.variable}`}>
      <body className="antialiased" style={{ fontFamily: 'var(--font-body), sans-serif', backgroundColor: '#FBF5E8', color: '#1C0F08' }}>
        <Header />
        <main>{children}</main>
        <Footer />
        <NewsletterPopup />
      </body>
    </html>
  )
}
