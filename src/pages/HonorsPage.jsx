import { motion } from "framer-motion";
import SectionTitle from "../components/ui/SectionTitle";
import Card from "../components/ui/Card";
import { honors, certifications, personalInfo } from "../data/portfolio";
import { FaTrophy, FaMedal, FaAward, FaBookOpen, FaCertificate, FaExternalLinkAlt } from "react-icons/fa";

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
    <div id="honors" className="scroll-mt-16 sm:scroll-mt-20">
      {/* Header */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-bg-secondary overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,168,76,0.06)_0%,transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <SectionTitle
            title="Honors & Research Credentials"
            subtitle="Verified academic recognition, peer-reviewed publications, and professional certifications."
          />

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 min-[360px]:grid-cols-3 gap-5 sm:gap-8 max-w-2xl mx-auto mt-8"
          >
            {[
              { label: "Recognitions", value: honors.length },
              {
                label: "Published Papers",
                value: honors.filter((h) => h.type === "research").length,
              },
              {
                label: "Certificates",
                value: certifications.length,
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
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
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

                    {honor.authors && (
                      <p className="text-text-muted text-xs leading-relaxed mt-4">
                        Authors: {honor.authors}
                      </p>
                    )}

                    {honor.publishedDate && (
                      <p className="text-text-muted text-xs mt-2">
                        Published: {honor.publishedDate}
                      </p>
                    )}

                    {honor.credentialUrl && (
                      <a
                        href={honor.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 inline-flex items-center gap-2 text-gold hover:text-gold-light text-sm transition-colors break-all"
                      >
                        DOI: {honor.doi} <FaExternalLinkAlt size={11} className="shrink-0" />
                      </a>
                    )}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 sm:py-20 lg:py-24 bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Certifications"
            subtitle="Continued learning across deep learning, AI engineering, and production MLOps."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6">
            {certifications.map((certificate, index) => (
              <motion.div
                key={certificate.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <Card gold className="h-full !p-6 flex flex-col">
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold shrink-0">
                      <FaCertificate size={22} />
                    </div>
                    <span className="text-gold text-xs tracking-widest uppercase text-right">
                      {certificate.date}
                    </span>
                  </div>
                  <h3 className="font-heading text-lg text-text-primary mb-2">
                    {certificate.title}
                  </h3>
                  <p className="text-text-secondary text-sm mb-5">
                    {certificate.issuer}
                  </p>
                  {certificate.credentialUrl && (
                    <a
                      href={certificate.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto inline-flex items-center gap-2 text-gold hover:text-gold-light text-sm transition-colors"
                    >
                      Verify credential <FaExternalLinkAlt size={11} />
                    </a>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="gold-border-frame p-6 sm:p-10 lg:p-12 rounded-sm"
          >
            <FaTrophy className="text-gold mx-auto mb-6" size={40} />
            <h3 className="font-heading text-2xl text-text-primary mb-4">
              Considering Me for an AI Role?
            </h3>
            <p className="text-text-secondary mb-8">
              My CV summarizes the experience, projects, publications, and technical
              skills most relevant to AI Engineer and Applied AI opportunities.
            </p>
            <a
              href={personalInfo.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold tracking-widest uppercase rounded-lg bg-gradient-to-r from-gold to-gold-dark text-bg-primary hover:shadow-[0_0_30px_rgba(201,168,76,0.3)] transition-all duration-300"
            >
              Review My CV
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
