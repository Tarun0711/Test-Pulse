import React from "react";
import LandingMain from "./LandingMain";
import Benefits from "./Benefits";
import SystemWorks from "./SystemWorks";
import Footer from "./Footer";
import TestSeries from "./TestSeries";

function HomeComponent() {
  return (
    <div>
      <LandingMain />
      <Benefits />
      <TestSeries />
      <SystemWorks />
      <Footer />
    </div>
  );
}

export default HomeComponent;
