import { Link } from "react-router-dom";
import React from 'react';
import "./Header.css"
import { useTranslation } from 'react-i18next';


const Header = () => {
  const { t } = useTranslation();
  return (
    <div id="header-box">
      <div className="logo-container">
          <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663381268345/JbbwZCziuPOsHkFc.png" alt="logo" className="header-logo"/>
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
        <Link to="/maps">Map</Link>
      </div>

    </div>

  );
};

export default Header;
