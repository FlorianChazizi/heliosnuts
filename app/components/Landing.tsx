import React from "react";
import "../styles/landing.css";
import Navbar from "./Navbar";
import Carousel from "./Carousel";
const Landing = () => {
  return (
    <div className="landing-page">
      {/* Navbar */}
      <nav className="navbar">
        <Navbar />
      </nav>

      {/* Main Content */}
      <div className="content-container">
        {/* Left Section: Gradient Letters */}
        <div className="left-content">
          <h1 className="gradient-text">Απολαυστικές Γεύσεις</h1>
        </div>

        {/* Right Section: Image Slider */}
        <div className="right-content">
          <div className="image-slider">
           <Carousel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
