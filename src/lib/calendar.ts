export interface CalendarEvent {
  id: string
  title: string
  start: Date
  end: Date | null
  location: string | null
  description: string | null
}

function parseICSDate(dateStr: string): Date {
  // Format: YYYYMMDDTHHMMSSZ or YYYYMMDD
  const clean = dateStr.replace('Z', '').replace('T', '')
  const year = parseInt(clean.substring(0, 4))
  const month = parseInt(clean.substring(4, 6)) - 1
  const day = parseInt(clean.substring(6, 8))
  const hours = clean.length > 8 ? parseInt(clean.substring(8, 10)) : 0
  const minutes = clean.length > 10 ? parseInt(clean.substring(10, 12)) : 0
  return new Date(year, month, day, hours, minutes)
}

function unescapeICS(str: string): string {
  return str
    .replace(/\\n/g, '\n')
    .replace(/\\,/g, ',')
    .replace(/\\;/g, ';')
    .replace(/\\\\/g, '\\')
}

export async function getUpcomingEvents(limit?: number): Promise<CalendarEvent[]> {
  const icsUrl = process.env.GOOGLE_CALENDAR_ICAL_URL

  if (!icsUrl) {
    // Return empty array gracefully if not configured
    return []
  }

  try {
    const res = await fetch(icsUrl, {
      next: { revalidate: 3600 }, // revalidate every hour
    })

    if (!res.ok) return []

    const text = await res.text()
    const events: CalendarEvent[] = []

    const eventBlocks = text.split('BEGIN:VEVENT').slice(1)

    for (const block of eventBlocks) {
      const lines = block.split('\n').map(l => l.trim())

      const getValue = (key: string): string | null => {
        const line = lines.find(l => l.startsWith(key + ':') || l.startsWith(key + ';'))
        if (!line) return null
        const colonIdx = line.indexOf(':')
        return colonIdx !== -1 ? unescapeICS(line.substring(colonIdx + 1).trim()) : null
      }

      const uid = getValue('UID') || Math.random().toString()
      const summary = getValue('SUMMARY')
      const dtstart = getValue('DTSTART') || lines.find(l => l.startsWith('DTSTART'))?.split(':')[1]?.trim()
      const dtend = getValue('DTEND') || lines.find(l => l.startsWith('DTEND'))?.split(':')[1]?.trim()
      const location = getValue('LOCATION')
      const description = getValue('DESCRIPTION')

      if (!summary || !dtstart) continue

      const start = parseICSDate(dtstart)
      const end = dtend ? parseICSDate(dtend) : null

      // Only include upcoming events
      if (start < new Date()) continue

      events.push({ id: uid, title: summary, start, end, location, description })
    }

    // Sort chronologically
    events.sort((a, b) => a.start.getTime() - b.start.getTime())

    return limit ? events.slice(0, limit) : events
  } catch {
    return []
  }
}

export function formatEventDate(date: Date): { month: string; day: string; full: string } {
  return {
    month: date.toLocaleDateString('en-US', { month: 'short' }).toUpperCase(),
    day: date.getDate().toString(),
    full: date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' }),
  }
}

export function formatEventTime(start: Date, end: Date | null): string {
  const fmt = (d: Date) => d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })
  if (!end) return fmt(start)
  return `${fmt(start)} – ${fmt(end)}`
}
