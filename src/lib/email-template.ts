import type { CalendarEvent } from './calendar'
import { formatEventDate, formatEventTime } from './calendar'

export function buildWeeklyDigestHTML(events: CalendarEvent[], intro: string): string {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://trolleydogsft.com'
  const phone = process.env.NEXT_PUBLIC_BUSINESS_PHONE || '781-888-2930'

  const eventRows = events.map((event) => {
    const { month, day, full } = formatEventDate(event.start)
    const time = formatEventTime(event.start, event.end)
    return `
      <tr>
        <td style="padding: 0; border-bottom: 1px solid #e8dfc8;">
          <table cellpadding="0" cellspacing="0" border="0" width="100%">
            <tr>
              <td width="64" style="padding: 20px 16px 20px 0; vertical-align: top; text-align: center;">
                <div style="font-family: Arial, sans-serif; font-size: 10px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: #C0311B; line-height: 1;">${month}</div>
                <div style="font-family: Arial, sans-serif; font-size: 36px; font-weight: 700; color: #1C0F08; line-height: 1; margin-top: 2px;">${day}</div>
              </td>
              <td style="padding: 20px 0; vertical-align: top; border-left: 1px solid #e8dfc8; padding-left: 16px;">
                <div style="font-family: Arial, sans-serif; font-size: 15px; font-weight: 700; color: #1C0F08; margin-bottom: 4px;">${escapeHtml(event.title)}</div>
                <div style="font-family: Arial, sans-serif; font-size: 13px; color: #6B5B4E;">${escapeHtml(full)}</div>
                ${event.location ? `<div style="font-family: Arial, sans-serif; font-size: 13px; color: #6B5B4E; margin-top: 2px;">${escapeHtml(event.location)}</div>` : ''}
                <div style="font-family: Arial, sans-serif; font-size: 12px; color: #C0311B; font-weight: 600; margin-top: 4px;">${escapeHtml(time)}</div>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    `
  }).join('')

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Trolley Dogs — Weekly Update</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f0e8d8; font-family: Arial, sans-serif;">
  <table cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #f0e8d8;">
    <tr>
      <td align="center" style="padding: 24px 16px;">

        <!-- Email container -->
        <table cellpadding="0" cellspacing="0" border="0" width="600" style="max-width: 600px; width: 100%; background-color: #FBF5E8; border: 1px solid #ddd5c0;">

          <!-- Header -->
          <tr>
            <td style="background-color: #C0311B; padding: 24px 32px;">
              <table cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr>
                  <td>
                    <img src="${siteUrl}/logo-bw.jpg" alt="Trolley Dogs" width="48" height="48"
                      style="border-radius: 50%; border: 2px solid #F0C040; display: block;" />
                  </td>
                  <td style="padding-left: 16px;">
                    <div style="font-family: Georgia, serif; font-size: 22px; font-weight: 700; color: #FBF5E8; line-height: 1;">Trolley Dogs</div>
                    <div style="font-family: Arial, sans-serif; font-size: 11px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; color: rgba(251,245,232,0.65); margin-top: 4px;">Northeast's #1 Food Truck Since 1999</div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Gold accent bar -->
          <tr>
            <td style="height: 3px; background-color: #F0C040;"></td>
          </tr>

          <!-- Intro -->
          <tr>
            <td style="padding: 32px 32px 24px;">
              <p style="font-family: Arial, sans-serif; font-size: 16px; line-height: 1.7; color: #1C0F08; margin: 0;">${escapeHtml(intro)}</p>
            </td>
          </tr>

          <!-- Events heading -->
          <tr>
            <td style="padding: 0 32px 12px;">
              <div style="font-family: Arial, sans-serif; font-size: 10px; font-weight: 700; letter-spacing: 3px; text-transform: uppercase; color: #C0311B;">Upcoming Appearances</div>
            </td>
          </tr>

          <!-- Event list -->
          <tr>
            <td style="padding: 0 32px;">
              <table cellpadding="0" cellspacing="0" border="0" width="100%" style="border-top: 2px solid #1C0F08;">
                ${eventRows}
              </table>
            </td>
          </tr>

          <!-- CTA -->
          <tr>
            <td style="padding: 32px; text-align: center;">
              <a href="${siteUrl}/book"
                style="display: inline-block; background-color: #C0311B; color: #FBF5E8; font-family: Arial, sans-serif; font-size: 13px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; text-decoration: none; padding: 14px 36px;">
                Book Us for Your Event
              </a>
              <p style="font-family: Arial, sans-serif; font-size: 12px; color: #6B5B4E; margin-top: 16px; margin-bottom: 0;">
                Corporate · Private Parties · Film &amp; TV · Festivals · Schools
              </p>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="height: 1px; background-color: #ddd5c0;"></td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #1C0F08; padding: 24px 32px; text-align: center;">
              <div style="font-family: Georgia, serif; font-size: 16px; color: #FBF5E8; margin-bottom: 8px;">Trolley Dogs</div>
              <div style="font-family: Arial, sans-serif; font-size: 12px; color: rgba(251,245,232,0.5); margin-bottom: 4px;">
                <a href="tel:${phone.replace(/-/g, '')}" style="color: #F0C040; text-decoration: none;">${phone}</a>
                &nbsp;&middot;&nbsp;
                <a href="${siteUrl}" style="color: rgba(251,245,232,0.5); text-decoration: none;">trolleydogsft.com</a>
              </div>
              <div style="font-family: Arial, sans-serif; font-size: 11px; color: rgba(251,245,232,0.3); margin-top: 12px;">
                Greater Boston &amp; New England &middot; Est. 1999
              </div>
              <div style="font-family: Arial, sans-serif; font-size: 11px; color: rgba(251,245,232,0.25); margin-top: 16px;">
                You're receiving this because you subscribed at trolleydogsft.com.<br />
                *|UNSUB|*
              </div>
            </td>
          </tr>

        </table>
        <!-- /Email container -->

      </td>
    </tr>
  </table>
</body>
</html>`
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}
