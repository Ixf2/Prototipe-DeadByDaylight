import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import Home from "./pages/home-nuevo/Home.jsx";
import Killers from "./pages/killers/Killers.jsx";
import Survivors from "./pages/survivors/Survivors.jsx";
import Legal from "./pages/legal/Legal.jsx";
import Terms from "./pages/legal/Terms.jsx";
import Maps from "./pages/maps/Maps.jsx";
import LoadingScreen from "./components/loadingscreen/LoadingScreen.jsx";
import RandomizerPage from "./pages/randomizerpage/RandomizerPage.jsx";
import NotFound from "./pages/notfound/NotFound.jsx";
import NewsDetailPage from "./pages/news-details/NewsDetailsPage.jsx";

function App() {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} /> 
        <Route path="/home" element={<Home />} />
        <Route path="/killers" element={<Killers />} />
        <Route path="/survivors" element={<Survivors />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/maps" element={<Maps />} />
        <Route path="/random" element={<RandomizerPage />} />
        <Route path="/news/:id" element={<NewsDetailPage />} />
      </Routes>
    </>
  );
}

export default App;