# Portfolio maintenance guide

## Review status and direction

Terracotta rebuild approved by the owner for commit and push. The owner authorized the new one-page CV; it now replaces the previous PDF at the existing URL.

Present Nguyễn Xuân Trung as an AI undergraduate / junior candidate with computer vision and LLM application projects. ECE internship: 01/2026–05/2026. Graduation: June 2027. Part-time now; full-time from July 2027.

## Architecture

- [App.jsx](./src/App.jsx): homepage, project detail and project-not-found views; metadata and legacy section aliases.
- [PortfolioPage.jsx](./src/pages/PortfolioPage.jsx): home, experience, selected work, research, education/about and contact.
- [ProjectPage.jsx](./src/pages/ProjectPage.jsx): contribution, evaluation scope, technical notes and implementation.
- [SiteLayout.jsx](./src/components/SiteLayout.jsx): header/footer and standard anchor navigation.
- [ProjectImage.jsx](./src/components/ProjectImage.jsx): native image dialog, keyboard dismissal and scroll lock.
- [portfolio.js](./src/data/portfolio.js): canonical content and navigation.
- [projectNotes.js](./src/data/projectNotes.js): selected order (TraceVision, Subject Knowledge Hub, AQB-FAS) and concise notes; keep consistent with canonical records.
- [styles.css](./src/styles.css): one light Terracotta theme. Old navy/amber styles and animation components are removed.
- [index.html](./index.html): initial metadata, favicon and theme color.

## Content rules

- Six research entries: two published, four accepted. Both RIVF papers are accepted. TinyConformalAD is excluded.
- Do not invent results, motivations, deployment claims or personal details.
- Keep full official paper titles and author lists; emphasize the owner's name.
- Explain benchmark scope. Cache speedup is not end-to-end inference speed; retrieval recall is not answer accuracy.
- Distinguish personal contributions from team outcomes.
- No badge walls, skill charts, decorative AI graphics or metric counters.
- Use actual existing visuals; generated screenshots must not imply implemented products.
- The current PDF is the owner-supplied one-page version, with ECE internship 01/2026–05/2026. Keep its existing public URL.

## Verification

```powershell
npm.cmd run check
git -c safe.directory=D:/rebuild-CV-portfolio/portfolio diff --check
```

Check mobile/desktop overflow, research count, loaded images, CV link, copy-email feedback, disclosures and image dialogs. Open project URLs directly and through links, reload, use Back, and return to the project section. Legacy `/projects`, `/skills`, `/honors` and corresponding hashes should resolve to homepage sections.

Future changes should be reviewed by the owner before publishing when requested.
