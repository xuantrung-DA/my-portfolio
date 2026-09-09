import { useEffect, useState } from "react";
import { FaArrowRight, FaFileArrowDown, FaMoon, FaSun } from "react-icons/fa6";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { navLinks, personalInfo } from "../../data/portfolio";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [theme, setTheme] = useState(() =>
    document.documentElement.dataset.theme === "light" ? "light" : "dark",
  );

  useEffect(() => {
    const root = document.documentElement;
    const themeColor = document.querySelector('meta[name="theme-color"]');
    root.dataset.theme = theme;
    root.style.colorScheme = theme;

    try {
      window.localStorage.setItem("portfolio-theme", theme);
    } catch {
      // The toggle still works when browser storage is unavailable.
    }

    themeColor?.setAttribute(
      "content",
      theme === "light" ? "#f2e7d4" : "#06152f",
    );
  }, [theme]);

  useEffect(() => {
    let frame = 0;
    const handleScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        setScrolled(window.scrollY > 20);
        frame = 0;
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.path.slice(1)))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-28% 0px -58%", threshold: [0, 0.05, 0.2] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isOpen) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleNavigation = (event, path) => {
    event.preventDefault();
    setIsOpen(false);
    const section = document.getElementById(path.slice(1));
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.pushState(null, "", path);
  };

  const renderLink = (link, mobile = false) => {
    const isActive = activeSection === link.path.slice(1);
    return (
      <a
        key={link.path}
        href={link.path}
        onClick={(event) => handleNavigation(event, link.path)}
        className={`nav-link ${isActive ? "is-active" : ""}`}
        aria-current={isActive ? "location" : undefined}
      >
        {link.label}
        {mobile && <FaArrowRight size={11} aria-hidden="true" />}
      </a>
    );
  };

  return (
    <nav className={`site-nav ${scrolled ? "is-scrolled" : ""}`}>
      <div className="site-shell nav-inner">
        <a
          href="#home"
          onClick={(event) => handleNavigation(event, "#home")}
          className="brand"
          aria-label="Nguyen Xuan Trung — home"
        >
          <span className="brand-mark">XT</span>
          <span>
            <span className="brand-name">Nguyen Xuan Trung</span>
            <span className="brand-role"> / AI ENGINEER</span>
          </span>
        </a>

        <div className="nav-links" aria-label="Primary navigation">
          {navLinks.map((link) => renderLink(link))}
        </div>

        <div className="nav-actions">
          <button
            type="button"
            className="icon-button"
            onClick={() =>
              setTheme((current) => (current === "dark" ? "light" : "dark"))
            }
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          >
            {theme === "dark" ? <FaSun size={16} /> : <FaMoon size={15} />}
          </button>

          <a
            className="action-button action-button--primary nav-resume"
            href={personalInfo.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Résumé <FaFileArrowDown aria-hidden="true" />
          </a>

          <button
            type="button"
            className="icon-button mobile-toggle"
            onClick={() => setIsOpen((current) => !current)}
            aria-label={isOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {isOpen ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="mobile-nav" id="mobile-navigation">
          <div className="site-shell mobile-nav__inner">
            {navLinks.map((link) => renderLink(link, true))}
            <a
              href="#contact"
              onClick={(event) => handleNavigation(event, "#contact")}
              className="nav-link"
            >
              Contact <FaArrowRight size={11} aria-hidden="true" />
            </a>
            <div className="mobile-nav__actions">
              <a
                className="action-button action-button--primary"
                href={personalInfo.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open résumé <FaFileArrowDown aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
