import { motion } from "framer-motion";

export default function GoldButton({ children, to, href, onClick, variant = "primary", className = "", icon }) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 min-h-11 px-6 sm:px-8 py-3.5 text-xs sm:text-sm font-semibold tracking-widest uppercase rounded-lg transition-all duration-300 cursor-pointer";

  const variants = {
    primary:
      "bg-gradient-to-r from-gold to-gold-dark text-on-gold hover:shadow-[0_0_30px_rgba(201,168,76,0.3)] hover:scale-[1.02] active:scale-[0.98]",
    outline:
      "border border-gold/40 text-gold hover:bg-gold/10 hover:border-gold hover:shadow-[0_0_20px_rgba(201,168,76,0.15)]",
    ghost:
      "text-gold hover:bg-gold/5",
  };

  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  const content = (
    <>
      {icon && <span className="text-base">{icon}</span>}
      {children}
    </>
  );

  const MotionComponent = motion.create ? motion.create("span") : motion.span;

  if (to) {
    return (
      <a href={to}>
        <MotionComponent
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={classes}
        >
          {content}
        </MotionComponent>
      </a>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        <MotionComponent
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={classes}
        >
          {content}
        </MotionComponent>
      </a>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={classes}
    >
      {content}
    </motion.button>
  );
}
