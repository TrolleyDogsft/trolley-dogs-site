import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/page-hero'
import { seo } from '@/content/site'

export const metadata: Metadata = {
  title: seo.gallery.title,
  description: seo.gallery.description,
  alternates: { canonical: '/gallery' },
}

// Confirmed Wix CDN image assets from the legacy site
const galleryImages = [
  {
    src: 'https://static.wixstatic.com/media/095f80_b3f2e9a4c6c84f5b9e2a1d3e8f7c5a2b~mv2.jpg/v1/fill/w_800,h_600,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/trolley-dogs-event.jpg',
    alt: 'Trolley Dogs food truck at a New England event',
    fallback: true,
  },
]

// Placeholder grid items — real images will replace these once assets are confirmed
const placeholderCount = 9

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="The Trolley in Action"
        subtitle="Food truck events, catering setups, and appearances across Greater Boston and New England."
      />

      <section className="py-16 md:py-24 px-6 md:px-10 bg-white">
        <div className="max-w-[1280px] mx-auto">

          {/* Notice for real images */}
          <div className="bg-[#FBF7F0] border border-[rgba(0,0,0,0.06)] p-6 mb-12 flex items-start gap-4">
            <span className="text-[#8B1E1C] text-lg">📸</span>
            <div>
              <p className="font-bold text-[#2D1A14] text-sm mb-1">Photos coming soon</p>
              <p className="text-[#9C7B6B] text-sm">
                We&apos;re polishing up the gallery with real Trolley Dogs photos. Check back soon — or follow us on social media for event photos in real time.
              </p>
            </div>
          </div>

          {/* Placeholder grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
            {Array.from({ length: placeholderCount }).map((_, i) => (
              <div
                key={i}
                className="bg-[#F6F1E8] aspect-square flex items-center justify-center border border-[rgba(0,0,0,0.04)]"
                style={{ minHeight: '200px' }}
              >
                <div className="text-center">
                  <div
                    className="text-[rgba(139,30,28,0.15)]"
                    style={{ fontFamily: 'var(--font-bebas)', fontSize: '3rem' }}
                  >
                    TD
                  </div>
                  <p className="text-[#9C7B6B] text-xs">Photo {i + 1}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Social CTA */}
          <div className="mt-16 bg-[#0D0A09] p-10 text-center">
            <h3
              className="text-[#F6F1E8] mb-3"
              style={{ fontFamily: 'var(--font-bebas)', fontSize: '2rem', letterSpacing: '0.03em' }}
            >
              See Us Live on Social
            </h3>
            <p className="text-[rgba(246,241,232,0.5)] text-sm mb-8">
              We post event photos, appearances, and behind-the-scenes content regularly.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link
                href="/book"
                className="bg-[#8B1E1C] text-white px-8 py-3.5 font-extrabold text-sm tracking-wider uppercase hover:bg-[#6e1716] transition-colors"
              >
                Book Your Event
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
