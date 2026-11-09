import { navLinks, personalInfo } from "../data/portfolio";

export function ExternalLink({ href, children, className }) {
  return (
    <a href={href} className={className} target="_blank" rel="noopener noreferrer">
      {children}<span aria-hidden="true"> ↗</span>
    </a>
  );
}

export default function SiteLayout({ children, projectPage = false }) {
  const home = projectPage ? "/" : "";
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="site-header">
        <div className="site-shell header-inner">
          <a className="wordmark" href={`${home}#home`}>
            {personalInfo.name}<span aria-hidden="true">.</span>
          </a>
          <nav className="site-nav" aria-label="Main navigation">
            {navLinks.map(({ label, path }) => (
              <a key={path} href={`${home}${path}`}>{label}</a>
            ))}
          </nav>
        </div>
      </header>
      <main id="main-content">{children}</main>
      <footer className="site-shell site-footer">
        <p>© {new Date().getFullYear()} {personalInfo.name}</p>
        <div className="footer-links">
          <ExternalLink href={personalInfo.socials.github}>GitHub</ExternalLink>
          <ExternalLink href={personalInfo.socials.linkedin}>LinkedIn</ExternalLink>
          <a href={`mailto:${personalInfo.email}`}>Email <span aria-hidden="true">↗</span></a>
        </div>
        <a href={`${home}#home`}>Back to top <span aria-hidden="true">↑</span></a>
      </footer>
    </>
  );
}
