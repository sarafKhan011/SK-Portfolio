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
      className="relative flex justify-center items-center h-[550px] w-full mt-20"
    >
      {/* Hexagon Background 1 */}
      <div className="absolute z-0 animate-[spin_20s_linear_infinite]">
        <PiHexagonThin className="text-cyan-500 h-[500px] w-[500px] blur-md" />
      </div>

      {/* Hexagon Background 2 */}
      <div className="absolute z-0 animate-[spin_20s_linear_infinite]">
        <PiHexagonThin className="text-cyan-500 h-[600px] w-[600px] blur-md" />
      </div>

      {/* Profile Image */}
      <img
        src="/images/MyPic.jpeg"
        alt="SK"
        className="relative z-10 h-[450px] w-[450px] object-cover rounded-full shadow-xl"
        style={{
          clipPath: "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)",
        }}
      />
    </motion.div>
  );
};

export default HeroPic;
