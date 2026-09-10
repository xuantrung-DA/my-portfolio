import {
  FaBrain,
  FaCode,
  FaDiagramProject,
  FaServer,
  FaUsers,
} from "react-icons/fa6";
import Card from "../components/ui/Card";
import Reveal from "../components/ui/Reveal";
import SectionTitle from "../components/ui/SectionTitle";
import { projects, skills } from "../data/portfolio";

const capabilityMeta = {
  "Programming & ML Tools": {
    icon: FaCode,
    proof: "Core implementation stack for model training, evaluation, data access, and vision pipelines.",
    evidence: [
      { id: 9, label: "DATU Offline RL" },
      { id: 7, label: "TraceVision" },
    ],
  },
  "AI Domains": {
    icon: FaBrain,
    proof: "Project-backed work across vision, speech, multimodal retrieval, reinforcement learning, and time series.",
    evidence: [
      { id: 6, label: "AQB-FAS" },
      { id: 9, label: "DATU Offline RL" },
      { id: 7, label: "TraceVision" },
    ],
  },
  "LLM & Agentic Systems": {
    icon: FaDiagramProject,
    proof: "Bounded RAG, inspectable retrieval, workflow orchestration, and selective VLM inference.",
    evidence: [
      { id: 8, label: "Subject Knowledge Hub" },
      { id: 7, label: "TraceVision" },
    ],
  },
  "Backend & Engineering": {
    icon: FaServer,
    proof: "FastAPI services, relational data, recoverable background jobs, caches, and containerized local stacks.",
    evidence: [
      { id: 8, label: "Subject Knowledge Hub" },
      { id: 7, label: "TraceVision" },
    ],
  },
  "Languages & Strengths": {
    icon: FaUsers,
    proof: "English B2 proficiency supported by analytical thinking and structured problem solving.",
    evidence: [
      { id: 7, label: "Bilingual TraceVision" },
      { id: 8, label: "Bilingual PDF RAG" },
    ],
  },
};

export default function SkillsPage({ onOpenProject }) {
  return (
    <section id="capabilities" className="section-block">
      <div className="site-shell">
        <SectionTitle
          index="03"
          eyebrow="Capabilities"
          title="A practical stack, tied to real work."
          subtitle="Tools matter when they support a sound engineering decision. These capabilities come from research, coursework, and deployment-oriented work."
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
                    {meta?.evidence?.length > 0 && (
                      <div className="capability-evidence" aria-label="Project evidence">
                        <span>Evidence</span>
                        <div>
                          {meta.evidence.map((item) => {
                            const project = projects.find(
                              (candidate) => candidate.id === item.id,
                            );
                            if (!project) return null;

                            return (
                              <button
                                type="button"
                                key={`${category.category}-${item.id}`}
                                onClick={() => onOpenProject(project)}
                              >
                                {item.label}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}
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
