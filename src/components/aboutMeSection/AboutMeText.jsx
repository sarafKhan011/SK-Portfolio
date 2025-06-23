import React from 'react';
import { FaDownload } from "react-icons/fa6";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-5xl sm:text-6xl text-cyan mb-8">About Me</h2>

      <p className="text-white text-base sm:text-lg leading-relaxed">
        I'm Saraf Khan, a full-stack Web developer with a passion for coding.<br />
        I specialize in React, frameworks, and front-end development.<br />
        Outside of coding, I enjoy continuous learning and sharing knowledge<br />
        to inspire others to achieve their goals.
      </p>

      <a
        href="/SarafKhan.pdf"
        download
        className="mt-10 flex items-center gap-2 border border-orange text-white rounded-full py-2 px-5 hover:bg-orange hover:text-white transition-all duration-300"
      >
        Download CV <FaDownload />
      </a>
    </div>
  );
};

export default AboutMeText;
