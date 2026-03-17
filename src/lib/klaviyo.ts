const API_KEY = process.env.KLAVIYO_PRIVATE_KEY ?? ''
const LIST_ID = process.env.KLAVIYO_LIST_ID ?? ''
const BASE_URL = 'https://a.klaviyo.com/api'
const REVISION = '2024-10-15'

function headers() {
  return {
    Authorization: `Klaviyo-API-Key ${API_KEY}`,
    'Content-Type': 'application/json',
    revision: REVISION,
  }
}

export async function subscribeToKlaviyo(
  email: string,
  firstName?: string,
  phone?: string
): Promise<{ success: boolean; message: string }> {
  if (!API_KEY || !LIST_ID) {
    console.warn('Klaviyo not configured — KLAVIYO_PRIVATE_KEY or KLAVIYO_LIST_ID missing')
    return { success: false, message: 'Subscription service not configured.' }
  }

  const profileAttributes: Record<string, unknown> = {
    email,
    subscriptions: {
      email: { marketing: { consent: 'SUBSCRIBED' } },
    },
  }

  if (firstName) profileAttributes.first_name = firstName

  // Add SMS subscription if phone number provided
  if (phone) {
    profileAttributes.phone_number = phone
    ;(profileAttributes.subscriptions as Record<string, unknown>).sms = {
      marketing: { consent: 'SUBSCRIBED' },
    }
  }

  const res = await fetch(`${BASE_URL}/profile-subscription-bulk-create-jobs/`, {
    method: 'POST',
    headers: headers(),
    body: JSON.stringify({
      data: {
        type: 'profile-subscription-bulk-create-job',
        attributes: {
          profiles: {
            data: [{ type: 'profile', attributes: profileAttributes }],
          },
        },
        relationships: {
          list: { data: { type: 'list', id: LIST_ID } },
        },
      },
    }),
  })

  // Klaviyo returns 202 Accepted for bulk jobs (async processing)
  if (res.status === 202 || res.ok) {
    return { success: true, message: "You're subscribed!" }
  }

  const err = await res.json().catch(() => ({}))
  const detail = err?.errors?.[0]?.detail ?? 'Something went wrong. Please try again.'
  return { success: false, message: detail }
}
