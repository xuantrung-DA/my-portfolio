import { useEffect, useRef, useState } from "react";
import {
  FaArrowUpRightFromSquare,
  FaCheck,
  FaCopy,
  FaEnvelope,
} from "react-icons/fa6";
import GoldButton from "../components/ui/GoldButton";
import Reveal from "../components/ui/Reveal";
import { personalInfo } from "../data/portfolio";

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const resetTimer = useRef(null);

  useEffect(
    () => () => {
      window.clearTimeout(resetTimer.current);
    },
    [],
  );

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      window.clearTimeout(resetTimer.current);
      resetTimer.current = window.setTimeout(() => setCopied(false), 2400);
    } catch {
      window.location.href = `mailto:${personalInfo.email}`;
    }
  };

  return (
    <section id="contact" className="section-block">
      <div className="site-shell">
        <Reveal className="contact-panel">
          <p className="eyebrow">Available for the right challenge</p>
          <h2>Let’s build something that works.</h2>

          <div className="contact-panel__bottom">
            <div>
              <p className="contact-panel__copy">
                I’m available for part-time AI engineering opportunities through
                June 2027 and full-time AI Engineer or Applied AI Engineer roles
                from July 2027. My focus is evidence-grounded multimodal and RAG
                systems, supported by computer vision, model optimization, and
                reliable backend engineering.
              </p>
              <p className="copy-feedback" role="status" aria-live="polite">
                {copied ? "Email copied to clipboard." : personalInfo.email}
              </p>
            </div>

            <div className="contact-links">
              <GoldButton
                href={`mailto:${personalInfo.email}`}
                icon={<FaEnvelope />}
              >
                Start a conversation
              </GoldButton>
              <GoldButton
                onClick={copyEmail}
                variant="secondary"
                icon={copied ? <FaCheck /> : <FaCopy />}
              >
                {copied ? "Copied" : "Copy email"}
              </GoldButton>
              <GoldButton
                href={personalInfo.socials.linkedin}
                variant="secondary"
                icon={<FaArrowUpRightFromSquare />}
              >
                LinkedIn
              </GoldButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
