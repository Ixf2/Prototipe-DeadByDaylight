import "./Footer.css";

function Footer() {
  return (
    <footer className="main-footer">

      <p>
        © 2026 Prototipe Dead by Dayligth. All rights reserved.
        <a href="/privacy">Privacy Policy</a> |
        <a href="/cookies">Cookies</a> |
        <a href="/terms">Terms</a>
      </p>

      <div className="social-icons">
        <a href='https://github.com/Ixf2'>GitHub</a>
        <a href="https://twitter.com">Twitter</a>
        <a href="https://instagram.com">Instagram</a>
      </div>

      <div className="footer-links">
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="https://figma.com">Figma</a>
      </div>

    </footer>
  );
}

export default Footer;
