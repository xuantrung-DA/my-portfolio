# Nguyen Xuan Trung — AI Engineering Portfolio

A performance-focused React portfolio presenting applied AI projects, research,
experience, and engineering capabilities through measurable evidence.

## Design direction

- Midnight navy/amber dark mode and ivory/burgundy light mode
- Code-native AI inference visual with restrained glass and prismatic accents
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
npm install
npm run dev
```

Production checks:

```bash
npm run lint
npm run build
```

## Content and assets

- Portfolio content: `src/data/portfolio.js`
- Project visuals: `public/images/projects/`
- Social preview artwork: `public/images/hero/`
- Résumé: `public/cv/NguyenXuanTrung_AI_Engineer_CV.pdf`
- Theme and responsive layout: `src/index.css`

The home page prioritizes three flagship projects while keeping the remaining
projects, publications, academic recognition, and credentials accessible below.

## Performance approach

- No video, WebGL, or continuous canvas renderer
- No animation framework in the client bundle
- Code-native hero diagram; WebP is reserved for social/project imagery
- Lazy-loaded project and profile imagery
- Transform/opacity-only reveal motion
- Automatic lite mode for low-memory/low-CPU devices and Data Saver
- Static reduced-motion fallback

## Deployment

The repository includes `vercel.json` for SPA fallback routing. Vercel can build
the project with the default `npm run build` command and publish `dist/`.
