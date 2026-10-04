<div align="center">

# Abdulmujeeb Awodi — Digital Portfolio v1.2
**Frontend Engineer | Next.js, React, TypeScript & Interactive Web Experiences**

[![Next.js](https://img.shields.io/badge/Next.js-15.5-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![GSAP](https://img.shields.io/badge/GSAP-3.15-88CE02?style=for-the-badge&logo=greensock&logoColor=white)](https://greensock.com/gsap/)
[![Resend](https://img.shields.io/badge/Resend-API-000000?style=for-the-badge&logo=resend&logoColor=white)](https://resend.com/)

[**Live Demo »**](https://portfoliov12.vercel.app) · [**Report Bug »**](https://github.com/codekid-cyber1/Portfolio-1.2/issues) · [**Request Feature »**](https://github.com/codekid-cyber1/Portfolio-1.2/issues)

</div>

---

## 🌟 Overview

A production-grade, high-performance personal portfolio built for **Abdulmujeeb Awodi**. Backed by a quantitative background in Finance and deep expertise in frontend engineering, this application showcases interactive scrollytelling, high-framerate web motion, and full-stack integration patterns.

### Key Highlights
- ⚡ **Sub-Second First Load**: Server Component rendering with Next.js 15 App Router.
- 🎨 **Warm Bespoke Aesthetic**: Curated cream and terracotta design tokens with subtle glassmorphic surfaces.
- 📬 **Live Transactional Contact Form**: End-to-end messaging pipeline powered by **Resend** and Next.js Route Handlers.
- 🎬 **Lazy Media Pipeline**: Canvas-based 60 FPS scrollytelling and lazy-loaded video showcases served through Cloudinary CDN.
- 📱 **Mobile-First Responsive Layout**: Native-feel UI with floating navigation and smooth GSAP micro-animations.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | [Next.js 15](https://nextjs.org/) (App Router, Server & Client Components) |
| **Library** | [React 19](https://react.dev/) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) (Strict type-safety, zero `any`) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) |
| **Animations** | [GSAP](https://greensock.com/) (ScrollTrigger) & [Motion](https://motion.dev/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Email Service** | [Resend](https://resend.com/) (Transactional API route) |
| **Media Delivery** | [Cloudinary](https://cloudinary.com/) (Optimized video streaming and WebP/AVIF delivery) |
| **Deployment** | [Vercel](https://vercel.com/) (Edge network & automated CI/CD) |

---

## 🚀 Flagship Projects Featured

1. **AETHER — Interactive Scrollytelling**
   - Synchronized a 60-frame rendered sequence directly to viewport scroll depth using GSAP ScrollTrigger and an HTML5 Canvas pipeline locked at 60 FPS.
   - *Tech:* Next.js, React, GSAP ScrollTrigger, HTML5 Canvas, Tailwind CSS.

2. **Awodi — 3D Artist & Visual Showcase**
   - High-performance dark-mode portfolio engineered for a 3D product & automotive artist with lazy media loading and fluid transitions.
   - *Tech:* Next.js, React, Tailwind CSS, Framer Motion, GSAP, Vercel.

3. **VeriScale — Sales & Inventory Analytics**
   - Real-time revenue, profit tracking, and inventory platform powered by Supabase authentication and PostgreSQL Row-Level Security.
   - *Tech:* Next.js, React 19, TypeScript, Supabase, PostgreSQL.

4. **Microclimate — Atmospheric Data Viz**
   - Real-time environmental metrics and sensor stream visualization with sub-100ms multi-stream charts.
   - *Tech:* React, API Integration, Tailwind CSS, Data Viz.

---

## 📁 Project Architecture

```
Portfolio-1.2/
├── app/
│   ├── (main)/
│   │   ├── layout.tsx         # Main layout wrapper
│   │   ├── page.tsx           # Single-page portfolio root
│   │   └── projects/
│   │       └── page.tsx       # Comprehensive project archive
│   ├── api/
│   │   └── contact/
│   │       └── route.ts       # Resend email handler (POST)
│   ├── globals.css            # Tailwind theme tokens & base styles
│   └── layout.tsx             # Root document & SEO metadata
├── components/
│   ├── sections/
│   │   ├── Hero.tsx           # Interactive hero section
│   │   ├── About.tsx          # Background, finance focus & skill pillars
│   │   ├── Projects.tsx       # Flagship project showcases with lazy media
│   │   ├── Resume.tsx         # Timeline, experience & education
│   │   └── Contact.tsx        # Active message form with Resend integration
│   └── ui/
│       ├── FloatingNav.tsx    # Scroll-aware floating glass navbar
│       └── LazyProjectMedia.tsx # Video & image intersection observer pipeline
├── data/
│   └── portfolio-data.ts      # Centralized data model & project items
├── public/
│   └── Abdulmujeeb_Awodi.pdf  # Downloadable resume
├── .env.example               # Environment variables template
└── next.config.ts             # Remote image patterns & Next.js config
```

---

## ⚡ Getting Started Locally

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18.18 or higher recommended)
- `npm` or `pnpm` / `yarn`

### 1. Clone the Repository
```bash
git clone https://github.com/codekid-cyber1/Portfolio-1.2.git
cd Portfolio-1.2
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Setup Environment Variables
Create a `.env.local` file in the root directory:
```bash
cp .env.example .env.local
```

Add your [Resend API key](https://resend.com/api-keys) to enable contact form submissions:
```env
RESEND_API_KEY="re_your_api_key_here"
CONTACT_TO_EMAIL="awodiabdulmujeeb@gmail.com"
CONTACT_FROM_EMAIL="Portfolio Inquiry <onboarding@resend.dev>"
```

### 4. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧪 Build & Quality Verification

```bash
# Type check TypeScript definitions
npx tsc --noEmit

# Run ESLint validation
npm run lint

# Build production bundle
npm run build

# Start production server locally
npm start
```

---

## 📬 Contact & Connect

**Abdulmujeeb Awodi**  
Frontend Engineer | Final-year Finance Student (KWASU)  
📍 Kwara State, Nigeria (GMT+1 / WAT)  

- **Email:** [awodiabdulmujeeb@gmail.com](mailto:awodiabdulmujeeb@gmail.com)  
- **LinkedIn:** [Abdulmujeeb Awodi](https://www.linkedin.com/in/abdulmujeeb-awodi-067a3227b/)  
- **GitHub:** [@codekid-cyber1](https://github.com/codekid-cyber1)  

---

<div align="center">
  <sub>© 2026 Abdulmujeeb Awodi. All rights reserved.</sub>
</div>
