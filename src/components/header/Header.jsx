import { Link } from "react-router-dom";
import "./Header.css"

const Header = () => {
  return (
    <div id="header-box">
      <div className="logo-container">
          <img src="https://cdn2.steamgriddb.com/logo/94391e36d8a88f11d871e8dca5f642f7.png" alt="logo" className="header-logo"/>
      </div>
      <div className="header-box-home">
        <Link to="/">Home</Link>
      </div>

      <div className="header-box-killers">
        <Link to="/killers">Killers</Link>
      </div>

      <div className="header-box-survivors">
        <Link to="/survivors">Survivors</Link>
      </div>
    </div>
  );
};

export default Header;
