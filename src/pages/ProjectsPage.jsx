import { useEffect, useRef, useState } from "react";
import {
  FaArrowRight,
  FaExpand,
  FaGithub,
  FaUpRightFromSquare,
  FaXmark,
} from "react-icons/fa6";
import Card from "../components/ui/Card";
import GoldButton from "../components/ui/GoldButton";
import Reveal from "../components/ui/Reveal";
import { projects } from "../data/portfolio";

function ProjectImpact({ project }) {
  const evidence = project.metrics;
  if (!evidence?.length) return null;

  return (
    <section className="dialog-impact" aria-label="Measured project outcomes">
      <p className="eyebrow">Evidence snapshot</p>
      <div className="dialog-impact__grid">
        {evidence.map((metric, index) => (
          <div
            className="dialog-impact__metric"
            key={metric.label}
            style={{ "--impact-index": index }}
          >
            <span className="dialog-impact__signal" aria-hidden="true" />
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function ProjectDialog({ project, onDismiss }) {
  const dialogRef = useRef(null);
  const [visualExpanded, setVisualExpanded] = useState(false);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog || dialog.open) return;
    dialog.showModal();
  }, []);

  const closeDialog = () => {
    const dialog = dialogRef.current;
    if (dialog?.open) dialog.close();
  };

  return (
    <dialog
      ref={dialogRef}
      className="project-dialog"
      aria-labelledby={`project-title-${project.id}`}
      onClose={onDismiss}
      onCancel={(event) => {
        event.preventDefault();
        if (visualExpanded) {
          setVisualExpanded(false);
          return;
        }
        closeDialog();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) closeDialog();
      }}
    >
      <button
        type="button"
        className="icon-button dialog-close"
        onClick={closeDialog}
        aria-label="Close project details"
        autoFocus
      >
        <FaXmark />
      </button>

      <div className="dialog-body">
        <p className="dialog-kicker">
          {project.category} · {project.status}
        </p>
        <h2 id={`project-title-${project.id}`}>{project.title}</h2>
        <p className="dialog-summary">{project.description}</p>

        <dl className="dialog-meta">
          <div>
            <dt>Role</dt>
            <dd>{project.role}</dd>
          </div>
          <div>
            <dt>Period</dt>
            <dd>{project.period}</dd>
          </div>
          <div>
            <dt>Team</dt>
            <dd>{project.teamSize || "Independent"}</dd>
          </div>
          <div>
            <dt>Focus</dt>
            <dd>{project.category}</dd>
          </div>
        </dl>

        <ProjectImpact project={project} />

        {project.measurementScope && (
          <aside className="dialog-measurement-scope">
            <p className="eyebrow">Measurement scope</p>
            <p>{project.measurementScope}</p>
          </aside>
        )}

        {project.visualImage && (
          <figure
            className={`dialog-visual ${project.visualTheme === "dark" ? "project-feature__visual--dark" : ""}`}
          >
            <button
              type="button"
              className="dialog-visual__trigger"
              onClick={() => setVisualExpanded(true)}
              aria-label={`Enlarge architecture visual for ${project.title}`}
            >
              <img
                src={project.visualImage}
                alt={project.visualAlt}
                width={project.visualWidth}
                height={project.visualHeight}
                loading="lazy"
                decoding="async"
              />
              <span><FaExpand aria-hidden="true" /> Enlarge visual</span>
            </button>
            <figcaption>{project.visualCaption}</figcaption>
          </figure>
        )}

        {project.caseStudy && (
          <section className="dialog-evidence" aria-labelledby={`project-evidence-${project.id}`}>
            <div className="dialog-evidence__heading">
              <p className="eyebrow">Case-study evidence</p>
              <h3 id={`project-evidence-${project.id}`}>
                Experiment design, boundaries &amp; reproducibility
              </h3>
            </div>
            <dl className="dialog-evidence__grid">
              {[
                ["problem", "Problem & constraint"],
                ["dataset", "Dataset & split"],
                ["baseline", "Baselines"],
                ["evaluation", "Measurement setup"],
                ["tradeoffs", "Trade-off"],
                ["limitations", "Limitations"],
                ["engineering", "Engineering evidence"],
                ["reproduction", "Reproduction"],
              ].map(([key, label]) =>
                project.caseStudy[key] ? (
                  <div key={key}>
                    <dt>{label}</dt>
                    <dd>{project.caseStudy[key]}</dd>
                  </div>
                ) : null,
              )}
            </dl>
          </section>
        )}

        <div className="dialog-columns">
          <Reveal className="dialog-contribution" once={false}>
            <h3>Contribution map</h3>
            <ol className="contribution-map">
              {project.highlights?.map((highlight, index) => (
                <li
                  key={highlight}
                  style={{ "--contribution-index": index }}
                >
                  <span className="contribution-node" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p>{highlight}</p>
                </li>
              ))}
            </ol>
          </Reveal>
          <div>
            <h3>Stack</h3>
            <div className="tag-list">
              {project.tags.map((tag) => (
                <span className="tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="dialog-actions">
          {project.github && (
            <GoldButton
              href={project.github}
              variant="secondary"
              icon={<FaGithub />}
            >
              View repository
            </GoldButton>
          )}
          {project.researchUrl && (
            <GoldButton
              href={project.researchUrl}
              variant="secondary"
              icon={<FaUpRightFromSquare />}
            >
              {project.researchLabel || "Research"}
            </GoldButton>
          )}
          {project.demo && (
            <GoldButton href={project.demo} icon={<FaUpRightFromSquare />}>
              Live demo
            </GoldButton>
          )}
        </div>
      </div>

      {visualExpanded && (
        <div
          className="image-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`Expanded architecture visual for ${project.title}`}
          onClick={(event) => {
            if (event.target === event.currentTarget) setVisualExpanded(false);
          }}
        >
          <div className="image-lightbox__toolbar">
            <a
              href={project.visualImage}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open original <FaUpRightFromSquare aria-hidden="true" />
            </a>
            <button
              type="button"
              onClick={() => setVisualExpanded(false)}
              aria-label="Close expanded visual"
              autoFocus
            >
              <FaXmark aria-hidden="true" />
            </button>
          </div>
          <img
            src={project.visualImage}
            alt={project.visualAlt}
            width={project.visualWidth}
            height={project.visualHeight}
          />
        </div>
      )}
    </dialog>
  );
}

export default function ProjectsPage({ selectedProject, onSelectProject }) {
  const flagshipProjects = projects
    .filter((project) => project.featured)
    .sort(
      (a, b) =>
        (a.featuredRank ?? Number.MAX_SAFE_INTEGER) -
        (b.featuredRank ?? Number.MAX_SAFE_INTEGER),
    );
  const archiveProjects = projects.filter((project) => !project.featured);

  return (
    <section id="work" className="section-block">
      <div className="site-shell">
        <Reveal className="work-intro">
          <div>
            <p className="eyebrow">01 / Selected work</p>
            <h2>Systems with evidence, not just demos.</h2>
          </div>
          <p className="work-intro__copy">
            A focused selection spanning edge AI, multimodal search, LLM/RAG,
            and offline reinforcement learning — with ownership, constraints, and
            outcomes made explicit.
          </p>
        </Reveal>

        <div className="featured-work">
          {flagshipProjects.map((project, index) => (
            <Reveal
              key={project.id}
              className={`project-reveal project-reveal--${index % 2 ? "right" : "left"}`}
              delay={index * 70}
              once={false}
            >
              <Card as="article" className="project-feature" interactive>
                <button
                  type="button"
                  className="project-card-hitbox"
                  onClick={() => onSelectProject(project)}
                  aria-label={`Open case study: ${project.title}`}
                />
                <div className="project-feature__content">
                  <div className="project-feature__topline">
                    <span className="project-feature__number">
                      0{index + 1}
                    </span>
                    <span>{project.category}</span>
                  </div>

                  <div className="project-feature__headline">
                    <h3>{project.title}</h3>

                    <div
                      className="project-feature__metrics"
                      aria-label="Key project metrics"
                    >
                      {project.metrics?.map((metric) => (
                        <div className="project-metric" key={metric.label}>
                          <strong>{metric.value}</strong>
                          <span>{metric.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <p className="project-feature__description">
                    {project.description}
                  </p>

                  <div className="project-feature__actions">
                    <GoldButton
                      onClick={() => onSelectProject(project)}
                      variant="secondary"
                      className="project-feature__review"
                      icon={<FaArrowRight />}
                    >
                      Review case study
                    </GoldButton>
                    {project.github && (
                      <GoldButton
                        href={project.github}
                        variant="primary"
                        className="project-feature__github"
                        icon={<FaGithub />}
                      >
                        GitHub
                      </GoldButton>
                    )}
                  </div>
                </div>

                <div
                  className={`project-feature__visual ${project.visualTheme === "dark" ? "" : "project-feature__visual--light"}`}
                >
                  <img
                    src={project.visualImage}
                    alt={project.visualAlt}
                    width={project.visualWidth}
                    height={project.visualHeight}
                    loading="lazy"
                    decoding="async"
                  />
                  <button
                    type="button"
                    className="project-open"
                    onClick={() => onSelectProject(project)}
                  >
                    <FaExpand aria-hidden="true" /> Open details
                  </button>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>

        <div className="archive-heading">
          <h3>More experiments & research</h3>
          <span>{archiveProjects.length} additional projects</span>
        </div>

        <div className="project-archive">
          {archiveProjects.map((project, index) => (
            <Reveal
              key={project.id}
              className="archive-project-reveal"
              delay={index * 70}
              once={false}
            >
              <Card as="article" className="project-card" interactive>
                <button
                  type="button"
                  className="project-card-hitbox"
                  onClick={() => onSelectProject(project)}
                  aria-label={`Open project details: ${project.title}`}
                />
                <div className="project-card__visual">
                  <img
                    src={project.visualImage}
                    alt=""
                    width={project.visualWidth}
                    height={project.visualHeight}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <p className="project-card__meta">{project.category}</p>
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <div className="project-card__actions">
                  <GoldButton
                    onClick={() => onSelectProject(project)}
                    variant="secondary"
                    className="project-card__details"
                    icon={<FaArrowRight />}
                  >
                    View details
                  </GoldButton>
                  {project.github && (
                    <GoldButton
                      href={project.github}
                      variant="primary"
                      className="project-card__github"
                      icon={<FaGithub />}
                    >
                      GitHub
                    </GoldButton>
                  )}
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectDialog
          key={selectedProject.id}
          project={selectedProject}
          onDismiss={() => onSelectProject(null)}
        />
      )}
    </section>
  );
}
