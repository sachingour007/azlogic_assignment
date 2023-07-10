import "./App.css";
import FeaturedOffer from "./components/FeaturedOffer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import List from "./components/ListComponent/List";

function App() {
  return (
    <div className="w-[90%] mx-auto">
      <div className="bg-[#F9F9F9]">
        <Header />
        {/* <HeroSection /> */}
         <List/>
      </div>

      {/* <FeaturedOffer /> */}
    </div>
  );
}

export default App;
