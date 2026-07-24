import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "../components/ui/SectionTitle";
import Card from "../components/ui/Card";
import GoldButton from "../components/ui/GoldButton";
import { projects } from "../data/portfolio";
import { FaGithub, FaExternalLinkAlt, FaTimes, FaStar } from "react-icons/fa";

const categories = ["All", ...new Set(projects.map((p) => p.category))];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  useEffect(() => {
    if (!selectedProject) return undefined;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setSelectedProject(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  return (
    <div id="projects" className="scroll-mt-16 sm:scroll-mt-20">
      {/* Header */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-bg-secondary overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.05)_0%,transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <SectionTitle
            title="Projects"
            subtitle="Selected work demonstrating my approach to AI engineering, evaluation, and production-oriented development."
          />
        </div>
      </section>

      {/* Filter & Grid */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-10 sm:mb-16">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`min-h-11 px-5 sm:px-6 py-2.5 text-xs tracking-widest uppercase rounded-full border transition-all duration-300 cursor-pointer ${
                  activeFilter === cat
                    ? "bg-gold/15 border-gold text-gold shadow-[0_0_15px_rgba(201,168,76,0.15)]"
                    : "border-border text-text-secondary hover:border-gold/30 hover:text-text-primary"
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>

          {/* Project Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                >
                  <Card
                    gold
                    className="!p-0 overflow-hidden group cursor-pointer h-full flex flex-col"
                  >
                    {/* Project Thumbnail */}
                    <div
                      className="relative h-48 bg-bg-tertiary overflow-hidden"
                      onClick={() => setSelectedProject(project)}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="font-heading text-5xl text-gold/10 group-hover:text-gold/20 transition-colors duration-500">
                          {project.title.charAt(0)}
                        </span>
                      </div>
                      {project.featured && (
                        <div className="absolute top-3 right-3 flex items-center gap-1 px-3 py-1 rounded-full bg-gold/20 border border-gold/30 text-gold text-xs">
                          <FaStar size={10} />
                          Featured
                        </div>
                      )}
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-gold text-sm tracking-widest uppercase">
                          View Details
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col" onClick={() => setSelectedProject(project)}>
                      <div className="text-gold text-xs tracking-widest uppercase mb-2">
                        {project.category}
                      </div>
                      <h3 className="font-heading text-xl text-text-primary mb-2 group-hover:text-gold transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-text-muted text-xs mb-3">
                        {project.role} · {project.period}
                      </p>
                      {project.status && (
                        <div className="mb-3">
                          <span className="inline-flex rounded-full border border-gold/25 bg-gold/10 px-2.5 py-1 text-[11px] text-gold">
                            {project.status}
                          </span>
                        </div>
                      )}
                      <p className="text-text-secondary text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2.5 py-1 rounded bg-bg-tertiary text-text-muted border border-border"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 3 && (
                          <span className="text-xs px-2.5 py-1 rounded bg-bg-tertiary text-text-muted border border-border">
                            +{project.tags.length - 3}
                          </span>
                        )}
                      </div>

                      {/* Links */}
                      <div className="flex gap-3 mt-auto">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="flex items-center gap-2 text-text-secondary hover:text-gold text-xs transition-colors"
                          >
                            <FaGithub size={14} /> GitHub
                          </a>
                        )}
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="flex items-center gap-2 text-text-secondary hover:text-gold text-xs transition-colors"
                          >
                            <FaExternalLinkAlt size={12} /> Demo
                          </a>
                        )}
                        {project.researchUrl && (
                          <a
                            href={project.researchUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="flex items-center gap-2 text-text-secondary hover:text-gold text-xs transition-colors"
                          >
                            <FaExternalLinkAlt size={12} />
                            {project.researchLabel || "Research"}
                          </a>
                        )}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ duration: 0.3 }}
              className="glass-card rounded-2xl max-w-2xl w-full max-h-[90svh] overflow-y-auto p-5 sm:p-8 relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedProject(null)}
                aria-label="Close project details"
                className="absolute top-4 right-4 w-10 h-10 rounded-lg bg-bg-tertiary border border-border flex items-center justify-center text-text-secondary hover:text-gold hover:border-gold/30 transition-all cursor-pointer"
              >
                <FaTimes />
              </button>

              {/* Category */}
              <div className="text-gold text-xs tracking-widest uppercase mb-3">
                {selectedProject.category}
              </div>

              {/* Title */}
              <h2 className="font-heading text-2xl sm:text-3xl text-text-primary mb-2 pr-10">
                {selectedProject.title}
              </h2>

              {/* Project metadata */}
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-5">
                <div className="rounded-lg border border-border bg-bg-tertiary/60 px-4 py-3">
                  <dt className="text-[10px] uppercase tracking-widest text-text-muted">
                    Role
                  </dt>
                  <dd className="mt-1 text-sm text-text-primary">
                    {selectedProject.role}
                  </dd>
                </div>
                <div className="rounded-lg border border-border bg-bg-tertiary/60 px-4 py-3">
                  <dt className="text-[10px] uppercase tracking-widest text-text-muted">
                    Period
                  </dt>
                  <dd className="mt-1 text-sm text-text-primary">
                    {selectedProject.period}
                  </dd>
                </div>
                {selectedProject.teamSize && (
                  <div className="rounded-lg border border-border bg-bg-tertiary/60 px-4 py-3">
                    <dt className="text-[10px] uppercase tracking-widest text-text-muted">
                      Team size
                    </dt>
                    <dd className="mt-1 text-sm text-text-primary">
                      {selectedProject.teamSize}
                    </dd>
                  </div>
                )}
                {selectedProject.status && (
                  <div className="rounded-lg border border-gold/20 bg-gold/5 px-4 py-3">
                    <dt className="text-[10px] uppercase tracking-widest text-text-muted">
                      Status
                    </dt>
                    <dd className="mt-1 text-sm text-gold">
                      {selectedProject.status}
                    </dd>
                  </div>
                )}
              </dl>

              {/* Description */}
              <p className="text-text-secondary leading-relaxed mb-6">
                {selectedProject.description}
              </p>

              {selectedProject.highlights?.length > 0 && (
                <ul className="text-text-secondary text-sm leading-relaxed mb-6 space-y-2 list-disc pl-5">
                  {selectedProject.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              )}

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1.5 rounded-full bg-gold/10 text-gold border border-gold/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap gap-4">
                {selectedProject.github && (
                  <GoldButton
                    href={selectedProject.github}
                    variant="outline"
                    icon={<FaGithub />}
                  >
                    View Code
                  </GoldButton>
                )}
                {selectedProject.demo && (
                  <GoldButton
                    href={selectedProject.demo}
                    icon={<FaExternalLinkAlt />}
                  >
                    Live Demo
                  </GoldButton>
                )}
                {selectedProject.researchUrl && (
                  <GoldButton
                    href={selectedProject.researchUrl}
                    variant="outline"
                    icon={<FaExternalLinkAlt />}
                  >
                    {selectedProject.researchLabel || "Research"}
                  </GoldButton>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
