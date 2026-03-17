import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import { siteConfig, stats, services, menuCategories, seo } from '@/content/site'
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
      <section style={{ position: 'relative', minHeight: '92vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <Image
          src="/images/new-truck-1.jpg"
          alt="Trolley Dogs food truck at a New England catering event"
          fill
          priority
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
        <div
          style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(28,15,8,0.92) 40%, rgba(28,15,8,0.45) 100%)' }}
          aria-hidden
        />
        <div className="relative z-10 max-w-[1280px] mx-auto w-full px-8 md:px-16 py-20">
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
            <span style={{ width: 32, height: 2, background: 'var(--red)', display: 'inline-block', flexShrink: 0 }} />
            <span style={{ fontFamily: 'var(--font-head)', fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.25em', textTransform: 'uppercase' as const, color: 'var(--gold)' }}>
              Since 1999 &nbsp;&middot;&nbsp; Northeast&rsquo;s Finest
            </span>
          </div>
          <h1
            style={{
              fontFamily: 'var(--font-head)',
              fontSize: 'clamp(3rem, 7vw, 5.5rem)',
              fontWeight: 700,
              letterSpacing: '0.02em',
              lineHeight: 1.05,
              color: 'var(--cream)',
              marginBottom: 24,
              textTransform: 'uppercase' as const,
            }}
          >
            Book the Trolley.<br />
            <span style={{ color: 'var(--red)' }}>Feed the Crowd.</span>
          </h1>
          <p style={{ color: 'rgba(251,245,232,0.6)', fontSize: '1rem', lineHeight: 1.8, maxWidth: 480, marginBottom: 36 }}>
            The largest food truck catering vendor in the Northeast. Four trucks, thousands of events,
            and over 25 years of making every occasion unforgettable.
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' as const, alignItems: 'center' }}>
            <Link
              href="/book"
              style={{ background: 'var(--red)', color: 'var(--cream)', padding: '14px 32px', fontFamily: 'var(--font-head)', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase' as const, textDecoration: 'none', display: 'inline-block' }}
            >
              Get a Catering Quote
            </Link>
            <Link
              href="/events"
              style={{ border: '1.5px solid rgba(251,245,232,0.3)', color: 'rgba(251,245,232,0.78)', padding: '13px 28px', fontFamily: 'var(--font-head)', fontSize: '0.82rem', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase' as const, textDecoration: 'none', display: 'inline-block' }}
            >
              Find the Trolley
            </Link>
          </div>
        </div>

        {/* 25+ badge */}
        <div
          className="hidden md:block"
          style={{ position: 'absolute', right: 48, top: '50%', transform: 'translateY(-50%)', background: 'var(--red)', padding: '20px 28px', textAlign: 'center' as const, zIndex: 10 }}
        >
          <div style={{ fontFamily: 'var(--font-head)', fontSize: '2.5rem', fontWeight: 700, color: 'var(--cream)', lineHeight: 1 }}>25+</div>
          <div style={{ fontFamily: 'var(--font-head)', fontSize: '0.58rem', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase' as const, color: 'rgba(251,245,232,0.7)', marginTop: 6 }}>
            Years in Business
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <div style={{ background: 'var(--red)', borderBottom: '3px solid var(--red-dk)' }}>
        <div className="max-w-[1280px] mx-auto grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              style={{ padding: '28px 20px', textAlign: 'center' as const, borderRight: i < stats.length - 1 ? '1px solid rgba(251,245,232,0.15)' : 'none' }}
            >
              <div style={{ fontFamily: 'var(--font-head)', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 700, color: 'var(--cream)', lineHeight: 1, marginBottom: 6 }}>
                {stat.value}
              </div>
              <div style={{ fontFamily: 'var(--font-head)', fontSize: '0.62rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase' as const, color: 'rgba(251,245,232,0.65)' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FEATURE PHOTO CARDS */}
      <section style={{ background: 'var(--cream2)', padding: '80px 40px' }}>
        <div className="max-w-[1280px] mx-auto">
          <div style={{ textAlign: 'center' as const, marginBottom: 48 }}>
            <div style={{ fontFamily: 'var(--font-head)', fontSize: '0.68rem', fontWeight: 500, letterSpacing: '0.25em', textTransform: 'uppercase' as const, color: 'var(--red)', marginBottom: 8 }}>
              Real Food. Real Events.
            </div>
            <h2 style={{ fontFamily: 'var(--font-head)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase' as const, color: 'var(--dark)' }}>
              Made Fresh at Every Stop
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { src: '/images/td-hot-dog.jpg', tag: 'Signature', title: 'All-Beef Hot Dogs', alt: 'Trolley Dogs signature all-beef hot dog' },
              { src: '/images/new-truck.jpg', tag: 'The Fleet', title: '4 Trucks Ready to Roll', alt: 'Trolley Dogs food truck at an outdoor event' },
              { src: '/images/event-2023.jpg', tag: 'Events', title: 'Thousands Served', alt: 'Trolley Dogs serving a large crowd at an event' },
            ].map((card) => (
              <div key={card.src} style={{ position: 'relative', overflow: 'hidden', aspectRatio: '4/3' as unknown as string }}>
                <Image
                  src={card.src}
                  alt={card.alt}
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(28,15,8,0.82) 0%, transparent 55%)' }} aria-hidden />
                <div style={{ position: 'absolute', bottom: 0, left: 0, padding: '20px 24px' }}>
                  <div style={{ fontFamily: 'var(--font-head)', fontSize: '0.6rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase' as const, color: 'var(--gold)', marginBottom: 4 }}>
                    {card.tag}
                  </div>
                  <div style={{ fontFamily: 'var(--font-head)', fontSize: '1.05rem', fontWeight: 700, color: 'var(--cream)', letterSpacing: '0.04em', textTransform: 'uppercase' as const }}>
                    {card.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SPLIT */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        <div style={{ position: 'relative', minHeight: 420 }}>
          <Image
            src="/images/green-trolley.jpg"
            alt="The original Trolley Dogs horse-drawn trolley car"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div style={{ background: 'var(--dark)', padding: '64px 48px', display: 'flex', flexDirection: 'column' as const, justifyContent: 'center' }}>
          <div style={{ fontFamily: 'var(--font-head)', fontSize: '0.68rem', fontWeight: 500, letterSpacing: '0.25em', textTransform: 'uppercase' as const, color: 'var(--gold)', marginBottom: 12 }}>
            Our Story
          </div>
          <h2 style={{ fontFamily: 'var(--font-head)', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase' as const, color: 'var(--cream)', lineHeight: 1.2, marginBottom: 24 }}>
            Born in Boston.<br />Built to Feed.
          </h2>
          <p style={{ color: 'rgba(251,245,232,0.58)', fontSize: '0.9rem', lineHeight: 1.8, marginBottom: 16 }}>
            In 1999, inspired by a PBS documentary on the legendary hot dog culture of New England,
            Trolley Dogs launched with one refurbished replica of a late-1800s horse-drawn trolley car
            and a commitment to serving the best all-beef hot dogs in Boston.
          </p>
          <p style={{ color: 'rgba(251,245,232,0.58)', fontSize: '0.9rem', lineHeight: 1.8, marginBottom: 32 }}>
            Twenty-five years later, we&rsquo;re the northeast&rsquo;s largest food truck vendor — four trucks,
            a rotating menu of signature dogs, sides, and drinks, and clients ranging from FX TV productions
            to the Worcester Palladium.
          </p>
          <Link
            href="/about"
            style={{ display: 'inline-block', border: '1.5px solid rgba(251,245,232,0.28)', color: 'rgba(251,245,232,0.78)', padding: '12px 28px', fontFamily: 'var(--font-head)', fontSize: '0.78rem', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase' as const, textDecoration: 'none', width: 'fit-content' }}
          >
            Read Our Full Story
          </Link>
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ background: 'var(--cream)', padding: '80px 40px' }}>
        <div className="max-w-[1280px] mx-auto">
          <div style={{ marginBottom: 48 }}>
            <div style={{ fontFamily: 'var(--font-head)', fontSize: '0.68rem', fontWeight: 500, letterSpacing: '0.25em', textTransform: 'uppercase' as const, color: 'var(--red)', marginBottom: 8 }}>
              What We Do
            </div>
            <h2 style={{ fontFamily: 'var(--font-head)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase' as const, color: 'var(--dark)' }}>
              We Cater Every Occasion
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: 'rgba(28,15,8,0.1)' }}>
            {services.slice(0, 4).map((service, i) => (
              <div key={i} style={{ background: 'var(--cream)', padding: '36px 28px' }}>
                <div style={{ fontFamily: 'var(--font-head)', fontSize: '2.5rem', fontWeight: 700, color: 'rgba(192,49,27,0.12)', lineHeight: 1, marginBottom: 16 }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 style={{ fontFamily: 'var(--font-head)', fontSize: '0.9rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' as const, color: 'var(--dark)', marginBottom: 10 }}>
                  {service.title}
                </h3>
                <p style={{ color: 'var(--gray)', fontSize: '0.85rem', lineHeight: 1.7 }}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MENU STRIP */}
      <section style={{ background: 'var(--dark)', padding: '80px 40px' }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <div style={{ fontFamily: 'var(--font-head)', fontSize: '0.68rem', fontWeight: 500, letterSpacing: '0.25em', textTransform: 'uppercase' as const, color: 'var(--gold)', marginBottom: 8 }}>
                What We Serve
              </div>
              <h2 style={{ fontFamily: 'var(--font-head)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase' as const, color: 'var(--cream)' }}>
                Gigantic All-Beef. Hand Made in MA.
              </h2>
            </div>
            <Link
              href="/menu"
              style={{ display: 'inline-block', background: 'var(--gold)', color: 'var(--dark)', padding: '12px 28px', fontFamily: 'var(--font-head)', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase' as const, textDecoration: 'none', whiteSpace: 'nowrap' as const, flexShrink: 0 }}
            >
              View Full Menu
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-px" style={{ background: 'rgba(251,245,232,0.06)' }}>
            {menuCategories.map((cat, i) => (
              <div key={i} style={{ background: 'var(--dark2)', padding: '28px 20px', textAlign: 'center' as const }}>
                <div style={{ fontFamily: 'var(--font-head)', fontSize: '0.88rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' as const, color: 'var(--cream)', marginBottom: 6 }}>
                  {cat.name}
                </div>
                <div style={{ color: 'var(--gold)', fontSize: '0.68rem', fontFamily: 'var(--font-head)', letterSpacing: '0.12em', textTransform: 'uppercase' as const }}>
                  {cat.items.length} options
                </div>
              </div>
            ))}
          </div>

          <div
            className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mt-4 px-5 py-4"
            style={{ background: 'rgba(251,245,232,0.04)', border: '1px solid rgba(251,245,232,0.06)' }}
          >
            <p style={{ color: 'rgba(251,245,232,0.5)', fontSize: '0.85rem' }}>
              All pricing is custom to your event — contact us for a quote.
            </p>
            <Link
              href="/book"
              style={{ color: 'var(--gold)', fontFamily: 'var(--font-head)', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' as const, textDecoration: 'none', whiteSpace: 'nowrap' as const }}
            >
              Get a Quote &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section style={{ background: 'var(--red)', padding: '72px 40px', textAlign: 'center' as const }}>
        <div className="max-w-[820px] mx-auto">
          <div style={{ fontFamily: 'var(--font-head)', fontSize: '0.68rem', fontWeight: 500, letterSpacing: '0.25em', textTransform: 'uppercase' as const, color: 'rgba(251,245,232,0.6)', marginBottom: 28 }}>
            Trusted By
          </div>
          <blockquote style={{ fontFamily: 'var(--font-head)', fontSize: 'clamp(1.3rem, 2.8vw, 1.9rem)', fontWeight: 400, color: 'var(--cream)', lineHeight: 1.55, fontStyle: 'italic', marginBottom: 28 }}>
            &ldquo;Trolley Dogs showed up on time, fed 400 people without a hitch, and had the crew raving for days. Absolute professionals.&rdquo;
          </blockquote>
          <div style={{ color: 'rgba(251,245,232,0.65)', fontSize: '0.8rem', fontFamily: 'var(--font-head)', letterSpacing: '0.12em', textTransform: 'uppercase' as const }}>
            — Production Coordinator, FX Network Boston
          </div>
        </div>
      </section>

      {/* UPCOMING EVENTS */}
      <section style={{ background: 'var(--cream2)', padding: '80px 40px' }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <div>
              <div style={{ fontFamily: 'var(--font-head)', fontSize: '0.68rem', fontWeight: 500, letterSpacing: '0.25em', textTransform: 'uppercase' as const, color: 'var(--red)', marginBottom: 8 }}>
                Upcoming
              </div>
              <h2 style={{ fontFamily: 'var(--font-head)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase' as const, color: 'var(--dark)' }}>
                Find the Trolley Near You
              </h2>
            </div>
            <Link
              href="/events"
              style={{ display: 'inline-block', background: 'var(--dark)', color: 'var(--cream)', padding: '10px 24px', fontFamily: 'var(--font-head)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' as const, textDecoration: 'none' }}
            >
              All Events
            </Link>
          </div>

          {upcomingEvents.length > 0 ? (
            <div style={{ border: '1px solid rgba(28,15,8,0.1)' }}>
              {upcomingEvents.map((event) => {
                const { month, day } = formatEventDate(event.start)
                const timeStr = formatEventTime(event.start, event.end)
                return (
                  <div
                    key={event.id}
                    className="flex items-center gap-6 md:gap-10"
                    style={{ padding: '22px 28px', borderBottom: '1px solid rgba(28,15,8,0.08)', background: 'var(--cream)' }}
                  >
                    <div style={{ textAlign: 'center' as const, minWidth: 52, flexShrink: 0 }}>
                      <div style={{ fontFamily: 'var(--font-head)', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' as const, color: 'var(--red)' }}>{month}</div>
                      <div style={{ fontFamily: 'var(--font-head)', fontSize: '2.2rem', fontWeight: 700, color: 'var(--dark)', lineHeight: 1 }}>{day}</div>
                    </div>
                    <div style={{ flex: 1 }}>
                      <h3 style={{ fontFamily: 'var(--font-head)', fontSize: '0.92rem', fontWeight: 600, color: 'var(--dark)', marginBottom: 4, letterSpacing: '0.04em' }}>{event.title}</h3>
                      {event.location && <p style={{ color: 'var(--gray)', fontSize: '0.82rem' }}>{event.location}</p>}
                    </div>
                    <span className="hidden md:block" style={{ color: 'var(--gray)', fontSize: '0.82rem', whiteSpace: 'nowrap' as const }}>{timeStr}</span>
                  </div>
                )
              })}
            </div>
          ) : (
            <div style={{ border: '1px solid rgba(28,15,8,0.1)', padding: '40px', textAlign: 'center' as const, background: 'var(--cream)' }}>
              <p style={{ color: 'var(--gray)', marginBottom: 8 }}>No upcoming public events listed right now.</p>
              <p style={{ color: 'var(--gray)', fontSize: '0.85rem' }}>Check back soon, or follow us on social media for last-minute appearances.</p>
            </div>
          )}

          <div style={{ marginTop: 28, display: 'flex', flexWrap: 'wrap' as const, gap: 12 }}>
            <Link
              href="/events"
              style={{ display: 'inline-block', border: '1.5px solid rgba(28,15,8,0.25)', color: 'var(--dark)', padding: '12px 28px', fontFamily: 'var(--font-head)', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' as const, textDecoration: 'none' }}
            >
              View Full Calendar
            </Link>
            <Link
              href="/book"
              style={{ display: 'inline-block', background: 'var(--red)', color: 'var(--cream)', padding: '12px 28px', fontFamily: 'var(--font-head)', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' as const, textDecoration: 'none' }}
            >
              Book a Private Event
            </Link>
          </div>
        </div>
      </section>

      {/* BOOKING CTA */}
      <section style={{ background: 'var(--dark)', padding: '80px 40px' }}>
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-10">
          <div>
            <h2 style={{ fontFamily: 'var(--font-head)', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase' as const, color: 'var(--cream)', marginBottom: 14, lineHeight: 1.1 }}>
              Ready to <span style={{ color: 'var(--red)' }}>Book the Trolley?</span>
            </h2>
            <p style={{ color: 'rgba(251,245,232,0.55)', fontSize: '0.9rem', maxWidth: 440, lineHeight: 1.7 }}>
              Every deal is custom. Tell us about your event and we&rsquo;ll build a package around your needs.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' as const, flexShrink: 0 }}>
            <Link
              href="/book"
              style={{ display: 'inline-block', background: 'var(--gold)', color: 'var(--dark)', padding: '14px 32px', fontFamily: 'var(--font-head)', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase' as const, textDecoration: 'none' }}
            >
              Request a Catering Quote
            </Link>
            <a
              href={`tel:${siteConfig.phone.replace(/-/g, '')}`}
              style={{ display: 'inline-block', border: '1.5px solid rgba(251,245,232,0.25)', color: 'rgba(251,245,232,0.78)', padding: '13px 28px', fontFamily: 'var(--font-head)', fontSize: '0.82rem', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase' as const, textDecoration: 'none' }}
            >
              Call {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>

      {/* SOCIAL SPLIT */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div style={{ background: 'var(--dark2)', padding: '56px 48px', borderRight: '1px solid rgba(251,245,232,0.04)' }}>
          <div style={{ fontFamily: 'var(--font-head)', fontSize: '0.6rem', fontWeight: 500, letterSpacing: '0.3em', textTransform: 'uppercase' as const, color: 'rgba(251,245,232,0.35)', marginBottom: 8 }}>
            Instagram
          </div>
          <div style={{ fontFamily: 'var(--font-head)', fontSize: '1.6rem', fontWeight: 700, color: 'var(--cream)', marginBottom: 16, letterSpacing: '0.04em' }}>
            @TrolleyDogsft
          </div>
          <p style={{ color: 'rgba(251,245,232,0.45)', fontSize: '0.85rem', maxWidth: 280, lineHeight: 1.7, marginBottom: 32 }}>
            Behind-the-scenes, event photos, and daily specials from the fleet.
          </p>
          <a
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'inline-block', border: '1.5px solid rgba(251,245,232,0.2)', color: 'rgba(251,245,232,0.75)', padding: '10px 24px', fontFamily: 'var(--font-head)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' as const, textDecoration: 'none' }}
          >
            Follow Us
          </a>
        </div>
        <div style={{ background: 'var(--dark)', padding: '56px 48px' }}>
          <div style={{ fontFamily: 'var(--font-head)', fontSize: '0.6rem', fontWeight: 500, letterSpacing: '0.3em', textTransform: 'uppercase' as const, color: 'rgba(251,245,232,0.35)', marginBottom: 8 }}>
            Facebook
          </div>
          <div style={{ fontFamily: 'var(--font-head)', fontSize: '1.6rem', fontWeight: 700, color: 'var(--cream)', marginBottom: 16, letterSpacing: '0.04em' }}>
            /TrolleyDogs
          </div>
          <p style={{ color: 'rgba(251,245,232,0.45)', fontSize: '0.85rem', maxWidth: 280, lineHeight: 1.7, marginBottom: 32 }}>
            Event announcements, menus, and updates from Greater Boston to New England.
          </p>
          <a
            href={siteConfig.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'inline-block', border: '1.5px solid rgba(251,245,232,0.2)', color: 'rgba(251,245,232,0.75)', padding: '10px 24px', fontFamily: 'var(--font-head)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' as const, textDecoration: 'none' }}
          >
            Like Our Page
          </a>
        </div>
      </div>

      {/* NEWSLETTER */}
      <section style={{ background: 'var(--cream2)', padding: '64px 40px', borderTop: '2px solid rgba(28,15,8,0.08)', borderBottom: '2px solid rgba(28,15,8,0.08)' }}>
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 style={{ fontFamily: 'var(--font-head)', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase' as const, color: 'var(--dark)', marginBottom: 6 }}>
              Stay in the Loop
            </h3>
            <p style={{ color: 'var(--gray)', fontSize: '0.88rem' }}>
              Get event announcements and updates from the Trolley Dogs fleet.
            </p>
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
