import Reveal from "../components/ui/Reveal";
import { activities, personalInfo } from "../data/portfolio";
import profileImage from "../../CV_image.jpg";

export default function ProfilePage() {
  return (
    <section id="about" className="section-block">
      <div className="site-shell about-grid">
        <Reveal>
          <div className="portrait-frame">
            <img
              src={profileImage}
              alt={`Portrait of ${personalInfo.name}`}
              width="796"
              height="940"
              loading="lazy"
              decoding="async"
            />
          </div>
        </Reveal>

        <Reveal className="about-copy" delay={60}>
          <p className="eyebrow">05 / About</p>
          <h2>Curious by default. Evidence before hype.</h2>
          <p className="about-lead">{personalInfo.bio}</p>

          <div className="about-facts">
            <div className="about-fact">
              <span>Based in</span>
              <strong>{personalInfo.portfolioLocation}</strong>
            </div>
            <div className="about-fact">
              <span>Current focus</span>
              <strong>{personalInfo.currentFocus}</strong>
            </div>
            <div className="about-fact">
              <span>Target roles</span>
              <strong>{personalInfo.targetRoles.join(" / ")}</strong>
            </div>
            <div className="about-fact">
              <span>Graduation</span>
              <strong>{personalInfo.expectedGraduation}</strong>
            </div>
            <div className="about-fact about-fact--wide">
              <span>Availability</span>
              <strong>{personalInfo.availabilityDetail}</strong>
            </div>
          </div>

          <div className="activity-list" aria-label="Community activities">
            {activities.map((activity) => (
              <div className="activity-row" key={activity.title}>
                <strong>{activity.title}</strong>
                <p>
                  {activity.role} · {activity.period}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
