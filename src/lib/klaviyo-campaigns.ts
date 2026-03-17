const API_KEY = process.env.KLAVIYO_PRIVATE_KEY ?? ''
const LIST_ID = process.env.KLAVIYO_LIST_ID ?? ''
const BASE_URL = 'https://a.klaviyo.com/api'
const REVISION = '2024-10-15'
const FROM_EMAIL = process.env.KLAVIYO_FROM_EMAIL || 'info@trolleydogsft.com'

function headers() {
  return {
    Authorization: `Klaviyo-API-Key ${API_KEY}`,
    'Content-Type': 'application/json',
    revision: REVISION,
  }
}

export async function sendWeeklyDigest(html: string, subject: string): Promise<void> {
  if (!API_KEY || !LIST_ID) {
    throw new Error('Klaviyo not configured — KLAVIYO_PRIVATE_KEY or KLAVIYO_LIST_ID missing')
  }

  const campaignName = `Weekly Digest — ${new Date().toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })}`

  // Step 1: Create campaign
  const createRes = await fetch(`${BASE_URL}/campaigns/`, {
    method: 'POST',
    headers: headers(),
    body: JSON.stringify({
      data: {
        type: 'campaign',
        attributes: {
          name: campaignName,
          channel: 'email',
          audiences: { included: [LIST_ID] },
          send_strategy: { method: 'immediate' },
        },
      },
    }),
  })

  if (!createRes.ok) {
    const err = await createRes.text()
    throw new Error(`Klaviyo create campaign failed: ${err}`)
  }

  const campaignData = await createRes.json()
  const campaignId: string = campaignData.data.id

  // The campaign message ID comes back in the relationships
  const messageId: string =
    campaignData.data.relationships?.['campaign-messages']?.data?.[0]?.id

  if (!messageId) {
    throw new Error('Klaviyo campaign created but no message ID returned')
  }

  // Step 2: Set HTML content and subject on the campaign message
  const contentRes = await fetch(`${BASE_URL}/campaign-messages/${messageId}/`, {
    method: 'PATCH',
    headers: headers(),
    body: JSON.stringify({
      data: {
        type: 'campaign-message',
        id: messageId,
        attributes: {
          content: {
            subject,
            preview_text: '',
            from_email: FROM_EMAIL,
            from_name: 'Trolley Dogs',
            reply_to_email: FROM_EMAIL,
            body: html,
          },
        },
      },
    }),
  })

  if (!contentRes.ok) {
    const err = await contentRes.text()
    throw new Error(`Klaviyo set content failed: ${err}`)
  }

  // Step 3: Send
  const sendRes = await fetch(`${BASE_URL}/campaign-send-jobs/`, {
    method: 'POST',
    headers: headers(),
    body: JSON.stringify({
      data: {
        type: 'campaign-send-job',
        id: campaignId,
      },
    }),
  })

  if (!sendRes.ok) {
    const err = await sendRes.text()
    throw new Error(`Klaviyo send failed: ${err}`)
  }
}
