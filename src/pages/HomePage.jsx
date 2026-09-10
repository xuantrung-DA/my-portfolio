import {
  FaArrowRight,
  FaBookOpen,
  FaCamera,
  FaChartLine,
  FaDiagramProject,
  FaFileArrowDown,
  FaLayerGroup,
  FaMicrochip,
  FaWaveSquare,
} from "react-icons/fa6";
import GoldButton from "../components/ui/GoldButton";
import { honors, personalInfo, projects } from "../data/portfolio";

const academicRecord = honors.find((honor) => honor.type === "academic");
const researchCount = honors.filter((honor) => honor.type === "research").length;
const topStudentSemesters =
  academicRecord?.academicHighlights?.find((highlight) =>
    highlight.label.includes("Top 100"),
  )?.semesters.length ?? 0;

const proofPoints = [
  { value: academicRecord?.gpa ?? "—", label: "current GPA" },
  {
    value: `${topStudentSemesters}/${academicRecord?.completedSemesters ?? 0}`,
    suffix: "semesters",
    label: "Top 100 Excellent Student",
    featured: true,
  },
  { value: String(researchCount), label: "papers & manuscripts" },
];

const capabilityDomains = [
  {
    label: "Computer Vision",
    projectLabel: "AQB-FAS",
    projectId: 6,
    icon: FaCamera,
  },
  {
    label: "LLM & RAG",
    projectLabel: "Subject Knowledge Hub",
    projectId: 8,
    icon: FaBookOpen,
  },
  {
    label: "Multimodal AI",
    projectLabel: "TraceVision",
    projectId: 7,
    icon: FaLayerGroup,
  },
  {
    label: "Speech & NLP",
    projectLabel: "Vietnamese ASR",
    projectId: 2,
    icon: FaWaveSquare,
  },
  {
    label: "Time Series & RUL",
    projectLabel: "Bearing RUL Prediction",
    projectId: 1,
    icon: FaChartLine,
  },
  {
    label: "Reinforcement Learning",
    projectLabel: "DATU Offline RL",
    projectId: 9,
    icon: FaDiagramProject,
  },
];

const deploymentStack = [
  "PyTorch",
  "ONNX",
  "TensorRT",
  "FastAPI",
  "PostgreSQL",
  "Docker",
  "AWS EC2",
];

function CapabilityCard({ domain, index, onOpenProject }) {
  const project = projects.find((item) => item.id === domain.projectId);
  const Icon = domain.icon;
  const motionStyle = {
    "--domain-index": index,
    "--domain-offset": index < 3 ? "-2.5rem" : "2.5rem",
    "--domain-delay": `${380 + index * 80}ms`,
    "--icon-delay": `${index * -310}ms`,
  };
  const content = (
    <>
      <span className="hero-domain-card__icon" aria-hidden="true">
        <Icon />
      </span>
      <span className="hero-domain-card__copy">
        <strong>{domain.label}</strong>
        <small>{domain.projectLabel}</small>
      </span>
      <FaArrowRight className="hero-domain-card__arrow" aria-hidden="true" />
    </>
  );

  if (!project) {
    return (
      <a
        className="hero-domain-card hero-domain-card--track"
        href="#capabilities"
        style={motionStyle}
        aria-label="View Reinforcement Learning capability evidence"
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      className="hero-domain-card"
      style={motionStyle}
      onClick={() => onOpenProject(project)}
      aria-label={`Open case study: ${project.title}`}
    >
      {content}
    </button>
  );
}

export default function HomePage({ onOpenProject }) {
  const leftDomains = capabilityDomains.slice(0, 3);
  const rightDomains = capabilityDomains.slice(3);

  return (
    <section id="home" className="hero">
      <div className="hero-ambient" aria-hidden="true" />

      <div className="site-shell hero-grid">
        <div className="hero-copy">
          <div className="availability-pill">
            <span className="availability-dot" aria-hidden="true" />
            {personalInfo.availability}
          </div>

          <p className="hero-name">
            <span>{personalInfo.name}</span>
            <small>AI Engineer</small>
          </p>
          <h1 aria-label="I build AI systems that survive the real world.">
            <span className="hero-title-line" aria-hidden="true">
              <span>I build AI systems</span>
            </span>
            <span className="hero-title-line" aria-hidden="true">
              <span>that survive the</span>
            </span>
            <span
              className="hero-title-line hero-title-line--accent"
              aria-hidden="true"
            >
              <span>real world.</span>
            </span>
          </h1>
          <p className="hero-lead">{personalInfo.positioning}</p>

          <div className="hero-actions">
            <GoldButton to="#work" icon={<FaArrowRight />}>
              Explore selected work
            </GoldButton>
            <GoldButton
              href={personalInfo.cvUrl}
              variant="secondary"
              icon={<FaFileArrowDown />}
            >
              Open résumé
            </GoldButton>
          </div>

          <div className="hero-foot" aria-label="Academic snapshot">
            {proofPoints.map((proof) => (
              <div
                className={`hero-signal ${proof.featured ? "hero-signal--featured" : ""}`}
                key={proof.label}
              >
                <strong>
                  {proof.value}
                  {proof.suffix && <small>{proof.suffix}</small>}
                </strong>
                <span>{proof.label}</span>
              </div>
            ))}
          </div>
        </div>

        <section className="hero-system hero-capability" aria-label="AI engineering capability map">
          <div className="hero-capability__header">
            <span>
              <i /> Project-backed capabilities
            </span>
            <span>Build · Evaluate · Deploy</span>
          </div>

          <div className="hero-capability__body">
            <div className="hero-capability__stack hero-capability__stack--left">
              {leftDomains.map((domain, index) => (
                <CapabilityCard
                  key={domain.label}
                  domain={domain}
                  index={index}
                  onOpenProject={onOpenProject}
                />
              ))}
            </div>

            <div className="hero-capability__core" aria-label="AI Engineer: Build, Evaluate, Deploy">
              <span className="hero-capability__core-halo" aria-hidden="true" />
              <FaMicrochip aria-hidden="true" />
              <strong>AI</strong>
              <span>Engineer</span>
              <small>Build · Evaluate · Deploy</small>
            </div>

            <div className="hero-capability__stack hero-capability__stack--right">
              {rightDomains.map((domain, index) => (
                <CapabilityCard
                  key={domain.label}
                  domain={domain}
                  index={index + leftDomains.length}
                  onOpenProject={onOpenProject}
                />
              ))}
            </div>
          </div>

          <div className="hero-capability__foundation">
            <p><span /> Inference &amp; Deployment</p>
            <div>
              {deploymentStack.map((item, index) => (
                <span
                  key={item}
                  style={{ "--stack-delay": `${720 + index * 45}ms` }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="hero-capability__proof" aria-label="Engineering principles">
            <span>Project ownership</span>
            <span>Measured results</span>
            <span>Reproducible evaluation</span>
          </div>
        </section>
      </div>

      <div className="hero-scroll-cue" aria-hidden="true">
        <span>Scroll to explore</span>
        <i />
      </div>
    </section>
  );
}
