// components/Home/Home.js
import React, { useEffect } from "react";
import NavbarSection from "../NavbarSection/NavbarSection";
import AboutCompany from "../AboutCompany/AboutComponey";
import WhatWeDo from "../WhatWeDo/WhatWeDo";
import Result from "../Result/Result";
import News from "../News/News";
import GoodJob from "../GoodJob/GoodJob";
import Slider from "../Silder/Slider";
export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="background-slider">
        <NavbarSection />
      </div>
      <AboutCompany />
      <WhatWeDo />
      <Result />
      <GoodJob />
      <Slider />
      <News />
    </>
  );
}
