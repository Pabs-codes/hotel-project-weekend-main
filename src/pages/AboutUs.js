import React from "react";
import Heading from "../components/common/Heading";
import About from "../components/home/AboutC";
import Team from "../components/home/Team";
import UC from "../components/common/UC";
import FB from "../components/common/Gallery/FB";


export default function AboutUs() {
  return (
    <>
      <Heading heading="About" title="Home" subtitle="About" />
      <About />
      {/* <Team /> */}
    <FB/>
    </>
  );
}
