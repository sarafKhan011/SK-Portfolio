import React from 'react';
import { BiSolidRightTopArrowCircle } from "react-icons/bi";
import {motion} from 'framer-motion';
import { fadeIn } from '../../framerMotion/variants';

const SingleProject = ({ name, year, align, image, link }) => {
  return (
    <motion.div
    variants={fadeIn('up', 0.2)}
                              initial='hidden'
                              whileInView='show'
                              viewport={{ once: false, amount: 0 }}

      className={`flex w-full sm:flex-col-reverse items-center gap-8 justify-end 
        ${align === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'}`}
    >
      {/* Text content */}
      <div className="flex flex-col gap-2 sm:items-center md:items-start">
        <h2 className="md:text-3xl sm:text-2xl text-orange font-semibold">{name}</h2>
        <p className={`text-xl font-light text-white font-special 
          ${align === 'left' ? 'md:text-right' : 'md:text-left'} sm:text-center`}>
          {year}
        </p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-lg flex gap-2 items-center text-cyan hover:text-orange transition-all duration-500 
            ${align === 'left' ? 'md:self-end' : 'md:self-start'} sm:self-center`}
        >
          View <BiSolidRightTopArrowCircle />
        </a>
      </div>

      {/* Project image with overlay */}
      <div className="max-h-[220px] max-w-[400px] rounded-xl hover:scale-110 overflow-hidden transform transition-all duration-500 relative border border-white">
        <div className="w-full h-full bg-cyan opacity-50 absolute top-0 left-0 hover:opacity-0 transition-all duration-500 md:block sm:hidden"></div>
        <img src={image} alt="Project" className="w-full h-full " />
      </div>
    </motion.div>
  );
};

export default SingleProject;
