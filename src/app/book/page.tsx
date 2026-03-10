import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { BookingForm } from '@/components/booking-form'
import { siteConfig, seo } from '@/content/site'

export const metadata: Metadata = {
  title: seo.book.title,
  description: seo.book.description,
  alternates: { canonical: '/book' },
}

export default function BookPage() {
  return (
    <>
      <PageHero
        eyebrow="Catering &amp; Booking"
        title="Let's Talk About Your Event"
        subtitle="Fill out the form below and we'll get back to you within 24 hours. Every event is custom — we'll work with you on menu, pricing, and logistics."
      />

      <section className="py-16 md:py-24 px-6 md:px-10 bg-white">
        <div className="max-w-[1280px] mx-auto grid md:grid-cols-[1fr_2fr] gap-12 md:gap-16">

          {/* Sidebar info */}
          <aside className="space-y-8">
            <div>
              <h2
                className="text-[#0D0A09] mb-4"
                style={{ fontFamily: 'var(--font-bebas)', fontSize: '1.8rem', letterSpacing: '0.03em' }}
              >
                Why Trolley Dogs?
              </h2>
              <ul className="space-y-3">
                {[
                  "Northeast's largest food truck vendor",
                  "4 trucks available — we scale to your event",
                  "25+ years of experience",
                  "Film & TV, corporate, private, and public events",
                  "Groups of 25 to 5,000+",
                  "Greater Boston, MetroWest, Central MA & New England",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-[#5C4638]">
                    <span className="text-[#8B1E1C] font-bold mt-0.5">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-[rgba(0,0,0,0.08)] pt-8">
              <p className="text-[0.72rem] font-bold tracking-[0.12em] uppercase text-[#9C7B6B] mb-3">Prefer to call?</p>
              <a
                href={`tel:${siteConfig.phone.replace(/-/g, '')}`}
                className="text-[#8B1E1C] font-extrabold text-xl hover:text-[#6e1716] transition-colors block mb-1"
              >
                {siteConfig.phone}
              </a>
              <a
                href={`mailto:${siteConfig.bookingEmail}`}
                className="text-[#9C7B6B] text-sm hover:text-[#5C4638] transition-colors"
              >
                {siteConfig.email}
              </a>
            </div>

            <div className="bg-[#F6F1E8] p-6 border border-[rgba(0,0,0,0.06)]">
              <p className="text-[0.72rem] font-bold tracking-[0.12em] uppercase text-[#9C7B6B] mb-2">Pricing</p>
              <p className="text-[#5C4638] text-sm leading-relaxed">
                All pricing is custom to your event. Guest count, menu selection, duration, and location
                all factor in. We&apos;ll give you a full quote on our call.
              </p>
            </div>
          </aside>

          {/* Form */}
          <div>
            <BookingForm />
          </div>
        </div>
      </section>
    </>
  )
}
