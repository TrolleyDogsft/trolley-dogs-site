'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { siteConfig, navLinks } from '@/content/site'

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      {/* Red topbar */}
      <div style={{ background: 'var(--red)', borderBottom: '2px solid var(--red-dk)', padding: '9px 24px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 24, fontFamily: 'var(--font-head)', fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: 'rgba(251,245,232,0.85)' }}>
        <span className="hidden sm:inline">Northeast&rsquo;s #1 Food Truck Since 1999</span>
        <span style={{ width: 3, height: 3, borderRadius: '50%', background: 'rgba(251,245,232,0.4)', display: 'inline-block' }} />
        <a href={`tel:${siteConfig.phone.replace(/-/g, '')}`} style={{ color: 'var(--gold)', textDecoration: 'none' }}>{siteConfig.phone}</a>
        <span style={{ width: 3, height: 3, borderRadius: '50%', background: 'rgba(251,245,232,0.4)', display: 'inline-block' }} />
        <a href={`mailto:${siteConfig.email}`} style={{ color: 'rgba(251,245,232,0.75)', textDecoration: 'none' }} className="hidden sm:inline">{siteConfig.email}</a>
      </div>

      {/* Main nav */}
      <nav aria-label="Main navigation" style={{ position: 'sticky', top: 0, zIndex: 50, background: 'var(--dark)', borderBottom: '3px solid var(--gold)', display: 'flex', alignItems: 'stretch', height: 64 }}>
        {/* Brand */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '0 24px', borderRight: '1px solid rgba(251,245,232,0.08)', flexShrink: 0, textDecoration: 'none' }}>
          <Image
            src="/logo-bw.jpg"
            alt="Trolley Dogs"
            width={38}
            height={38}
            priority
            style={{ borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--gold)' }}
          />
          <span style={{ fontFamily: 'var(--font-brand)', fontSize: '1.5rem', color: 'var(--cream)', letterSpacing: '0.02em', lineHeight: 1 }}>
            Trolley Dogs
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex list-none flex-1" style={{ height: '100%', margin: 0, padding: 0 }}>
          {navLinks.map((link) => (
            <li key={link.href} style={{ height: '100%', listStyle: 'none' }}>
              <Link
                href={link.href}
                className="group"
                style={{ display: 'flex', alignItems: 'center', height: '100%', padding: '0 18px', fontFamily: 'var(--font-head)', fontSize: '0.78rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: 'rgba(251,245,232,0.6)', borderRight: '1px solid rgba(251,245,232,0.06)', textDecoration: 'none', transition: 'color 0.15s' }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA button */}
        <Link
          href="/book"
          className="hidden md:flex items-center"
          style={{ padding: '0 28px', fontFamily: 'var(--font-head)', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' as const, background: 'var(--red)', color: 'var(--cream)', borderLeft: '1px solid rgba(251,245,232,0.07)', flexShrink: 0, textDecoration: 'none', transition: 'background 0.15s' }}
        >
          Catering &amp; Booking
        </Link>

        {/* Mobile: call + hamburger */}
        <div className="flex items-center gap-3 px-4 md:hidden ml-auto">
          <a href={`tel:${siteConfig.phone.replace(/-/g, '')}`} style={{ color: 'var(--gold)', fontFamily: 'var(--font-head)', fontWeight: 700, fontSize: '0.82rem', textDecoration: 'none' }}>
            Call
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4, display: 'flex', flexDirection: 'column' as const, gap: 5 }}
          >
            <span className={`block w-5 h-0.5 bg-[#FBF5E8] transition-transform duration-200 ${mobileOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
            <span className={`block w-5 h-0.5 bg-[#FBF5E8] transition-opacity duration-200 ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-[#FBF5E8] transition-transform duration-200 ${mobileOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          style={{ position: 'fixed', inset: 0, zIndex: 60, background: 'var(--dark)', display: 'flex', flexDirection: 'column' as const, paddingTop: 80, paddingLeft: 32, paddingRight: 32 }}
          onClick={() => setMobileOpen(false)}
        >
          <ul style={{ listStyle: 'none', borderTop: '1px solid rgba(251,245,232,0.08)', padding: 0, margin: 0 }}>
            {navLinks.map((link) => (
              <li key={link.href} style={{ borderBottom: '1px solid rgba(251,245,232,0.08)' }}>
                <Link href={link.href} style={{ display: 'block', padding: '18px 0', fontFamily: 'var(--font-head)', fontSize: '1.4rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' as const, color: 'var(--cream)', textDecoration: 'none' }}>
                  {link.label}
                </Link>
              </li>
            ))}
            <li style={{ paddingTop: 24 }}>
              <Link href="/book" style={{ display: 'block', background: 'var(--red)', color: 'var(--cream)', textAlign: 'center' as const, padding: '16px 0', fontFamily: 'var(--font-head)', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' as const, fontSize: '1rem', textDecoration: 'none' }}>
                Catering &amp; Booking
              </Link>
            </li>
          </ul>
          <div style={{ marginTop: 32 }}>
            <a href={`tel:${siteConfig.phone.replace(/-/g, '')}`} style={{ display: 'block', color: 'var(--gold)', fontFamily: 'var(--font-head)', fontWeight: 700, fontSize: '1.1rem', marginBottom: 8, textDecoration: 'none' }}>{siteConfig.phone}</a>
            <a href={`mailto:${siteConfig.email}`} style={{ display: 'block', color: 'rgba(251,245,232,0.45)', fontSize: '0.85rem', textDecoration: 'none' }}>{siteConfig.email}</a>
          </div>
        </div>
      )}
    </>
  )
}
