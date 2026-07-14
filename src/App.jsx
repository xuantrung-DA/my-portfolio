import { useEffect } from "react";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import SkillsPage from "./pages/SkillsPage";
import ProjectsPage from "./pages/ProjectsPage";
import HonorsPage from "./pages/HonorsPage";
import ContactPage from "./pages/ContactPage";

export default function App() {
  useEffect(() => {
    const legacySection = window.location.pathname.split("/").filter(Boolean)[0];
    const hashSection = window.location.hash.slice(1);
    const sectionId = hashSection || legacySection;

    if (!sectionId) return;

    const frame = window.requestAnimationFrame(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "auto", block: "start" });
        if (legacySection && !hashSection) {
          window.history.replaceState(null, "", `/#${sectionId}`);
        }
      }
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <Layout>
      <HomePage />
      <AboutPage />
      <SkillsPage />
      <ProjectsPage />
      <HonorsPage />
      <ContactPage />
    </Layout>
  );
}
