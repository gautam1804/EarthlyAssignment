import React, { useEffect, useState } from "react";
import Dropdown from "./components/Dropdown";
import Hero from "./components/Hero";
import InfoSection from "./components/InfoSection";
import InfoSection2 from "./components/InfoSection2";
import Navbar from "./components/Navbar";
import { InfoData, InfoDataTwo } from "./data/InfoData";
import { SliderData } from "./data/SliderData";
import { SliderData2 } from "./data/SliderData2";
import GlobalStyle from "./globalStyle";
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "./components/Footer";

function App() {

  useEffect(()=>{
    Aos.init({duration:2000});
  },[]);

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Hero slides={SliderData} />
      <InfoSection  data-aos="fade-up" {...InfoData} />
      <Hero  data-aos="fade-up" slides={SliderData2} />
      <InfoSection2 data-aos="fade-up" {...InfoDataTwo}  />
      <Footer/>
    </>
  );
}

export default App;
