import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { navLinks } from "../../data/portfolio";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [pendingPath, setPendingPath] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
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
      { rootMargin: "-25% 0px -60%", threshold: [0, 0.1, 0.25, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    if (isOpen) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen || !pendingPath) return undefined;

    const frame = window.requestAnimationFrame(() => {
      const section = document.getElementById(pendingPath.slice(1));
      section?.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.pushState(null, "", pendingPath);
      setPendingPath(null);
    });

    return () => window.cancelAnimationFrame(frame);
  }, [isOpen, pendingPath]);

  const handleNavigation = (event, path) => {
    event.preventDefault();

    if (isOpen) {
      setPendingPath(path);
      setIsOpen(false);
      return;
    }

    const section = document.getElementById(path.slice(1));
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.pushState(null, "", path);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-nav shadow-lg shadow-black/30" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(event) => handleNavigation(event, "#home")}
            className="group flex items-center gap-3"
            aria-label="Go to home section"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center font-heading text-bg-primary font-bold text-lg group-hover:shadow-[0_0_20px_rgba(201,168,76,0.4)] transition-shadow duration-300">
              T
            </div>
            <span className="font-heading text-lg tracking-wider text-text-primary hidden sm:block">
              TRUNG<span className="text-gold">.</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.path.slice(1);
              return (
              <a
                key={link.path}
                href={link.path}
                onClick={(event) => handleNavigation(event, link.path)}
                className={`relative px-3 xl:px-4 py-2 text-xs xl:text-sm tracking-widest uppercase transition-all duration-300 ${
                    isActive
                      ? "text-gold"
                      : "text-text-secondary hover:text-text-primary"
                  }`}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="activeLink"
                    className="absolute bottom-0 left-3 right-3 xl:left-4 xl:right-4 h-[2px] bg-gradient-to-r from-gold to-gold-dark"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            )})}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden min-w-11 min-h-11 text-text-primary p-2 hover:text-gold transition-colors flex items-center justify-center"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {isOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            id="mobile-navigation"
            className="lg:hidden glass-nav border-t border-border-gold overflow-y-auto max-h-[calc(100svh-4rem)] sm:max-h-[calc(100svh-5rem)]"
          >
            <div className="px-6 py-4 space-y-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <a
                    href={link.path}
                    onClick={(event) => handleNavigation(event, link.path)}
                    className={`block min-h-11 py-3 px-4 text-sm tracking-widest uppercase rounded-lg transition-all duration-300 ${
                        activeSection === link.path.slice(1)
                          ? "text-gold bg-gold/5 border-l-2 border-gold"
                          : "text-text-secondary hover:text-text-primary hover:bg-white/5"
                      }`}
                  >
                    {link.label}
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
