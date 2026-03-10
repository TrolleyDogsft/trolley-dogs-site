'use client'

import { useState } from 'react'

export function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      const data = await res.json()
      if (data.success) {
        setStatus('success')
        setMessage(data.message || 'You\'re subscribed!')
        setEmail('')
      } else {
        setStatus('error')
        setMessage(data.message || 'Something went wrong. Try again.')
      }
    } catch {
      setStatus('error')
      setMessage('Something went wrong. Please try again.')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-[rgba(0,0,0,0.08)] px-6 py-4 font-semibold text-[#0D0A09]">
        {message}
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-0">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        className="px-5 py-4 bg-white border-2 border-[#0D0A09] border-r-0 text-[#0D0A09] text-sm font-medium outline-none min-w-[260px] placeholder:text-[rgba(13,10,9,0.4)]"
        disabled={status === 'loading'}
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="bg-[#0D0A09] text-white px-6 py-4 text-[0.78rem] font-extrabold tracking-[0.12em] uppercase border-2 border-[#0D0A09] hover:bg-[#8B1E1C] hover:border-[#8B1E1C] transition-colors disabled:opacity-60"
      >
        {status === 'loading' ? '...' : 'Subscribe'}
      </button>
      {status === 'error' && (
        <p className="absolute mt-14 text-[#8B1E1C] text-xs font-semibold">{message}</p>
      )}
    </form>
  )
}
