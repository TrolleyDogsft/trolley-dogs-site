import Anthropic from '@anthropic-ai/sdk'
import type { CalendarEvent } from './calendar'
import { formatEventDate, formatEventTime } from './calendar'

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

export async function generateNewsletterContent(events: CalendarEvent[]): Promise<{
  intro: string
  subject: string
}> {
  const eventList = events.map((e) => {
    const { full } = formatEventDate(e.start)
    const time = formatEventTime(e.start, e.end)
    return `- ${e.title} · ${full} · ${time}${e.location ? ' · ' + e.location : ''}`
  }).join('\n')

  const message = await client.messages.create({
    model: 'claude-haiku-4-5-20251001',
    max_tokens: 200,
    messages: [
      {
        role: 'user',
        content: `You are writing a weekly email newsletter for Trolley Dogs, a beloved food truck company in Greater Boston, Massachusetts since 1999. They serve all-beef hot dogs, chicken, fries, and fresh-squeezed lemonade at public events across New England.

Write two things:
1. A subject line (one line, under 60 characters): highlight the most exciting event this week
2. An intro paragraph (2 sentences max): warm, local, casual tone. Mention the week ahead. No corporate speak. No emojis. Make it feel like it's from a neighbor, not a marketing department.

This week's upcoming public appearances:
${eventList}

Respond in this exact format:
SUBJECT: [subject line here]
INTRO: [intro paragraph here]`,
      },
    ],
  })

  const text = message.content[0].type === 'text' ? message.content[0].text : ''
  const subjectMatch = text.match(/SUBJECT:\s*(.+)/)
  const introMatch = text.match(/INTRO:\s*([\s\S]+)/)

  const subject = subjectMatch?.[1]?.trim() ?? `This Week: ${events[0].title} + Trolley Dogs Appearances`
  const intro = introMatch?.[1]?.trim() ?? `Hey neighbors — Trolley Dogs has some great appearances coming up this week. Here's where you can find us.`

  return { subject, intro }
}
