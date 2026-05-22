<p align="center">
  <a href="https://www.instagram.com/desibiztrade" target="_blank" rel="noopener noreferrer">
    <img src="https://raw.githubusercontent.com/SNTL84/desidevloper-portfolio-nextjs/main/public/SNTL-84-banner.jpg" alt="SNTL 84 — Follow @desibiztrade on Instagram" width="100%" />
  </a>
</p>

<p align="center">
  <sub>☝️ Click the banner to follow <a href="https://www.instagram.com/desibiztrade"><strong>@desibiztrade</strong></a> on Instagram 📸</sub>
</p>

<h1 align="center">desidevloper.com — Next.js 14 Portfolio</h1>

<p align="center">
  <strong>Systems that Scale. Results that Last. Growth that Compounds.</strong><br/>
  Built for founders who <strong>move fast</strong>, <strong>automate smart</strong>, and <strong>waste nothing</strong>.
</p>

<p align="center">
  <a href="https://desidevloper.com"><img src="https://img.shields.io/badge/%F0%9F%8C%90_Website-desidevloper.com-c9a84c?style=for-the-badge" alt="Website"/></a>
  <a href="https://wa.me/919727413309"><img src="https://img.shields.io/badge/%F0%9F%92%AC_WhatsApp-Chat_Now-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" alt="WhatsApp"/></a>
  <a href="https://www.linkedin.com/in/sntl2784"><img src="https://img.shields.io/badge/%F0%9F%94%97_LinkedIn-SNTL2784-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn"/></a>
  <a href="https://github.com/SNTL84"><img src="https://img.shields.io/badge/%F0%9F%92%BB_GitHub-SNTL84-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub"/></a>
  <a href="https://www.instagram.com/desibiztrade"><img src="https://img.shields.io/badge/%F0%9F%93%B8_Instagram-%40desibiztrade-E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="Instagram"/></a>
  <a href="https://www.youtube.com/@SNTL84"><img src="https://img.shields.io/badge/%F0%9F%94%B4_YouTube-%40SNTL84-FF0000?style=for-the-badge&logo=youtube&logoColor=white" alt="YouTube"/></a>
  <a href="https://aratt.ai/user/@desidevloper"><img src="https://img.shields.io/badge/%F0%9F%A4%96_Arrattai-%40desidevloper-7c3aed?style=for-the-badge" alt="Arrattai"/></a>
</p>

<p align="center">
  <a href="https://nextjs.org"><img src="https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js" alt="Next.js"/></a>
  <a href="https://typescriptlang.org"><img src="https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript" alt="TypeScript"/></a>
  <a href="https://tailwindcss.com"><img src="https://img.shields.io/badge/TailwindCSS-3-38bdf8?style=for-the-badge&logo=tailwindcss" alt="TailwindCSS"/></a>
  <img src="https://img.shields.io/badge/Framer_Motion-10-purple?style=for-the-badge" alt="Framer Motion"/>
  <a href="https://vercel.com"><img src="https://img.shields.io/badge/Deploy-Vercel-black?style=for-the-badge&logo=vercel" alt="Vercel"/></a>
</p>

---

## 🚀 Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS + custom gold theme (`#c9a84c`)
- **Animations**: Framer Motion + Canvas StarBackground
- **Icons**: react-icons
- **Contact**: EmailJS (env-var driven)
- **Deploy**: Vercel + GitHub Actions CI/CD

## 📁 Structure

```
desidevloper-portfolio-nextjs/
├── app/              # Next.js App Router (layout, page, globals.css)
├── components/
│   └── main/         # Navbar, Hero, Aboutme, Skills, Projects, Contactform, Footer, StarBackground
├── constants/        # Nav links, skills, services, social links, projects
├── utils/            # Framer Motion variants
├── public/           # Banner image & assets
└── .github/workflows # Vercel CI/CD pipeline
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
| **Hero** | Animated `desidevloper 🇮🇳` heading, tagline, social icons |
| **About** | Bio, stats (50+ projects), 4 service cards |
| **Skills** | Tech stack grid with animated skill-level bars |
| **Projects** | 6 real projects from SNTL84 GitHub, featured badges |
| **Contact** | Direct links + fully wired EmailJS form |
| **Footer** | Brand credits, social links, © 2026 SNTL84 |
| **StarBackground** | 180 gold particles + shooting stars canvas animation |

## 📧 EmailJS Setup

1. Sign up at [emailjs.com](https://emailjs.com)
2. Copy `.env.local.example` → `.env.local`
3. Fill in `NEXT_PUBLIC_EMAILJS_SERVICE_ID`, `TEMPLATE_ID`, `PUBLIC_KEY`

## ⚙️ CI/CD — Vercel Auto Deploy

Every push to `main` → lint → build → deploy to [desidevloper.com](https://desidevloper.com)

Add these 3 secrets to **GitHub → Repo Settings → Secrets → Actions**:
- `VERCEL_TOKEN` · `VERCEL_ORG_ID` · `VERCEL_PROJECT_ID`

```bash
npm run build
# Push to main → GitHub Actions → Vercel Production ✅
```

---

## 👤 Built By

<table>
  <tr>
    <td align="center">
      <strong>SNTL 84 — Milan</strong><br/>
      <em>AI Workflow Pro & Full-Stack Builder 🇮🇳</em><br/><br/>
      🌐 <a href="https://desidevloper.com">desidevloper.com</a><br/>
      💬 <a href="https://wa.me/919727413309">WhatsApp · +91 97274 13309</a><br/>
      🔗 <a href="https://www.linkedin.com/in/sntl2784">LinkedIn · sntl2784</a><br/>
      💻 <a href="https://github.com/SNTL84">GitHub · SNTL84</a><br/>
      📸 <a href="https://www.instagram.com/desibiztrade">Instagram · @desibiztrade</a><br/>
      🔴 <a href="https://www.youtube.com/@SNTL84">YouTube · @SNTL84</a><br/>
      🤖 <a href="https://aratt.ai/user/@desidevloper">Arrattai · @desidevloper</a><br/>
      📧 <a href="mailto:3goldenlotusroots@gmail.com">3goldenlotusroots@gmail.com</a>
    </td>
  </tr>
</table>

> *One Partner. Endless Possibilities. Real Growth.*

© 2026 SNTL84 · [desidevloper.com](https://desidevloper.com) · All rights reserved
