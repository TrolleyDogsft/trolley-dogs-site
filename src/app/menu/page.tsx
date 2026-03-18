import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/page-hero'
import { menuCategories, seo } from '@/content/site'

export const metadata: Metadata = {
  title: seo.menu.title,
  description: seo.menu.description,
  alternates: { canonical: '/menu' },
  openGraph: {
    title: seo.menu.title,
    description: seo.menu.description,
    images: [{ url: '/images/td-hot-dog.jpg', width: 1200, height: 630, alt: 'Trolley Dogs all-beef hot dog on a toasted sub roll' }],
  },
}

export default function MenuPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Serve"
        title="Trolley Dogs Menu — Hot Dogs, Sides & More"
        subtitle="Large all-beef hot dogs on toasted sub rolls, specialty sides, fresh-squeezed lemonade, and more. All pricing is custom to your event."
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://trolleydogsft.com' },
              { '@type': 'ListItem', position: 2, name: 'Menu', item: 'https://trolleydogsft.com/menu' },
            ],
          }),
        }}
      />

      <section className="py-16 md:py-24 px-6 md:px-10 bg-white">
        <div className="max-w-[1280px] mx-auto space-y-16">

          {menuCategories.map((category, idx) => (
            <details key={category.name} open={idx === 0} className="group border-b-2 border-[#0D0A09]">
              <summary className="flex items-center justify-between py-4 cursor-pointer [list-style:none] [&::-webkit-details-marker]:hidden hover:bg-[#FBF7F0] px-3 -mx-3 transition-colors">
                <div className="flex items-baseline gap-4">
                  <h2
                    className="text-[#0D0A09]"
                    style={{ fontFamily: 'var(--font-head)', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', letterSpacing: '0.03em' }}
                  >
                    {category.name}
                  </h2>
                  <p className="text-[#9C7B6B] text-sm hidden md:block">{category.description}</p>
                </div>
                <span
                  className="text-[#8B1E1C] select-none transition-transform duration-200 group-open:rotate-45 inline-block"
                  style={{ fontSize: '1.8rem', lineHeight: 1 }}
                  aria-hidden="true"
                >+</span>
              </summary>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[rgba(0,0,0,0.06)] mb-2">
                {category.items.map((item) => (
                  <div key={item.name} className="bg-white p-6 hover:bg-[#FBF7F0] transition-colors group/item">
                    <h3 className="font-extrabold text-[#0D0A09] mb-1.5 group-hover/item:text-[#8B1E1C] transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-[#9C7B6B] text-sm leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </details>
          ))}

          {/* Pricing note */}
          <div className="bg-[#F6F1E8] border border-[rgba(0,0,0,0.06)] p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3
                className="text-[#0D0A09] mb-2"
                style={{ fontFamily: 'var(--font-head)', fontSize: '1.6rem', letterSpacing: '0.03em' }}
              >
                Event Pricing is Always Custom
              </h3>
              <p className="text-[#5C4638] text-sm leading-relaxed max-w-xl">
                We don&apos;t sell hot dogs one at a time — we cater events. Guest count, menu selection, duration,
                and location all factor into your quote. Call us or submit a booking inquiry to get pricing for your event.
              </p>
            </div>
            <Link
              href="/book"
              className="whitespace-nowrap bg-[#8B1E1C] text-white px-8 py-4 font-extrabold text-sm tracking-wider uppercase hover:bg-[#6e1716] transition-colors"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
