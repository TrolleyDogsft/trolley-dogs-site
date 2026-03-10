import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/page-hero'
import { getUpcomingEvents, formatEventDate, formatEventTime } from '@/lib/calendar'
import { seo } from '@/content/site'

export const revalidate = 3600 // Revalidate every hour

export const metadata: Metadata = {
  title: seo.events.title,
  description: seo.events.description,
  alternates: { canonical: '/events' },
}

export default async function EventsPage() {
  const events = await getUpcomingEvents()

  return (
    <>
      <PageHero
        eyebrow="Find the Trolley"
        title="Upcoming Appearances"
        subtitle="Public events, festivals, and community appearances across Greater Boston and New England."
      />

      <section className="py-16 md:py-24 px-6 md:px-10 bg-white">
        <div className="max-w-[1280px] mx-auto">

          {events.length > 0 ? (
            <>
              <div className="border-t-2 border-[#0D0A09]">
                {events.map((event) => {
                  const { month, day, full } = formatEventDate(event.start)
                  const timeStr = formatEventTime(event.start, event.end)
                  return (
                    <div
                      key={event.id}
                      className="flex items-start gap-6 md:gap-10 py-6 border-b border-[rgba(0,0,0,0.08)] hover:bg-[#FBF7F0] transition-colors px-3 -mx-3"
                    >
                      {/* Date */}
                      <div className="text-center min-w-[60px]">
                        <div className="text-[#8B1E1C] text-[0.65rem] font-bold tracking-[0.15em] uppercase">{month}</div>
                        <div
                          style={{ fontFamily: 'var(--font-bebas)', fontSize: '2.8rem', lineHeight: 1 }}
                          className="text-[#0D0A09]"
                        >
                          {day}
                        </div>
                      </div>

                      {/* Info */}
                      <div className="flex-1">
                        <h2 className="font-extrabold text-[#0D0A09] text-lg mb-1">{event.title}</h2>
                        <p className="text-[#9C7B6B] text-sm mb-1">{full}</p>
                        {event.location && (
                          <p className="text-[#5C4638] text-sm flex items-center gap-1.5">
                            <span className="text-[#8B1E1C]">📍</span> {event.location}
                          </p>
                        )}
                        {event.description && (
                          <p className="text-[#9C7B6B] text-sm mt-2 leading-relaxed">{event.description}</p>
                        )}
                      </div>

                      {/* Time */}
                      <div className="hidden md:block text-right">
                        <span className="text-[#5C4638] text-sm font-semibold whitespace-nowrap">{timeStr}</span>
                      </div>
                    </div>
                  )
                })}
              </div>

              <p className="text-[#9C7B6B] text-xs mt-8 text-center">
                Events are updated automatically from our Google Calendar. Check back often — we add appearances regularly.
              </p>
            </>
          ) : (
            <div className="text-center py-20 border border-[rgba(0,0,0,0.06)]">
              <p className="text-[#9C7B6B] text-lg mb-3">No upcoming public events listed right now.</p>
              <p className="text-[#9C7B6B] text-sm mb-8">
                We&apos;re always busy — check back soon or follow us on social media for last-minute announcements.
              </p>
              <Link
                href="/book"
                className="inline-block bg-[#8B1E1C] text-white px-8 py-3.5 font-extrabold text-sm tracking-wider uppercase hover:bg-[#6e1716] transition-colors"
              >
                Book a Private Event
              </Link>
            </div>
          )}

          {/* Private booking CTA */}
          <div className="mt-16 bg-[#0D0A09] p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3
                className="text-[#F6F1E8] mb-2"
                style={{ fontFamily: 'var(--font-bebas)', fontSize: '2rem', letterSpacing: '0.03em' }}
              >
                Want the Trolley at Your Event?
              </h3>
              <p className="text-[rgba(246,241,232,0.5)] text-sm">
                Don&apos;t wait for a public appearance. Book us for your private event.
              </p>
            </div>
            <Link
              href="/book"
              className="whitespace-nowrap bg-[#8B1E1C] text-white px-8 py-4 font-extrabold text-sm tracking-wider uppercase hover:bg-[#6e1716] transition-colors"
            >
              Request a Booking
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
