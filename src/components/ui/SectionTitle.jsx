import { motion } from "framer-motion";

export default function SectionTitle({ title, subtitle, align = "center" }) {
  const alignClass = align === "center" ? "text-center" : "text-left";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className={`mb-16 ${alignClass}`}
    >
      <h2 className="font-heading text-4xl md:text-5xl font-bold text-text-primary mb-4">
        {title}
      </h2>
      {/* Gold ornament line */}
      <div className={`flex items-center gap-3 mt-4 ${align === "center" ? "justify-center" : ""}`}>
        <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold" />
        <div className="w-2 h-2 rotate-45 bg-gold" />
        <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold" />
      </div>
      {subtitle && (
        <p className="text-text-secondary mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
