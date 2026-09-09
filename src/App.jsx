import { useEffect } from "react";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import SkillsPage from "./pages/SkillsPage";
import ProjectsPage from "./pages/ProjectsPage";
import HonorsPage from "./pages/HonorsPage";
import ContactPage from "./pages/ContactPage";
import ProfilePage from "./pages/ProfilePage";

export default function App() {
  useEffect(() => {
    const root = document.documentElement;
    const connection = navigator.connection;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updateMotionProfile = () => {
      const lowMemory = navigator.deviceMemory && navigator.deviceMemory <= 4;
      const lowCpu = navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4;
      const saveData = connection?.saveData;

      root.dataset.motion =
        reducedMotion.matches || lowMemory || lowCpu || saveData ? "lite" : "full";
    };

    updateMotionProfile();
    reducedMotion.addEventListener?.("change", updateMotionProfile);
    connection?.addEventListener?.("change", updateMotionProfile);

    return () => {
      reducedMotion.removeEventListener?.("change", updateMotionProfile);
      connection?.removeEventListener?.("change", updateMotionProfile);
    };
  }, []);

  useEffect(() => {
    const legacySection = window.location.pathname.split("/").filter(Boolean)[0];
    const hashSection = window.location.hash.slice(1);
    const requestedSection = hashSection || legacySection;
    const aliases = {
      projects: "work",
      skills: "capabilities",
      honors: "research",
    };
    const sectionId = aliases[requestedSection] || requestedSection;

    if (!sectionId) return;

    const frame = window.requestAnimationFrame(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "auto", block: "start" });
        if ((legacySection && !hashSection) || sectionId !== requestedSection) {
          window.history.replaceState(null, "", `/#${sectionId}`);
        }
      }
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <Layout>
      <HomePage />
      <ProjectsPage />
      <AboutPage />
      <SkillsPage />
      <HonorsPage />
      <ProfilePage />
      <ContactPage />
    </Layout>
  );
}
