function Hero({ profile, ui }) {
  return (
    <section className="hero-section" id="top">
      <div className="hero-copy">
        <h1>
          {ui.title} <em>{ui.accent}</em>
        </h1>
        <p className="hero-intro">{profile.intro}</p>
      </div>
      <div className="hero-visual">
        <div className="image-frame">
          <img src={profile.image} alt={`${ui.alt} ${profile.name}`} />
          <div className="image-caption">
            <span>{profile.name}</span>
            <span>{profile.location}</span>
          </div>
        </div>
        <div className="floating-note">
          <span>01</span>
          <span dangerouslySetInnerHTML={{ __html: ui.note }} />
        </div>
      </div>
    </section>
  );
}
export default Hero;
