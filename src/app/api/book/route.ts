import { NextRequest, NextResponse } from 'next/server'
import { sendBookingEmail } from '@/lib/resend'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, phone, eventDate, eventType, guestCount, location, details } = body

    if (!name || !email || !phone || !eventDate || !eventType || !guestCount || !location) {
      return NextResponse.json({ success: false, message: 'Please fill in all required fields.' }, { status: 400 })
    }

    await sendBookingEmail({ name, email, phone, eventDate, eventType, guestCount, location, details })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Booking email error:', err)
    return NextResponse.json({ success: false, message: 'Failed to send inquiry. Please try again or call us directly.' }, { status: 500 })
  }
}
