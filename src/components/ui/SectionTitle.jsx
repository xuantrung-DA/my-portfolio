import Reveal from "./Reveal";

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = "left",
  index,
}) {
  const alignClass = align === "center" ? "section-heading--center" : "";

  return (
    <Reveal className={`section-heading ${alignClass}`}>
      <div className="section-heading__meta">
        {index && <span className="section-index">{index}</span>}
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      </div>
      <h2>{title}</h2>
      {subtitle && (
        <p className="section-heading__subtitle">{subtitle}</p>
      )}
    </Reveal>
  );
}
