import { BrowserRouter, Routes, Route } from "react-router-dom";
import Killers from "./pages/killers/Killers";
import Survivors from "./pages/survivors/Survivors";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/killers" element={<Killers />} />
        <Route path="/survivors" element={<Survivors />} />
      </Routes>

      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
