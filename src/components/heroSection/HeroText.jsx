import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../framerMotion/variants';

const HeroText = () => {
  return (
    <div className='flex flex-col gap-4 h-full justify-center text-center md:text-left w-full'>

      <motion.h2
        variants={fadeIn('down', 0.2)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0 }}
        className='text-xl sm:text-2xl uppercase text-cyan'
      >
        Full-Stack Web Developer
      </motion.h2>

      <motion.h1
        variants={fadeIn('right', 0.4)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0 }}
        className='text-3xl sm:text-5xl md:text-[2.8rem] lg:text-6xl font-bold font-special text-orange'
      >
        Mohammed Saraf Khan
      </motion.h1>

      <motion.p
        variants={fadeIn('up', 0.6)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0 }}
        className='text-white text-base sm:text-lg mt-4'
      >
        A Passionate Web Developer
      </motion.p>

    </div>
  );
};

export default HeroText;
