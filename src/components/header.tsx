'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { siteConfig, navLinks } from '@/content/site'

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      {/* Top bar */}
      <div className="bg-[#0D0A09] text-[rgba(246,241,232,0.5)] text-[0.7rem] font-semibold tracking-[0.1em] uppercase hidden md:flex items-center justify-between px-8 py-2">
        <span>Greater Boston · MetroWest · Central MA · New England</span>
        <span className="flex gap-4">
          <a href={`tel:${siteConfig.phone.replace(/-/g, '')}`} className="text-[#FFD76F] hover:text-white transition-colors">
            {siteConfig.phone}
          </a>
          <span>·</span>
          <a href={`mailto:${siteConfig.email}`} className="hover:text-[#FFD76F] transition-colors">
            {siteConfig.email}
          </a>
        </span>
      </div>

      {/* Main nav */}
      <nav className="sticky top-0 z-50 flex items-center justify-between bg-white border-b-2 border-[#0D0A09]">
        {/* Logo */}
        <Link href="/" className="flex items-center px-4 md:px-6 py-3 border-r-2 border-[#0D0A09]">
          <Image
            src={siteConfig.logo}
            alt="Trolley Dogs"
            width={44}
            height={46}
            className="h-11 w-auto"
            priority
          />
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden md:flex list-none">
          {navLinks.map((link) => (
            <li key={link.href} className="border-r border-[rgba(0,0,0,0.08)]">
              <Link
                href={link.href}
                className="block px-5 py-[1.1rem] text-[#0D0A09] text-[0.78rem] font-bold tracking-[0.1em] uppercase hover:bg-[#0D0A09] hover:text-white transition-colors duration-150"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href="/book"
          className="hidden md:inline-block bg-[#8B1E1C] text-white px-6 py-[1.1rem] text-[0.78rem] font-extrabold tracking-[0.12em] uppercase border-l-2 border-[#0D0A09] hover:bg-[#6e1716] transition-colors duration-150"
        >
          Catering &amp; Booking
        </Link>

        {/* Mobile: phone + hamburger */}
        <div className="flex items-center gap-3 px-4 md:hidden">
          <a href={`tel:${siteConfig.phone.replace(/-/g, '')}`} className="text-[#8B1E1C] font-bold text-sm">
            Call
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            className="flex flex-col gap-[5px] p-1"
          >
            <span className={`block w-6 h-0.5 bg-[#0D0A09] transition-transform duration-200 ${mobileOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
            <span className={`block w-6 h-0.5 bg-[#0D0A09] transition-opacity duration-200 ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-[#0D0A09] transition-transform duration-200 ${mobileOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-[#0D0A09] flex flex-col pt-20 px-6" onClick={() => setMobileOpen(false)}>
          <ul className="flex flex-col border-t border-[rgba(255,255,255,0.08)]">
            {navLinks.map((link) => (
              <li key={link.href} className="border-b border-[rgba(255,255,255,0.08)]">
                <Link
                  href={link.href}
                  className="block py-4 text-white text-xl font-bold tracking-wide uppercase"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-6">
              <Link
                href="/book"
                className="block bg-[#8B1E1C] text-white text-center py-4 font-extrabold tracking-wider uppercase text-lg"
              >
                Catering &amp; Booking
              </Link>
            </li>
          </ul>
          <div className="mt-8 space-y-2">
            <a href={`tel:${siteConfig.phone.replace(/-/g, '')}`} className="block text-[#FFD76F] font-bold text-lg">{siteConfig.phone}</a>
            <a href={`mailto:${siteConfig.email}`} className="block text-[rgba(246,241,232,0.5)] text-sm">{siteConfig.email}</a>
          </div>
        </div>
      )}
    </>
  )
}
