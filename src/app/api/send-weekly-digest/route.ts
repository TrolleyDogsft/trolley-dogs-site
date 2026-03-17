import { NextRequest, NextResponse } from 'next/server'
import { getUpcomingEvents } from '@/lib/calendar'
import { generateNewsletterContent } from '@/lib/claude'
import { buildWeeklyDigestHTML } from '@/lib/email-template'
import { sendWeeklyDigest } from '@/lib/klaviyo-campaigns'

export const dynamic = 'force-dynamic'

// Show events within the next 14 days — enough to be useful, not overwhelming
const TWO_WEEKS_MS = 14 * 24 * 60 * 60 * 1000

export async function GET(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get('secret')

  if (!process.env.CRON_SECRET || secret !== process.env.CRON_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const allEvents = await getUpcomingEvents()
    const cutoff = new Date(Date.now() + TWO_WEEKS_MS)
    const events = allEvents.filter((e) => e.start <= cutoff)

    if (events.length === 0) {
      return NextResponse.json({ status: 'skipped', reason: 'no upcoming events in next 14 days' })
    }

    const { intro, subject } = await generateNewsletterContent(events)
    const html = buildWeeklyDigestHTML(events, intro)
    await sendWeeklyDigest(html, subject)

    return NextResponse.json({ status: 'sent', subject, eventCount: events.length })
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err)
    console.error('[send-weekly-digest]', message)
    return NextResponse.json({ status: 'error', message }, { status: 500 })
  }
}
