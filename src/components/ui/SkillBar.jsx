import { motion } from "framer-motion";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export default function SkillBar({ name, level, delay = 0 }) {
  const [ref, isVisible] = useScrollAnimation(0.2);

  return (
    <div ref={ref} className="mb-5">
      <div className="flex justify-between items-center mb-2">
        <span className="text-text-primary text-sm font-medium">{name}</span>
        <span className="text-gold text-sm font-semibold">{level}%</span>
      </div>
      <div className="h-2 bg-bg-tertiary rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isVisible ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay: delay * 0.1, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-gold-dark via-gold to-gold-light relative"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
        </motion.div>
      </div>
    </div>
  );
}
