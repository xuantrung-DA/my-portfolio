import {
  FaBrain,
  FaCode,
  FaDiagramProject,
  FaRocket,
  FaServer,
  FaUsers,
} from "react-icons/fa6";
import Card from "../components/ui/Card";
import Reveal from "../components/ui/Reveal";
import SectionTitle from "../components/ui/SectionTitle";
import { skills } from "../data/portfolio";

const capabilityMeta = {
  "Programming Languages": {
    icon: FaCode,
    proof: "Python-first implementation across model research, APIs, and data workflows.",
  },
  "AI & Machine Learning": {
    icon: FaBrain,
    proof: "Evaluation with ablations, domain benchmarks, and leakage-aware validation.",
  },
  "LLM & Agentic AI": {
    icon: FaDiagramProject,
    proof: "Conditional LangGraph workflows backed by deterministic scoring logic.",
  },
  "Backend & Data Engineering": {
    icon: FaServer,
    proof: "FastAPI services and automated SQL Server-to-PostgreSQL pipelines.",
  },
  "DevOps & MLOps": {
    icon: FaRocket,
    proof: "Docker, AWS EC2, ONNX, and TensorRT deployment-oriented delivery.",
  },
  "Professional Skills": {
    icon: FaUsers,
    proof: "Research leadership, error analysis, and cross-functional project execution.",
  },
};

export default function SkillsPage() {
  return (
    <section id="capabilities" className="section-block">
      <div className="site-shell">
        <SectionTitle
          index="03"
          eyebrow="Capabilities"
          title="A practical stack, tied to shipped evidence."
          subtitle="Tools matter when they support a sound engineering decision. These are the capabilities repeatedly used across my research and production-oriented work."
        />

        <div className="capability-grid">
          {skills.map((category, index) => {
            const meta = capabilityMeta[category.category];
            const Icon = meta?.icon || FaCode;

            return (
              <Reveal key={category.category} delay={(index % 2) * 45}>
                <Card as="article" className="capability-card" interactive>
                  <div className="capability-icon">
                    <Icon size={19} aria-hidden="true" />
                  </div>
                  <div>
                    <h3>{category.category}</h3>
                    <p className="capability-proof">{meta?.proof}</p>
                    <div className="tag-list">
                      {category.items.map((skill) => (
                        <span className="tag" key={skill}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
