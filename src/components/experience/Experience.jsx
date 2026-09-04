function Experience({ experiences }) {
  return (
    <section className="section experience-section" id="experience">
      <div className="section-label">/ Experiencia</div>
      <div className="experience-heading">
        <h2>
          Donde las ideas
          <br />
          <em>toman forma.</em>
        </h2>
        <p>
          He aprendido que los mejores productos aparecen cuando las buenas
          preguntas tienen espacio para hacerse.
        </p>
      </div>
      <div className="experience-list">
        {experiences.map((experience) => (
          <article className="experience-item" key={experience.id}>
            <div className="experience-meta">
              <span>{experience.period}</span>
              <span>{experience.company}</span>
            </div>
            <div className="experience-body">
              <h3>{experience.role}</h3>
              <p>{experience.description}</p>
              <ul>
                {experience.responsibilities.map((responsibility) => (
                  <li key={responsibility}>{responsibility}</li>
                ))}
              </ul>
              <div className="tags">
                {experience.technologies.map((technology) => (
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
export default Experience;
