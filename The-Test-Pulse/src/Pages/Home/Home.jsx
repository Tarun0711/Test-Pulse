import React, { useEffect, useState } from "react";
import HeroSection from "../../Components/Home/HeroSection";
import UnderHeroSection from "../../Components/Home/UnderHeroSection";
import ExploreSubject from "../../Components/Home/ExploreSubject";
import PracticeMocksTest from "../../Components/Home/PracticeMocksTest";
import Navbar from "../../Components/Home/Navbar";

function Home() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);
  useEffect(() => {
    document.body.classList.toggle("hero-dark", theme === "dark");
  }, [theme]);
  return (
    <div className={`dark:bg-gray-900 bg-white h-auto flex flex-col`}>
      <Navbar/>
      <HeroSection />
      <UnderHeroSection/>
      <ExploreSubject/>
      <PracticeMocksTest/>
    </div>
  );
}

export default Home;
