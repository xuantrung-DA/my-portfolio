import { motion } from "framer-motion";
import SectionTitle from "../components/ui/SectionTitle";
import Card from "../components/ui/Card";
import { honors } from "../data/portfolio";
import { FaTrophy, FaMedal, FaAward, FaBookOpen } from "react-icons/fa";

const typeIcons = {
  competition: <FaTrophy size={24} />,
  academic: <FaMedal size={24} />,
  research: <FaBookOpen size={24} />,
  default: <FaAward size={24} />,
};

const typeColors = {
  competition: "from-amber-500/20 to-yellow-600/20 border-amber-500/30",
  academic: "from-gold/20 to-gold-dark/20 border-gold/30",
  research: "from-emerald-500/20 to-green-600/20 border-emerald-500/30",
};

const typeLabels = {
  competition: "Competition",
  academic: "Academic",
  research: "Research",
};

export default function HonorsPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="relative py-32 bg-bg-secondary overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,168,76,0.06)_0%,transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <SectionTitle
            title="Honors & Awards"
            subtitle="Recognition and achievements that highlight my dedication and expertise in AI and technology."
          />

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex justify-center gap-12 mt-8"
          >
            {[
              { label: "Total Awards", value: honors.length },
              {
                label: "Competitions",
                value: honors.filter((h) => h.type === "competition").length,
              },
              {
                label: "Academic",
                value: honors.filter((h) => h.type === "academic").length,
              },
              {
                label: "Research",
                value: honors.filter((h) => h.type === "research").length,
              },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-heading font-bold gold-gradient-text">
                  {stat.value}
                </div>
                <div className="text-text-muted text-xs tracking-widest uppercase mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Awards Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {honors.map((honor, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card gold className="!p-0 overflow-hidden h-full flex flex-col">
                  {/* Top accent bar */}
                  <div
                    className={`h-1 bg-gradient-to-r ${
                      typeColors[honor.type] || typeColors.academic
                    }`}
                  />

                  <div className="p-6 flex-1 flex flex-col">
                    {/* Icon & Year */}
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${
                          typeColors[honor.type] || typeColors.academic
                        } flex items-center justify-center text-gold`}
                      >
                        {typeIcons[honor.type] || typeIcons.default}
                      </div>
                      <div className="text-right">
                        <span className="text-gold text-sm font-semibold">
                          {honor.year}
                        </span>
                        <br />
                        <span className="text-text-muted text-xs tracking-widest uppercase">
                          {typeLabels[honor.type] || "Award"}
                        </span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="font-heading text-xl text-text-primary mb-2">
                      {honor.title}
                    </h3>

                    {/* Organization */}
                    <p className="text-gold-dark text-sm mb-3">
                      {honor.organization}
                    </p>

                    {/* Description */}
                    <p className="text-text-secondary text-sm leading-relaxed flex-1">
                      {honor.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-bg-secondary">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="gold-border-frame p-12 rounded-sm"
          >
            <FaTrophy className="text-gold mx-auto mb-6" size={40} />
            <h3 className="font-heading text-2xl text-text-primary mb-4">
              Interested in Collaboration?
            </h3>
            <p className="text-text-secondary mb-8">
              I'm always looking for new challenges and opportunities to push the
              boundaries of AI technology.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold tracking-widest uppercase rounded-lg bg-gradient-to-r from-gold to-gold-dark text-bg-primary hover:shadow-[0_0_30px_rgba(201,168,76,0.3)] transition-all duration-300"
            >
              Let's Connect
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
