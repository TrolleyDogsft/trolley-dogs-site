'use client'

import { useState, useEffect } from 'react'

const STORAGE_KEY = 'td_newsletter_popup'

export function NewsletterPopup() {
  const [visible, setVisible] = useState(false)
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'dismissed' || stored === 'subscribed') return

    const timer = setTimeout(() => setVisible(true), 8000)
    return () => clearTimeout(timer)
  }, [])

  function dismiss() {
    setVisible(false)
    localStorage.setItem(STORAGE_KEY, 'dismissed')
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
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
        localStorage.setItem(STORAGE_KEY, 'subscribed')
        setTimeout(() => setVisible(false), 3000)
      } else {
        setStatus('error')
        setMessage(data.message || 'Something went wrong. Try again.')
      }
    } catch {
      setStatus('error')
      setMessage('Something went wrong. Please try again.')
    }
  }

  if (!visible) return null

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 9999,
        width: '320px',
        backgroundColor: '#1C0F08',
        borderTop: '3px solid #F0C040',
        boxShadow: '0 8px 32px rgba(0,0,0,0.35)',
        animation: 'td-slide-up 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        fontFamily: 'var(--font-body), sans-serif',
      }}
    >
      <style>{`
        @keyframes td-slide-up {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Header */}
      <div style={{ backgroundColor: '#C0311B', padding: '14px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ fontFamily: 'var(--font-head), sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '2.5px', textTransform: 'uppercase', color: '#FBF5E8' }}>
          Trolley Dogs Insider
        </div>
        <button
          onClick={dismiss}
          aria-label="Close"
          style={{ background: 'none', border: 'none', color: 'rgba(251,245,232,0.6)', cursor: 'pointer', fontSize: '18px', lineHeight: 1, padding: '0 0 0 8px' }}
        >
          ×
        </button>
      </div>

      {/* Body */}
      <div style={{ padding: '20px 20px 24px' }}>
        {status === 'success' ? (
          <div style={{ textAlign: 'center', padding: '8px 0' }}>
            <div style={{ fontSize: '22px', marginBottom: '8px' }}>—</div>
            <div style={{ fontFamily: 'var(--font-head), sans-serif', fontSize: '15px', color: '#F0C040', letterSpacing: '1px' }}>
              You&apos;re on the list.
            </div>
            <div style={{ fontSize: '12px', color: 'rgba(251,245,232,0.5)', marginTop: '4px' }}>
              See you at the truck.
            </div>
          </div>
        ) : (
          <>
            <p style={{ fontSize: '13px', color: 'rgba(251,245,232,0.75)', lineHeight: 1.6, marginBottom: '16px' }}>
              Get weekly event updates — where we&apos;ll be, when we&apos;ll be there. No spam, ever.
            </p>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                disabled={status === 'loading'}
                style={{
                  padding: '10px 14px',
                  backgroundColor: 'rgba(251,245,232,0.08)',
                  border: '1px solid rgba(251,245,232,0.2)',
                  color: '#FBF5E8',
                  fontSize: '13px',
                  outline: 'none',
                  width: '100%',
                  boxSizing: 'border-box',
                }}
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                style={{
                  backgroundColor: '#C0311B',
                  color: '#FBF5E8',
                  border: 'none',
                  padding: '11px',
                  fontFamily: 'var(--font-head), sans-serif',
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                  opacity: status === 'loading' ? 0.6 : 1,
                }}
              >
                {status === 'loading' ? 'Subscribing...' : 'Get Updates'}
              </button>
              {status === 'error' && (
                <p style={{ fontSize: '11px', color: '#F0C040', margin: 0 }}>{message}</p>
              )}
            </form>
            <button
              onClick={dismiss}
              style={{ background: 'none', border: 'none', color: 'rgba(251,245,232,0.3)', fontSize: '11px', cursor: 'pointer', padding: '8px 0 0', display: 'block' }}
            >
              No thanks
            </button>
          </>
        )}
      </div>
    </div>
  )
}
