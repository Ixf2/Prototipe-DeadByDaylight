import "./RssPage.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import { FaRss } from "react-icons/fa";

export default function RssPage() {
  return (
    <>
    <Header/>
    <main className="rss-page">
      <div className="rss-container">
        <h1 className="rss-title">RSS Feed</h1>

        <p className="rss-text">
          This page gives access to the RSS feed of the news section of the project.
          Each item in the feed links to a news article inside the application.
        </p>

        <a
          href="/rss/News.xml"
          target="_blank"
          rel="noopener noreferrer"
          className="rss-button"
        >
          <FaRss />
          Open RSS XML
        </a>

        <Link to="/" className="rss-back-button">
          Back to Home
        </Link>
      </div>
    </main>
    <Footer/>
    </>
  );
}