"use client";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Line from "./components/Line";
import Products from "./components/Products";
import Map from './components/Map';
import Partners from "./components/Partners";
import ContactUs from "./components/ContactUs";
import dynamic from "next/dynamic";
const Navbar = dynamic(() =>  import("./components/Navbar"), { ssr: false });

export default function Home() {
  
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutUs />
      <Line />
      <Products />
      <Map />
      <Partners />
      <ContactUs />
    </div>
  );
}
