# Nguyen Xuan Trung — AI Engineering Portfolio

A performance-focused React portfolio presenting applied AI projects, research,
experience, and engineering capabilities through measurable evidence.

## Design direction

- Midnight navy/amber dark mode and ivory/burgundy light mode
- Code-native, project-backed AI capability map with restrained glass accents
- Outcome-first project storytelling instead of generic technology cards
- Responsive layouts from 320px mobile screens through wide desktop displays
- Lightweight motion using transforms, opacity, CSS, and IntersectionObserver
- Automatic low-power motion profile plus reduced-motion support

## Stack

- React 19
- Vite 8
- Tailwind CSS 4
- React Icons
- Oxlint
- Vercel

## Local development

```bash
npm ci
npm run dev
```

Production checks:

```bash
npm run check
```

## Content and assets

- Maintenance map and editing rules: `about.md`
- Portfolio content: `src/data/portfolio.js`
- Project visuals: `public/images/projects/`
- Social preview artwork: `public/images/hero/`
- Résumé: `public/cv/NguyenXuanTrung_AI_Engineer_CV.pdf`
- Theme and responsive layout: `src/index.css`

The home page prioritizes four flagship projects and keeps four additional
projects, publications, academic recognition, and credentials accessible below.
Every project has a shareable `/projects/<slug>` case-study URL.

## Performance approach

- No video, WebGL, or continuous canvas renderer
- No animation framework in the client bundle
- Code-native hero diagram; project visuals use optimized SVG or WebP assets
- Lazy-loaded project and profile imagery
- Transform/opacity-only reveal motion
- Automatic lite mode for low-memory/low-CPU devices and Data Saver
- Static reduced-motion fallback

## Deployment

The repository includes `vercel.json` for SPA fallback routing. Vercel can build
the project with the default `npm run build` command and publish `dist/`.
