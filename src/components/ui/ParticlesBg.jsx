import { useCallback, useEffect, useRef } from "react";

// Lightweight canvas-based particle effect (no external dependency needed)
export default function ParticlesBg() {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const particlesRef = useRef([]);

  const createParticles = useCallback((width, height, isMobile) => {
    const maxCount = isMobile ? 20 : 80;
    const density = isMobile ? 16000 : 12000;
    const speed = isMobile ? 0.2 : 0.4;
    const count = Math.min(Math.floor((width * height) / density), maxCount);

    return Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2 + 0.5,
      speedX: (Math.random() - 0.5) * speed,
      speedY: (Math.random() - 0.5) * speed,
      opacity: Math.random() * 0.5 + 0.1,
      gold: Math.random() > 0.6,
    }));
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mobileQuery = window.matchMedia("(max-width: 767px), (pointer: coarse)");
    let isMobile = mobileQuery.matches;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let lastFrameTime = Number.NEGATIVE_INFINITY;

    const setCanvasSize = () => {
      isMobile = mobileQuery.matches;
      const maxDpr = isMobile ? 1.25 : 2;
      const dpr = Math.min(window.devicePixelRatio || 1, maxDpr);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    setCanvasSize();
    particlesRef.current = createParticles(width, height, isMobile);

    const handleResize = () => {
      setCanvasSize();
      particlesRef.current = createParticles(width, height, isMobile);
    };

    window.addEventListener("resize", handleResize);

    const animate = (timestamp = 0) => {
      const frameInterval = isMobile ? 1000 / 30 : 0;

      if (timestamp - lastFrameTime < frameInterval) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      lastFrameTime = timestamp;
      ctx.clearRect(0, 0, width, height);
      const particles = particlesRef.current;

      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        // Wrap around
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.gold
          ? `rgba(201, 168, 76, ${p.opacity})`
          : `rgba(255, 255, 255, ${p.opacity * 0.5})`;
        ctx.fill();
      });

      // Pairwise connection checks are intentionally skipped on mobile.
      if (!isMobile) {
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 120) {
              ctx.beginPath();
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              const alpha = (1 - dist / 120) * 0.15;
              ctx.strokeStyle =
                particles[i].gold || particles[j].gold
                  ? `rgba(201, 168, 76, ${alpha})`
                  : `rgba(255, 255, 255, ${alpha * 0.5})`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        }
      }

      if (!reducedMotion) animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", handleResize);
    };
  }, [createParticles]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}
