# ✨ Dark Luxury Portfolio — Nguyễn Xuân Trung

<div align="center">

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-FF0055?style=for-the-badge&logo=framer&logoColor=white)
![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

**A premium dark-themed personal portfolio built with modern web technologies.**

[Live Demo](#) · [Report Bug](https://github.com/xuantrung-DA/my-portfolio/issues) · [Request Feature](https://github.com/xuantrung-DA/my-portfolio/issues)

</div>

---

## 📸 Preview

| Home | Projects | Honors & Awards |
|------|----------|-----------------|
| Hero section with particle background & typing animation | Filterable project grid with detail modal | Award cards with category badges |

---

## 🛠 Tech Stack

| Category | Technology |
|----------|-----------|
| **Framework** | [React 19](https://react.dev/) — Component-based UI library |
| **Build Tool** | [Vite 8](https://vite.dev/) — Lightning-fast HMR & optimized builds |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) — CSS-first configuration with custom theme |
| **Routing** | [React Router v7](https://reactrouter.com/) — Client-side multi-page navigation |
| **Animation** | [Framer Motion 12](https://www.framer.com/motion/) — Page transitions, scroll reveals, hover effects |
| **Icons** | [React Icons](https://react-icons.github.io/react-icons/) — GitHub, LinkedIn, and more |
| **Deployment** | [Vercel](https://vercel.com/) — Zero-config deployment with SPA routing |

---

## 🎨 Design System

The portfolio uses a **Dark Luxury** design language inspired by premium business presentation themes.

### Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| 🖤 `bg-primary` | `#0d0d0d` | Main background |
| ◼️ `bg-secondary` | `#1a1a1a` | Cards & sections |
| ◻️ `bg-tertiary` | `#2a2a2a` | Hover states |
| 🟡 `gold` | `#c9a84c` | Primary accent |
| 🟨 `gold-light` | `#d4b85a` | Hover accent |
| ⬜ `text-primary` | `#ffffff` | Headings & body |
| 🩶 `text-secondary` | `#b0b0b0` | Descriptions |

### Typography

- **Headings:** [Playfair Display](https://fonts.google.com/specimen/Playfair+Display) — Elegant serif font
- **Body:** [Inter](https://fonts.google.com/specimen/Inter) — Clean sans-serif font

### Key Design Features

- 🌟 **Gold border frames** — Signature accent borders around key sections
- 🪟 **Glassmorphism** — Frosted glass navbar with backdrop blur
- ✨ **Particle background** — Canvas-based gold particle animation on hero
- 🔤 **Typing animation** — Auto-cycling role titles
- 🧭 **Section navigation** — Smooth one-page navigation with active-section tracking
- 📜 **Scroll reveals** — Elements animate in on scroll (Framer Motion)
- 📱 **Fully responsive** — Mobile-first with hamburger navigation

---

## 📁 Project Structure

```
public/
└── cv/
    └── NguyenXuanTrung_AI_Engineer_CV.pdf  # Public CV used by View CV buttons
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx          # Responsive nav + glassmorphism
│   │   ├── Footer.jsx          # Social links & quick links
│   │   └── Layout.jsx          # Shared one-page layout
│   └── ui/
│       ├── GoldButton.jsx      # Primary/outline/ghost CTA buttons
│       ├── SectionTitle.jsx    # Section heading with gold ornament
│       ├── Card.jsx            # Dark card with gold glass variant
│       ├── SkillBar.jsx        # Animated gold progress bar
│       ├── Timeline.jsx        # Alternating timeline with gold dots
│       └── ParticlesBg.jsx     # Canvas-based particle effect
├── pages/
│   ├── HomePage.jsx            # Hero + CV CTA + particle bg + stats
│   ├── AboutPage.jsx           # Bio + experience + education
│   ├── SkillsPage.jsx          # Skill bars + tech cloud
│   ├── ProjectsPage.jsx        # Filterable grid + detail modal
│   ├── HonorsPage.jsx          # Awards, verified papers + certifications
│   └── ContactPage.jsx         # Recruitment contact form + info cards
├── data/
│   └── portfolio.js            # 📌 All content lives here
├── hooks/
│   └── useScrollAnimation.js   # IntersectionObserver hook
├── App.jsx                     # One-page section composition + hash handling
├── main.jsx                    # Entry point
└── index.css                   # Tailwind v4 theme + utilities
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** ≥ 9

### Installation

```bash
# Clone the repository
git clone https://github.com/xuantrung-DA/my-portfolio.git
cd my-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build optimized production bundle |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run Oxlint for code quality |

---

## ✏️ Customization

### Update Content

All portfolio content is centralized in **one single file**: [`src/data/portfolio.js`](src/data/portfolio.js)

```js
// Edit these exports to update your portfolio:
export const personalInfo = { name, title, bio, cvUrl, socials, ... }
export const skills       = [{ category, items: [{ name, level }] }]
export const projects     = [{ title, description, tags, github, demo }]
export const honors       = [{ title, organization, year, type }]
export const experience   = [{ role, company, period, description }]
export const education    = [{ degree, school, period, gpa }]
```

### Update Your CV

Replace `public/cv/NguyenXuanTrung_AI_Engineer_CV.pdf` with the latest PDF while
keeping the same filename. To use another filename, update `personalInfo.cvUrl`
in `src/data/portfolio.js`.

### Add Your Photo

1. Place your photo in `src/assets/images/`
2. Import and use it in `AboutPage.jsx`

### Integrate Contact Form

The contact form currently opens the visitor's email client with a prepared
`mailto:` message. For direct form delivery without an email client, integrate:

- **[Formspree](https://formspree.io/)** — Add your form endpoint
- **[EmailJS](https://www.emailjs.com/)** — Client-side email sending
- **Custom API** — Connect to your own backend

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) → **Import Project**
3. Select your repository
4. Vercel auto-detects Vite — click **Deploy**

> SPA routing is pre-configured in `vercel.json`

### Deploy to Other Platforms

<details>
<summary><strong>Netlify</strong></summary>

Add a `_redirects` file in `public/`:
```
/*    /index.html   200
```
</details>

<details>
<summary><strong>GitHub Pages</strong></summary>

1. Install: `npm install -D gh-pages`
2. Add to `package.json`:
   ```json
   "homepage": "https://xuantrung-DA.github.io/my-portfolio",
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```
3. Set `base` in `vite.config.js`:
   ```js
   export default defineConfig({ base: '/my-portfolio/' })
   ```
4. Run: `npm run deploy`
</details>

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

Built with ♦ by **Nguyễn Xuân Trung**

</div>
