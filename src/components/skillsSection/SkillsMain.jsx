import React from 'react';
import SkillsText from './SkillsText';
import AllSkills from './AllSkills';
import AllSkillsSM from './AllSkillsSM';
import { motion } from 'framer-motion';
import { fadeIn } from '../../framerMotion/variants';

const SkillsMain = () => {
  return (
    <div id="skills" className="w-full bg-darkBrown py-16">
      <div className="max-w-[1200px] px-4 mx-auto relative overflow-hidden">
        {/* Title + Text */}
        <motion.div
          variants={fadeIn('down', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0 }}
        >
          <SkillsText />
        </motion.div>

        {/* Desktop Layout */}
        <div className="hidden lg:block mt-20">
          <AllSkills />
        </div>

        {/* Mobile/Tablet Layout */}
        <div className="block lg:hidden mt-10">
          <AllSkillsSM />
        </div>
      </div>
    </div>
  );
};

export default SkillsMain;
