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

  // Step 1: Create a template with the HTML content
  const templateRes = await fetch(`${BASE_URL}/templates/`, {
    method: 'POST',
    headers: headers(),
    body: JSON.stringify({
      data: {
        type: 'template',
        attributes: {
          name: campaignName,
          editor_type: 'CODE',
          html,
          text: 'View this email in your browser.',
        },
      },
    }),
  })

  if (!templateRes.ok) {
    const err = await templateRes.text()
    throw new Error(`Klaviyo create template failed: ${err}`)
  }

  const templateData = await templateRes.json()
  const templateId: string = templateData.data.id

  // Step 2: Create the campaign
  const createRes = await fetch(`${BASE_URL}/campaigns/`, {
    method: 'POST',
    headers: headers(),
    body: JSON.stringify({
      data: {
        type: 'campaign',
        attributes: {
          name: campaignName,
          audiences: { included: [LIST_ID] },
          send_strategy: { method: 'immediate' },
          'campaign-messages': {
            data: [
              {
                type: 'campaign-message',
                attributes: {
                  channel: 'email',
                  content: {
                    subject,
                    preview_text: '',
                    from_email: FROM_EMAIL,
                    from_label: 'Trolley Dogs',
                    reply_to_email: FROM_EMAIL,
                  },
                },
              },
            ],
          },
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
  const messageId: string =
    campaignData.data.relationships?.['campaign-messages']?.data?.[0]?.id

  if (!messageId) {
    throw new Error('Klaviyo campaign created but no message ID returned')
  }

  // Step 3: Assign the template to the campaign message
  const assignRes = await fetch(`${BASE_URL}/campaign-message-assign-template/`, {
    method: 'POST',
    headers: headers(),
    body: JSON.stringify({
      data: {
        type: 'campaign-message',
        id: messageId,
        relationships: {
          template: {
            data: { type: 'template', id: templateId },
          },
        },
      },
    }),
  })

  if (!assignRes.ok) {
    const err = await assignRes.text()
    throw new Error(`Klaviyo assign template failed: ${err}`)
  }

  // Step 4: Send
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
