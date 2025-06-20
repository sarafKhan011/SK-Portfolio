import React from 'react'
import { FaDownload } from "react-icons/fa6";

const AboutMeText = () => {
  return (
    <div className='flex flex-col md:items-start sm:items-center md:text-left sm:text-center'>
      <h2 className='text-6xl text-cyan mb-10'>About Me</h2>
      <p className='text-white'>
        I'm Saraf Khan, a full-stack Web developer with a passion for coding<br/> 
        I specialize in React, frameworks, and front-end development.<br/>
        Outside of coding, I enjoy continuous learning and sharing knowledge<br/>
        to inspire others to achieve their goals.
      </p>

      <a
        href="/M-Saraf-Khan-CV.pdf"
        download
        className='border border-orange gap-2 rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-cyan transition-all duration-500 cursor-pointer md:self-start text-white hover:text-cyan'
      >
         CV <FaDownload />
      </a>
    </div>
  )
}

export default AboutMeText
