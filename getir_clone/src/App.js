import React from "react";
import "./style.css";

import Campaigns from "./components/Campaigns";
import Categories from "./components/Categories";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import MobileApp from "./components/MobileApp";
import Footer from "./components/Footer";
import Favorite from "./components/Favorite";
import Cards from "./components/Cards";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <Categories />
      <Campaigns />
      <Favorite />
      <MobileApp />
      <Cards />
      <Footer />
    </>
  );
}

export default App;
