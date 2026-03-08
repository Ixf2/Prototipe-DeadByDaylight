import { useEffect, useState } from "react";
import "./LoadingScreen.css";
import DbdLogo from "../../data/images/logo.png"


const loadingTexts = [
  "The Entity is watching you...",
  "Preparing the hunt...",
  "Loading killers...",
  "Loading survivors...",
  "Summoning the fog...",
  "Opening the portal...",
  "Starting the game...",
];

export default function LoadingScreen({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 10;
        return next >= 100 ? 100 : next;
      });
    }, 300);

    return () => clearInterval(interval);
  }, []);


  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % loadingTexts.length);
    }, 800);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      setClosing(true);

      const timeout = setTimeout(() => {
        if (onFinish) onFinish();
      }, 800);

      return () => clearTimeout(timeout);
    }
  }, [progress, onFinish]);

  return (
    <div className={`loading-screen ${closing ? "closing" : ""}`}>
      <img src={DbdLogo} alt="Dead by Daylight Logo" className="loaging-logo "/>
      <div className="fog-layer fog-1" />
      <div className="fog-layer fog-2" />
      <div className="grid-overlay" />

      <div className="loading-content">
        <div className="logo-container">
          <img src={DBD_LOGO} alt="Dead by Daylight" className="logo" />
        </div>

        <div className="loading-text">
          <p className="text">{loadingTexts[textIndex]}</p>
        </div>

        <div className="progress-container">
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <p className="percentage">{progress}%</p>

        <div className="dots">
          <div className="dot" />
          <div className="dot" />
          <div className="dot" />
        </div>
      </div>
    </div>
  );
}