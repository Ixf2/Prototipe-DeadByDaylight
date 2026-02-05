import "./Footer.css";
import { FaYoutube, FaFacebookF, FaTwitter, FaTwitch, FaInstagram } from "react-icons/fa";
import Form from "../form/Form.jsx";


function Footer() {
  return (
    <footer className="main-footer">
      {/* Politic and Conditions */}
      <p className="legal-text">
        © 2026 Prototipe Dead by Dayligth. Todos los derechos reservados.{" "}
        <a href="/privacy">Política de Privacidad y Cookies</a> |{" "}
        <a href="/terms">Condiciones de Venta</a>
      </p>

      {/* Social */}
      <div className="social-icons">
        <a href="https://youtube.com"><FaYoutube /></a>
        <a href="https://facebook.com"><FaFacebookF /></a>
        <a href="https://twitter.com"><FaTwitter /></a>
        <a href="https://twitch.tv"><FaTwitch /></a>
        <a href="https://instagram.com"><FaInstagram /></a>
      </div>

      {/* Link Proyect */}
      <div className="footer-links">
        <a href="/home">Home</a>
        <a href="/killers">Killers</a>
        <a href="/survivors">Survivors</a>
        <a href="https://www.figma.com/design/x1uXyHXhOGhqXl0zr0RmNz/Design-Web-DBD?node-id=0-1&t=WvV5lo7eAy2Oywyj-1">Design PageWeb</a>
      </div>

      {/* Form*/}
      <div className="form">
        <Form/> 

      </div>

    </footer>
  );
}

export default Footer;
