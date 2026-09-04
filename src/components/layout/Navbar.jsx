function Navbar({
  profile,
  ui,
  language,
  onLanguageChange,
  menuOpen,
  onToggle,
  onNavigate,
}) {
  const links = [
    ["about", ui.nav.about],
    ["skills", ui.nav.skills],
    ['experience', ui.nav.experience],
    ["education", ui.nav.education],
    ["projects", ui.nav.projects],
    ["contact", ui.nav.contact],
  ];
  return (
    <header className="navbar">
      <a className="brand" href="#top" onClick={onNavigate}>
        <span className="brand-mark">SF</span>
        <span>{profile.shortName}</span>
      </a>
      <button
        className="menu-toggle"
        type="button"
        aria-expanded={menuOpen}
        aria-label={ui.menuLabel}
        onClick={onToggle}
      >
        <span></span>
        <span></span>
      </button>
      <nav className={menuOpen ? "nav-links is-open" : "nav-links"}>
        {links.map(([id, label]) => (
          <a key={id} href={`#${id}`} onClick={onNavigate}>
            {label}
          </a>
        ))}
        <div className="language-switcher" aria-label={ui.languageLabel}>
          {["es", "en"].map((option) => (
            <button
              className={language === option ? "is-active" : ""}
              key={option}
              type="button"
              onClick={() => onLanguageChange(option)}
            >
              {option.toUpperCase()}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
}
export default Navbar;
