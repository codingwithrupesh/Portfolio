import { useState } from "react";
import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import Features from "./components/features/Features";
import Projects from "./components/projects/Project";
import Contact from "./components/contact/Contact";
import Ourteam from "./components/ourteam/Ourteam";
import Footer from "./components/footer/Footer";
import FooterBottom from "./components/footer/Bottomfootter";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-3 sm:px-5">
      <Navbar />
      <div className="max-w-screen-2xl px-0 sm:px-16 mx-auto  ">
        <Banner />
        <Features />
        <Projects />
        <Ourteam />
        <Contact />
        <Footer />
        <FooterBottom />
      </div>
    </div>
  );
}

export default App;
