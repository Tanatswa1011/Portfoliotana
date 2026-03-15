# Data Professional Portfolio

Professional portfolio website for a Berlin-based Data Analyst / Data Automation
Engineer built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- next-themes for dark mode

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run build
npm run start
```

## Deployment on Vercel

1. Push the repository to GitHub.
2. Import the project into Vercel.
3. Keep the default framework preset as **Next.js**.
4. No additional environment variables are required for the current version.
5. Deploy.

## Personalization

Update content in `lib/data.ts` to change:

- name
- email
- LinkedIn link
- Calendly link
- CV path
- experience copy
- project descriptions

Replace the placeholder CV in `public/Tanatswa-Musonza-CV.pdf` with the final
resume before deployment.

## Project structure

```text
app/
  icon.tsx
  globals.css
  layout.tsx
  opengraph-image.tsx
  page.tsx
  robots.ts
  sitemap.ts
  projects/[slug]/page.tsx
components/
  about-section.tsx
  button.tsx
  contact-form.tsx
  contact-section.tsx
  experience-section.tsx
  footer.tsx
  hero-section.tsx
  motion-reveal.tsx
  navigation.tsx
  project-card.tsx
  projects-section.tsx
  section-heading.tsx
  skills-section.tsx
  theme-provider.tsx
  theme-toggle.tsx
lib/
  data.ts
  utils.ts
public/
  Tanatswa-Musonza-CV.pdf
```
