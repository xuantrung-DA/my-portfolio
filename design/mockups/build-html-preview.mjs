import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { personalInfo, experience, projects, honors } from '../../src/data/portfolio.js';

const root = new URL('../../', import.meta.url);
const escape = (value) => String(value).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
const asset = async (path, mime) => `data:${mime};base64,${(await readFile(new URL(path, root))).toString('base64')}`;
const external = (url, label, extra = '') => `<a href="${escape(url)}" target="_blank" rel="noopener noreferrer" ${extra}>${label}<span aria-hidden="true"> ↗</span></a>`;
const portrait = await asset('CV_image.jpg', 'image/jpeg');
const cv = await asset('public' + personalInfo.cvUrl, 'application/pdf');
const selectedIds = [7, 8, 6];
const selected = selectedIds.map((id) => projects.find((project) => project.id === id));
const research = honors.filter((item) => item.type === 'research');
const published = research.filter((item) => item.statusLabel === 'Published').length;
const accepted = research.filter((item) => item.status === 'Accepted').length;
const intern = experience.find((item) => item.company.includes('ECE'));
const editorial = {
  7: {
    title: 'TraceVision', category: 'Multimodal search',
    summary: 'Search videos. Find the moment behind an answer.',
    description: 'A local video-search prototype that combines object tracks, speech transcripts and visual retrieval to return answers with timestamped evidence.',
    contribution: 'I built the indexing pipeline, reusable stage caches, bilingual query planner and FastAPI / React workspace.',
    decision: 'Reuse persisted evidence before running models again. A rule-based planner keeps supported English and Vietnamese queries predictable, but handles fewer paraphrases.',
    result: 'The planner matched 35 of 40 authored evaluation queries. Warm-cache indexing was 52.3× faster across 15 short videos on an RTX 4050 Laptop GPU.',
    scope: 'This is a short-video local benchmark. Query-plan match measures parsing, not answer accuracy; cache reuse is not end-to-end inference speed.',
  },
  8: {
    title: 'Subject Knowledge Hub', category: 'Document retrieval',
    summary: 'Ask your PDFs. Keep the source page attached.',
    description: 'A Vietnamese and English PDF application with subject-scoped retrieval, version-specific page citations and document ingestion that can resume after interruption.',
    contribution: 'I built the application, versioned document pipeline, retrieval filters and Celery workers with PostgreSQL checkpoints.',
    decision: 'Activate document versions atomically and retain historical citations. This improves recoverability, at the cost of more database state and worker coordination.',
    result: 'Page-boundary chunking used 25.3% fewer provider input tokens on 70 held-out synthetic bilingual questions. Three interrupted jobs recovered in controlled process-kill tests.',
    scope: 'The token comparison uses synthetic material. Recovery was tested with fixture embeddings. These results do not establish production reliability or answer accuracy.',
  },
  6: {
    title: 'AQB-FAS', category: 'Computer vision · RIVF 2026, accepted',
    summary: 'Face anti-spoofing with a smaller payload.',
    description: 'A split-computing framework that sends a fixed-size facial representation from an edge encoder to a server-side classifier.',
    contribution: 'As first author, I proposed the core idea and architecture, led evaluation and interpreted the threshold-policy and deployment results.',
    decision: 'Transmit a fixed 64-byte latent instead of an image. This reduces communication, but introduces a representation bottleneck and cross-domain robustness trade-offs.',
    result: 'A 64-byte payload replaces a 150,528-byte RGB input. CelebA-Spoof test accuracy was 97.01%, with 2.66% ACER at a validation-selected threshold.',
    scope: 'Edge-encoder timing was measured on Intel Arc B580. It excludes network latency; source-domain performance does not guarantee cross-domain robustness.',
  },
};

const projectRows = await Promise.all(selected.map(async (project, index) => {
  const copy = editorial[project.id];
  const mime = project.visualImage.endsWith('.svg') ? 'image/svg+xml' : 'image/webp';
  const image = await asset('public' + project.visualImage, mime);
  return `<article class="project" id="${escape(project.slug)}">
    <div class="project-heading"><span class="project-number" aria-hidden="true">0${index + 1}</span><p class="project-category">${escape(copy.category)}</p><span class="project-year">${escape(project.period)}</span></div>
    <div class="project-grid"><div class="project-copy"><h3>${escape(copy.title)}</h3><p class="project-summary">${escape(copy.summary)}</p><p>${escape(copy.description)}</p><p class="contribution"><strong>My part.</strong> ${escape(copy.contribution)}</p><div class="text-links">${external(project.github, 'GitHub repository')}</div></div>
    <figure class="project-figure"><button class="image-button" type="button" data-image="${image}" data-caption="${escape(project.visualCaption)}" aria-label="Enlarge ${escape(copy.title)} architecture"><img src="${image}" alt="${escape(project.visualAlt)}" width="${project.visualWidth}" height="${project.visualHeight}" loading="lazy"><span class="enlarge-label">View architecture <span aria-hidden="true">↗</span></span></button><figcaption>Architecture from the project repository.</figcaption></figure></div>
    <details class="case-study"><summary>Design decisions &amp; evaluation <span class="expand-sign" aria-hidden="true"></span></summary><div class="case-body"><div><h4>A decision I made</h4><p>${escape(copy.decision)}</p></div><div><h4>What I measured</h4><p>${escape(copy.result)}</p></div><div class="scope"><h4>Limits of the result</h4><p>${escape(copy.scope)}</p></div></div></details>
  </article>`;
}));

const paperRows = research.map((paper) => {
  const title = paper.description.replace(/^[“”]|[“”]$/g, '');
  const authorNames = escape(paper.authors).replace(/Xuan Trung Nguyen|Trung, N\.X\./g, '<strong>$&</strong>');
  return `<li class="paper"><div class="paper-meta"><span>${paper.status === 'Accepted' ? 'Accepted' : 'Published'}</span><span>${escape(paper.year)}</span></div><div><h3>${escape(title)}</h3><p class="authors">${authorNames}</p><p class="venue">${escape(paper.organization)}</p><div class="paper-links">${external(paper.credentialUrl, paper.doi ? 'Publication · DOI' : 'Conference website')}${paper.acceptedDate ? `<span>Accepted ${escape(paper.acceptedDate)}</span>` : ''}</div></div></li>`;
}).join('');

const additionalRows = projects.filter((project) => !selectedIds.includes(project.id)).map((project) => `<li><div><h3>${escape(project.title)}</h3><p>${escape(project.role)} · ${escape(project.period)}</p></div>${external(project.github, 'Repository')}</li>`).join('');

const html = `<!doctype html>
<html lang="en" data-palette="terracotta">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<meta name="description" content="Independent design preview for Nguyễn Xuân Trung’s academic and AI engineering portfolio.">
<title>Nguyễn Xuân Trung — Portfolio design preview</title>
<style>
/* System fonts and embedded assets keep this preview usable offline. */
:root { color-scheme: light; --bg:#f7f6f4; --text:#26211d; --muted:#655d56; --accent:#9d5736; --swatch:#c07a55; --tint:#ede4dd; --line:#d4d1cb; --surface:#fdfcfb; --serif:Georgia,'Times New Roman',serif; --sans:Inter,'Segoe UI',Arial,sans-serif; }
html[data-palette="warm"] { --bg:#faf7f2; --text:#3f3a34; --muted:#6c6258; --accent:#825b35; --swatch:#a87d52; --tint:#eee6db; --line:#d8cfc3; --surface:#fffcf7; }
* { box-sizing:border-box; }
html { scroll-behavior:smooth; scroll-padding-top:110px; }
body { margin:0; background:var(--bg); color:var(--text); font:16px/1.7 var(--sans); -webkit-font-smoothing:antialiased; }
button,a { -webkit-tap-highlight-color:transparent; }
button { font:inherit; cursor:pointer; }
a { color:var(--accent); text-decoration-thickness:1px; text-underline-offset:5px; }
a:hover { text-decoration-thickness:2px; }
button:focus-visible,a:focus-visible,summary:focus-visible { outline:2px solid var(--accent); outline-offset:5px; }
button { color:inherit; }
img { display:block; max-width:100%; }
h1,h2,h3,p,figure,dl,dd { margin:0; }
h1,h2,h3 { font-family:var(--serif); font-weight:400; }
p + p { margin-top:12px; }
h2 { font-size:35px; line-height:1.2; letter-spacing:-1px; }
.container { width:min(1080px,calc(100% - 96px)); margin-inline:auto; }
.skip { position:fixed; top:-100px; left:16px; z-index:30; padding:8px 16px; background:var(--text); color:var(--bg); }
.skip:focus { top:8px; }
.preview-bar { background:#edecea; color:#494641; border-bottom:1px solid #d9d7d3; font-size:12px; line-height:1.4; }
.preview-inner { max-width:1360px; margin:auto; padding:10px 24px; display:flex; align-items:center; justify-content:space-between; gap:16px; }
.preview-label { display:flex; align-items:center; gap:10px; }
.preview-label strong { font-weight:600; }
.preview-label span { color:#6c6863; }
.palette-switch { display:flex; align-items:center; gap:6px; }
.palette-switch button { display:flex; gap:7px; align-items:center; background:transparent; color:#494641; border:1px solid transparent; border-radius:4px; padding:6px 10px; font-size:12px; line-height:1.3; white-space:nowrap; }
.palette-switch button[aria-pressed="true"] { background:#fff; border-color:#c5c1bb; }
.swatch { width:11px; height:11px; border-radius:50%; background:#c07a55; display:inline-block; }
.swatch.warm { background:#a87d52; }
.site-header { position:sticky; top:0; z-index:10; background:var(--bg); }
.header-inner { display:flex; justify-content:space-between; align-items:center; min-height:89px; border-bottom:1px solid var(--line); gap:24px; }
.wordmark { font:22px/1.3 var(--serif); letter-spacing:-.6px; color:var(--text); text-decoration:none; white-space:nowrap; }
.nav { display:flex; gap:26px; }
.nav a { color:var(--muted); font-size:13px; text-decoration:none; }
.nav a:hover,.nav a[aria-current="location"] { color:var(--accent); text-decoration:underline; }
.hero { display:grid; grid-template-columns:minmax(0,1fr) 230px; gap:80px; padding:76px 0 68px; }
.eyebrow { font-size:13px; color:var(--accent); margin-bottom:15px; }
h1 { font-size:clamp(42px,5.4vw,66px); line-height:1.08; letter-spacing:-2.7px; margin-left:-3px; }
.hero-subtitle { font:italic 25px/1.4 var(--serif); margin-top:17px; }
.intro { font-size:17px; color:var(--muted); max-width:620px; margin-top:22px; }
.hero-actions { display:flex; align-items:center; gap:25px; margin-top:28px; font-size:14px; }
.button { display:inline-flex; align-items:center; gap:18px; background:var(--accent); color:#fff; padding:10px 18px; border:1px solid var(--accent); border-radius:3px; font-weight:500; text-decoration:none; }
.button:hover { background:var(--text); border-color:var(--text); text-decoration:none; }
.hero-aside { padding-left:30px; border-left:1px solid var(--line); align-self:center; }
.portrait { width:96px; height:114px; object-fit:cover; object-position:center 28%; border-radius:2px; margin-bottom:23px; filter:saturate(.8); }
.hero-aside dl { display:grid; gap:15px; font-size:13px; line-height:1.5; }
dt { color:var(--muted); font-size:12px; }
.hero-aside dd { margin-top:3px; }
.section { border-top:1px solid var(--line); padding:46px 0 52px; }
.section-head { display:flex; gap:20px; align-items:baseline; justify-content:space-between; margin-bottom:30px; }
.section-head > p { color:var(--muted); font-size:13px; }
.section-note { font-size:15px; color:var(--muted); margin-top:12px; max-width:650px; }
.experience-row { display:grid; grid-template-columns:190px minmax(0,1fr); gap:45px; }
.date { font-size:14px; color:var(--muted); padding-top:3px; }
.experience-row h3 { font-size:24px; line-height:1.3; }
.company { color:var(--muted); font-size:14px; margin-top:6px; }
.experience-row ul { padding-left:18px; margin:18px 0 0; color:var(--muted); font-size:15px; }
.experience-row li { padding-left:5px; margin-top:6px; }
.project { border-top:1px solid var(--line); padding:29px 0 26px; }
.project:first-child { border-top:0; padding-top:0; }
.project-heading { display:flex; gap:15px; align-items:baseline; font-size:12px; color:var(--muted); margin-bottom:15px; }
.project-number { font-family:var(--serif); color:var(--accent); font-size:15px; }
.project-category { flex:1; margin:0; }
.project-grid { display:grid; grid-template-columns:1.1fr 1fr; gap:44px; align-items:center; }
.project h3 { font-size:29px; letter-spacing:-.8px; line-height:1.2; }
.project-summary { font:italic 19px/1.4 var(--serif); margin-top:9px; }
.project-copy > p:not(.project-summary) { color:var(--muted); font-size:14px; margin-top:15px; }
.contribution strong { color:var(--text); font-weight:600; }
.text-links { margin-top:17px; font-size:13px; }
.image-button { border:1px solid var(--line); border-radius:2px; background:#fff; padding:16px 12px 0; width:100%; text-align:left; }
.image-button img { width:100%; height:168px; object-fit:contain; }
.enlarge-label { display:flex; justify-content:space-between; gap:10px; padding:10px 2px; font-size:11px; border-top:1px solid #e8e5e1; color:#60574d; margin-top:10px; }
.image-button:hover { border-color:var(--accent); }
figcaption { font-size:11px; line-height:1.5; color:var(--muted); margin-top:8px; }
.case-study { margin-top:22px; }
summary { cursor:pointer; list-style:none; }
summary::-webkit-details-marker { display:none; }
.case-study > summary { display:flex; align-items:center; gap:10px; width:fit-content; color:var(--accent); font-size:13px; }
.expand-sign { font-size:18px; line-height:1; }
.expand-sign::after { content:'+'; }
details[open] > summary .expand-sign::after { content:'−'; }
.case-body { margin-top:19px; padding:22px 24px; background:var(--tint); display:grid; grid-template-columns:1fr 1fr; gap:24px; font-size:14px; }
.case-body h4 { font-size:13px; font-weight:600; margin:0 0 6px; }
.case-body p { color:var(--muted); }
.case-body .scope { grid-column:1/-1; padding-top:16px; border-top:1px solid var(--line); }
.more-projects { border-top:1px solid var(--line); padding-top:20px; margin-top:8px; }
.more-projects > summary { font-size:14px; display:flex; gap:12px; align-items:center; color:var(--accent); }
.more-projects ul { list-style:none; padding:4px 0 0; margin:16px 0 0; }
.more-projects li { display:flex; align-items:baseline; justify-content:space-between; gap:30px; padding:16px 0; border-top:1px solid var(--line); }
.more-projects h3 { font:17px/1.4 var(--serif); }
.more-projects p,.more-projects a { font-size:12px; }
.more-projects p { color:var(--muted); margin-top:5px; }
.more-projects a { white-space:nowrap; }
.paper-list { padding:0; margin:0; list-style:none; }
.paper { display:grid; grid-template-columns:118px minmax(0,1fr); gap:28px; padding:23px 0; border-bottom:1px solid var(--line); }
.paper:first-child { padding-top:0; }
.paper:last-child { border-bottom:0; padding-bottom:0; }
.paper-meta { display:flex; flex-direction:column; gap:3px; padding-top:4px; color:var(--muted); font-size:12px; }
.paper-meta span:first-child { color:var(--accent); }
.paper h3 { font-size:19px; line-height:1.45; }
.authors,.venue { color:var(--muted); font-size:12px; line-height:1.6; margin-top:7px; }
.authors strong { font-weight:600; color:var(--text); }
.venue { margin-top:4px; }
.paper-links { display:flex; flex-wrap:wrap; gap:8px 20px; font-size:12px; margin-top:8px; }
.paper-links > span { color:var(--muted); }
.about-grid { display:grid; grid-template-columns:1.2fr 1fr; gap:70px; }
.about-text { color:var(--muted); font-size:15px; }
.education { margin-top:25px; padding-top:20px; border-top:1px solid var(--line); }
.education h3 { font-size:20px; }
.education p { font-size:13px; color:var(--muted); margin-top:6px; }
.skills-list { display:grid; gap:16px; font-size:14px; }
.skills-list dt { color:var(--text); font-size:13px; font-weight:600; margin-bottom:3px; }
.skills-list dd { color:var(--muted); }
.contact { padding:40px 0 42px; border-top:1px solid var(--line); display:flex; align-items:center; justify-content:space-between; gap:35px; }
.contact h2 { font-size:32px; }
.contact p { color:var(--muted); font-size:13px; margin-top:10px; }
.contact-links { display:flex; gap:24px; font-size:14px; flex-wrap:wrap; }
.footer { border-top:1px solid var(--line); padding:18px 0 25px; display:flex; gap:20px; justify-content:space-between; font-size:11px; color:var(--muted); }
.palette-description { display:flex; gap:7px; align-items:center; }
.palette-dot { background:var(--swatch); height:8px; width:8px; border-radius:50%; }
.image-dialog { width:min(1300px,calc(100% - 32px)); max-height:90dvh; padding:0; border:1px solid var(--line); background:var(--surface); color:var(--text); }
.image-dialog::backdrop { background:rgba(25,22,19,.65); }
.dialog-header { padding:15px 20px; display:flex; align-items:center; justify-content:space-between; gap:25px; font-size:14px; }
.dialog-header button { background:none; border:1px solid var(--line); border-radius:2px; padding:5px 12px; font-size:13px; }
.image-dialog img { width:100%; max-height:72dvh; object-fit:contain; background:#fff; padding:15px; }
.dialog-caption { padding:10px 20px 15px; color:var(--muted); font-size:12px; }
@media(min-width:1450px) { .container { width:1120px; } .hero { padding-top:86px; padding-bottom:78px; } }
@media(max-width:850px) { .container { width:calc(100% - 64px); } .nav { gap:18px; } .hero { gap:36px; grid-template-columns:minmax(0,1fr) 185px; padding-top:54px; } h1 { font-size:48px; } .hero-subtitle { font-size:22px; } .hero-aside { padding-left:22px; } .project-grid { gap:28px; } .experience-row { grid-template-columns:140px minmax(0,1fr); gap:28px; } .about-grid { gap:40px; } .project h3 { font-size:25px; } .image-button img { height:150px; } }
@media(max-width:640px) {
 html { scroll-padding-top:135px; } .container { width:calc(100% - 40px); }
 .preview-inner { padding:9px 14px; flex-wrap:wrap; gap:8px; justify-content:center; } .preview-label { font-size:10px; } .palette-switch button { padding:6px 9px; font-size:11px; }
 .header-inner { min-height:90px; padding:16px 0 12px; flex-direction:column; align-items:flex-start; gap:11px; } .wordmark { font-size:21px; } .nav { width:100%; gap:0; justify-content:space-between; } .nav a { font-size:12px; }
 .hero { padding:39px 0 35px; grid-template-columns:1fr; gap:30px; } h1 { font-size:44px; letter-spacing:-1.8px; } .eyebrow { font-size:12px; margin-bottom:12px; } .hero-subtitle { font-size:21px; margin-top:12px; } .intro { font-size:15px; margin-top:18px; } .hero-actions { margin-top:23px; gap:22px; font-size:13px; }
 .hero-aside { border-left:0; border-top:1px solid var(--line); padding:23px 0 0; display:flex; gap:22px; align-items:flex-start; } .portrait { width:72px; height:85px; margin:0; } .hero-aside dl { flex:1; grid-template-columns:1fr 1fr; gap:13px 16px; font-size:12px; } dt { font-size:11px; }
 .section { padding:32px 0 36px; } h2 { font-size:29px; } .section-head { margin-bottom:23px; gap:12px; flex-wrap:wrap; } .section-head > p { font-size:12px; } .section-note { font-size:14px; }
 .experience-row { grid-template-columns:1fr; gap:9px; } .date { font-size:12px; } .experience-row h3 { font-size:22px; } .experience-row ul { font-size:14px; margin-top:14px; }
 .project { padding:24px 0; } .project-grid { grid-template-columns:1fr; gap:22px; } .project h3 { font-size:27px; } .project-summary { font-size:19px; } .project-heading { font-size:11px; gap:10px; margin-bottom:12px; } .project-year { white-space:nowrap; } .project-copy > p:not(.project-summary) { font-size:14px; } .image-button img { height:160px; } .case-body { grid-template-columns:1fr; padding:18px; gap:18px; font-size:13px; }
 .more-projects li { gap:20px; } .more-projects h3 { font-size:16px; }
 .paper { grid-template-columns:1fr; gap:8px; padding:22px 0; } .paper-meta { flex-direction:row; gap:10px; padding:0; } .paper h3 { font-size:18px; }
 .about-grid { grid-template-columns:1fr; gap:28px; } .contact { flex-direction:column; align-items:flex-start; padding:30px 0; gap:20px; } .contact-links { gap:17px; font-size:13px; } .footer { flex-direction:column; gap:8px; }
}
@media(prefers-reduced-motion:reduce) { html { scroll-behavior:auto; } }
@media print { .preview-bar,.site-header,.hero-actions,.image-button .enlarge-label,.image-dialog { display:none; } .container { width:100%; } body { background:white; color:black; font-size:11pt; } .section { break-inside:avoid; } .hero { padding-top:0; } a { color:inherit; } }
</style>
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
<div class="preview-bar"><div class="preview-inner"><div class="preview-label"><strong>Design preview</strong><span>Standalone HTML · not the live website</span></div><div class="palette-switch" role="group" aria-label="Preview color palette"><button type="button" data-set-palette="terracotta" aria-pressed="true"><span class="swatch" aria-hidden="true"></span>C · Terracotta</button><button type="button" data-set-palette="warm" aria-pressed="false"><span class="swatch warm" aria-hidden="true"></span>A · Warm Neutral</button></div></div></div>
<header class="site-header"><div class="container header-inner"><a class="wordmark" href="#home">Nguyễn Xuân Trung<span aria-hidden="true">.</span></a><nav class="nav" aria-label="Main navigation"><a href="#experience">Experience</a><a href="#projects">Projects</a><a href="#research">Research</a><a href="#about">About</a><a href="#contact">Contact</a></nav></div></header>
<main id="main" class="container">
<section class="hero" id="home" aria-labelledby="intro-title"><div><p class="eyebrow">AI engineering student</p><h1 id="intro-title">Nguyễn Xuân Trung</h1><p class="hero-subtitle">Computer vision &amp; LLM applications.</p><p class="intro">I’m an AI undergraduate at FPT University, graduating in June 2027. I build applications for searching documents and videos, and work on efficient computer vision models.</p><div class="hero-actions"><a class="button" href="${cv}" download="Nguyen-Xuan-Trung-AI-Engineer-CV.pdf">Download CV <span aria-hidden="true">↓</span></a>${external(personalInfo.socials.github, 'GitHub')}<a href="#projects">View work <span aria-hidden="true">↓</span></a></div></div><aside class="hero-aside" aria-label="Personal information"><img class="portrait" src="${portrait}" width="96" height="114" alt="Nguyễn Xuân Trung"><dl><div><dt>Based in</dt><dd>Ho Chi Minh City</dd></div><div><dt>Graduating</dt><dd>June 2027</dd></div><div><dt>Availability</dt><dd>Part-time now<br>Full-time from July 2027</dd></div></dl></aside></section>
<section class="section" id="experience" aria-labelledby="experience-title"><div class="section-head"><h2 id="experience-title">Experience</h2></div><article class="experience-row"><p class="date">Jan — May 2026</p><div><h3>AI Engineer Intern</h3><p class="company">${escape(intern.company)} · E-commerce MVP</p><ul>${intern.responsibilities.map((line) => `<li>${escape(line)}</li>`).join('')}</ul></div></article></section>
<section class="section" id="projects" aria-labelledby="projects-title"><div class="section-head"><div><h2 id="projects-title">Selected projects</h2><p class="section-note">Three projects covering application development, retrieval and model evaluation.</p></div></div><div>${projectRows.join('')}</div><details class="more-projects"><summary>Other projects &amp; experiments <span class="expand-sign" aria-hidden="true"></span></summary><ul>${additionalRows}</ul></details></section>
<section class="section" id="research" aria-labelledby="research-title"><div class="section-head"><h2 id="research-title">Research</h2><p>${published} published · ${accepted} accepted</p></div><ol class="paper-list">${paperRows}</ol></section>
<section class="section" id="about" aria-labelledby="about-title"><div class="section-head"><h2 id="about-title">About &amp; education</h2></div><div class="about-grid"><div><p class="about-text">My work spans computer vision research and AI application development. At ECE Technology, I worked on product segmentation, LLM-assisted market research and backend deployment. My independent projects explore retrieval over documents and videos.</p><div class="education"><h3>FPT University</h3><p>B.Sc. in Artificial Intelligence · 2023–present</p><p>GPA 3.75/4.0 · Expected graduation June 2027</p><p>Top 100 Excellent Student: Summer 2025 and Fall 2025.</p></div></div><dl class="skills-list"><div><dt>Model development</dt><dd>Python, PyTorch, scikit-learn, OpenCV</dd></div><div><dt>Retrieval &amp; applications</dt><dd>RAG, pgvector, LangGraph, FastAPI, React</dd></div><div><dt>Data &amp; deployment</dt><dd>SQL, PostgreSQL, Docker, AWS EC2, ONNX, TensorRT</dd></div><div><dt>Community</dt><dd>FPTU AI &amp; Robotics Challenge 2025 — Organizing Committee, AI.</dd></div></dl></div></section>
<section class="contact" id="contact" aria-labelledby="contact-title"><div><h2 id="contact-title">Get in touch.</h2><p>Open to part-time AI engineering opportunities.</p></div><div class="contact-links"><a href="mailto:${escape(personalInfo.email)}">${escape(personalInfo.email)}</a>${external(personalInfo.socials.linkedin, 'LinkedIn')}</div></section>
</main><footer class="container footer"><p>© 2026 Nguyễn Xuân Trung</p><p class="palette-description"><span class="palette-dot" aria-hidden="true"></span><span id="palette-name" role="status" aria-live="polite">Terracotta · #F7F6F4 / #26211D / #C07A55</span></p></footer>
<dialog class="image-dialog" id="architecture-dialog" aria-labelledby="dialog-title"><div class="dialog-header"><p id="dialog-title">Project architecture</p><button type="button" id="close-image">Close <span aria-hidden="true">×</span></button></div><img id="expanded-image" alt=""><p class="dialog-caption" id="expanded-caption"></p></dialog>
<script>
(() => {
 const root = document.documentElement;
 const buttons = [...document.querySelectorAll('[data-set-palette]')];
 function setPalette(value) {
  const palette = value === 'warm' ? 'warm' : 'terracotta';
  root.dataset.palette = palette;
  buttons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.setPalette === palette)));
  document.getElementById('palette-name').textContent = palette === 'warm' ? 'Warm Neutral · #FAF7F2 / #3F3A34 / #A87D52' : 'Terracotta · #F7F6F4 / #26211D / #C07A55';
  try { localStorage.setItem('portfolio-preview-palette', palette); } catch {}
 }
 const fromQuery = new URLSearchParams(location.search).get('palette');
 let saved = null;
 try { saved = localStorage.getItem('portfolio-preview-palette'); } catch {}
 setPalette(fromQuery || saved);
 buttons.forEach(button => button.addEventListener('click', () => setPalette(button.dataset.setPalette)));
 const dialog = document.getElementById('architecture-dialog');
 const expanded = document.getElementById('expanded-image');
 document.querySelectorAll('[data-image]').forEach(button => button.addEventListener('click', () => {
  expanded.src = button.dataset.image;
  expanded.alt = button.querySelector('img').alt;
  document.getElementById('expanded-caption').textContent = button.dataset.caption;
  dialog.showModal();
 }));
 document.getElementById('close-image').addEventListener('click', () => dialog.close());
 dialog.addEventListener('click', event => { if (event.target === dialog) { const r = dialog.getBoundingClientRect(); if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) dialog.close(); } });
 dialog.addEventListener('close', () => { expanded.removeAttribute('src'); });
 const navLinks = [...document.querySelectorAll('.nav a')];
 const observer = new IntersectionObserver(entries => {
  const current = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
  if (!current) return;
  navLinks.forEach(link => { if (link.hash === '#' + current.target.id) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current'); });
 }, { rootMargin: '-15% 0px -50%', threshold: [0, .1, .5] });
 document.querySelectorAll('main section[id]').forEach(section => observer.observe(section));
})();
</script>
</body></html>`;

const output = new URL('./portfolio-preview.html', import.meta.url);
await writeFile(output, html, 'utf8');
console.log(`Created ${fileURLToPath(output)} (${Math.round(Buffer.byteLength(html) / 1024)} KB)`);
