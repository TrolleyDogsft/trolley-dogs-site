'use client'

import { useState } from 'react'

export function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  function update(field: 'name' | 'email' | 'message') {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm(prev => ({ ...prev, [field]: e.target.value }))
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (res.ok && data.success) {
        setStatus('success')
      } else {
        setStatus('error')
        setErrorMsg(data.message || 'Something went wrong.')
      }
    } catch {
      setStatus('error')
      setErrorMsg('Something went wrong. Please try again.')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-[#F6F1E8] border border-[rgba(0,0,0,0.08)] p-8 text-center">
        <div className="text-[#8B1E1C] font-extrabold text-lg mb-2">Message Sent!</div>
        <p className="text-[#5C4638]">We&apos;ll get back to you shortly.</p>
      </div>
    )
  }

  const inputClass = "w-full bg-[#F6F1E8] border border-[rgba(0,0,0,0.12)] px-4 py-3 text-[#2D1A14] text-sm font-medium outline-none focus:border-[#8B1E1C] focus:bg-white transition-colors placeholder:text-[rgba(45,26,20,0.35)]"
  const labelClass = "block text-[0.72rem] font-bold tracking-[0.12em] uppercase text-[#5C4638] mb-1.5"

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className={labelClass}>Name *</label>
        <input type="text" required value={form.name} onChange={update('name')} placeholder="Your name" className={inputClass} disabled={status === 'loading'} />
      </div>
      <div>
        <label className={labelClass}>Email *</label>
        <input type="email" required value={form.email} onChange={update('email')} placeholder="you@example.com" className={inputClass} disabled={status === 'loading'} />
      </div>
      <div>
        <label className={labelClass}>Message *</label>
        <textarea required value={form.message} onChange={update('message')} rows={5} placeholder="How can we help?" className={inputClass} disabled={status === 'loading'} />
      </div>
      {errorMsg && <p className="text-[#8B1E1C] text-sm font-semibold">{errorMsg}</p>}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-[#8B1E1C] text-white py-3.5 font-extrabold text-[0.85rem] tracking-[0.12em] uppercase hover:bg-[#6e1716] transition-colors disabled:opacity-60"
      >
        {status === 'loading' ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
}
