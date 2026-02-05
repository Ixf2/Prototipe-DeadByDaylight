import { Link } from "react-router-dom";
import "./Header.css"

const Header = () => {
  return (
    <div id="header-box">
      <div className="header-box-home">
        <Link to="/">Home</Link>
      </div>

      <div className="header-box-killers">
        <Link to="/killers">Killers</Link>
      </div>

      <div className="header-box-survivors">
        <Link to="/">Survivors</Link>
      </div>
    </div>
  );
};

export default Header;
