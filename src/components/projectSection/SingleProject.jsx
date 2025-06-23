import React from 'react';
import { BiSolidRightTopArrowCircle } from "react-icons/bi";
import { motion } from 'framer-motion';
import { fadeIn } from '../../framerMotion/variants';

const SingleProject = ({ name, year, align, image, link }) => {
  return (
    <motion.div
      variants={fadeIn('up', 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className={`flex flex-col md:flex-row ${align === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'}
        items-center justify-between gap-6 md:gap-10`}
    >
      {/* Text Section */}
      <div className="flex flex-col gap-3 text-center md:text-left w-full md:w-1/2">
        <h2 className="text-2xl sm:text-3xl text-orange font-semibold">{name}</h2>
        <p className="text-lg text-white">{year}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan hover:text-orange transition-all duration-500 flex justify-center md:justify-start items-center gap-2"
        >
          View <BiSolidRightTopArrowCircle className="text-xl" />
        </a>
      </div>

      {/* Project Image */}
      <div className="w-full md:w-1/2 max-w-[400px] rounded-xl overflow-hidden border border-white relative transition-all duration-500 transform hover:scale-105">
        {/* Overlay on hover for desktop */}
        <div className="absolute top-0 left-0 w-full h-full bg-cyan opacity-50 hover:opacity-0 transition-all duration-500 hidden md:block"></div>
        <img src={image} alt={`${name} Screenshot`} className="w-full h-auto object-cover" />
      </div>
    </motion.div>
  );
};

export default SingleProject;
