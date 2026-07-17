# Kopi Nusantara - Premium Indonesian Coffee Shop & Roastery

An exquisite, ultra-responsive, premium-quality full-stack single-page website for an Indonesian Coffee Shop & Roastery (UMKM MSME) named **Kopi Nusantara**. Built with Apple-level simplicity, gorgeous typography, and immersive motion.

## 🌟 Core Highlights

- **Aesthetic Pairings (Branding)**: Soft warm cream canvas background (`#FAF7F2`), premium coffee brown accents (`#6F4E37`), warm gold highlight details (`#C8A165`), and bold charcoal elements (`#2C2C2C`).
- **Interactive Ordering & Cart**: A fully functional React shopping cart drawer that calculates subtotals in Indonesian Rupiah (IDR) and compiles structured billing invoices to checkout directly via WhatsApp.
- **Dynamic Themes**: Instant, smooth dark-mode toggling between warm cream and elegant deep-espresso backgrounds.
- **Micro Interactions**: Staggered scroll entries, rotating FAQs, animated stat counters, and visual floating particle effects powered by **Framer Motion** (`motion/react`).
- **Masonry Lightbox Gallery**: Dynamic, responsive photo balancing grid featuring multiple filter tabs and a slide-out detailed lightbox view.
- **Advanced SEO Architecture**: Complete injection of dynamic document headers, robots metadata, sitemaps, Open Graph protocols, and structured schemas (JSON-LD) for LocalBusiness, FAQ page, Breadcrumb, Product, and Reviews.
- **WCAG AA Accessibility**: High-contrast ratios, complete keyboard focus indicator outlines, descriptive alt attributes, semantic tags, and ARIA landmarks.

---

## 🛠️ Technology Stack

- **Framework**: React 19 + TypeScript
- **Bundler & Dev Server**: Vite 6
- **Styling**: Tailwind CSS v4 (with native CSS nesting and custom Google Fonts)
- **Animation Suite**: Framer Motion (`motion/react`)
- **Icons**: Lucide React
- **Hosting-ready**: Optimized specifically for Vercel and Cloud Run architectures

---

## 🚀 Quick Start Guide

### 1. Prerequisites
Make sure you have Node.js (v18+) and npm/yarn installed.

### 2. Installation
Install all base dependencies listed in `package.json`:
```bash
npm install
```

### 3. Run Development Server
Boot up the fast local development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Code Compilation & Build
Compile TypeScript and bundle code into highly compressed static assets ready for production deployment:
```bash
npm run build
```
Static assets will be outputted cleanly inside the `dist/` directory.

---

## 📂 Code Directory Structure

```
/
├── public/                 # Static assets (robots.txt, sitemap.xml, manifest.json)
├── src/
│   ├── components/         # Modular, reusable visual modules
│   │   ├── SEO.tsx         # JSON-LD Schema & Meta injectors
│   │   ├── Header.tsx      # Sticky translucent navigation navbar
│   │   ├── Hero.tsx        # High-impact display banner
│   │   ├── About.tsx       # Compelling story, vision & mission
│   │   ├── Features.tsx    # Why Choose Us bento grid
│   │   ├── Process.tsx     # Illustrated timeline (farmer-to-cup)
│   │   ├── Menu.tsx        # Categories, detail modals, and catalog
│   │   ├── Statistics.tsx  # Dynamic numeric counter counters
│   │   ├── Gallery.tsx     # Column-balanced masonry and lightbox
│   │   ├── Reviews.tsx     # Auto-rotating testimonial sliders
│   │   ├── Blog.tsx        # Reading pane drawer with SEO articles
│   │   ├── FAQ.tsx         # Animated accordion collapsibles
│   │   ├── Contact.tsx     # Maps, business hours, and reservation form
│   │   ├── Cart.tsx        # Shopping drawer & WA Direct checkout
│   │   └── Footer.tsx      # Sitemaps, legal terms, and newsletter
│   ├── data.ts             # Curated Indonesian single-origin records
│   ├── types.ts            # Core Domain model types and definitions
│   ├── App.tsx             # State coordinator & layout conductor
│   ├── index.css           # Global custom classes & typography imports
│   └── main.tsx            # Main entry file
├── index.html              # Core HTML structure
├── package.json            # Manifest file for scripts and dependencies
└── tsconfig.json           # Type configurations
```

---

## 📝 Documentation & Deployment
For exhaustive instructions on setup, environment configurations, performance optimizations, and step-by-step guides on deploying to **Vercel** or **Cloud Run**, please consult the detailed [DOCUMENTATION.md](./DOCUMENTATION.md) file.
