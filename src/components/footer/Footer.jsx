import "./Footer.css";
import { FaYoutube, FaFacebookF, FaTwitter, FaTwitch, FaGithub } from "react-icons/fa";
import Form from "../form/Form.jsx";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';


function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="main-footer">
      <div className="footer-image-container">
        <img
          src="https://preview.redd.it/rynojxep1gk31.png?width=1080&crop=smart&auto=webp&s=431a7002bf210d9f4b3b47c70d16d5e4f0f60795"
          alt="logo"
          className="footer-logo-img"
        />
      </div>
      <div className="footer-left-group">


        <p className="legal-text">{t('footer_text')}</p>
          <p><Link to="/legal">{t('footer_legal')} </Link> | 
          <Link to="/terms"> {t('footer_terms')}</Link></p>

        {/* Icons Social */}
        <div className="social-icons">
          <a href="https://www.youtube.com/@DeadbyDaylightBHVR" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
          <a href="https://www.facebook.com/DeadByDaylight/" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="https://twitter.com/deadbydaylight" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://www.twitch.tv/deadbydaylight?lang=es" target="_blank" rel="noopener noreferrer"><FaTwitch /></a>
          <a href="https://github.com/Ixf2" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        </div>

        <div className="footer-links">
          <a href="/home">Home</a>
          <a href="/killers">Killers</a>
          <a href="/survivors">Survivors</a>
          <a href="/maps">Maps</a>
          <a href="https://www.figma.com/design/x1uXyHXhOGhqXl0zr0RmNz/Design-Web-DBD?node-id=0-1&t=IEWhcC6uLxAtsbjO-1" target="_blank" rel="noopener noreferrer">Design PageWeb</a>
        </div>
      </div>

      <div className="footer-right-form">
        <Form />
      </div>
    </footer>
  );
}

export default Footer;