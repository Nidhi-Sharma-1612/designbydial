# Design By Dial

Marketing and lead-gen website for **Design By Dial**, a studio that builds direct-booking
websites for vacation rental / short-term rental (STR) operators — integrated with the
Channel Manager (Hostaway, Guesty, Lodgify) the client already uses.

Built with Next.js (App Router), React, TypeScript, and Tailwind CSS v4.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

## Environment Variables

Copy `.env.example` to `.env.local` and fill in the values you have:

```bash
cp .env.example .env.local
```

| Variable                     | Purpose                                                                                                                 |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `SMTP_HOST`                  | SMTP server host, e.g. `smtp.gmail.com`.                                                                                 |
| `SMTP_PORT`                  | SMTP server port — `587` (STARTTLS) or `465` (SSL).                                                                     |
| `SMTP_USER`                  | SMTP account username (e.g. your Gmail address).                                                                        |
| `SMTP_PASS`                  | SMTP account password. For Gmail, use an [App Password](https://myaccount.google.com/apppasswords), not your login password. |
| `CONTACT_NOTIFICATION_EMAIL` | Inbox that receives new contact-form submissions.                                                                       |

The contact form degrades gracefully with a clear "not configured" fallback if these
variables aren't set — the site still builds and runs without them.

## Project Structure

```
src/
  app/                Routes (App Router) — one folder per page, plus API routes
  components/
    ui/                Design-system primitives (Button, Card, Section, NavBar, ...)
    sections/          Homepage sections (Hero, PortfolioHighlight, TestimonialCarousel, ...)
    forms/             Contact form
  content/             Typed content files (portfolio, testimonials, pricing, FAQ, stats)
  lib/                 Shared utilities (metadata builder, JSON-LD schema, hooks)
```

Page copy and structured data (portfolio projects, testimonials, pricing tiers, FAQs) live in
`src/content/*.ts` as typed data, not hardcoded in components — update content there rather
than in the page files.

## Tech Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** (CSS-first `@theme` config in `src/app/globals.css`)
- **React Hook Form** + **Zod** for form validation
- **Nodemailer** (SMTP) for contact-form email delivery
