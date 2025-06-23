import React from 'react';
import AboutMeText from './AboutMeText';
import AboutMeImage from './AboutMeImage';
import { motion } from 'framer-motion';
import { fadeIn } from '../../framerMotion/variants';

const AboutMeMain = () => {
  return (
    <div
      id="about"
      className="flex flex-col lg:flex-row gap-12 px-4 py-6 items-center justify-between"
    >
      {/* About Text */}
      <motion.div
        variants={fadeIn('right', 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="w-full lg:w-1/2"
      >
        <AboutMeText />
      </motion.div>

      {/* About Image */}
      <motion.div
        variants={fadeIn('left', 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="w-full lg:w-1/2 flex justify-center"
      >
        <AboutMeImage />
      </motion.div>
    </div>
  );
};

export default AboutMeMain;
