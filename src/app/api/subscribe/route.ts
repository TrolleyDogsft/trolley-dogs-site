import { NextRequest, NextResponse } from 'next/server'
import { subscribeToKlaviyo } from '@/lib/klaviyo'

export async function POST(req: NextRequest) {
  try {
    const { email, firstName, phone } = await req.json()

    if (!email) {
      return NextResponse.json({ success: false, message: 'Email is required.' }, { status: 400 })
    }

    const result = await subscribeToKlaviyo(email, firstName, phone)
    return NextResponse.json(result, { status: result.success ? 200 : 500 })
  } catch (err) {
    console.error('Subscribe error:', err)
    return NextResponse.json({ success: false, message: 'Something went wrong.' }, { status: 500 })
  }
}
