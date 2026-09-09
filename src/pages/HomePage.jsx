import { FaArrowRight, FaFileArrowDown } from "react-icons/fa6";
import GoldButton from "../components/ui/GoldButton";
import { personalInfo } from "../data/portfolio";

const proofPoints = [
  { value: "3.75/4.0", label: "current GPA" },
  { value: "5 semesters", label: "academic excellence" },
  { value: "6", label: "papers & manuscripts" },
];

export default function HomePage() {
  return (
    <section id="home" className="hero">
      <div className="hero-ambient" aria-hidden="true" />

      <div className="site-shell hero-grid">
        <div className="hero-copy">
          <div className="availability-pill">
            <span className="availability-dot" aria-hidden="true" />
            Open to AI roles · Fresher & Full-time
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
          <p className="hero-lead">
            Production-minded work across computer vision, agentic AI, edge
            inference, and backend systems — grounded in measurable results.
          </p>

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
              <div className="hero-signal" key={proof.label}>
                <strong>{proof.value}</strong>
                <span>{proof.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-system" aria-hidden="true">
          <div className="hero-system__header">
            <span>
              <i /> Systems online
            </span>
            <span>NX-01 / Live inference</span>
          </div>

          <div className="hero-system__flow">
            <div className="hero-system__inputs">
              <small>01 / Input</small>
              <span>Image</span>
              <span>Text</span>
              <span>Audio</span>
            </div>

            <span className="hero-system__connector hero-system__connector--in">
              <i />
            </span>

            <div className="hero-system__core">
              <span className="hero-system__orbit hero-system__orbit--one" />
              <span className="hero-system__orbit hero-system__orbit--two" />
              <span className="hero-system__layer hero-system__layer--back" />
              <span className="hero-system__layer hero-system__layer--middle" />
              <span className="hero-system__layer hero-system__layer--front" />
              <div className="hero-system__core-label">
                <small>Model core</small>
                <strong>AI</strong>
                <span>route · infer · verify</span>
              </div>
              <i className="hero-system__spark hero-system__spark--one" />
              <i className="hero-system__spark hero-system__spark--two" />
              <i className="hero-system__spark hero-system__spark--three" />
            </div>

            <span className="hero-system__connector hero-system__connector--out">
              <i />
            </span>

            <div className="hero-system__outputs">
              <small>03 / Output</small>
              <span>Insights <i /></span>
              <span>Automation <i /></span>
              <span>Real-world impact <i /></span>
            </div>
          </div>

          <div className="hero-system__telemetry">
            <span>
              <small>Inference</small>
              <strong>12 ms</strong>
            </span>
            <span>
              <small>Throughput</small>
              <strong>1.2K/s</strong>
            </span>
            <span>
              <small>Uptime</small>
              <strong>99.9%</strong>
            </span>
          </div>
        </div>
      </div>

      <div className="hero-scroll-cue" aria-hidden="true">
        <span>Scroll to explore</span>
        <i />
      </div>
    </section>
  );
}
