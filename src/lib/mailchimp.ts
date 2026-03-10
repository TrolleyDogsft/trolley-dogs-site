export async function subscribeToMailchimp(email: string, firstName?: string): Promise<{ success: boolean; message: string }> {
  const apiKey = process.env.MAILCHIMP_API_KEY
  const audienceId = process.env.MAILCHIMP_AUDIENCE_ID
  const serverPrefix = process.env.MAILCHIMP_SERVER_PREFIX

  if (!apiKey || !audienceId || !serverPrefix) {
    // Fail gracefully in dev if not configured
    console.warn('Mailchimp not configured')
    return { success: false, message: 'Subscription service not configured.' }
  }

  const url = `https://${serverPrefix}.api.mailchimp.com/3.0/lists/${audienceId}/members`

  const body: Record<string, unknown> = {
    email_address: email,
    status: 'subscribed',
  }

  if (firstName) {
    body.merge_fields = { FNAME: firstName }
  }

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${Buffer.from(`anystring:${apiKey}`).toString('base64')}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })

  const data = await res.json()

  if (res.ok) {
    return { success: true, message: 'You\'re subscribed!' }
  }

  // Already subscribed
  if (data.title === 'Member Exists') {
    return { success: true, message: 'You\'re already subscribed.' }
  }

  return { success: false, message: 'Something went wrong. Please try again.' }
}
