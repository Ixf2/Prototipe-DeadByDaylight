import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="main-header">

      <div className="logo">
        <img src="/logo.png" alt="Logo" />
      </div>

      <nav>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

    </header>
  );
}

export default Header;
