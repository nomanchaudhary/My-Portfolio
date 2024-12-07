import React, { useEffect } from "react";
import { personalDetails } from "../Details";
import { logos } from "../Details";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "./About";
import Contact from "./Contact";
import Technologies from "./Technologies";
const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="container mx-auto flex flex-wrap items-center px-5 overflow-hidden">
      <div className="flex-1 flex-wrap text-center md:text-left">
        <h1
          data-aos="fade-right"
          className="text-2xl md:text-4xl xl:text-5xl xl:leading-tight font-bold"
        >
          Hi 👋 <br />I am
        </h1>
        <h1
          data-aos="fade-right"
          data-aos-delay="300"
          className="text-2xl md:text-4xl xl:text-5xl xl:leading-tight font-bold bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent"
        >
          {personalDetails.name}
        </h1>
        <h1
          data-aos="fade-right"
          data-aos-delay="600"
          className="text-2xl md:text-4xl xl:text-5xl xl:leading-tight font-bold"
        >
          {personalDetails.tagline}
        </h1>
      </div>
      <div className="w-full mt-5 md:w-1/2 md:mt-0 flex justify-center">
        <img
          data-aos="fade-left"
          className="w-10/12 md:w-8/12 h-auto"
          src={logos.myimage}
          alt=""
        />
      </div>
      <div>
        <section id="about">
        <About/>
        </section>
        <section id="technologies">
        <Technologies/>
        </section>
        <section id="contact">
        <Contact/>
        </section>
      </div>
      
    </div>
    
  );
};

export default Home;
