import { personalInfo } from "../../data/portfolio";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-shell footer-inner">
        <p>© {new Date().getFullYear()} Nguyen Xuan Trung</p>
        <div className="footer-links">
          <a href={personalInfo.socials.github} target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
          <a href={personalInfo.socials.linkedin} target="_blank" rel="noreferrer">
            LinkedIn ↗
          </a>
          <a href={`mailto:${personalInfo.email}`}>Email ↗</a>
        </div>
        <p>Built for clarity, evidence & speed.</p>
      </div>
    </footer>
  );
}
