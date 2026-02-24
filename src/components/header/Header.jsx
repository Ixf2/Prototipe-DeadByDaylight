import { Link } from "react-router-dom";
import React from 'react';
import "./Header.css"
import { useTranslation } from 'react-i18next';


const Header = () => {
  const { t } = useTranslation();
  return (
    <div id="header-box">
      <div className="logo-container">
          <img src="https://cdn2.steamgriddb.com/logo/94391e36d8a88f11d871e8dca5f642f7.png" alt="logo" className="header-logo"/>
      </div>
      <div className="header-box-home">
        <Link to="/">{t('nav_home')}</Link>
      </div>

      <div className="header-box-killers">
        <Link to="/killers">{t('nav_killers')}</Link>
      </div>

      <div className="header-box-survivors">
        <Link to="/survivors">{t('nav_survivors')}</Link>
      </div>

      <div className="header-mapss">
        <Link to="/mapss">Map</Link>
      </div>

    </div>

  );
};

export default Header;
