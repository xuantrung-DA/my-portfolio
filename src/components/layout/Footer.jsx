import { FaGithub, FaEnvelope } from "react-icons/fa";
import { personalInfo, navLinks } from "../../data/portfolio";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-secondary border-t border-border relative overflow-hidden">
      {/* Gold line accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <a href="#home" className="inline-flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center font-heading text-on-gold font-bold text-lg">
                T
              </div>
              <span className="font-heading text-xl tracking-wider">
                TRUNG<span className="text-gold">.</span>
              </span>
            </a>
            <p className="text-text-secondary text-sm leading-relaxed mt-3">
              {personalInfo.title} candidate with experience in applied AI,
              computer vision, backend APIs, and deployment workflows.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-sm tracking-widest uppercase text-gold mb-6">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.path}
                  href={link.path}
                  className="text-text-secondary hover:text-gold text-sm py-1 transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Professional links */}
          <div>
            <h4 className="font-heading text-sm tracking-widest uppercase text-gold mb-6">
              Professional Links
            </h4>
            <div className="flex gap-3">
              {[
                { icon: <FaGithub size={18} />, url: personalInfo.socials.github, label: "GitHub" },
                { icon: <FaEnvelope size={18} />, url: `mailto:${personalInfo.email}`, label: "Email" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg border border-border bg-bg-tertiary/50 flex items-center justify-center text-text-secondary hover:text-gold hover:border-gold/50 hover:bg-gold/5 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <p className="text-text-muted text-sm mt-4 break-all">
              {personalInfo.email}
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-text-muted text-xs tracking-wider">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-text-muted text-xs tracking-wider">
            Built with <span className="text-gold">♦</span> React + Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
