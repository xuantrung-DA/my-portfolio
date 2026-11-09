import { useEffect, useRef, useState } from "react";
import portrait from "../../CV_image.jpg";
import { activities, certifications, education, experience, honors, personalInfo, projects } from "../data/portfolio";
import { projectNotes, selectedProjectIds } from "../data/projectNotes";
import { ExternalLink } from "../components/SiteLayout";
import ProjectImage from "../components/ProjectImage";

function SectionHeading({ id, title, children }) {
  return <div className="section-heading"><h2 id={id}>{title}</h2>{children}</div>;
}

function Hero() {
  return (
    <section className="hero site-shell" id="home" aria-labelledby="intro-title">
      <div className="hero-copy">
        <p className="eyebrow">AI engineering student</p>
        <h1 id="intro-title">{personalInfo.name}</h1>
        <p className="hero-subtitle">Computer vision &amp; LLM applications.</p>
        <p className="hero-introduction">I’m an AI undergraduate at FPT University, graduating in June 2027. I build applications for searching documents and videos, and work on efficient computer vision models.</p>
        <div className="hero-actions">
          <a className="button" href={personalInfo.cvUrl} target="_blank" rel="noopener noreferrer">Open CV <span aria-hidden="true">↗</span></a>
          <ExternalLink href={personalInfo.socials.github}>GitHub</ExternalLink>
          <a href="#work">View work <span aria-hidden="true">↓</span></a>
        </div>
      </div>
      <aside className="hero-aside" aria-label="Personal information">
        <img className="portrait" src={portrait} alt={personalInfo.name} width="96" height="114" fetchPriority="high" />
        <dl><div><dt>Based in</dt><dd>{personalInfo.portfolioLocation}</dd></div><div><dt>Graduating</dt><dd>{personalInfo.expectedGraduation}</dd></div><div><dt>Availability</dt><dd>Part-time now<br />Full-time from July 2027</dd></div></dl>
      </aside>
    </section>
  );
}

function Experience() {
  return (
    <section className="section" id="experience" aria-labelledby="experience-title">
      <SectionHeading id="experience-title" title="Experience" />
      {experience.map((item) => (
        <article className="experience-row" key={`${item.company}-${item.period}`}>
          <p className="date">{item.period}</p>
          <div><h3>{item.role}</h3><p className="company">{item.company}</p><p className="experience-project">{item.project}</p><ul className="contribution-list">{item.responsibilities.map((line) => <li key={line}>{line}</li>)}</ul></div>
        </article>
      ))}
    </section>
  );
}

function SelectedProjects() {
  const selected = selectedProjectIds.map((id) => projects.find((project) => project.id === id));
  const additional = projects.filter((project) => !selectedProjectIds.includes(project.id));
  return (
    <section className="section" id="work" aria-labelledby="work-title">
      <SectionHeading id="work-title" title="Selected projects"><p>Application development, retrieval &amp; model evaluation.</p></SectionHeading>
      <div className="selected-projects">
        {selected.map((project, index) => {
          const note = projectNotes[project.id];
          return (
            <article className="project" key={project.id}>
              <div className="project-heading"><span className="project-number" aria-hidden="true">0{index + 1}</span><p>{note.area}</p><span className="project-period">{project.period}</span></div>
              <div className="project-grid">
                <div className="project-copy"><h3><a href={`/projects/${project.slug}`}>{note.name}</a></h3><p className="project-summary">{note.summary}</p><p className="project-description">{note.introduction}</p><p className="project-contribution"><strong>My part.</strong> {note.contribution}</p><div className="project-links"><a href={`/projects/${project.slug}`}>Read case study <span aria-hidden="true">→</span></a><ExternalLink href={project.github}>GitHub</ExternalLink></div></div>
                <ProjectImage project={project} />
              </div>
              <details className="project-evaluation"><summary>Design decisions &amp; evaluation <span className="expand-sign" aria-hidden="true" /></summary><div className="evaluation-grid"><div><h4>A decision I made</h4><p>{note.decision}</p></div><div><h4>What I measured</h4><p>{note.result}</p></div><div className="evaluation-boundary"><h4>Limits of the result</h4><p>{note.boundary}</p></div></div></details>
            </article>
          );
        })}
      </div>
      <details className="additional-projects"><summary>Other projects &amp; experiments <span className="expand-sign" aria-hidden="true" /></summary><ul>{additional.map((project) => <li key={project.id}><div><h3><a href={`/projects/${project.slug}`}>{project.title}</a></h3><p>{project.role} · {project.period}</p></div><a href={`/projects/${project.slug}`} aria-label={`Read about ${project.title}`}>Details <span aria-hidden="true">→</span></a></li>)}</ul></details>
    </section>
  );
}

function Authors({ authors }) {
  return authors.split(/(Xuan Trung Nguyen|Trung, N\.X\.)/g).map((part, index) => /^(Xuan Trung Nguyen|Trung, N\.X\.)$/.test(part) ? <strong key={index}>{part}</strong> : part);
}

function Research() {
  const papers = honors.filter((item) => item.type === "research");
  const published = papers.filter((paper) => paper.statusLabel === "Published").length;
  const accepted = papers.filter((paper) => paper.status === "Accepted").length;
  return (
    <section className="section" id="research" aria-labelledby="research-title">
      <SectionHeading id="research-title" title="Research"><p>{published} published · {accepted} accepted</p></SectionHeading>
      <ol className="paper-list">{papers.map((paper) => <li className="paper" key={paper.description}><div className="paper-meta"><span>{paper.status || paper.statusLabel}</span><span>{paper.year}</span></div><div><h3>{paper.description.replace(/^[“”]|[“”]$/g, "")}</h3><p className="paper-authors"><Authors authors={paper.authors} /></p><p className="paper-venue">{paper.organization}</p><div className="paper-links"><ExternalLink href={paper.credentialUrl}>{paper.doi ? "Publication · DOI" : "Conference website"}</ExternalLink>{paper.acceptedDate && <span>Accepted {paper.acceptedDate}</span>}</div></div></li>)}</ol>
    </section>
  );
}

function About() {
  const academic = honors.find((item) => item.type === "academic");
  const rankedSemesters = academic.academicHighlights.find((item) => item.label.includes("Top 100")).semesters;
  const credentials = [...certifications].sort((a, b) => a.priority - b.priority);
  return (
    <section className="section" id="about" aria-labelledby="about-title">
      <SectionHeading id="about-title" title="About & education" />
      <div className="about-grid"><div><p className="about-introduction">My work spans computer vision research and AI application development. At ECE Technology, I worked on product segmentation, LLM-assisted market research and backend deployment. My independent projects explore retrieval over documents and videos.</p>{education.map((item) => <div className="education" key={item.school}><h3>{item.school}</h3><p>{item.degree} · {item.period}</p><p>GPA {item.gpa} · Expected graduation {personalInfo.expectedGraduation}</p><p>Top 100 Excellent Student: {rankedSemesters.join(" and ")}.</p><p>Honor Student recognition in the other {academic.honorSemesters} completed semesters.</p></div>)}</div><dl className="skills-list" id="capabilities"><div><dt>Model development</dt><dd>Python, PyTorch, scikit-learn, OpenCV</dd></div><div><dt>Retrieval & applications</dt><dd>RAG, pgvector, LangGraph, FastAPI, React</dd></div><div><dt>Data & deployment</dt><dd>SQL, PostgreSQL, Docker, AWS EC2, ONNX, TensorRT</dd></div><div><dt>Languages</dt><dd>Vietnamese · English (B2)</dd></div></dl></div>
      <details className="about-additional"><summary>Coursework &amp; community <span className="expand-sign" aria-hidden="true" /></summary><div className="about-additional-grid"><div><h3>Selected learning</h3><ul className="credential-list">{credentials.slice(0, 4).map((item) => <li key={item.title}><ExternalLink href={item.credentialUrl}>{item.title}</ExternalLink><p>{item.issuer} · {item.date}</p></li>)}</ul><details className="more-credentials"><summary>All other credentials <span className="expand-sign" aria-hidden="true" /></summary><ul className="credential-list">{credentials.slice(4).map((item) => <li key={item.title}><ExternalLink href={item.credentialUrl}>{item.title}</ExternalLink><p>{item.issuer} · {item.date}</p></li>)}</ul></details></div><div><h3>Community</h3><ul className="community-list">{activities.map((item) => <li key={item.title}><h4>{item.title}</h4><p>{item.role} · {item.period}</p><p>{item.description}</p></li>)}</ul></div></div></details>
    </section>
  );
}

function Contact() {
  const [copyStatus, setCopyStatus] = useState("");
  const timer = useRef(null);
  useEffect(() => () => window.clearTimeout(timer.current), []);
  async function copyEmail() {
    window.clearTimeout(timer.current);
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopyStatus("Email copied.");
    } catch {
      setCopyStatus(`Copy manually: ${personalInfo.email}`);
    }
    timer.current = window.setTimeout(() => setCopyStatus(""), 5000);
  }
  return <section className="contact" id="contact" aria-labelledby="contact-title"><div><h2 id="contact-title">Get in touch.</h2><p>Available part-time through June 2027.<br />Full-time AI engineering roles from July 2027.</p></div><div><div className="contact-links"><a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a><ExternalLink href={personalInfo.socials.linkedin}>LinkedIn</ExternalLink><button className="text-button" type="button" onClick={copyEmail}>Copy email</button></div><p className="copy-status" role="status" aria-live="polite">{copyStatus}</p></div></section>;
}

export default function PortfolioPage() {
  return <><Hero /><div className="site-shell"><Experience /><SelectedProjects /><Research /><About /><Contact /></div></>;
}
