function Contact({ profile, socialLinks, ui }) {
  return (
    <section className="contact-section" id="contact">
      <div className="section-label">/ {ui.label}</div>
      <div className="contact-content">
        <div>
          <p className="eyebrow">{ui.question}</p>
          <h2>
            {ui.title}
            <br />
            <em>{ui.accent}</em>
          </h2>
        </div>
        <div className="contact-side">
          <p>{ui.description}</p>
          <a className="contact-email" href={`mailto:${profile.email}`}>
            {profile.email} <span>↗</span>
          </a>
          <div className="social-list">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noreferrer"
              >
                <span>{social.label}</span>
                <small>{social.handle}</small>
                <b>↗</b>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default Contact;
