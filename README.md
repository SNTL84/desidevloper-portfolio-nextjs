# desidevloper.com — Next.js 14 Portfolio

> Built for founders who move fast, automate smart, and waste nothing.

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://typescriptlang.org)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-38bdf8?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-10-purple?style=for-the-badge)](https://framer.com/motion)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com)

## 🚀 Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS + custom gold theme
- **Animations**: Framer Motion
- **Icons**: react-icons
- **Contact**: EmailJS (plug in your keys)
- **Deploy**: Vercel

## 📁 Structure

```
desidevloper-portfolio-nextjs/
├── app/              # Next.js App Router
├── components/
│   └── main/         # Navbar, Hero, Aboutme, Skills, Projects, Contactform, Footer
├── constants/        # Nav links, skills, services, social links, projects
├── utils/            # Framer Motion variants
└── public/           # Images / assets
```

## ⚡ Quick Start

```bash
git clone https://github.com/SNTL84/desidevloper-portfolio-nextjs
cd desidevloper-portfolio-nextjs
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 🎨 Sections

| Section | Description |
|---|---|
| **Navbar** | Fixed, scroll-aware, mobile-responsive, Hire Me CTA |
| **Hero** | Animated heading, desidevloper 🇮🇳, tagline, social icons |
| **About** | Bio, stats (50+ projects), 4 service cards |
| **Skills** | Tech stack grid with animated skill-level bars |
| **Projects** | 6 real projects from your GitHub, featured badges |
| **Contact** | Direct links + EmailJS contact form |
| **Footer** | Brand credits, social links, © 2026 SNTL84 |

## 📧 EmailJS Setup

1. Sign up at [emailjs.com](https://emailjs.com)
2. Get `SERVICE_ID`, `TEMPLATE_ID`, `PUBLIC_KEY`
3. Update `components/main/Contactform.tsx` → `handleSubmit`

## 🌐 Deploy

```bash
npm run build
# Push to GitHub → connect to Vercel → auto-deploy
```

---

**Built by [SNTL84](https://github.com/SNTL84)** · [desidevloper.com](https://desidevloper.com) · [LinkedIn](https://www.linkedin.com/in/sntl2784) · [WhatsApp](https://wa.me/919727413309) · [Arrattai](https://aratt.ai/user/@desidevloper)

© 2026 SNTL84 · All rights reserved
