# Ademola Adedolapo Olalekan — Full Stack Developer Portfolio

A premium, accessible, and fully responsive developer portfolio built with **React 18, TypeScript, Vite, Tailwind CSS, and Framer Motion**. Content (skills, projects, experience, testimonials) is data-driven from JSON files, so you can update the site without touching component code.

**Live design goals:** dark/light mode, glassmorphism, scroll-reveal animations, a custom cursor, a typing hero effect, live GitHub activity, a working contact form, and SEO/accessibility best practices throughout.

---

## Table of Contents

1. [Tech Stack](#tech-stack)
2. [Folder Structure](#folder-structure)
3. [Getting Started](#getting-started)
4. [Environment Variables](#environment-variables)
5. [Updating Your Content](#updating-your-content-no-code-required)
6. [Available Scripts](#available-scripts)
7. [Deployment (Vercel)](#deployment-vercel)
8. [GitHub Setup](#github-setup)
9. [SEO Configuration](#seo-configuration)
10. [Performance Optimization](#performance-optimization)
11. [Accessibility](#accessibility)
12. [Future Improvements](#future-improvements)

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | React 18 + TypeScript |
| Build tool | Vite 5 |
| Styling | Tailwind CSS 3 (custom design tokens, `light:` variant plugin) |
| Animation | Framer Motion |
| Routing | React Router v6 (with route-level code splitting) |
| Icons | react-icons (Font Awesome, Simple Icons, VS Code icon set) |
| Contact form | EmailJS (`@emailjs/browser`) |
| SEO | react-helmet-async + static meta tags + JSON-LD |
| Hosting | Vercel |

---

## Folder Structure

```
src/
├── animations/       # Shared Framer Motion variants (fadeUp, staggerContainer, etc.)
├── components/
│   ├── common/        # Reveal, Icon, LoadingScreen, ScrollProgressBar, CustomCursor,
│   │                   # ThemeToggle, BackToTop, ErrorBoundary, Seo, SectionHeading
│   ├── layout/         # Navbar, Footer
│   ├── home/            # Hero, SocialLinks, StatsCounter
│   ├── about/            # Timeline (also reused on the Experience page)
│   ├── skills/            # SkillBar, SkillGroup
│   ├── projects/           # ProjectCard, ProjectFilter, ProjectSearch
│   ├── testimonials/        # TestimonialCard
│   ├── contact/               # ContactForm
│   └── github/                  # GithubActivity (live GitHub API data)
├── context/           # ThemeContext (dark/light), LoadingContext (boot screen)
├── data/              # ⭐ EDIT THESE JSON FILES TO UPDATE SITE CONTENT
│   ├── profile.json          # Name, tagline, socials, resume link, fun facts
│   ├── skills.json           # Skill groups + proficiency levels
│   ├── projects.json         # Project case studies
│   ├── experience.json       # Timeline entries
│   ├── education.json
│   ├── certifications.json
│   ├── testimonials.json
│   └── blog.json
├── hooks/             # useTheme, useTypingEffect, useScrollProgress, useCountUp,
│                       # useMediaQuery, useGithubData, useLoading
├── layouts/           # MainLayout (Navbar + Footer + global chrome)
├── pages/             # One file per route (Home, About, Skills, Projects, Experience,
│                       # Testimonials, Blog, Contact, NotFound)
├── services/          # githubService.ts (GitHub REST API), emailService.ts (EmailJS)
├── types/             # Shared TypeScript interfaces for all data shapes
├── utils/             # cn(), formatting helpers, site-wide constants
├── App.tsx            # Router + lazy-loaded routes + page transitions
├── main.tsx           # App entry point / provider tree
└── index.css          # Tailwind layers, glass helpers, custom scrollbar, focus rings

public/
├── projects/          # Project screenshot placeholders (SVG) — replace with real screenshots
├── testimonials/      # Avatar placeholders (SVG) — replace with real photos
├── resume.pdf         # ⭐ REPLACE with your real resume
├── favicon.svg, apple-touch-icon.png, og-image.png, site.webmanifest
├── robots.txt, sitemap.xml
```

---

## Getting Started

**Requirements:** Node.js 18+ and npm (or pnpm/yarn).

```bash
# 1. Install dependencies
npm install

# 2. Copy the environment template and fill in your keys (see below)
cp .env.example .env

# 3. Start the dev server
npm run dev
```

The app runs at `http://localhost:5173`.

> **Note on this build:** this codebase was generated in a sandboxed environment without npm registry access, so `npm install` has **not** been run or verified here. Run it locally — if you hit a version-resolution issue with any package, bump that single package in `package.json` rather than reinstalling everything.

---

## Environment Variables

Copy `.env.example` to `.env` and fill in:

```bash
# EmailJS (https://www.emailjs.com) — powers the Contact page form
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key

# GitHub username used to pull public repos + recent commits on the Experience page
VITE_GITHUB_USERNAME=your-github-username
```

**Setting up EmailJS (free tier is fine):**
1. Create an account at emailjs.com and connect an email provider (Gmail, Outlook, etc.).
2. Create an Email Service → copy the **Service ID**.
3. Create an Email Template with `from_name`, `from_email`, `subject`, `message` variables → copy the **Template ID**.
4. Go to Account → General → copy your **Public Key**.
5. Drop all three into `.env`.

Until these are set, the contact form will show a friendly "not configured yet" message instead of failing silently — it won't crash the page.

`VITE_GITHUB_USERNAME` defaults to `octocat` in `profile.json` — change it there (or override via env) to pull your real repos and commit activity.

---

## Updating Your Content (no code required)

Everything editorial lives in `src/data/*.json`:

- **`profile.json`** — your name, role, tagline, location, email, resume path, social links, fun facts.
- **`skills.json`** — array of `{ category, items: [{ name, level, icon }] }`. `icon` is a string key resolved by `src/components/common/Icon.tsx` against react-icons (Fa, Fa6, Si, Vsc sets) — e.g. `"FaReact"`, `"SiTypescript"`.
- **`projects.json`** — add a new object to the array to add a project. Fields: `title`, `summary`, `description`, `image`, `technologies`, `features`, `challenges`, `learnings`, `githubUrl`, `liveUrl`, `category` (`Full Stack` | `Frontend` | `Backend` | `API`), `featured`.
- **`experience.json`** — timeline entries, oldest last or first, `current: true` highlights the active one.
- **`education.json`**, **`certifications.json`**, **`testimonials.json`**, **`blog.json`** — same pattern.

No component file needs to change to add a project, skill, or testimonial — the pages map over these arrays directly.

---

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the Vite dev server with HMR |
| `npm run build` | Type-check (`tsc -b`) then build a production bundle to `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint (TypeScript + react-hooks + jsx-a11y rules) |
| `npm run format` | Format the codebase with Prettier |

---

## Deployment (Vercel)

**Option A — via the Vercel dashboard:**
1. Push this repository to GitHub (see below).
2. Go to vercel.com → **Add New Project** → import the repo.
3. Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.
4. Under **Environment Variables**, add the four `VITE_*` variables from `.env`.
5. Click **Deploy**.

**Option B — via the Vercel CLI:**
```bash
npm i -g vercel
vercel login
vercel          # first deploy, follow the prompts
vercel --prod   # promote to production
```

`vercel.json` is already configured with SPA rewrites (so client-side routes like `/projects` don't 404 on refresh) and long-lived caching for hashed assets.

After deploying, update:
- `index.html` — canonical URL, OG/Twitter URLs, and the JSON-LD `url`/`sameAs` fields to your real domain and profiles.
- `public/robots.txt` and `public/sitemap.xml` — swap `jordandoyle.dev` for your real domain.
- `src/utils/constants.ts` — `SITE_URL`.

---

## GitHub Setup

```bash
git init
git add .
git commit -m "Initial commit: full stack developer portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

`.gitignore` already excludes `node_modules`, `dist`, and `.env*` files, so your EmailJS keys won't leak into version control.

---

## SEO Configuration

- **Per-page metadata** via the `<Seo>` component (title, description, canonical URL, Open Graph, Twitter card) on every route.
- **Static `<head>` tags** in `index.html` for the initial crawl/social-preview pass (title, description, keywords, OG/Twitter defaults, `Person` JSON-LD structured data).
- **`robots.txt`** allows all crawlers and points to `sitemap.xml`.
- **`sitemap.xml`** lists every route with priority weighting — update it if you add routes.
- **Semantic HTML** (`<header>`, `<nav>`, `<main>`, `<footer>`, one `<h1>` per page, proper heading order) helps both SEO and screen readers.

To go further: generate `sitemap.xml` dynamically at build time (e.g. via a small Node script or `vite-plugin-sitemap`) so it never drifts from your routes, and add per-project OG images.

---

## Performance Optimization

- **Route-level code splitting** — every page is `React.lazy`-loaded (see `App.tsx`), so the initial bundle only contains the Home page's code.
- **Manual vendor chunking** in `vite.config.ts` — React, Framer Motion, and react-icons are split into separate cacheable chunks.
- **`loading="lazy"`** on project screenshots.
- **rAF-throttled scroll listeners** (`useScrollProgress`, `CustomCursor`) instead of firing state updates on every scroll event.
- **`prefers-reduced-motion`** respected globally (see `index.css` and `CustomCursor`), which also avoids wasted animation work for users who've opted out.
- **`esnext` build target** to avoid shipping unnecessary transpilation overhead for modern browsers.

To go further: convert `public/*.svg` project placeholders to optimized real screenshots (WebP/AVIF with explicit width/height), add a `vite-plugin-image-optimizer`, and run a Lighthouse CI check in your deploy pipeline.

---

## Accessibility

- Skip-to-content link, visible focus rings on all interactive elements (`:focus-visible`).
- Semantic landmarks and heading hierarchy on every page.
- Form fields use `<label htmlFor>`, `aria-invalid`, and `aria-describedby` for error messages; the submit-status message uses `aria-live="polite"`.
- Skill bars expose `role="progressbar"` with `aria-valuenow/min/max` and a label.
- Star ratings and social icons carry `aria-label`s; decorative icons are `aria-hidden`.
- Custom cursor and most motion respect `prefers-reduced-motion` and are disabled entirely on touch/coarse-pointer devices.
- Color contrast was chosen against WCAG AA targets for both themes (verify with your final imagery/branding).

Recommended before shipping: run `npm run lint` (jsx-a11y is wired in), and do a manual pass with a screen reader (VoiceOver/NVDA) plus the axe DevTools browser extension.

---

## Future Improvements

- [ ] Wire up a real CMS (or just keep hand-editing JSON) with a lightweight admin UI for non-technical updates.
- [ ] Add a GitHub contribution heatmap (e.g. via `github-contribution-graph` or a small serverless proxy to avoid client-side rate limits).
- [ ] Publish real blog posts as MDX and route them under `/blog/:slug`.
- [ ] Add unit tests (Vitest + React Testing Library) for hooks like `useTypingEffect` and `useCountUp`, and component tests for `ProjectFilter`/`ProjectSearch`.
- [ ] Add a `sitemap.xml` generator script tied to the route list instead of a static file.
- [ ] Internationalization (i18n) if targeting non-English-speaking markets.
- [ ] Replace placeholder project screenshots, testimonial avatars, resume, and OG image with real assets (all currently generated placeholders — see `public/`).

---

Built as a demonstration of production-minded full stack front-end engineering: typed data contracts, component reuse, accessibility, performance budget awareness, and a codebase a teammate could onboard into quickly.
