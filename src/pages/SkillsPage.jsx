import { motion } from "framer-motion";
import SectionTitle from "../components/ui/SectionTitle";
import Card from "../components/ui/Card";
import SkillBar from "../components/ui/SkillBar";
import { skills } from "../data/portfolio";
import { FaBrain, FaCode, FaTools, FaDatabase } from "react-icons/fa";

const categoryIcons = {
  "AI / Machine Learning": <FaBrain size={24} />,
  Programming: <FaCode size={24} />,
  "Frameworks & Tools": <FaTools size={24} />,
  "Data & Cloud": <FaDatabase size={24} />,
};

export default function SkillsPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="relative py-32 bg-bg-secondary overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(201,168,76,0.05)_0%,transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <SectionTitle
            title="Skills & Technologies"
            subtitle="A comprehensive overview of my technical expertise and the tools I use to build intelligent systems."
          />
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {skills.map((category, i) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Card gold className="!p-8 h-full">
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

                  {/* Skill bars */}
                  <div>
                    {category.items.map((skill, j) => (
                      <SkillBar
                        key={skill.name}
                        name={skill.name}
                        level={skill.level}
                        delay={j}
                      />
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Cloud / Summary */}
      <section className="py-24 bg-bg-secondary">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <SectionTitle
            title="Tech Stack"
            subtitle="Technologies I work with on a daily basis"
          />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {skills.flatMap((cat) => cat.items).map((skill, i) => (
              <motion.span
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "rgba(201, 168, 76, 0.15)",
                  borderColor: "rgba(201, 168, 76, 0.5)",
                }}
                className="px-5 py-2.5 text-sm rounded-full border border-border bg-bg-tertiary/50 text-text-secondary hover:text-gold transition-all duration-300 cursor-default"
              >
                {skill.name}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
