# Nguyễn Xuân Trung — AI Engineering Portfolio

Personal AI portfolio rebuilt in Terracotta. The Terracotta design and one-page CV were reviewed and approved by the owner.

## Run locally

```powershell
npm.cmd ci
npm.cmd run dev
npm.cmd run check
```

Vercel builds with `npm run build` and publishes `dist/` using the existing SPA rewrite.

## Design

Off-white `#F7F6F4`, charcoal `#26211D`, terracotta `#C07A55`. Small links and white-on-color buttons use darker `#985331` for readability. Serif headings, system sans-serif body, no external fonts or continuous decoration. Experience first, three selected projects, six research entries, education and contact. Additional projects and credentials remain available through native disclosures. Dedicated case studies use `/projects/<slug>`.

## Source map

- [portfolio.js](./src/data/portfolio.js): canonical profile, experience, projects, research, credentials and navigation.
- [projectNotes.js](./src/data/projectNotes.js): selected project order and concise introductions.
- [PortfolioPage.jsx](./src/pages/PortfolioPage.jsx): homepage sections.
- [ProjectPage.jsx](./src/pages/ProjectPage.jsx): case-study pages.
- [SiteLayout.jsx](./src/components/SiteLayout.jsx): header and footer.
- [ProjectImage.jsx](./src/components/ProjectImage.jsx): image dialog.
- [styles.css](./src/styles.css): palette, typography and responsive layouts.
- [projects/](./public/images/projects/): existing architecture images.
- [CV](./public/cv/Nguyen-Xuan-Trung-AI-Engineer-CV.pdf): new one-page PDF selected by the owner.
- [mockups/](./design/mockups/): earlier design concepts.

See [about.md](./about.md) for maintenance rules. Always distinguish individual contributions, team results and benchmark scope.
