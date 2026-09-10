import {
  FaArrowUpRightFromSquare,
  FaCertificate,
  FaMedal,
} from "react-icons/fa6";
import Card from "../components/ui/Card";
import Reveal from "../components/ui/Reveal";
import SectionTitle from "../components/ui/SectionTitle";
import { certifications, honors } from "../data/portfolio";

export default function HonorsPage() {
  const research = honors.filter((honor) => honor.type === "research");
  const academic = honors.find((honor) => honor.type === "academic");
  const topStudent = academic?.academicHighlights?.find((highlight) =>
    highlight.label.includes("Top 100"),
  );
  const topStudentSemesters = topStudent?.semesters.length ?? 0;
  const sortedCertifications = [...certifications].sort(
    (a, b) => a.priority - b.priority,
  );
  const featuredCredentials = sortedCertifications.slice(0, 6);
  const archivedCredentials = sortedCertifications.slice(6);

  return (
    <section id="research" className="section-block section-block--alt">
      <div className="site-shell">
        <SectionTitle
          index="04"
          eyebrow="Research & recognition"
          title="Research progress, presented with context."
          subtitle="Published, accepted, and submitted work across applied AI, intelligent systems, computer vision, and model optimization."
        />

        <div className="research-list">
          {research.map((paper, index) => (
            <Reveal
              as="article"
              className="research-row"
              delay={index * 35}
              key={`${paper.title}-${paper.description}`}
            >
              <p className="research-year">{paper.year}</p>
              <div className="research-title">
                <h3>{paper.description.replace(/[“”]/g, "")}</h3>
                {paper.authors && <p>{paper.authors}</p>}
                <span
                  className="status-badge"
                  data-status={(
                    paper.status ||
                    (paper.publishedDate ? "Published" : "Research")
                  ).toLowerCase()}
                >
                  {paper.statusLabel ||
                    paper.status ||
                    (paper.publishedDate ? "Published" : "Research")}
                </span>
              </div>
              <div className="research-venue">
                <span>Conference</span>
                <p>{paper.organization}</p>
              </div>
              {paper.credentialUrl && (
                <a
                  className="research-link"
                  href={paper.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${paper.linkLabel}: ${paper.description.replace(/[“”]/g, "")}`}
                >
                  <span>{paper.linkLabel}</span>
                  <FaArrowUpRightFromSquare size={13} />
                </a>
              )}
            </Reveal>
          ))}
        </div>

        {academic && (
          <Reveal delay={50}>
            <Card className="recognition-strip">
              <div className="recognition-copy">
                <span className="recognition-emblem">
                  <FaMedal size={24} aria-hidden="true" />
                </span>
                <p className="eyebrow">Academic track record</p>
                <h3>Top 100 across {topStudentSemesters} semesters.</h3>
                <p className="recognition-description">
                  Ranked among FPT University&apos;s Top 100 Excellent Students
                  in {topStudent?.semesters.join(" and ")}, with Honor Student
                  recognition across the other {academic.honorSemesters}{" "}
                  completed semesters.
                </p>
                <span className="recognition-school">
                  {academic.organization} · {academic.year}
                </span>
              </div>

              <div className="recognition-dashboard">
                <div className="recognition-primary-stat">
                  <div>
                    <strong>{topStudentSemesters}</strong>
                    <span>/ {academic.completedSemesters} semesters</span>
                  </div>
                  <p>Top 100 Excellent Student</p>
                  <div
                    className="semester-track semester-track--ranking"
                    aria-label={`${topStudentSemesters} Top 100 Excellent Student semesters out of ${academic.completedSemesters} completed semesters`}
                  >
                    {Array.from({ length: academic.completedSemesters }).map(
                      (_, index) => (
                        <span
                          className={
                            index < topStudentSemesters ? "is-top" : "is-honor"
                          }
                          key={`semester-${index + 1}`}
                        />
                      ),
                    )}
                  </div>
                  <div className="semester-legend" aria-hidden="true">
                    <span>
                      <i className="is-top" /> Top 100 ×{topStudentSemesters}
                    </span>
                    <span>
                      <i className="is-honor" /> Honor Student ×
                      {academic.honorSemesters}
                    </span>
                  </div>
                </div>

                <div className="recognition-mini-grid">
                  <div className="recognition-mini-stat">
                    <span>Current GPA</span>
                    <strong>{academic.gpa}</strong>
                    <p>Artificial Intelligence · FPT University</p>
                  </div>
                  <div className="recognition-mini-stat">
                    <span>Honor recognition</span>
                    <strong>
                      {academic.honorSemesters} / {academic.completedSemesters}
                    </strong>
                    <p>
                      {academic.honorSemesters} Honor Student semesters in
                      addition to both Top 100 results
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </Reveal>
        )}

        <Reveal className="credentials-heading">
          <p className="eyebrow">Continuous learning</p>
          <h3>Selected credentials</h3>
        </Reveal>

        <div className="credential-grid">
          {featuredCredentials.map((certificate, index) => (
            <Reveal key={certificate.title} delay={(index % 3) * 35}>
              <Card as="article" className="credential-card" interactive>
                <div className="credential-card__top">
                  <FaCertificate size={19} aria-hidden="true" />
                  <span>{certificate.date}</span>
                </div>
                <h4>{certificate.title}</h4>
                <p>
                  {certificate.issuer} · {certificate.type}
                </p>
                {certificate.credentialUrl && (
                  <a
                    href={certificate.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Verify credential <FaArrowUpRightFromSquare size={12} />
                  </a>
                )}
              </Card>
            </Reveal>
          ))}
        </div>

        {archivedCredentials.length > 0 && (
          <details className="credential-archive">
            <summary>
              View {archivedCredentials.length} additional credentials
            </summary>
            <div className="credential-archive__grid">
              {archivedCredentials.map((certificate) => (
                <a
                  className="credential-archive__row"
                  href={certificate.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={certificate.title}
                >
                  <span>{certificate.title}</span>
                  <span>{certificate.date}</span>
                </a>
              ))}
            </div>
          </details>
        )}
      </div>
    </section>
  );
}
