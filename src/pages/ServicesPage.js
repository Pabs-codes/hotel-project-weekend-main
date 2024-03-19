import React from "react";
import Heading from "../components/common/Heading";
// import Services from "../components/home/Service";
// import Sliders from "../components/home/Slider";
// import UC from "../components/common/UC";
import Menu from "../components/Menu/Menu";
import Menutop from "../components/Menu/Menutop";
import Menutop2 from "../components/Menu/Menutop2";
import Menutop2B from "../components/Menu/Menutop2B";


import Menu2 from "../components/Menu/Menu2";
// import Menu3 from "../components/Menu/Menu3";
import Menu2B from "../components/Menu/Menu2B";


export default function Service() {
  return (
    <>
      <Heading heading="Menu" title="Home" subtitle="Menu" />
      {/* <Services /> */}
      <Menutop/>
      <Menu/>
      <Menutop2/>
      <Menu2/>
      <Menutop2B/>
      <Menu2B/>
      {/* <UC/> */}
      {/* <Sliders /> */}
    </>
  );
}
