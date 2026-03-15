# Data Professional Portfolio

A modern, minimal portfolio website for a Data Analyst / Data Automation Engineer based in Berlin. Built to help secure interviews for Data Analytics, Business Intelligence, and Data Automation roles.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Deployment**: Vercel-ready

## Features

- Responsive design (mobile-first)
- Dark mode support with system preference detection
- Scroll-triggered animations
- SEO optimized with meta tags and Open Graph
- Static site generation for fast loading
- Project detail pages with full case studies
- Professional contact form
- Sticky navigation with smooth scrolling

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## Deployment on Vercel

1. Push this repository to GitHub
2. Import the repository on [vercel.com](https://vercel.com)
3. Vercel will auto-detect Next.js and deploy

Alternatively, use the Vercel CLI:

```bash
npx vercel
```

## Customization

- **Personal Info**: Update contact details in `src/components/Contact.tsx` and `src/components/Footer.tsx`
- **Projects**: Edit `src/data/projects.ts` to add or modify projects
- **Experience**: Update `src/components/Experience.tsx` with your work history
- **Skills**: Modify `src/components/Skills.tsx` to reflect your skill set
- **CV**: Place your CV as `public/cv.pdf`
- **Colors**: Adjust the color palette in `tailwind.config.ts`

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and Tailwind directives
│   ├── layout.tsx           # Root layout with SEO metadata
│   ├── page.tsx             # Home page
│   └── projects/
│       └── [id]/
│           ├── page.tsx         # Project detail (static generation)
│           └── ProjectDetail.tsx # Project detail client component
├── components/
│   ├── Navbar.tsx           # Sticky navigation with dark mode toggle
│   ├── Hero.tsx             # Hero section with animated background
│   ├── About.tsx            # About section with stats
│   ├── Skills.tsx           # Skills cards by category
│   ├── Experience.tsx       # Professional experience timeline
│   ├── Projects.tsx         # Featured project cards
│   ├── Contact.tsx          # Contact form and links
│   └── Footer.tsx           # Site footer
├── data/
│   └── projects.ts          # Project data and types
└── lib/
    ├── animations.ts        # Framer Motion animation variants
    └── useTheme.ts          # Dark mode hook
```
