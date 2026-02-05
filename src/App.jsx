import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import Home from "./pages/home/Home.jsx";
import Killers from "./pages/killers/Killers.jsx";
import Survivors from "./pages/survivors/Survivors.jsx";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/killers" element={<Killers />} />
        <Route path="/survivors" element={<Survivors />} />
      </Routes>
    </>
  );
}

export default App;