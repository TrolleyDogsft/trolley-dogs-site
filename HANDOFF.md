# Trolley Dogs — Site Handoff & Maintenance Guide

This document is for any future Claude session, developer, or non-technical owner
who needs to understand, update, or maintain the Trolley Dogs website.

---

## What This Site Is

**trolleydogsft.com** — The official website for Trolley Dogs, the largest food truck
catering company in the Northeast. Based in Greater Boston, MA. Est. 1999.

The site's only job: **get people to fill out the booking form**.

---

## Who Manages This

- **Owner:** Gerald (not a developer — all changes go through Claude Code)
- **GitHub account:** TrolleyDogsft (separate from Gerald's personal GitHub)
- **Vercel account:** Hobby plan, connected to GitHub repo

---

## Live Site

- **URL:** https://trolleydogsft.com
- **Hosting:** Vercel (auto-deploys when you push to GitHub)
- **GitHub repo:** github.com/TrolleyDogsft/trolley-dogs-site

---

## Tech Stack (what the site is built with)

- **Framework:** Next.js 14 (App Router) + TypeScript
- **Styling:** Tailwind CSS + CSS custom properties
- **Fonts:** Google Fonts via next/font
  - Lobster → "Trolley Dogs" brand name (--font-brand)
  - Oswald → all headings and UI labels (--font-head)
  - Nunito Sans → body text (--font-body)
- **Color palette:** --red #C0311B, --cream #FBF5E8, --gold #F0C040, --dark #1C0F08
- **Email:** Resend (booking form sends real emails)
- **Newsletter:** Mailchimp (not yet connected — needs API key)
- **Events calendar:** Google Calendar ICS (connected and working)
- **Deployment:** Vercel, auto-deploys on GitHub push

---

## File Structure (what everything is)

```
trolley-dogs-site/
├── src/
│   ├── app/
│   │   ├── page.tsx          ← HOMEPAGE — edit this for homepage changes
│   │   ├── menu/page.tsx     ← Menu page
│   │   ├── events/page.tsx   ← Events page (pulls from Google Calendar)
│   │   ├── about/page.tsx    ← About page
│   │   ├── book/page.tsx     ← Booking form page (most important)
│   │   ├── gallery/page.tsx  ← Photo gallery
│   │   ├── contact/page.tsx  ← Contact form
│   │   ├── layout.tsx        ← Shared header/footer/fonts (affects all pages)
│   │   └── api/
│   │       ├── book/route.ts      ← Sends booking emails via Resend
│   │       └── subscribe/route.ts ← Mailchimp newsletter signup
│   ├── components/
│   │   ├── header.tsx        ← Navigation bar (logo, links, mobile menu)
│   │   └── footer.tsx        ← Site footer
│   └── content/
│       └── site.ts           ← ALL brand content lives here (menu items, nav links, etc.)
└── public/
    ├── logo-bw.jpg           ← Black & white circular logo badge
    ├── neon-char.mp4         ← Hero section video
    ├── hotdog.mp4            ← Video break section
    └── images/               ← All site photos
```

---

## How to Make Changes

### Open Claude Code in this folder:
```
cd "/Users/geralddente/Documents/Second Claud Project/trolley-dogs-site"
claude
```
Then just tell Claude what you want changed in plain English.

### Run the site locally to preview before publishing:
```
npm run dev
```
Then open http://localhost:3000 in your browser.

### Publish changes to the live site:
```
git add -A
git commit -m "describe what you changed"
git push
```
Vercel will automatically update the live site within ~2 minutes.

---

## Common Tasks (tell Claude these things)

| What you want | What to say |
|---|---|
| Change menu items | "Update the menu in site.ts — add/remove [item]" |
| Change phone/email | "Update the contact info in site.ts" |
| Change homepage text | "Update the hero headline in page.tsx" |
| Add a photo to gallery | Drop photo in public/images/ then "Add [filename] to the gallery" |
| Change colors | "Change the accent color from red to [color]" |
| Update about page | "Rewrite the about page with this new info: [your text]" |
| Fix something broken | "This is broken: [describe it]" |

---

## Working Features (confirmed)

- Booking form → sends real email to gerald@trolleydogsft.com + CC trolleydogs@hotmail.com
- Mobile-responsive all 7 pages
- SEO meta tags on all pages
- Logo shows correctly (black & white circular badge)

---

## Pending / Not Yet Set Up

1. **Newsletter signup** — Needs MAILCHIMP_API_KEY added in Vercel dashboard
   - Go to Vercel → trolley-dogs-site project → Settings → Environment Variables
   - Add: MAILCHIMP_API_KEY = [your key from mailchimp.com]

2. **Events calendar** — Needs Google Calendar ICS URL
   - Go to Vercel → Environment Variables
   - Add: GOOGLE_CALENDAR_ICAL_URL = [your public calendar URL]

3. **Gallery photos** — Currently shows placeholder grid
   - Drop real photos into public/images/ and ask Claude to update gallery page

---

## Environment Variables (secret keys — stored in Vercel, NOT in code)

These are set in the Vercel dashboard. Never put these in code or commit them to GitHub.

| Variable | Purpose | Status |
|---|---|---|
| RESEND_API_KEY | Booking form emails | ✅ Working |
| BOOKING_FROM_EMAIL | bookings@trolleydogsft.com | ✅ Set |
| BOOKING_TO_EMAIL | gerald@trolleydogsft.com | ✅ Set |
| BOOKING_CC_EMAIL | trolleydogs@hotmail.com | ✅ Set |
| MAILCHIMP_API_KEY | Newsletter | ❌ Not added yet |
| MAILCHIMP_AUDIENCE_ID | e93fb94dc5 | ✅ Set |
| MAILCHIMP_SERVER_PREFIX | us12 | ✅ Set |
| GOOGLE_CALENDAR_ICAL_URL | Events page | ✅ Working |

---

## DNS / Domain

- Domain registered at: GoDaddy (trolleydogsft.com)
- DNS pointed to: Vercel nameservers (ns1.vercel-dns.com, ns2.vercel-dns.com)
- SSL certificate: Automatic via Vercel

---

## Email Setup

- MX records point to Google (Gmail/Google Workspace)
- Resend DKIM configured for outbound booking emails
- Amazon SES SPF record added

---

## Design History & Prototypes

These are local only — NOT deployed. Just for reference/experiments:

- `../trolley-dogs-prototype/public/v3.html` — Original HTML prototype
- `../trolley-dogs-v4/` — Static HTML v4 (warm red/cream/gold, Lobster font) — served at localhost:3001
- `../trolley-dogs-v5/` — Static HTML v5 (taste-skill redesign, Playfair Display) — served at localhost:3002

---

## How to Start a New Claude Session on This Site

1. Open Claude Code in the trolley-dogs-site folder
2. Say: "Read HANDOFF.md and tell me what the current state of the site is"
3. Claude will be fully oriented within seconds
4. Tell it what you want to change

No need to re-explain the whole project every time.

---

## Design (v4 — current live design)

- **Hero:** Full-bleed truck photo (new-truck-1.jpg) with dark gradient overlay
- **Palette:** Warm cream/red/gold — red topbar, dark sticky nav, gold accent
- **Layout sections:** Stats strip (red) → Feature photo cards → About split → Services grid → Menu strip → Testimonial → Events → Booking CTA → Social split → Newsletter
- No emojis in UI
- No pure black — use var(--dark) #1C0F08
- Max 1 accent color: var(--red) #C0311B
- No generic marketing copy ("Seamless", "Elevate", "Unleash")
- All fonts load from Google Fonts (not system fonts — system fonts break on Vercel's Linux servers)

---

## If Something Goes Wrong

- **Site down:** Log into Vercel → check deployment logs for errors
- **Email not sending:** Check RESEND_API_KEY is set in Vercel env vars
- **Fonts look wrong:** Usually means a system font was used — switch to Google Fonts equivalent
- **Changes not showing:** Did you `git push`? Check Vercel for deployment status.

---

*Last updated: March 2026*
*Managed by: Gerald + Claude Code*
