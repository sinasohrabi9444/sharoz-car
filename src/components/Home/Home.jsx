// components/Home/Home.js
import React, { useEffect } from "react";
import NavbarSection from "../NavbarSection/NavbarSection";
import AboutCompany from "../AboutCompany/AboutComponey";
import WhatWeDo from "../WhatWeDo/WhatWeDo";
import Result from "../Result/Result";
import News from "../News/News";
import GoodJob from "../GoodJob/GoodJob";
import Slider from "../Silder/Slider";
import nprogress from "nprogress";
import Router from "next/router";
export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  Router.events.on("routeChangeStart", nprogress.start);
  Router.events.on("routeChangeError", nprogress.done);
  Router.events.on("routeChangeComplete", nprogress.done);
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
