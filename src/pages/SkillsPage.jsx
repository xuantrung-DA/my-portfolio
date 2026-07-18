import { motion } from "framer-motion";
import SectionTitle from "../components/ui/SectionTitle";
import Card from "../components/ui/Card";
import { skills } from "../data/portfolio";
import { FaBrain, FaCode, FaTools, FaDatabase } from "react-icons/fa";

const categoryIcons = {
  "AI / Machine Learning": <FaBrain size={24} />,
  "Programming Languages": <FaCode size={24} />,
  "AI & Machine Learning": <FaBrain size={24} />,
  "LLM & Agentic AI": <FaBrain size={24} />,
  "Backend & Data Engineering": <FaDatabase size={24} />,
  "DevOps & MLOps": <FaTools size={24} />,
  "Professional Skills": <FaTools size={24} />,
};

export default function SkillsPage() {
  return (
    <div id="skills" className="scroll-mt-16 sm:scroll-mt-20">
      {/* Header */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(201,168,76,0.05)_0%,transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <SectionTitle
            title="Skills & Technologies"
            subtitle="Technologies I have used across AI projects, backend services, data pipelines, and deployment."
          />
        </div>
      </section>

      {/* Skills Grid */}
      <section className="pb-16 sm:pb-20 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6">
            {skills.map((category, i) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Card gold className="!p-6 sm:!p-8 h-full">
                  {/* Category header */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold">
                      {categoryIcons[category.category] || <FaCode size={24} />}
                    </div>
                    <div>
                      <h3 className="font-heading text-xl text-text-primary">
                        {category.category}
                      </h3>
                      <p className="text-text-muted text-xs tracking-widest uppercase">
                        {category.items.length} technologies
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2.5">
                    {category.items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-2 text-sm rounded-lg bg-bg-tertiary/70 text-text-secondary border border-border hover:border-gold/30 hover:text-gold transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
