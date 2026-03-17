const API_KEY = process.env.MAILCHIMP_API_KEY ?? ''
const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID ?? ''
const SERVER_PREFIX = process.env.MAILCHIMP_SERVER_PREFIX ?? 'us12'
const BASE_URL = `https://${SERVER_PREFIX}.api.mailchimp.com/3.0`

function authHeader() {
  return 'Basic ' + Buffer.from(`anystring:${API_KEY}`).toString('base64')
}

export async function sendWeeklyDigest(html: string, subject: string): Promise<void> {
  if (!API_KEY || !AUDIENCE_ID) {
    throw new Error('Mailchimp not configured — MAILCHIMP_API_KEY or MAILCHIMP_AUDIENCE_ID missing')
  }

  // Step 1: Create campaign
  const createRes = await fetch(`${BASE_URL}/campaigns`, {
    method: 'POST',
    headers: {
      Authorization: authHeader(),
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      type: 'regular',
      recipients: { list_id: AUDIENCE_ID },
      settings: {
        subject_line: subject,
        from_name: 'Trolley Dogs',
        reply_to: process.env.NEXT_PUBLIC_BUSINESS_EMAIL || 'hello@trolleydogsft.com',
        title: `Weekly Digest — ${new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}`,
      },
    }),
  })

  if (!createRes.ok) {
    const err = await createRes.text()
    throw new Error(`Mailchimp create campaign failed: ${err}`)
  }

  const campaign = await createRes.json()
  const campaignId: string = campaign.id

  // Step 2: Set HTML content
  const contentRes = await fetch(`${BASE_URL}/campaigns/${campaignId}/content`, {
    method: 'PUT',
    headers: {
      Authorization: authHeader(),
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ html }),
  })

  if (!contentRes.ok) {
    const err = await contentRes.text()
    throw new Error(`Mailchimp set content failed: ${err}`)
  }

  // Step 3: Send
  const sendRes = await fetch(`${BASE_URL}/campaigns/${campaignId}/actions/send`, {
    method: 'POST',
    headers: { Authorization: authHeader() },
  })

  if (!sendRes.ok) {
    const err = await sendRes.text()
    throw new Error(`Mailchimp send failed: ${err}`)
  }
}
