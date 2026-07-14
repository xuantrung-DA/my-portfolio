import { motion } from "framer-motion";
import SectionTitle from "../components/ui/SectionTitle";
import Card from "../components/ui/Card";
import Timeline from "../components/ui/Timeline";
import { personalInfo, experience, education } from "../data/portfolio";
import { FaBriefcase, FaGraduationCap, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative py-32 bg-bg-secondary overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(201,168,76,0.05)_0%,transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <SectionTitle
            title="About Me"
            subtitle="Learn more about my journey, experience, and what drives me in the world of AI."
          />
        </div>
      </section>

      {/* About Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start"
          >
            {/* Avatar & Info */}
            <motion.div variants={fadeUp} className="lg:col-span-2">
              <div className="sticky top-28">
                {/* Avatar */}
                <div className="relative w-64 h-64 mx-auto mb-8">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gold to-gold-dark opacity-20 blur-2xl animate-glow" />
                  <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-gold/30 bg-bg-tertiary">
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="font-heading text-7xl gold-gradient-text">
                        {personalInfo.name.charAt(0)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Quick Info */}
                <Card gold className="text-center">
                  <h3 className="font-heading text-2xl text-text-primary mb-1">
                    {personalInfo.name}
                  </h3>
                  <p className="text-gold text-sm tracking-widest uppercase mb-4">
                    {personalInfo.title}
                  </p>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center justify-center gap-2 text-text-secondary">
                      <FaMapMarkerAlt className="text-gold" size={14} />
                      {personalInfo.location}
                    </div>
                    <div className="flex items-center justify-center gap-2 text-text-secondary">
                      <FaEnvelope className="text-gold" size={14} />
                      {personalInfo.email}
                    </div>
                  </div>
                </Card>
              </div>
            </motion.div>

            {/* Bio & Details */}
            <motion.div variants={fadeUp} className="lg:col-span-3 space-y-12">
              {/* Bio */}
              <div>
                <h3 className="font-heading text-2xl text-text-primary mb-4 gold-underline inline-block">
                  Who I Am
                </h3>
                <p className="text-text-secondary leading-relaxed mt-8 text-lg">
                  {personalInfo.bio}
                </p>
              </div>

              {/* What I Do - mini cards */}
              <div>
                <h3 className="font-heading text-2xl text-text-primary mb-6 gold-underline inline-block">
                  What I Do
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                  {[
                    {
                      title: "Machine Learning",
                      desc: "Building and deploying ML models for production systems",
                    },
                    {
                      title: "Deep Learning",
                      desc: "Designing neural network architectures for complex problems",
                    },
                    {
                      title: "Computer Vision",
                      desc: "Image recognition, object detection, and visual AI",
                    },
                    {
                      title: "NLP",
                      desc: "Natural language processing and text analysis solutions",
                    },
                  ].map((item, i) => (
                    <Card key={i} gold className="!p-5">
                      <h4 className="text-gold text-sm font-semibold tracking-wider uppercase mb-2">
                        {item.title}
                      </h4>
                      <p className="text-text-secondary text-sm">{item.desc}</p>
                    </Card>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-24 bg-bg-secondary">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <SectionTitle
            title="Experience"
            subtitle="My professional journey in the world of AI and technology."
          />

          <Timeline
            items={experience}
            renderContent={(item) => (
              <Card gold className="!p-6">
                <div className="flex items-center gap-2 mb-3">
                  <FaBriefcase className="text-gold" size={14} />
                  <span className="text-gold text-xs tracking-widest uppercase">
                    {item.period}
                  </span>
                </div>
                <h4 className="font-heading text-xl text-text-primary mb-1">
                  {item.role}
                </h4>
                <p className="text-gold-dark text-sm mb-3">{item.company}</p>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {item.description}
                </p>
                {item.highlights && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {item.highlights.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full bg-gold/10 text-gold border border-gold/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </Card>
            )}
          />
        </div>
      </section>

      {/* Education */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <SectionTitle
            title="Education"
            subtitle="Academic foundation that shaped my expertise."
          />

          <div className="max-w-2xl mx-auto">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Card gold className="!p-8 text-center">
                  <FaGraduationCap className="text-gold mx-auto mb-4" size={32} />
                  <h4 className="font-heading text-xl text-text-primary mb-2">
                    {edu.degree}
                  </h4>
                  <p className="text-gold text-sm tracking-widest uppercase mb-2">
                    {edu.school}
                  </p>
                  <p className="text-text-muted text-sm mb-3">{edu.period}</p>
                  <p className="text-text-secondary text-sm">{edu.description}</p>
                  {edu.gpa && (
                    <div className="mt-4 inline-block px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20">
                      <span className="text-gold text-sm font-semibold">
                        GPA: {edu.gpa}
                      </span>
                    </div>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
