import { NextRequest, NextResponse } from 'next/server'
import { getUpcomingEvents } from '@/lib/calendar'
import { generateNewsletterContent } from '@/lib/claude'
import { buildWeeklyDigestHTML } from '@/lib/email-template'
import { sendWeeklyDigest } from '@/lib/mailchimp-campaigns'

export const dynamic = 'force-dynamic'

export async function GET(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get('secret')

  if (!process.env.CRON_SECRET || secret !== process.env.CRON_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const events = await getUpcomingEvents()

    if (events.length === 0) {
      return NextResponse.json({ status: 'skipped', reason: 'no upcoming events' })
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
