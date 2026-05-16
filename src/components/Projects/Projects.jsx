import { projects } from '../../data/projects';
import './Projects.css';

const PROJECT_META = {
  1: { number: '01', accent: '#00f5ff', progress: '95%' }, // Cyan
  2: { number: '02', accent: '#22c55e', progress: '88%' }, // Green
  3: { number: '03', accent: '#a855f7', progress: '84%' }, // Purple
  4: { number: '04', accent: '#f59e0b', progress: '80%' }, // Amber
  5: { number: '05', accent: '#ef4444', progress: '76%' }  // Red
};

export default function Projects() {
  return (
    <section id="projects" className="projects-stack-section">
      <div className="projects-header">
        <h2 className="section-title">Projects</h2>
        <div className="projects-sub">github.com/venkateshwarreddy25 · 19 repositories</div>
      </div>

      <div className="container projects-container">

        <div className="featured-label">
          {/* <span className="featured-badge"></span> */}
        </div>

        <div className="project-stack">
          {projects.map((project) => {
            const meta = PROJECT_META[project.id];

            return (
              <div key={project.id} className="project-stack-card" style={{ '--card-accent': meta.accent }}>

                {/* Left Accent Panel */}
                <div className="card-accent-panel">
                  <span className="card-number">{meta.number}</span>
                </div>

                {/* Main Content */}
                <div className="card-main">

                  <div className="card-top">
                    <h3 className="card-title">{project.title}</h3>
                    <p className="card-desc-short">{project.description}</p>
                    <div className="card-tags">
                      {project.tags.map(tag => (
                        <span key={tag} className="tag-pill">{tag}</span>
                      ))}
                    </div>
                  </div>

                  {/* Expanding Content */}
                  <div className="card-expanded">
                    <p className="card-desc-long">
                      {project.importance}
                    </p>
                    <ul className="card-features">
                      {project.features.map((feature, idx) => (
                        <li key={idx}>• {feature}</li>
                      ))}
                    </ul>
                    <div className="card-footer">
                      <span className="card-updated">{project.updated}</span>
                      <div className="card-buttons">
                        <a href={project.githubUrl} target="_blank" rel="noreferrer" className="card-btn">View on GitHub</a>
                      </div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="card-progress-track">
                    <div className="card-progress-fill" style={{ '--target-w': meta.progress }}></div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
