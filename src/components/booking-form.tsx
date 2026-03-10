'use client'

import { useState } from 'react'
import { bookingEventTypes } from '@/content/site'

interface FormData {
  name: string
  email: string
  phone: string
  eventDate: string
  eventType: string
  guestCount: string
  location: string
  details: string
}

const initialForm: FormData = {
  name: '',
  email: '',
  phone: '',
  eventDate: '',
  eventType: '',
  guestCount: '',
  location: '',
  details: '',
}

export function BookingForm() {
  const [form, setForm] = useState<FormData>(initialForm)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  function update(field: keyof FormData) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setForm(prev => ({ ...prev, [field]: e.target.value }))
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')
    try {
      const res = await fetch('/api/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (res.ok && data.success) {
        setStatus('success')
      } else {
        setStatus('error')
        setErrorMsg(data.message || 'Something went wrong. Please try again.')
      }
    } catch {
      setStatus('error')
      setErrorMsg('Something went wrong. Please check your connection and try again.')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-[#F6F1E8] border border-[rgba(0,0,0,0.08)] p-10 text-center">
        <div className="text-[#8B1E1C] font-extrabold text-xl mb-3">Inquiry Received!</div>
        <p className="text-[#5C4638] leading-relaxed">
          Thanks for reaching out. We&apos;ll review your inquiry and get back to you within 24 hours.
        </p>
        <p className="text-[#9C7B6B] text-sm mt-3">
          Questions? Call us directly at{' '}
          <a href="tel:7818882930" className="text-[#8B1E1C] font-semibold">781-888-2930</a>
        </p>
      </div>
    )
  }

  const inputClass = "w-full bg-[#F6F1E8] border border-[rgba(0,0,0,0.12)] px-4 py-3 text-[#2D1A14] text-sm font-medium outline-none focus:border-[#8B1E1C] focus:bg-white transition-colors placeholder:text-[rgba(45,26,20,0.35)]"
  const labelClass = "block text-[0.72rem] font-bold tracking-[0.12em] uppercase text-[#5C4638] mb-1.5"

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Row 1: Name + Email */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className={labelClass}>Name *</label>
          <input type="text" required value={form.name} onChange={update('name')} placeholder="Your full name" className={inputClass} disabled={status === 'loading'} />
        </div>
        <div>
          <label className={labelClass}>Email *</label>
          <input type="email" required value={form.email} onChange={update('email')} placeholder="you@example.com" className={inputClass} disabled={status === 'loading'} />
        </div>
      </div>

      {/* Row 2: Phone + Event Date */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className={labelClass}>Phone *</label>
          <input type="tel" required value={form.phone} onChange={update('phone')} placeholder="(555) 555-5555" className={inputClass} disabled={status === 'loading'} />
        </div>
        <div>
          <label className={labelClass}>Event Date *</label>
          <input type="date" required value={form.eventDate} onChange={update('eventDate')} className={inputClass} disabled={status === 'loading'} />
        </div>
      </div>

      {/* Row 3: Event Type + Guest Count */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className={labelClass}>Event Type *</label>
          <select required value={form.eventType} onChange={update('eventType')} className={inputClass} disabled={status === 'loading'}>
            <option value="" disabled>Select event type</option>
            {bookingEventTypes.map(t => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelClass}>Estimated Guest Count *</label>
          <input type="text" required value={form.guestCount} onChange={update('guestCount')} placeholder="e.g. 150, 500, 2000+" className={inputClass} disabled={status === 'loading'} />
        </div>
      </div>

      {/* Event Location */}
      <div>
        <label className={labelClass}>Event Location / City *</label>
        <input type="text" required value={form.location} onChange={update('location')} placeholder="City, venue name, or address" className={inputClass} disabled={status === 'loading'} />
      </div>

      {/* Additional Details */}
      <div>
        <label className={labelClass}>Additional Details</label>
        <textarea
          value={form.details}
          onChange={update('details')}
          rows={4}
          placeholder="Tell us more about your event — setup requirements, dietary needs, timing, etc."
          className={inputClass}
          disabled={status === 'loading'}
        />
      </div>

      {errorMsg && (
        <p className="text-[#8B1E1C] text-sm font-semibold bg-[rgba(139,30,28,0.06)] px-4 py-3 border border-[rgba(139,30,28,0.2)]">
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-[#8B1E1C] text-white py-4 font-extrabold text-[0.9rem] tracking-[0.12em] uppercase hover:bg-[#6e1716] transition-colors disabled:opacity-60"
      >
        {status === 'loading' ? 'Sending...' : 'Submit Inquiry'}
      </button>

      <p className="text-[#9C7B6B] text-xs text-center leading-relaxed">
        We&apos;ll get back to you within 24 hours. Or call us directly:{' '}
        <a href="tel:7818882930" className="text-[#8B1E1C] font-semibold">781-888-2930</a>
      </p>
    </form>
  )
}
