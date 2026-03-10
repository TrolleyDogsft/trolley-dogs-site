import { NextRequest, NextResponse } from 'next/server'
import { sendContactEmail } from '@/lib/resend'

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json({ success: false, message: 'All fields are required.' }, { status: 400 })
    }

    await sendContactEmail({ name, email, message })
    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact email error:', err)
    return NextResponse.json({ success: false, message: 'Failed to send message. Please try again.' }, { status: 500 })
  }
}
