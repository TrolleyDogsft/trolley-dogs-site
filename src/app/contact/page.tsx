import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { ContactForm } from '@/components/contact-form'
import { siteConfig, seo } from '@/content/site'

export const metadata: Metadata = {
  title: seo.contact.title,
  description: seo.contact.description,
  alternates: { canonical: '/contact' },
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title="Contact Us"
        subtitle="Questions? General inquiries? We're here. For catering and booking, use the booking form for a faster response."
      />

      <section className="py-16 md:py-24 px-6 md:px-10 bg-white">
        <div className="max-w-[1280px] mx-auto grid md:grid-cols-[1fr_1.5fr] gap-12 md:gap-16">

          {/* Contact info */}
          <div className="space-y-8">
            <div>
              <h2
                className="text-[#0D0A09] mb-6"
                style={{ fontFamily: 'var(--font-bebas)', fontSize: '2rem', letterSpacing: '0.03em' }}
              >
                Reach Us Directly
              </h2>
              <ul className="space-y-5">
                <li className="border-b border-[rgba(0,0,0,0.08)] pb-5">
                  <p className="text-[0.7rem] font-bold tracking-[0.15em] uppercase text-[#9C7B6B] mb-1">Phone</p>
                  <a href={`tel:${siteConfig.phone.replace(/-/g, '')}`} className="text-[#8B1E1C] font-extrabold text-xl hover:text-[#6e1716] transition-colors">
                    {siteConfig.phone}
                  </a>
                </li>
                <li className="border-b border-[rgba(0,0,0,0.08)] pb-5">
                  <p className="text-[0.7rem] font-bold tracking-[0.15em] uppercase text-[#9C7B6B] mb-1">Email</p>
                  <a href={`mailto:${siteConfig.email}`} className="text-[#2D1A14] font-semibold hover:text-[#8B1E1C] transition-colors">
                    {siteConfig.email}
                  </a>
                </li>
                <li className="border-b border-[rgba(0,0,0,0.08)] pb-5">
                  <p className="text-[0.7rem] font-bold tracking-[0.15em] uppercase text-[#9C7B6B] mb-1">Service Area</p>
                  <p className="text-[#5C4638] text-sm leading-relaxed">
                    Greater Boston · MetroWest · Central Massachusetts<br />
                    Rhode Island · Connecticut · New Hampshire<br />
                    All of New England
                  </p>
                </li>
                <li>
                  <p className="text-[0.7rem] font-bold tracking-[0.15em] uppercase text-[#9C7B6B] mb-1">Catering &amp; Booking</p>
                  <p className="text-[#5C4638] text-sm mb-3">For event inquiries, the booking form gets you a faster response.</p>
                  <a
                    href="/book"
                    className="inline-block bg-[#8B1E1C] text-white px-6 py-3 text-[0.78rem] font-extrabold tracking-[0.1em] uppercase hover:bg-[#6e1716] transition-colors"
                  >
                    Booking Inquiry →
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Form */}
          <div>
            <h3
              className="text-[#0D0A09] mb-6"
              style={{ fontFamily: 'var(--font-bebas)', fontSize: '1.6rem', letterSpacing: '0.03em' }}
            >
              Send a Message
            </h3>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
