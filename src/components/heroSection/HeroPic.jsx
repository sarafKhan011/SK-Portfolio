import React from 'react';
import { PiHexagonThin } from "react-icons/pi";
import { motion } from 'framer-motion';
import { fadeIn } from '../../framerMotion/variants';

const HeroPic = () => {
  return (
    <motion.div
      variants={fadeIn('left', 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="relative flex justify-center items-center w-full sm:h-[450px] md:h-[550px] mt-10 sm:mt-20"
    >
      {/* Hexagon Backgrounds */}
      <div className="absolute z-0 animate-[spin_20s_linear_infinite]">
        <PiHexagonThin className="text-cyan-500 h-[400px] w-[400px] sm:h-[500px] sm:w-[500px] blur-md" />
      </div>
      <div className="absolute z-0 animate-[spin_20s_linear_infinite]">
        <PiHexagonThin className="text-cyan-500 h-[500px] w-[500px] sm:h-[600px] sm:w-[600px] blur-md" />
      </div>

      {/* Profile Image */}
      <img
        src="/images/MyPic.jpeg"
        alt="SK"
        className="relative z-10 w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] md:w-[450px] md:h-[450px] object-cover rounded-full shadow-xl"
        style={{
          clipPath: "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)",
        }}
      />
    </motion.div>
  );
};

export default HeroPic;
