import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import List from "./components/ListComponent/List";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="w-[90%] mx-auto">
        <div className="bg-[#F9F9F9]">
          <Header />
          <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route path="/heroSection/list" element={<List />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
