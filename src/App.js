import React from "react";
import Showcase from "./Components/Showcase/Showcase";
import AboutUs from "./Components/About us/AboutUs";
import Explore from "./Components/Explore/Explore";
import RedifiningQuality from "./Components/Redifining Quality/RedifiningQuality";
import Testimonials from "./Components/Testimonials/Testimonials";
import Footer from "./Components/Footer/Footer";
import "./App.scss";
const App = () => {
  return (
    <>
      <Showcase></Showcase>
      <AboutUs></AboutUs>
      <Explore></Explore>
      <RedifiningQuality></RedifiningQuality>
      <Testimonials></Testimonials>
      <Footer></Footer>
    </>
  );
};

export default App;
