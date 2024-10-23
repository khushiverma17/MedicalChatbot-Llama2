import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import DisplayNews from "../components/DisplayNews";
import Footer from "../components/Footer";

const NEWS = () => {
  return (
    <>
      <Navbar />
      <Hero para="Home/Blog" title="News" />
      <DisplayNews />
      <Footer/>
    </>
  );
};
export default NEWS;
