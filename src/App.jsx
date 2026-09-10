import { useEffect, useState } from "react";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import SkillsPage from "./pages/SkillsPage";
import ProjectsPage from "./pages/ProjectsPage";
import HonorsPage from "./pages/HonorsPage";
import ContactPage from "./pages/ContactPage";
import ProfilePage from "./pages/ProfilePage";
import { personalInfo, projects } from "./data/portfolio";

function projectFromLocation() {
  const match = window.location.pathname.match(/^\/projects\/([^/]+)\/?$/);
  if (!match) return null;

  let slug;
  try {
    slug = decodeURIComponent(match[1]);
  } catch {
    return null;
  }
  return projects.find((project) => project.slug === slug) ?? null;
}

export default function App() {
  const [selectedProject, setSelectedProject] = useState(projectFromLocation);

  const openProject = (project) => {
    if (!project) {
      setSelectedProject(null);
      if (window.location.pathname.startsWith("/projects/")) {
        window.history.replaceState(null, "", "/#work");
      }
      return;
    }

    setSelectedProject(project);
    const nextPath = `/projects/${project.slug}`;
    if (window.location.pathname !== nextPath) {
      window.history.pushState({ project: project.slug }, "", nextPath);
    }
  };

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
    const syncProjectRoute = () => setSelectedProject(projectFromLocation());
    window.addEventListener("popstate", syncProjectRoute);
    return () => window.removeEventListener("popstate", syncProjectRoute);
  }, []);

  useEffect(() => {
    const description = document.querySelector('meta[name="description"]');
    document.title = selectedProject
      ? `${selectedProject.title} — ${personalInfo.name}`
      : `${personalInfo.name} — ${personalInfo.title}`;

    if (description) {
      description.setAttribute(
        "content",
        selectedProject
          ? selectedProject.description
          : `${personalInfo.positioning} ${personalInfo.availabilityDetail}.`,
      );
    }
  }, [selectedProject]);

  useEffect(() => {
    const isProjectRoute = window.location.pathname.startsWith("/projects/");
    const legacySection = window.location.pathname.split("/").filter(Boolean)[0];
    const hashSection = window.location.hash.slice(1);
    const requestedSection = isProjectRoute ? "work" : hashSection || legacySection;
    const aliases = {
      projects: "work",
      skills: "capabilities",
      honors: "research",
    };
    const sectionId = aliases[requestedSection] || requestedSection;

    if (!sectionId) return;

    let cancelled = false;
    let fontFrame;
    const scrollToRequestedSection = () => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "auto", block: "start" });
        if (
          !isProjectRoute &&
          ((legacySection && !hashSection) || sectionId !== requestedSection)
        ) {
          window.history.replaceState(null, "", `/#${sectionId}`);
        }
      }
    };

    const frame = window.requestAnimationFrame(scrollToRequestedSection);
    const settleTimer = window.setTimeout(scrollToRequestedSection, 250);
    document.fonts?.ready.then(() => {
      if (cancelled) return;
      fontFrame = window.requestAnimationFrame(scrollToRequestedSection);
    });

    return () => {
      cancelled = true;
      window.cancelAnimationFrame(frame);
      if (fontFrame) window.cancelAnimationFrame(fontFrame);
      window.clearTimeout(settleTimer);
    };
  }, []);

  return (
    <Layout>
      <HomePage onOpenProject={openProject} />
      <ProjectsPage
        selectedProject={selectedProject}
        onSelectProject={openProject}
      />
      <AboutPage />
      <SkillsPage onOpenProject={openProject} />
      <HonorsPage />
      <ProfilePage />
      <ContactPage />
    </Layout>
  );
}
