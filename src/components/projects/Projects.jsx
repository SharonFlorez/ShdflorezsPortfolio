import { useState } from "react";

function Projects({ projects, ui }) {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll
    ? projects
    : projects.filter((project) => project.featured);
  return (
    <section className="section projects-section" id="projects">
      <div className="section-label">0/ {ui.label}</div>
      <div className="projects-heading">
        <h2>
          {ui.title}
          <br />
          <em>{ui.accent}</em>
        </h2>
        <button
          className="text-link"
          type="button"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? ui.featured : ui.all} <span>↗</span>
        </button>
      </div>
      <div className="project-grid">
        {visibleProjects.map((project, index) => (
          <article
            className={`project-card project-${project.color}`}
            key={project.id}
          >
            <div className="project-art">
              <span className="project-index">0{index + 1}</span>
              <div className="art-window">
                <span></span>
                <span></span>
                <span></span>
                <div className="art-lines">
                  <i></i>
                  <i></i>
                  <i></i>
                </div>
              </div>
            </div>
            <div className="project-info">
              <div>
                <p>{project.type}</p>
                <h3>{project.title}</h3>
              </div>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`${ui.linkLabel} ${project.title}`}
              >
                ↗
              </a>
              <p className="project-description">{project.description}</p>
              <div className="tags">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
export default Projects;
