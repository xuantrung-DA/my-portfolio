import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaChevronDown, FaFilePdf } from "react-icons/fa";
import ParticlesBg from "../components/ui/ParticlesBg";
import GoldButton from "../components/ui/GoldButton";
import Card from "../components/ui/Card";
import { personalInfo, stats } from "../data/portfolio";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function TypingText({ texts }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = texts[currentIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(current.slice(0, displayText.length + 1));
          if (displayText.length === current.length) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          setDisplayText(current.slice(0, displayText.length - 1));
          if (displayText.length === 0) {
            setIsDeleting(false);
            setCurrentIndex((prev) => (prev + 1) % texts.length);
          }
        }
      },
      isDeleting ? 40 : 80
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentIndex, texts]);

  return (
    <span className="gold-gradient-text">
      {displayText}
      <span className="inline-block w-[3px] h-[1em] bg-gold ml-1 animate-pulse align-middle" />
    </span>
  );
}

export default function HomePage() {
  return (
    <div id="home" className="scroll-mt-16 sm:scroll-mt-20">
      {/* Hero Section */}
      <section className="relative min-h-[calc(100svh-4rem)] sm:min-h-[calc(100svh-5rem)] flex items-center justify-center overflow-hidden py-12 sm:py-16">
        <ParticlesBg />

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/50 via-transparent to-bg-primary z-[1]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.05)_0%,transparent_70%)] z-[1]" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 text-center px-4 sm:px-6 max-w-6xl w-full mx-auto"
        >
          {/* Glass hero card */}
          <motion.div
            variants={childVariants}
            className="px-5 py-9 sm:p-10 md:px-12 md:py-14 lg:px-16 lg:py-16 rounded-[32px] bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.08)] backdrop-blur-xl shadow-[0_24px_80px_rgba(0,0,0,0.28)]"
          >
            {/* Greeting */}
            <motion.p
              variants={childVariants}
              className="text-gold text-xs sm:text-sm md:text-base tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-5 sm:mb-6"
            >
              AI Engineer Candidate Portfolio
            </motion.p>

            {/* Name */}
            <motion.h1
              variants={childVariants}
              className="font-heading text-[clamp(1.55rem,7vw,7rem)] font-bold text-text-primary mb-4 tracking-[-0.035em] leading-[0.95] whitespace-nowrap"
            >
              {personalInfo.name}
            </motion.h1>

            {/* Typing tagline */}
            <motion.div
              variants={childVariants}
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-heading mb-7 sm:mb-8 min-h-14 sm:min-h-10"
            >
              <TypingText texts={personalInfo.taglines} />
            </motion.div>

            {/* Bio */}
            <motion.p
              variants={childVariants}
              className="text-text-secondary text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              Applied AI candidate with hands-on experience in computer vision,
              LLM workflows, backend APIs, and production-oriented deployment.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={childVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <GoldButton href={personalInfo.cvUrl} icon={<FaFilePdf />}>
                View CV
              </GoldButton>
              <GoldButton to="#projects" variant="outline" icon={<FaArrowRight />}>
                Review Projects
              </GoldButton>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-2"
        >
          <span className="text-text-muted text-xs tracking-widest uppercase">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <FaChevronDown className="text-gold/50" />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-bg-secondary relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,168,76,0.03)_0%,transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 min-[360px]:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card gold className="text-center !p-5 sm:!p-8">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold gold-gradient-text mb-2 break-words">
                    {stat.value}
                  </div>
                  <div className="text-text-secondary text-sm tracking-widest uppercase">
                    {stat.label}
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
