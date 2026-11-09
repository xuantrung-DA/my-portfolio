import { useEffect } from "react";
import SiteLayout from "./components/SiteLayout";
import PortfolioPage from "./pages/PortfolioPage";
import ProjectPage from "./pages/ProjectPage";
import { personalInfo, projects } from "./data/portfolio";

function projectFromPath() {
  const match = window.location.pathname.match(/^\/projects\/([^/]+)\/?$/);
  if (!match) return null;
  try {
    return projects.find((project) => project.slug === decodeURIComponent(match[1])) ?? null;
  } catch {
    return null;
  }
}

export default function App() {
  const project = projectFromPath();
  const isProjectPath = /^\/projects\/[^/]+/.test(window.location.pathname);
  const unavailable = isProjectPath && !project;

  useEffect(() => {
    document.title = project
      ? `${project.title} — ${personalInfo.name}`
      : unavailable ? `Project not found — ${personalInfo.name}` : `${personalInfo.name} — AI Engineer`;
    document.querySelector('meta[name="description"]')?.setAttribute("content", project?.description || "AI undergraduate at FPT University. Computer vision, document and video search projects, research and AI engineering experience.");
    if (isProjectPath) return undefined;
    const aliases = { projects: "work", skills: "capabilities", honors: "research" };
    const legacyPath = window.location.pathname.split("/").filter(Boolean)[0];
    const requested = window.location.hash.slice(1) || legacyPath;
    if (!requested) return undefined;
    const target = aliases[requested] || requested;
    if (!document.getElementById(target)) return undefined;
    if (legacyPath || aliases[requested]) window.history.replaceState(null, "", `/#${target}`);
    const frame = window.requestAnimationFrame(() => {
      document.getElementById(target)?.scrollIntoView({ block: "start", behavior: "instant" });
    });
    return () => window.cancelAnimationFrame(frame);
  }, [project, isProjectPath, unavailable]);

  return (
    <SiteLayout projectPage={isProjectPath}>
      {unavailable ? (
        <section className="site-shell not-found"><p className="eyebrow">Project not found</p><h1>This project isn’t available.</h1><p>Browse the portfolio for current projects and research.</p><a href="/#work">Back to projects <span aria-hidden="true">→</span></a></section>
      ) : project ? <ProjectPage project={project} /> : <PortfolioPage />}
    </SiteLayout>
  );
}
