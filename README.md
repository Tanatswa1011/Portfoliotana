# Data Professional Portfolio (Berlin)

Modern, minimal, and recruiter-focused portfolio website for a **Data Analyst / Data Automation Engineer** based in Berlin.

Built with:

- Next.js 14
- TypeScript
- Tailwind CSS
- Framer Motion

## Features

- Sticky navigation (Home, About, Projects, Experience, Skills, Contact)
- Professional hero section with subtle animated background
- Dark mode support
- Scroll-based reveal animations
- Smooth route/page transitions
- Dynamic project detail pages (`/projects/[slug]`)
- SEO metadata + JSON-LD structured data
- Fully responsive layout
- Vercel-ready setup

## Project Structure

```text
.
├── public/
│   └── cv.pdf
├── src/
│   ├── app/
│   │   ├── projects/
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   ├── globals.css
│   │   ├── icon.svg
│   │   ├── layout.tsx
│   │   ├── not-found.tsx
│   │   ├── page.tsx
│   │   └── template.tsx
│   ├── components/
│   │   ├── about.tsx
│   │   ├── animated-section.tsx
│   │   ├── contact.tsx
│   │   ├── experience.tsx
│   │   ├── footer.tsx
│   │   ├── hero.tsx
│   │   ├── navbar.tsx
│   │   ├── projects.tsx
│   │   ├── section-heading.tsx
│   │   ├── skills.tsx
│   │   ├── theme-provider.tsx
│   │   └── theme-toggle.tsx
│   └── data/
│       └── portfolio.ts
├── .eslintrc.json
├── .gitignore
├── next.config.mjs
├── next-env.d.ts
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

3. Open:

```text
http://localhost:3000
```

## Production Build

```bash
npm run build
npm run start
```

## Deployment on Vercel

1. Push this repository to GitHub.
2. Go to [vercel.com](https://vercel.com) and import the GitHub repository.
3. Vercel auto-detects Next.js settings.
4. Click **Deploy**.

No extra configuration is required for this project.

## Customization Notes

- Replace `public/cv.pdf` with your final CV.
- Update contact links in `src/components/contact.tsx`.
- Update profile text, projects, skills, and experience in `src/data/portfolio.ts`.
- Set real production URL in `src/app/layout.tsx` (`metadataBase` and Open Graph URL).
