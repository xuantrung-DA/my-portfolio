import { motion } from "framer-motion";

export default function Card({ children, className = "", hover = true, gold = false }) {
  return (
    <motion.div
      whileHover={hover ? { y: -5, transition: { duration: 0.3 } } : {}}
      className={`
        rounded-xl p-6 transition-all duration-300
        ${gold
          ? "glass-card hover:border-gold/30 hover:shadow-[0_0_30px_rgba(201,168,76,0.08)]"
          : "bg-bg-secondary border border-border hover:border-border/80"
        }
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}
