import Reveal from "../components/ui/Reveal";
import { education, experience } from "../data/portfolio";

export default function AboutPage() {
  return (
    <section id="experience" className="section-block section-block--alt">
        <div className="site-shell experience-grid">
          <Reveal className="experience-aside">
            <p className="eyebrow">02 / Experience</p>
            <h2>From ambiguity to working systems.</h2>
            <p>
              I care about the full path: framing the problem, validating the
              model, exposing it through an API, and making deployment practical.
            </p>
          </Reveal>

          <div className="experience-list">
            {experience.map((item, index) => (
              <Reveal
                as="article"
                className="experience-item"
                delay={index * 50}
                key={`${item.company}-${item.period}`}
              >
                <p className="experience-period">{item.period}</p>
                <div className="experience-content">
                  <h3>{item.role}</h3>
                  <p className="experience-company">
                    {item.company}
                    {item.project ? ` · ${item.project}` : ""}
                  </p>
                  <p className="experience-description">{item.description}</p>
                  {item.responsibilities && (
                    <ul className="impact-list">
                      {item.responsibilities.map((responsibility) => (
                        <li key={responsibility}>{responsibility}</li>
                      ))}
                    </ul>
                  )}
                  {item.highlights && (
                    <div className="tag-list" style={{ marginTop: "1.25rem" }}>
                      {item.highlights.map((highlight) => (
                        <span className="tag" key={highlight}>
                          {highlight}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </Reveal>
            ))}

            {education.map((item) => (
              <Reveal
                as="article"
                className="experience-item"
                delay={60}
                key={item.school}
              >
                <p className="experience-period">{item.period}</p>
                <div className="experience-content">
                  <h3>{item.degree}</h3>
                  <p className="experience-company">{item.school}</p>
                  <p className="experience-description">{item.description}</p>
                  <div className="tag-list" style={{ marginTop: "1.25rem" }}>
                    <span className="tag">GPA {item.gpa}</span>
                    <span className="tag">
                      Graduation {item.expectedGraduation}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
    </section>
  );
}
