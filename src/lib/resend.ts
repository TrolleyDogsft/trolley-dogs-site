import { Resend } from 'resend'

function getResend() {
  const key = process.env.RESEND_API_KEY
  if (!key) throw new Error('RESEND_API_KEY is not set. Add it to your .env.local or Vercel environment variables.')
  return new Resend(key)
}

export interface BookingEmailData {
  name: string
  email: string
  phone: string
  eventDate: string
  eventType: string
  guestCount: string
  location: string
  details?: string
}

export async function sendBookingEmail(data: BookingEmailData) {
  const subject = `New Catering Inquiry — ${data.name} — ${data.eventDate}`

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: #8B1E1C; padding: 20px 30px;">
        <h1 style="color: white; margin: 0; font-size: 22px;">New Catering Inquiry</h1>
      </div>
      <div style="background: #f9f6f0; padding: 30px;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px 0; color: #5C4638; font-weight: bold; width: 160px;">Name</td><td style="padding: 8px 0;">${data.name}</td></tr>
          <tr><td style="padding: 8px 0; color: #5C4638; font-weight: bold;">Email</td><td style="padding: 8px 0;"><a href="mailto:${data.email}">${data.email}</a></td></tr>
          <tr><td style="padding: 8px 0; color: #5C4638; font-weight: bold;">Phone</td><td style="padding: 8px 0;"><a href="tel:${data.phone}">${data.phone}</a></td></tr>
          <tr><td style="padding: 8px 0; color: #5C4638; font-weight: bold;">Event Date</td><td style="padding: 8px 0;">${data.eventDate}</td></tr>
          <tr><td style="padding: 8px 0; color: #5C4638; font-weight: bold;">Event Type</td><td style="padding: 8px 0;">${data.eventType}</td></tr>
          <tr><td style="padding: 8px 0; color: #5C4638; font-weight: bold;">Guest Count</td><td style="padding: 8px 0;">${data.guestCount}</td></tr>
          <tr><td style="padding: 8px 0; color: #5C4638; font-weight: bold;">Location</td><td style="padding: 8px 0;">${data.location}</td></tr>
          ${data.details ? `<tr><td style="padding: 8px 0; color: #5C4638; font-weight: bold; vertical-align: top;">Details</td><td style="padding: 8px 0;">${data.details.replace(/\n/g, '<br>')}</td></tr>` : ''}
        </table>
      </div>
      <div style="background: #2D1A14; padding: 16px 30px; text-align: center;">
        <p style="color: rgba(255,255,255,0.5); font-size: 12px; margin: 0;">Trolley Dogs · trolleydogsft.com · 781-888-2930</p>
      </div>
    </div>
  `

  return getResend().emails.send({
    from: process.env.BOOKING_FROM_EMAIL || 'bookings@send.trolleydogsft.com',
    to: process.env.BOOKING_TO_EMAIL || 'gerald@trolleydogsft.com',
    cc: process.env.BOOKING_CC_EMAIL ? [process.env.BOOKING_CC_EMAIL] : undefined,
    replyTo: data.email,
    subject,
    html,
  })
}

export async function sendContactEmail(data: { name: string; email: string; message: string }) {
  return getResend().emails.send({
    from: process.env.BOOKING_FROM_EMAIL || 'bookings@send.trolleydogsft.com',
    to: process.env.NEXT_PUBLIC_BUSINESS_EMAIL || 'hello@trolleydogsft.com',
    replyTo: data.email,
    subject: `New Contact Form Message — ${data.name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px;">
        <h2>New Contact Message</h2>
        <p><strong>From:</strong> ${data.name} &lt;${data.email}&gt;</p>
        <p><strong>Message:</strong><br>${data.message.replace(/\n/g, '<br>')}</p>
      </div>
    `,
  })
}
