import Link from 'next/link'
import Image from 'next/image'
import { siteConfig, navLinks } from '@/content/site'

export function Footer() {
  return (
    <footer className="bg-[#0D0A09] border-t-2 border-[#8B1E1C]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-10 flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
        {/* Logo */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <Image
            src={siteConfig.logo}
            alt="Trolley Dogs"
            width={48}
            height={50}
            className="h-12 w-auto opacity-70"
          />
          <p className="text-[rgba(246,241,232,0.3)] text-xs">Est. {siteConfig.established}</p>
        </div>

        {/* Nav links */}
        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[rgba(246,241,232,0.35)] hover:text-[#FFD76F] text-[0.72rem] font-bold tracking-[0.1em] uppercase transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/book"
                className="text-[rgba(246,241,232,0.35)] hover:text-[#FFD76F] text-[0.72rem] font-bold tracking-[0.1em] uppercase transition-colors"
              >
                Book
              </Link>
            </li>
          </ul>
        </nav>

        {/* Contact + Social */}
        <div className="text-center md:text-right space-y-1">
          <a
            href={`tel:${siteConfig.phone.replace(/-/g, '')}`}
            className="block text-[#FFD76F] font-bold text-base hover:text-white transition-colors"
          >
            {siteConfig.phone}
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="block text-[rgba(246,241,232,0.45)] text-sm hover:text-[#FFD76F] transition-colors"
          >
            {siteConfig.email}
          </a>
          <p className="text-[rgba(246,241,232,0.25)] text-xs pt-1">
            Greater Boston &amp; New England
          </p>
          {(siteConfig.social.instagram !== '#' || siteConfig.social.facebook !== '#') && (
            <div className="flex justify-center md:justify-end gap-4 pt-3">
              {siteConfig.social.instagram !== '#' && (
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[rgba(246,241,232,0.35)] hover:text-[#FFD76F] text-[0.7rem] font-bold tracking-[0.1em] uppercase transition-colors"
                >
                  Instagram
                </a>
              )}
              {siteConfig.social.facebook !== '#' && (
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[rgba(246,241,232,0.35)] hover:text-[#FFD76F] text-[0.7rem] font-bold tracking-[0.1em] uppercase transition-colors"
                >
                  Facebook
                </a>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[rgba(255,255,255,0.05)] px-6 md:px-10 py-4 flex flex-col md:flex-row items-center justify-between gap-2">
        <p className="text-[rgba(246,241,232,0.2)] text-xs">
          © {new Date().getFullYear()} {siteConfig.name} · {siteConfig.serviceArea}
        </p>
        <p className="text-[rgba(246,241,232,0.15)] text-xs">trolleydogsft.com</p>
      </div>
    </footer>
  )
}
