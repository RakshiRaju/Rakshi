import Header from "@/components/Header";
import Footer from "@/components/Footer";
import profile from "@/data/profile";

export default function Home() {
  return (
    <main className="page-shell">
      <Header />

      <section className="section intro-section">
        <div className="content-card hero-card">
          <div>
            <p className="eyebrow">Professional Summary</p>
            <h2>Building a future in AI, cloud, and impactful technology.</h2>
          </div>
          <p className="lead">{profile.shortBio}</p>
        </div>
      </section>

      <section className="section stats-section">
        <div className="stats-grid">
          <div className="stat-box">
            <span className="stat-number">3</span>
            <span className="stat-label">Major Projects</span>
          </div>
          <div className="stat-box">
            <span className="stat-number">2</span>
            <span className="stat-label">Certifications</span>
          </div>
          <div className="stat-box">
            <span className="stat-number">7.2</span>
            <span className="stat-label">CGPA</span>
          </div>
          <div className="stat-box">
            <span className="stat-number">AI</span>
            <span className="stat-label">Focus Area</span>
          </div>
        </div>
      </section>

      <section className="section" id="projects">
        <div className="section-heading">
          <p className="eyebrow">Projects</p>
          <h3>Hands-on work with real-world problem solving</h3>
        </div>

        <div className="projects-grid">
          {profile.projects.map((project) => (
            <article key={project.title} className="project-card">
              <h4>{project.title}</h4>
              <p>{project.summary}</p>
              <ul>
                {project.achievements.map((achievement) => (
                  <li key={achievement}>{achievement}</li>
                ))}
              </ul>
              <div className="tag-row">
                {project.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section two-column" id="education">
        <div className="content-card">
          <div className="section-heading left">
            <p className="eyebrow">Education</p>
            <h3>Academic background</h3>
          </div>
          <div className="timeline">
            {profile.education.map((item) => (
              <div key={item.institute} className="timeline-item">
                <div className="timeline-dot" />
                <div>
                  <p className="timeline-period">{item.period}</p>
                  <h4>{item.degree}</h4>
                  <p>{item.institute}</p>
                  {item.detail ? <small>{item.detail}</small> : null}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="content-card">
          <div className="section-heading left">
            <p className="eyebrow">Certifications</p>
            <h3>Professional learning</h3>
          </div>
          <div className="cert-list">
            {profile.certifications.map((cert) => (
              <div key={cert.name} className="cert-item">
                <p className="timeline-period">{cert.period}</p>
                <h4>{cert.name}</h4>
                <p>{cert.issuer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="skills">
        <div className="section-heading">
          <p className="eyebrow">Skills</p>
          <h3>Technical and soft skills that support my growth</h3>
        </div>

        <div className="skills-wrapper">
          <div className="skill-group">
            <h4>Languages & Tools</h4>
            <div className="tag-row">
              {profile.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>

          <div className="skill-group">
            <h4>Domains</h4>
            <div className="tag-row">
              {profile.domains.map((domain) => (
                <span key={domain}>{domain}</span>
              ))}
            </div>
          </div>

          <div className="skill-group">
            <h4>Soft Skills</h4>
            <div className="tag-row">
              {[
                "Leadership",
                "Problem Solving",
                "Team Collaboration",
                "Critical Thinking",
                "Time Management",
                "Responsibility",
              ].map((softSkill) => (
                <span key={softSkill}>{softSkill}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="resume">
        <div className="content-card resume-card">
          <div>
            <p className="eyebrow">Resume</p>
            <h3>Ready to share my experience and continue learning.</h3>
          </div>
          <div className="resume-actions">
            <a href={profile.resumeUrl} target="_blank" rel="noreferrer" className="primary-btn">
              Download Resume
            </a>
            <a href="mailto:rakshithapm.2005@gmail.com" className="secondary-btn">
              Contact Me
            </a>
          </div>
        </div>
      </section>

      <section className="section" id="contact">
        <div className="section-heading">
          <p className="eyebrow">Contact</p>
          <h3>Let’s connect and build something meaningful.</h3>
        </div>
        <div className="contact-grid">
          <a href={`mailto:${profile.contact.email}`}>
            <span>Email</span>
            <strong>{profile.contact.email}</strong>
          </a>
          <a href={`tel:${profile.contact.phone}`}>
            <span>Phone</span>
            <strong>{profile.contact.phone}</strong>
          </a>
          <a href={profile.contact.linkedin} target="_blank" rel="noreferrer">
            <span>LinkedIn</span>
            <strong>Rakshitha PM</strong>
          </a>
          <a href={profile.contact.github} target="_blank" rel="noreferrer">
            <span>GitHub</span>
            <strong>RakshiRaju</strong>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
