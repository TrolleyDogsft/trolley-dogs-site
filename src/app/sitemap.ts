import { MetadataRoute } from 'next'
import { siteConfig } from '@/content/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url

  return [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/menu`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/events`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${base}/book`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/gallery`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
  ]
}
