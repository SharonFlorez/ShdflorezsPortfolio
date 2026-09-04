import { useRef } from "react";

function Skills({ skillGroups, ui }) {
  const carouselRefs = useRef([]);

  const moveCarousel = (index, direction) => {
    carouselRefs.current[index]?.scrollBy({
      left: direction * 220,
      behavior: "smooth",
    });
  };

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
      <div className="skill-groups">
        {skillGroups.map((group, groupIndex) => (
          <div className="skill-group" key={group.key}>
            <div className="skill-group-heading">
              <div>
                <h3>{group.title}</h3>
                <p>{group.description}</p>
              </div>
              <div className="skill-carousel-controls">
                <button type="button" onClick={() => moveCarousel(groupIndex, -1)} aria-label={`${ui.previous}: ${group.title}`}>←</button>
                <button type="button" onClick={() => moveCarousel(groupIndex, 1)} aria-label={`${ui.next}: ${group.title}`}>→</button>
              </div>
            </div>
            <div className="skill-carousel" ref={(element) => { carouselRefs.current[groupIndex] = element; }}>
              {group.skills.map((skill, skillIndex) => (
                <div className="skill-item" key={skill.name}>
                  <span className="skill-number">{String(skillIndex + 1).padStart(2, "0")}</span>
                  <h4>{skill.name}</h4>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Skills;
