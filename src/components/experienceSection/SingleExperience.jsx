import React from 'react';
import {motion} from 'framer-motion';
import { fadeIn } from '../../framerMotion/variants';

const SingleExperience = ({ experience }) => {
  if (!experience) return null; // safety check

  const { job, company, date, responsibility = [] } = experience; // default empty array

  return (
    <motion.div 
    variants={fadeIn('right', 0.2)}
                        initial='hidden'
                        whileInView='show'
                        viewport={{ once: false, amount: 0 }}
    className="md:h-{350px} md:w-[240px] sm:h-auto sm:w-full border-2 border-orange border-dashed rounded-2xl mt-12 p-4 ">
      <h3 className="text-cyan font-bold">{job}</h3>
      <p className="text-orange">{company} | {date}</p>
      <ul className="list-disc list-inside text-white mt-4 pl-4 ">
        {responsibility.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </motion.div>
  );
};

export default SingleExperience;
