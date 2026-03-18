import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { PageHero } from '@/components/page-hero'
import { siteConfig, seo } from '@/content/site'

export const metadata: Metadata = {
  title: seo.gallery.title,
  description: seo.gallery.description,
  alternates: { canonical: '/gallery' },
  openGraph: {
    title: seo.gallery.title,
    description: seo.gallery.description,
    url: `${siteConfig.url}/gallery`,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ImageGallery',
  name: 'Trolley Dogs Food Truck Events & Photos',
  description: seo.gallery.description,
  url: `${siteConfig.url}/gallery`,
  author: {
    '@type': 'Organization',
    name: 'Trolley Dogs',
    url: siteConfig.url,
  },
}

const galleryImages = [
  { src: '/images/new-truck.jpg', alt: 'Trolley Dogs food truck at a New England event' },
  { src: '/images/td-hot-dog.jpg', alt: 'Trolley Dogs all-beef hot dog on a toasted sub roll' },
  { src: '/images/event-2023.jpg', alt: 'Trolley Dogs catering a summer event in 2023' },
  { src: '/images/green-trolley.jpg', alt: 'The original Trolley Dogs green trolley car' },
  { src: '/images/td-fries.jpg', alt: 'Trolley Dogs crispy golden fries' },
  { src: '/images/new-truck-1.jpg', alt: 'Trolley Dogs truck setup at an outdoor event' },
  { src: '/images/hot-dog.jpg', alt: 'Classic Trolley Dogs all-beef hot dog' },
  { src: '/images/td-lemonades.jpg', alt: 'Fresh-squeezed lemonades from Trolley Dogs' },
  { src: '/images/td-dog-and-fry.jpg', alt: 'Trolley Dogs hot dog and fries combo' },
  { src: '/images/white-truck.jpg', alt: 'Trolley Dogs white food truck at an event' },
  { src: '/images/hot-dog-2.jpg', alt: 'Trolley Dogs signature all-beef hot dog with toppings' },
  { src: '/images/lit-menu.jpg', alt: 'Trolley Dogs illuminated menu board' },
  { src: '/images/event-2017.jpg', alt: 'Trolley Dogs serving a New England crowd in 2017' },
]

export default function GalleryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero
        eyebrow="Gallery"
        title="Food Truck Events & Photos — Trolley Dogs"
        subtitle="Food truck events, catering setups, and appearances across Greater Boston and New England."
      />

      <section className="py-16 md:py-24 px-6 md:px-10 bg-white">
        <div className="max-w-[1280px] mx-auto">

          {/* Photo grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
            {galleryImages.map((img, i) => (
              <div key={i} className="relative aspect-square overflow-hidden bg-[#F6F1E8]">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  priority={i < 2}
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>

          {/* Book CTA */}
          <div className="mt-16 p-10 text-center" style={{ background: 'var(--dark)' }}>
            <h3
              className="mb-3"
              style={{ fontFamily: 'var(--font-head)', fontSize: '2rem', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', color: 'var(--cream)' }}
            >
              Bring the Trolley to Your Event
            </h3>
            <p style={{ color: 'rgba(251,245,232,0.5)', fontSize: '0.88rem', marginBottom: 32 }}>
              4 trucks available across Greater Boston and New England. Every event is custom.
            </p>
            <Link
              href="/book"
              style={{ background: 'var(--red)', color: 'var(--cream)', padding: '12px 32px', fontFamily: 'var(--font-head)', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none', display: 'inline-block' }}
            >
              Book Your Event
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
