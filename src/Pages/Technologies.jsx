import React, { useEffect } from "react";
import { techStackDetails } from "../Details";
import AOS from "aos";
import "aos/dist/aos.css";

const Technologies = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const {
    html,
    css,
    js,
    react,
    redux,
    tailwind,
    vscode,
    git,
    github,
    npm,
    figma,
  } = techStackDetails;

  return (
    <div>
      {/* Tech Stack Section */}
      <div className="container mx-auto mt-10 px-5">
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold font-serif">
          Tech Stack
        </h1>
        <p className="text-content text-slate-400">
          Technologies I've been working with recently
        </p>
      </div>

      <div
        data-aos="fade-right"
        className="flex flex-wrap justify-center gap-5 mt-10"
      >
        <img src={html} alt="HTML" />
        <img src={css} alt="CSS"/>
        <img src={js} alt="JavaScript"/>
        <img src={react} alt="React"/>
        <img src={redux} alt="Redux"/>
        <img src={tailwind} alt="Tailwind"/>
      </div>

      {/* Tools Section */}
      <div className="container mx-auto mt-10 px-5">
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold font-serif">
          Tools
        </h1>
      </div>

      <div
        data-aos="fade-right"
        className="flex flex-wrap justify-center gap-5 mt-10 mb-24"
      >
        <img src={vscode} alt="VSCode" />
        <img src={git} alt="Git"/>
        <img
          className="bg-white rounded-full"
          src={github}
          alt="GitHub"
        />
        <img src={figma} alt="Figma" />
        <img src={npm} alt="NPM"/>
      </div>
    </div>
  );
};

export default Technologies;
