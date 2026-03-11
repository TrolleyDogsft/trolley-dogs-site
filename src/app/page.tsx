import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { siteConfig, stats, services, menuFeatured, testimonials, seo } from '@/content/site'
import { getUpcomingEvents, formatEventDate, formatEventTime } from '@/lib/calendar'
import { NewsletterForm } from '@/components/newsletter-form'

export const metadata: Metadata = {
  title: seo.home.title,
  description: seo.home.description,
  alternates: { canonical: '/' },
}

export default async function HomePage() {
  const upcomingEvents = await getUpcomingEvents(3)

  return (
    <>
      {/* HERO */}
      <section className="bg-[#0D0A09] min-h-[92vh] grid md:grid-cols-2 border-b-[3px] border-[#8B1E1C]">
        {/* Left */}
        <div className="flex flex-col justify-center px-8 md:px-16 py-20 md:py-0">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-0.5 bg-[#8B1E1C]" />
            <span className="text-[#B8892F] text-[0.7rem] font-bold tracking-[0.2em] uppercase">Massachusetts Food Truck &amp; Event Catering</span>
          </div>
          <h1
            className="text-[#F6F1E8] leading-[0.92] mb-6"
            style={{
              fontFamily: 'var(--font-bebas), sans-serif',
              fontSize: 'clamp(4rem, 8vw, 7.5rem)',
              letterSpacing: '0.01em',
            }}
          >
            Book<br />
            the <span className="text-[#8B1E1C]">Trolley.</span><br />
            <span className="text-[#FFD76F]">Feed</span><br />
            the Crowd.
          </h1>
          <p className="text-[rgba(246,241,232,0.55)] text-base md:text-lg leading-relaxed max-w-md mb-10">
            Northeast&apos;s largest food truck vendor. 4 trucks, thousands of events per year —
            from FX TV productions to Worcester Palladium to private parties across New England.
          </p>
          <div className="flex items-center gap-5 flex-wrap">
            <Link
              href="/book"
              className="bg-[#8B1E1C] text-white px-8 py-4 text-[0.88rem] font-extrabold tracking-[0.12em] uppercase border-2 border-[#8B1E1C] hover:bg-transparent hover:text-[#8B1E1C] transition-all duration-150"
            >
              Catering &amp; Booking
            </Link>
            <Link
              href="/menu"
              className="text-[rgba(246,241,232,0.55)] text-sm font-semibold hover:text-[#FFD76F] transition-colors after:content-['_→']"
            >
              View Menu
            </Link>
          </div>
        </div>

        {/* Right */}
        <div className="hidden md:flex items-center justify-center bg-[#1A1210] border-l-2 border-[rgba(255,255,255,0.04)] relative overflow-hidden">
          <div className="relative z-10 flex flex-col items-center gap-6">
            <Image
              src={siteConfig.logo}
              alt="Trolley Dogs"
              width={180}
              height={190}
              className="drop-shadow-2xl"
              style={{ filter: 'drop-shadow(0 0 60px rgba(139,30,28,0.4))' }}
              priority
            />
            <span className="text-[#B8892F] text-[0.72rem] font-bold tracking-[0.25em] uppercase">Est. 1999 · Greater Boston</span>
          </div>
          {/* Background year watermark */}
          <span
            className="absolute bottom-4 select-none pointer-events-none"
            style={{
              fontFamily: 'var(--font-bebas), sans-serif',
              fontSize: '9rem',
              color: 'rgba(255,255,255,0.03)',
              letterSpacing: '-0.02em',
            }}
          >
            1999
          </span>
          {/* Est badge */}
          <div className="absolute top-8 right-8 w-20 h-20 rounded-full bg-[#8B1E1C] flex flex-col items-center justify-center text-center">
            <span style={{ fontFamily: 'var(--font-bebas)', fontSize: '1.8rem', color: 'white', lineHeight: 1 }}>25+</span>
            <span className="text-[0.55rem] font-bold tracking-wide uppercase text-[rgba(255,255,255,0.7)]">Years</span>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <div className="grid grid-cols-2 md:grid-cols-4 border-b-2 border-[#0D0A09]">
        {stats.map((stat, i) => (
          <div key={i} className={`py-6 md:py-8 text-center border-r border-[rgba(0,0,0,0.08)] last:border-r-0`}>
            <div
              className="text-[#8B1E1C] leading-none mb-1"
              style={{ fontFamily: 'var(--font-bebas)', fontSize: 'clamp(2rem, 5vw, 3rem)' }}
            >
              {stat.value}
            </div>
            <div className="text-[#9C7B6B] text-[0.7rem] font-bold tracking-[0.12em] uppercase">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* SERVICES */}
      <section className="bg-[#FBF7F0] py-20 px-6 md:px-10">
        <div className="max-w-[1280px] mx-auto">
          <div className="mb-10">
            <span className="text-[#8B1E1C] text-[0.7rem] font-bold tracking-[0.25em] uppercase block mb-2">What We Do</span>
            <h2 style={{ fontFamily: 'var(--font-bebas)', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', letterSpacing: '0.03em' }} className="text-[#0D0A09]">
              Events We Serve
            </h2>
            <p className="text-[#5C4638] mt-2 max-w-lg">From film sets to school events — if there&apos;s a crowd, we feed it.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[rgba(0,0,0,0.08)]">
            {services.map((service, i) => (
              <div key={i} className="bg-[#FBF7F0] p-8 hover:bg-white transition-colors group">
                <div
                  className="text-[rgba(139,30,28,0.12)] leading-none mb-4"
                  style={{ fontFamily: 'var(--font-bebas)', fontSize: '3rem' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="font-extrabold text-[#0D0A09] text-base mb-2 group-hover:text-[#8B1E1C] transition-colors">{service.title}</h3>
                <p className="text-[#9C7B6B] text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UPCOMING EVENTS */}
      <section className="bg-[#0D0A09] py-20 px-6 md:px-10">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <div>
              <span className="text-[#B8892F] text-[0.7rem] font-bold tracking-[0.25em] uppercase block mb-2">Find Us</span>
              <h2 style={{ fontFamily: 'var(--font-bebas)', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', letterSpacing: '0.03em' }} className="text-[#F6F1E8]">
                Upcoming Appearances
              </h2>
            </div>
            <Link href="/events" className="text-[#8B1E1C] text-[0.8rem] font-bold tracking-[0.1em] uppercase hover:text-[#FFD76F] transition-colors">
              Full Calendar →
            </Link>
          </div>

          {upcomingEvents.length > 0 ? (
            <div className="border-t-2 border-[#0D0A09]">
              {upcomingEvents.map((event) => {
                const { month, day } = formatEventDate(event.start)
                const timeStr = formatEventTime(event.start, event.end)
                return (
                  <div key={event.id} className="flex items-center gap-6 md:gap-10 py-5 border-b border-[rgba(255,255,255,0.06)] hover:bg-[rgba(255,255,255,0.03)] transition-colors px-2">
                    <div className="text-center min-w-[56px]">
                      <div className="text-[#8B1E1C] text-[0.65rem] font-bold tracking-[0.15em] uppercase">{month}</div>
                      <div style={{ fontFamily: 'var(--font-bebas)', fontSize: '2.5rem', lineHeight: 1 }} className="text-[#F6F1E8]">{day}</div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-[#F6F1E8] font-bold text-base mb-1">{event.title}</h3>
                      {event.location && <p className="text-[rgba(246,241,232,0.45)] text-sm">{event.location}</p>}
                    </div>
                    <span className="text-[rgba(246,241,232,0.4)] text-sm font-medium hidden md:block whitespace-nowrap">{timeStr}</span>
                  </div>
                )
              })}
            </div>
          ) : (
            <div className="border border-[rgba(255,255,255,0.06)] p-10 text-center">
              <p className="text-[rgba(246,241,232,0.4)] mb-4">No upcoming public events listed right now.</p>
              <p className="text-[rgba(246,241,232,0.25)] text-sm">Check back soon, or follow us on social media for last-minute appearances.</p>
            </div>
          )}

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href="/events"
              className="inline-block border-[1.5px] border-[rgba(255,215,111,0.4)] text-[#FFD76F] px-7 py-3 text-[0.82rem] font-bold tracking-[0.1em] uppercase hover:border-[#FFD76F] hover:bg-[rgba(255,215,111,0.05)] transition-all"
            >
              View Full Calendar
            </Link>
            <Link
              href="/book"
              className="inline-block bg-[#8B1E1C] text-white px-7 py-3 text-[0.82rem] font-bold tracking-[0.1em] uppercase hover:bg-[#6e1716] transition-colors"
            >
              Book a Private Event
            </Link>
          </div>
        </div>
      </section>

      {/* MENU TEASER */}
      <section className="bg-[#F6F1E8] py-20 px-6 md:px-10 border-t-2 border-[#0D0A09]">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <div>
              <span className="text-[#8B1E1C] text-[0.7rem] font-bold tracking-[0.25em] uppercase block mb-2">What We Serve</span>
              <h2 style={{ fontFamily: 'var(--font-bebas)', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', letterSpacing: '0.03em' }} className="text-[#0D0A09]">
                The Menu
              </h2>
              <p className="text-[#5C4638] mt-2 text-sm">All pricing is custom to your event. Contact us for a quote.</p>
            </div>
            <Link href="/menu" className="text-[#8B1E1C] text-[0.8rem] font-bold tracking-[0.1em] uppercase hover:text-[#6e1716] transition-colors">
              Full Menu →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[rgba(0,0,0,0.08)]">
            {menuFeatured.map((item, i) => (
              <div key={i} className="bg-[#F6F1E8] p-6 md:p-8 hover:bg-white transition-colors">
                <h3 className="font-extrabold text-[#0D0A09] mb-2">{item.name}</h3>
                <p className="text-[#9C7B6B] text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-white border border-[rgba(0,0,0,0.06)] flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[#5C4638] text-sm">
              <strong className="text-[#2D1A14]">Event pricing is always custom.</strong>{' '}
              Every event is different — guest count, duration, and menu selection all factor in. Call or submit a booking inquiry to get a quote.
            </p>
            <Link
              href="/book"
              className="whitespace-nowrap bg-[#8B1E1C] text-white px-6 py-3 text-[0.82rem] font-bold tracking-[0.1em] uppercase hover:bg-[#6e1716] transition-colors"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-[#0D0A09] py-20 px-6 md:px-10 border-t-2 border-[#0D0A09]">
        <div className="max-w-[1280px] mx-auto">
          <div className="mb-10">
            <span className="text-[#B8892F] text-[0.7rem] font-bold tracking-[0.25em] uppercase block mb-2">What Clients Say</span>
            <h2 style={{ fontFamily: 'var(--font-bebas)', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', letterSpacing: '0.03em' }} className="text-[#F6F1E8]">
              Trusted by Thousands
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-[rgba(255,255,255,0.05)]">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-[#0D0A09] p-8 hover:bg-[#1A1210] transition-colors">
                <div className="text-[#8B1E1C] text-2xl mb-4" aria-hidden>&ldquo;</div>
                <p className="text-[rgba(246,241,232,0.7)] leading-relaxed mb-6 italic text-sm">{t.quote}</p>
                <div className="border-t border-[rgba(255,255,255,0.06)] pt-4">
                  <p className="font-extrabold text-[#F6F1E8] text-sm">{t.author}</p>
                  <p className="text-[#B8892F] text-xs tracking-wide">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING CTA */}
      <section className="bg-[#8B1E1C] py-20 px-6 md:px-10 text-center">
        <h2
          className="text-white mb-4"
          style={{ fontFamily: 'var(--font-bebas)', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', letterSpacing: '0.03em' }}
        >
          Ready to Book the Trolley?
        </h2>
        <p className="text-[rgba(255,255,255,0.7)] text-base mb-8 max-w-lg mx-auto">
          Corporate events · Private parties · Film &amp; TV · Schools · Concerts · Festivals
        </p>
        <Link
          href="/book"
          className="inline-block bg-white text-[#8B1E1C] px-10 py-4 font-extrabold text-[0.9rem] tracking-[0.1em] uppercase hover:bg-[#FFD76F] transition-colors"
        >
          Request a Catering Quote
        </Link>
      </section>

      {/* NEWSLETTER */}
      <section className="bg-[#FFD76F] py-16 px-6 md:px-10 border-t-2 border-b-2 border-[#0D0A09]">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3
              className="text-[#0D0A09]"
              style={{ fontFamily: 'var(--font-bebas)', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', letterSpacing: '0.03em' }}
            >
              Stay in the Loop
            </h3>
            <p className="text-[rgba(13,10,9,0.6)] text-sm mt-1">Upcoming events, new menu items, and seasonal specials.</p>
          </div>
          <NewsletterForm />
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FoodEstablishment',
            name: 'Trolley Dogs',
            description: siteConfig.description,
            url: siteConfig.url,
            telephone: siteConfig.phone,
            email: siteConfig.email,
            areaServed: 'Greater Boston, New England',
            servesCuisine: ['Hot Dogs', 'American'],
            foundingDate: '1999',
            logo: siteConfig.logo,
            sameAs: [siteConfig.social.instagram, siteConfig.social.facebook].filter(s => s !== '#'),
          }),
        }}
      />
    </>
  )
}
