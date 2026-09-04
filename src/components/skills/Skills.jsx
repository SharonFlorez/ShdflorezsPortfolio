function Skills({ skills, ui }) {
  return (
    <section className="section skills-section" id="skills">
      <div className="section-label">/ {ui.label}</div>
      <div className="skills-heading">
        <h2>
          {ui.title}
          <br />
          <em>{ui.accent}</em>
        </h2>
        <p>{ui.description}</p>
      </div>
      <div className="skill-grid">
        {skills.map((skill, index) => (
          <div className="skill-item" key={skill.name}>
            <span className="skill-number">0{index + 1}</span>
            <div>
              <h3>{skill.name}</h3>
              <p>
                {skill.category} <span>·</span> {skill.level}
              </p>
            </div>
            <span className="skill-arrow">↗</span>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Skills;
