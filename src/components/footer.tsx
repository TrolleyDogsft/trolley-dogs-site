import Link from 'next/link'
import Image from 'next/image'
import { siteConfig, navLinks } from '@/content/site'

export function Footer() {
  return (
    <footer style={{ background: 'var(--dark)', borderTop: '3px solid var(--gold)' }}>
      <div className="max-w-[1280px] mx-auto px-8 pt-14 pb-10 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div className="md:col-span-2">
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
            <Image
              src="/logo-bw.jpg"
              alt="Trolley Dogs"
              width={44}
              height={44}
              style={{ borderRadius: '50%', border: '2px solid var(--gold)', objectFit: 'cover' }}
            />
            <span style={{ fontFamily: 'var(--font-brand)', fontSize: '1.4rem', color: 'var(--cream)', letterSpacing: '0.02em' }}>
              Trolley Dogs
            </span>
          </div>
          <p style={{ color: 'rgba(251,245,232,0.45)', fontSize: '0.82rem', lineHeight: 1.75, maxWidth: 300, marginBottom: 20 }}>
            Northeast&rsquo;s largest food truck catering company. Serving Greater Boston, MetroWest, Central MA, and all of New England since 1999.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 6 }}>
            <a
              href={`tel:${siteConfig.phone.replace(/-/g, '')}`}
              style={{ color: 'var(--gold)', fontFamily: 'var(--font-head)', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none', letterSpacing: '0.05em' }}
            >
              {siteConfig.phone}
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              style={{ color: 'rgba(251,245,232,0.4)', fontSize: '0.82rem', textDecoration: 'none' }}
            >
              {siteConfig.email}
            </a>
          </div>
        </div>

        {/* Navigate */}
        <div>
          <h4 style={{ fontFamily: 'var(--font-head)', fontSize: '0.68rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase' as const, color: 'rgba(251,245,232,0.3)', marginBottom: 16 }}>
            Navigate
          </h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column' as const, gap: 10 }}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  style={{ color: 'rgba(251,245,232,0.55)', fontSize: '0.85rem', textDecoration: 'none', fontFamily: 'var(--font-head)', letterSpacing: '0.06em' }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Catering */}
        <div>
          <h4 style={{ fontFamily: 'var(--font-head)', fontSize: '0.68rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase' as const, color: 'rgba(251,245,232,0.3)', marginBottom: 16 }}>
            Catering
          </h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column' as const, gap: 10 }}>
            {['Get a Quote', 'Corporate Events', 'Private Parties', 'Film & TV', 'Festivals'].map((label) => (
              <li key={label}>
                <Link
                  href="/book"
                  style={{ color: 'rgba(251,245,232,0.55)', fontSize: '0.85rem', textDecoration: 'none', fontFamily: 'var(--font-head)', letterSpacing: '0.06em' }}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div
        className="flex flex-col sm:flex-row items-center justify-between gap-2 px-8 py-4"
        style={{ borderTop: '1px solid rgba(251,245,232,0.06)' }}
      >
        <span style={{ color: 'rgba(251,245,232,0.22)', fontSize: '0.75rem' }}>
          &copy; {new Date().getFullYear()} Trolley Dogs. All rights reserved.
        </span>
        <span style={{ color: 'rgba(251,245,232,0.15)', fontSize: '0.75rem' }}>
          Boston, MA &middot; trolleydogsft.com
        </span>
      </div>
    </footer>
  )
}
