import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/page-hero'
import { menuCategories, seo } from '@/content/site'

export const metadata: Metadata = {
  title: seo.menu.title,
  description: seo.menu.description,
  alternates: { canonical: '/menu' },
}

export default function MenuPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Serve"
        title="The Menu"
        subtitle="Large all-beef hot dogs on toasted sub rolls, specialty sides, fresh lemonade, and more. All pricing is custom to your event."
      />

      <section className="py-16 md:py-24 px-6 md:px-10 bg-white">
        <div className="max-w-[1280px] mx-auto space-y-16">

          {menuCategories.map((category) => (
            <div key={category.name}>
              {/* Category header */}
              <div className="flex items-baseline gap-4 mb-6 border-b-2 border-[#0D0A09] pb-3">
                <h2
                  className="text-[#0D0A09]"
                  style={{ fontFamily: 'var(--font-bebas)', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', letterSpacing: '0.03em' }}
                >
                  {category.name}
                </h2>
                <p className="text-[#9C7B6B] text-sm hidden md:block">{category.description}</p>
              </div>

              {/* Items grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[rgba(0,0,0,0.06)]">
                {category.items.map((item) => (
                  <div key={item.name} className="bg-white p-6 hover:bg-[#FBF7F0] transition-colors group">
                    <h3 className="font-extrabold text-[#0D0A09] mb-1.5 group-hover:text-[#8B1E1C] transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-[#9C7B6B] text-sm leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Pricing note */}
          <div className="bg-[#F6F1E8] border border-[rgba(0,0,0,0.06)] p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3
                className="text-[#0D0A09] mb-2"
                style={{ fontFamily: 'var(--font-bebas)', fontSize: '1.6rem', letterSpacing: '0.03em' }}
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
