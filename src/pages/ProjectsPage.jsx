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

const flagshipOrder = [6, 5, 1];

const projectEvidence = {
  1: [
    { value: "16.75", label: "RMSE on S2" },
    { value: "15.40", label: "MAE on S2" },
    { value: "5.52", label: "PHM score" },
  ],
  2: [
    { value: "12.99%", label: "overall WER" },
    { value: "8.37%", label: "clean WER" },
    { value: "24.31%", label: "WER at 0 dB" },
  ],
  4: [
    { value: "96.85%", label: "FAS accuracy" },
    { value: "3.16%", label: "ACER" },
    { value: "ONNX", label: "deployment format" },
  ],
  6: [
    { value: "2,352×", label: "payload compression" },
    { value: "97.01%", label: "accuracy" },
    { value: "9.17 ms", label: "edge encoder" },
  ],
  5: [
    { value: "0.523 ms", label: "router p95" },
    { value: "91.90%", label: "balanced accuracy" },
    { value: "412–465", label: "TensorRT FPS" },
  ],
};

function ProjectImpact({ project }) {
  const evidence = projectEvidence[project.id];
  if (!evidence) return null;

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

        {project.visualImage && (
          <figure
            className={`dialog-visual ${project.visualTheme === "dark" ? "project-feature__visual--dark" : ""}`}
          >
            <img
              src={project.visualImage}
              alt={project.visualAlt}
              width={project.visualWidth}
              height={project.visualHeight}
              loading="lazy"
              decoding="async"
            />
            <figcaption>{project.visualCaption}</figcaption>
          </figure>
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
    </dialog>
  );
}

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState(null);
  const flagshipProjects = flagshipOrder
    .map((id) => projects.find((project) => project.id === id))
    .filter(Boolean);
  const archiveProjects = projects.filter(
    (project) => !flagshipOrder.includes(project.id),
  );

  return (
    <section id="work" className="section-block">
      <div className="site-shell">
        <Reveal className="work-intro">
          <div>
            <p className="eyebrow">01 / Selected work</p>
            <h2>Systems with evidence, not just demos.</h2>
          </div>
          <p className="work-intro__copy">
            A focused selection spanning edge AI, multi-domain vision, speech,
            and predictive maintenance — with ownership, constraints, and
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
                  onClick={() => setSelectedProject(project)}
                  aria-label={`Open case study: ${project.title}`}
                />
                <div className="project-feature__content">
                  <div className="project-feature__topline">
                    <span className="project-feature__number">
                      0{index + 1}
                    </span>
                    <span>{project.category}</span>
                  </div>

                  <h3>{project.title}</h3>
                  <p className="project-feature__description">
                    {project.description}
                  </p>

                  <div className="project-feature__metrics">
                    {projectEvidence[project.id].map((metric) => (
                      <div className="project-metric" key={metric.label}>
                        <strong>{metric.value}</strong>
                        <span>{metric.label}</span>
                      </div>
                    ))}
                  </div>

                  <div className="project-feature__actions">
                    <GoldButton
                      onClick={() => setSelectedProject(project)}
                      variant="secondary"
                      icon={<FaArrowRight />}
                    >
                      Review case study
                    </GoldButton>
                    {project.github && (
                      <GoldButton
                        href={project.github}
                        variant="ghost"
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
                    onClick={() => setSelectedProject(project)}
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
                  onClick={() => setSelectedProject(project)}
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
                <button
                  type="button"
                  className="text-button"
                  onClick={() => setSelectedProject(project)}
                >
                  View engineering details <FaArrowRight aria-hidden="true" />
                </button>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectDialog
          key={selectedProject.id}
          project={selectedProject}
          onDismiss={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
