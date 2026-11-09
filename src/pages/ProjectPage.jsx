import { projects } from "../data/portfolio";
import { projectNotes } from "../data/projectNotes";
import { ExternalLink } from "../components/SiteLayout";
import ProjectImage from "../components/ProjectImage";

const studyFields = [
  ["problem", "Problem & constraint"],
  ["dataset", "Dataset & split"],
  ["baseline", "Baselines"],
  ["evaluation", "Evaluation setup"],
  ["tradeoffs", "Trade-offs"],
  ["limitations", "Limitations"],
  ["engineering", "Engineering work"],
  ["reproduction", "Reproduction"],
];

export default function ProjectPage({ project }) {
  const note = projectNotes[project.id];
  const next = projects[(projects.indexOf(project) + 1) % projects.length];
  return (
    <article className="site-shell case-page">
      <a className="back-link" href="/#work"><span aria-hidden="true">←</span> All projects</a>
      <header className="case-header"><p className="eyebrow">{project.category} · {project.status}</p><h1>{project.title}</h1><p className="case-introduction">{project.description}</p><dl className="case-meta"><div><dt>My role</dt><dd>{project.role}</dd></div><div><dt>Period</dt><dd>{project.period}</dd></div><div><dt>Team</dt><dd>{project.teamSize === 1 ? "Independent" : `${project.teamSize} people`}</dd></div></dl><div className="project-links">{project.github && <ExternalLink className="button" href={project.github}>View repository</ExternalLink>}{project.demo && <ExternalLink href={project.demo}>Live demo</ExternalLink>}{project.researchUrl && <ExternalLink href={project.researchUrl}>{project.researchLabel || "Research"}</ExternalLink>}</div></header>
      <ProjectImage project={project} priority />
      {note && <section className="case-section"><h2>My contribution</h2><p>{note.contribution}</p></section>}
      <section className="case-section"><h2>Results &amp; measurement</h2><dl className="result-list">{project.metrics.map((metric) => <div key={metric.label}><dt>{metric.label}</dt><dd>{metric.value}</dd></div>)}</dl>{project.measurementScope && <aside className="measurement-scope"><h3>How to read these results</h3><p>{project.measurementScope}</p></aside>}</section>
      {project.caseStudy && <section className="case-section"><h2>Technical notes</h2><dl className="technical-notes">{studyFields.filter(([key]) => project.caseStudy[key]).map(([key, label]) => <div key={key}><dt>{label}</dt><dd>{project.caseStudy[key]}</dd></div>)}</dl></section>}
      <section className="case-section"><h2>Implementation</h2><ul className="implementation-list">{project.highlights.map((item) => <li key={item}>{item}</li>)}</ul></section>
      <section className="case-section"><h2>Tools used</h2><p>{project.tags.join(", ")}</p></section>
      <nav className="case-pagination" aria-label="Project navigation"><a href="/#work"><span aria-hidden="true">←</span> All projects</a><a href={`/projects/${next.slug}`}>Next: {projectNotes[next.id]?.name || next.title} <span aria-hidden="true">→</span></a></nav>
    </article>
  );
}
