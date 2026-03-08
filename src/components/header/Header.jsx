import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./Header.css";
import { useTranslation } from "react-i18next";
import DbdLogo from "../../data/images/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header id="header-box">
      <div className="logo-container">
        <Link to="/" onClick={closeMenu}>
          <img src={DbdLogo} alt="logo" className="header-logo" />
        </Link>
      </div>

      <button
        className="menu-toggle"
        onClick={toggleMenu}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      <nav className={`header-nav ${menuOpen ? "open" : ""}`}>
        <div className="header-box-home">
          <Link to="/" onClick={closeMenu}>{t("nav_home")}</Link>
        </div>

        <div className="header-box-killers">
          <Link to="/killers" onClick={closeMenu}>{t("nav_killers")}</Link>
        </div>

        <div className="header-box-survivors">
          <Link to="/survivors" onClick={closeMenu}>{t("nav_survivors")}</Link>
        </div>

        <div className="header-mapss">
          <Link to="/maps" onClick={closeMenu}>Map</Link>
        </div>

        <div className="header-randomizer">
          <Link to="/random" onClick={closeMenu}>Randomizer</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;