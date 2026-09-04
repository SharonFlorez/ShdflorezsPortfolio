function About({ profile, ui }) {
  return (
    <section className="section about-section" id="about">
      <div className="section-label">/ {ui.label}</div>
      <div className="about-content">
        <div>
          <h2>{ui.title}</h2>
          <p className="large-copy">{profile.bio}</p>
        </div>
        <div className="about-details">
          <div className="stat">
            <strong>{profile.yearsExperience}</strong>
            <span dangerouslySetInnerHTML={{ __html: ui.years }} />
          </div>
          <div className="stat">
            <strong>∞</strong>
            <span dangerouslySetInnerHTML={{ __html: ui.learning }} />
          </div>
          <div className="strength-list">
            <p>{ui.focus}</p>
            {profile.strengths.map((strength, index) => (
              <span key={strength}>
                <b>0{index + 1}</b>
                {strength}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
