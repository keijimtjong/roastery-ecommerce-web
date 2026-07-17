# Kopi Nusantara - Engineering & Design Documentation

This comprehensive engineering document outlines the branding guidelines, file architecture, development procedures, accessibility compliance, SEO strategy, and deployment guidelines for the **Kopi Nusantara** website.

---

## 🎨 Branding & Visual Guidelines

Kopi Nusantara leverages a **Modern Premium Warm Minimalist** aesthetic. Layout constraints emphasize massive negative spaces, uniform premium roundings, and subtle responsive feedback.

### Color Swatches
- **Primary Coffee (#6F4E37)**: Warm espresso brown utilized for main CTA buttons, focus states, and bold textual highlights.
- **Secondary Gold (#C8A165)**: Delicate warm gold used for sub-badges, active category navigation pills, pricing highlights, and star indicators.
- **Background Cream (#FAF7F2)**: High-comfort, soft cream canvas used in light-mode to reduce screen glare and convey an organic texture.
- **Deep Accent (#2C2C2C)**: Deep charcoal charcoal used in typography, headers, and structural partitions.
- **Espresso Dark-Mode background (#1C140E)**: Volcanic, rich dark espresso tone utilized in dark mode to preserve high-contrast ratios while minimizing optical strain.

### Typography
- **Poppins (Display)**: Extrabold, tracking-tight headers that express high-end hospitality and modern brand credibility.
- **Inter (Body)**: Medium and regular line weight sans-serif that ensures absolute readability at small sizes on desktop and mobile.

### Shape Language
- **Border Radius**: Fixed at a uniform `18px` (`rounded-premium`) for cards, buttons, input bars, and dialogs.
- **Shadowing**: Soft, diffuse ambient shadows (`shadow-sm` and `shadow-md`) to separate elements visually without causing visual clutter.

---

## 🛠️ Code Architecture & Core Modules

The application utilizes a fully **modular, clean react architecture**. All states are centralized in `src/App.tsx` and distributed via props, ensuring linear unidirectional data flows and high debuggability.

### Key Components

#### 1. `SEO.tsx` (Dynamic Header and JSON-LD Schema Injector)
Injects structural search schemas directly into the HTML document's `<head>`.
- **LocalBusiness Schema**: Identifies Kopi Nusantara as a food/cafe establishment, listing geographical coords, business hours, telephone, and social profiles.
- **FAQ Schema**: Maps frequently asked questions so they appear directly in Google's rich search results (SERP).
- **Product Schema**: Highlights our single-origin beans (prices, ratings, currency) for indexation.
- **Reviews Schema**: Enhances SERP visibility with authentic rating aggregations.

#### 2. `Cart.tsx` (WhatsApp Direct Checkout Engine)
In Indonesia, direct WhatsApp communication bridges the gap between digital menus and localized courier delivery.
- **How it Works**: Users add items to their cart, click proceed, and enter their delivery address.
- **Invoice Generation**: On submission, a highly structured text-invoice is compiled dynamically, encoding item list, prices, totals, and user contact details.
- **Redirection**: Seamlessly triggers `https://wa.me/` sending the formatted message straight to our business phone, opening the chat immediately.

#### 3. `Gallery.tsx` (Balanced Masonry & Lightbox)
Uses native CSS columns to create a responsive, fluid masonry grid of various photo dimensions. It includes a custom slider lightbox that intercepts keyboard inputs (`ArrowLeft`, `ArrowRight`, `Escape`) to scroll through pictures with full screen accessibility.

---

## 🚀 Installation & Local Environment Setup

Follow these commands to get your local environment running smoothly:

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development server
Starts Vite's super-fast dev-server:
```bash
npm run dev
```
By default, the server runs on port `3000` (`http://localhost:3000`) with Hot Module Replacement (HMR) capabilities.

### 3. Check for Linting and Types
Validates code syntax and verifies TypeScript interfaces:
```bash
npm run lint
```

### 4. Compile Production Build
Compiles, tree-shakes, and compresses assets:
```bash
npm run build
```
Generates a highly optimized `dist/` bundle.

---

## 📈 Performance & PageSpeed Optimizations

To target **100% scores on PageSpeed Insights** (LCP, CLS, Best Practices, and SEO), the following practices are implemented:

### Cumulative Layout Shift (CLS) Mitigation
- **Aspect Ratio Locking**: Visual assets (such as card images, hero panels, and gallery items) are wrapped inside strict responsive grid boxes utilizing tailwind aspect ratios (`aspect-square`, `aspect-[3/4]`, `aspect-video`). This guarantees that the layout boundaries are reserved during initial rendering, completely preventing elements from jumping as images load.
- **Font Face Loading**: Custom Google Fonts are declared with `display=swap` inside `src/index.css` to allow fallback system fonts to render immediately, avoiding blank content blocks.

### Largest Contentful Paint (LCP) Optimizations
- **Image Sourcing & Lazy Loading**: Secondary sections (About, Features, Process, Menu, Gallery, Blog) implement explicit `loading="lazy"` tags to defer non-critical image requests. The primary hero photo is configured with `loading="eager"` to render instantly.
- **Critical CSS Integration**: Tailwind CSS v4 compiles utility classes inline, completely removing massive external stylesheet requests and reducing critical path delays.

### Tree-Shaking & Bundle Size
- Large libraries have been avoided. Animations are driven by a lightweight, customized implementation of Framer Motion, and icons are selectively tree-shaken from `lucide-react`.

---

## ♿ Accessibility Compliance (WCAG AA)

- **Keyboard Navigation**: All interactive elements (menu items, cart controllers, close buttons, accordion headers, lightbox tabs, and form input bars) are fully focusable using `Tab`.
- **Focus Outlines**: A beautiful focus ring is declared in `src/index.css` (`focus-visible:outline-[#C8A165]`), providing high-contrast outlines for keyboard users.
- **Screen Reader Friendly**: Proper heading hierarchy (`<h1>` down to `<h4>`) organizes page levels logically. Complete ARIA attributes (e.g. `aria-expanded`, `aria-label`, `aria-controls`, `role="region"`) are mapped dynamically.
- **Contrast Ratios**: All text elements have high-contrast ratios against their respective backgrounds (cream `#FAF7F2` or charcoal `#2C2C2C`), satisfying WCAG AA requirements easily.

---

## ☁️ Deployment Instructions

### Deploying to Vercel

The Kopi Nusantara project is fully pre-configured for instant deployment on **Vercel** with a zero-config setup.

#### Option 1: Vercel Dashboard (GitHub Integration)
1. Push your compiled repository to GitHub, GitLab, or Bitbucket.
2. Log into the [Vercel Dashboard](https://vercel.com).
3. Click **Add New Project** and import your repository.
4. Vercel will automatically detect **Vite** as your build framework.
5. Keep default settings:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
6. Click **Deploy**. Your premium website is live!

#### Option 2: Vercel CLI (Local Command Line)
1. Install Vercel globally:
   ```bash
   npm install -g vercel
   ```
2. Link your local project and deploy:
   ```bash
   vercel
   ```
3. To promote your deployment to production:
   ```bash
   vercel --prod
   ```

### Deploying to Google Cloud Run (Containerized)

The project includes an Express full-stack structure that is fully compatible with our Cloud Run container hosting environment.
- The build command compiles client-side assets to `dist/`.
- The port configuration is locked to `3000` behind the container's Nginx reverse proxy, ensuring seamless request ingress routing.
