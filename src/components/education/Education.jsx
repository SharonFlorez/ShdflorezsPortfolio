import "./Education.css";

function Education({ education, courses, ui }) {
  return (
    <section className="section education-section" id="education">
      <div className="section-label">/ {ui.label}</div>
      <div className="education-heading">
        <h2>
          {ui.title}
          <br />
          <em>{ui.accent}</em>
        </h2>
        <p>{ui.description}</p>
      </div>
      <div className="education-columns">
        <div>
          <p className="education-subtitle">{ui.degrees}</p>
          <div className="education-list">
            {education.map((item) => (
              <article
                className="education-item"
                key={`${item.institution}-${item.title}`}
              >
                <span className="education-symbol">+</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.institution}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div>
          <p className="education-subtitle">{ui.courses}</p>
          <div className="course-list">
            {courses.map((course) => (
              <article
                className="course-item"
                key={`${course.provider}-${course.platform}`}
              >
                <div>
                  <h3>{course.provider}</h3>
                  {course.title && <p>{course.title}</p>}
                </div>
                <span>{course.platform}</span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
