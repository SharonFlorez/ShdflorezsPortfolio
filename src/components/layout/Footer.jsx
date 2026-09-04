function Footer({ profile, ui }) {
  return (
    <footer className="footer">
      <span>
        © {new Date().getFullYear()} {profile.name}
      </span>
      <span>
        {ui.footer} <i>✦</i>
      </span>
    </footer>
  );
}
export default Footer;
