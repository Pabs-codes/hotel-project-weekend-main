import React from "react";
import Carousel from "./Carousel";
import Book from "./Book";
import About from "./About";
import Services from "./Service";
import Rooms from "./Rooms";
import Sliders from "./Slider";
import Teams from "./Team";
import UC from "../common/UC";
import Gallery from "../common/Gallery/Gallery";
import FB from "../common/Gallery/FB";
import EventList from "./EventList";
import EmptyDiv from "./emtydiv";

export default function Home() {
  return (
    <>
      <Carousel />
      {/* <Book /> */}
      <About />
      <Services />
      <EventList />
      {/* <Rooms /> */}

      {/* <UC/> */}
      {/* <Sliders /> */}
      <Gallery />
      <EmptyDiv/>
      {/* <FB /> */}
      {/* <Teams /> */}
    </>
  );
}
