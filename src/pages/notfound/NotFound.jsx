import "./NotFound.css";
import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import DbdLogo from "../../data/images/logo.png"

export default function NotFound() {
  return (
    <>
    <Header/>
    <div className="notfound-page">
      <video
        className="notfound-video"
        autoPlay
        muted
        playsInline
        preload="auto"
      >
        <source src="https://deadbydaylight.com/static/404_hatch-2ca0a8ab659c5d03ae2edd739ba18e5a.mp4" type="video/mp4" />
      </video>

      <div className="notfound-overlay"></div>

      <div className="notfound-ui">
        <header className="notfound-header">
          <img src={DbdLogo} className="notfound-logo" />
        </header>

        <div className="notfound-content">
          <h1 className="notfound-title">ERROR 404</h1>
          <p className="notfound-text">PAGE NOT FOUND</p>

          <Link to="/" className="notfound-button">
            ESCAPE TO HOME PAGE
          </Link>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}