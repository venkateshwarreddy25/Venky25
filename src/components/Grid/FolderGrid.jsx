import { projects } from '../../data/projects.js';
import FolderCard from '../Folder/FolderCard.jsx';
import './FolderGrid.css';

export default function FolderGrid() {
  return (
    <section className="folder-grid-section" id="projects" aria-labelledby="projects-heading">
      <div className="container">
        <div className="folder-grid-header anim-fade-slide-up">
          <span className="section-eyebrow">Portfolio</span>
          <h2 className="section-title" id="projects-heading">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            A curated selection of work — hover the grid to collapse the fan, then lift a card.
          </p>
        </div>

        <div className="folder-grid" role="list" aria-label="Project folders">
          {projects.map((project) => (
            <div key={project.id} role="listitem">
              <FolderCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
