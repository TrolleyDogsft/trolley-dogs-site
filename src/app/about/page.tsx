import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { PageHero } from '@/components/page-hero'
import { siteConfig, seo, testimonials } from '@/content/site'

export const metadata: Metadata = {
  title: seo.about.title,
  description: seo.about.description,
  alternates: { canonical: '/about' },
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="The Story"
        title="Northeast's #1 Food Truck Vendor"
        subtitle="Started in 1999. Four trucks. Thousands of events. Still the same all-beef hot dogs."
      />

      {/* Origin Story */}
      <section className="py-16 md:py-24 px-6 md:px-10 bg-white">
        <div className="max-w-[1280px] mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <span className="text-[#8B1E1C] text-[0.7rem] font-bold tracking-[0.25em] uppercase block mb-3">Since 1999</span>
            <h2
              className="text-[#0D0A09] mb-6"
              style={{ fontFamily: 'var(--font-bebas)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '0.02em' }}
            >
              It Started With a Trolley
            </h2>
            <div className="space-y-4 text-[#5C4638] leading-relaxed">
              <p>
                Trolley Dogs was founded in 1999 with a simple idea: a refurbished replica of a late-1800s
                horse-drawn trolley car, loaded with all-beef hot dogs, ready to serve a crowd.
              </p>
              <p>
                Inspired by a PBS program about the history of hot dogs in America, the original Trolley Dogs
                was built around a single mission — serve the best all-beef hot dogs in Massachusetts, on a
                toasted sub roll, with quality toppings, at events where people gather.
              </p>
              <p>
                Over 25 years later, that mission hasn&apos;t changed. The operation has grown — 4 trucks,
                5 to 7 days a week, thousands of events per year — but the hot dogs are still the same.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="bg-[#0D0A09] p-8 flex flex-col items-center gap-4 max-w-xs w-full">
              <Image
                src={siteConfig.logo}
                alt="Trolley Dogs"
                width={140}
                height={148}
                className="opacity-90"
              />
              <span className="text-[#B8892F] text-[0.72rem] font-bold tracking-[0.2em] uppercase">Est. 1999</span>
            </div>
          </div>
        </div>
      </section>

      {/* Scale Stats */}
      <section className="bg-[#0D0A09] py-16 px-6 md:px-10">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[rgba(255,255,255,0.05)]">
            {[
              { value: '4', label: 'Trucks' },
              { value: '5–7', label: 'Days Per Week' },
              { value: '1,000s', label: 'Events Per Year' },
              { value: '25+', label: 'Years in Business' },
            ].map((s, i) => (
              <div key={i} className="bg-[#0D0A09] py-10 text-center">
                <div style={{ fontFamily: 'var(--font-bebas)', fontSize: 'clamp(3rem, 6vw, 4.5rem)', lineHeight: 1 }} className="text-[#8B1E1C]">{s.value}</div>
                <div className="text-[rgba(246,241,232,0.45)] text-[0.7rem] font-bold tracking-[0.15em] uppercase mt-2">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notable Clients */}
      <section className="py-16 md:py-24 px-6 md:px-10 bg-[#FBF7F0]">
        <div className="max-w-[1280px] mx-auto">
          <span className="text-[#8B1E1C] text-[0.7rem] font-bold tracking-[0.25em] uppercase block mb-3">Who We&apos;ve Served</span>
          <h2
            className="text-[#0D0A09] mb-10"
            style={{ fontFamily: 'var(--font-bebas)', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', letterSpacing: '0.02em' }}
          >
            From Film Sets to Sold-Out Venues
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-[rgba(0,0,0,0.06)]">
            {[
              { category: 'Film & Television', examples: 'FX productions, feature films, on-set catering for cast and crew throughout New England.' },
              { category: 'Major Venues', examples: 'Worcester Palladium, concert venues, arenas, and large-scale entertainment events.' },
              { category: 'Corporate & Campus', examples: 'Office events, college fairs, university campuses, schools, and sporting tournaments.' },
              { category: 'Community Events', examples: 'Festivals, farmer\'s markets, charity events, town celebrations, and community gatherings.' },
            ].map((c, i) => (
              <div key={i} className="bg-[#FBF7F0] p-8 hover:bg-white transition-colors">
                <h3 className="font-extrabold text-[#0D0A09] mb-3">{c.category}</h3>
                <p className="text-[#9C7B6B] text-sm leading-relaxed">{c.examples}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 px-6 md:px-10 bg-white border-t-2 border-[#0D0A09]">
        <div className="max-w-[1280px] mx-auto">
          <span className="text-[#8B1E1C] text-[0.7rem] font-bold tracking-[0.25em] uppercase block mb-3">What People Say</span>
          <h2
            className="text-[#0D0A09] mb-10"
            style={{ fontFamily: 'var(--font-bebas)', fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '0.02em' }}
          >
            From Our Clients
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-[#F6F1E8] p-8 border border-[rgba(0,0,0,0.04)]">
                <p className="text-[#2D1A14] leading-relaxed mb-6 italic">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <p className="font-extrabold text-[#0D0A09] text-sm">{t.author}</p>
                  <p className="text-[#9C7B6B] text-xs">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="bg-[#8B1E1C] py-16 px-6 md:px-10 text-center">
        <h2
          className="text-white mb-4"
          style={{ fontFamily: 'var(--font-bebas)', fontSize: 'clamp(2rem, 5vw, 3.5rem)', letterSpacing: '0.03em' }}
        >
          Serving All of New England
        </h2>
        <p className="text-[rgba(255,255,255,0.7)] mb-8 max-w-lg mx-auto">
          Greater Boston · MetroWest · Central Massachusetts · Cape Cod · Rhode Island · Connecticut · New Hampshire
        </p>
        <Link
          href="/book"
          className="inline-block bg-white text-[#8B1E1C] px-10 py-4 font-extrabold text-sm tracking-wider uppercase hover:bg-[#FFD76F] transition-colors"
        >
          Book the Trolley
        </Link>
      </section>
    </>
  )
}
