import React from 'react'
import { FaCss3Alt, FaHtml5, FaReact, FaBootstrap } from "react-icons/fa";
import { IoLogoJavascript } from 'react-icons/io';
import { RiTailwindCssFill } from 'react-icons/ri';
import { SiVite } from "react-icons/si";
import { SiMongodb, SiMysql } from "react-icons/si";
import SingleSkill from './SingleSkill';

import {motion} from 'framer-motion';
import { fadeIn } from '../../framerMotion/variants';


const skills = [{
    skill:'HTML',
    icon: FaHtml5,
},
{
    skill:'CSS',
    icon:FaCss3Alt,
},
{
    skill:'JavaScript',
    icon: IoLogoJavascript,
},
{
    skill:'ReactJS',
    icon: FaReact,
},
{
    skill: 'TailwindCSS',
    icon: RiTailwindCssFill,
},
{
    skill: 'MongoDB',
    icon: SiMongodb,
},
{
    skill: 'MySQL',
    icon: SiMysql,
},
{
    skill: 'VITE',
    icon: SiVite,
},
{
    skill: 'bootstrap',
    icon: FaBootstrap,
}
]

const AllSkillsSM = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 place-items-center my-12 w-full">
      {skills.map((item, index) => (
        <motion.div
          key={index}
          variants={fadeIn('up', index * 0.15)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.6 }}
          className="flex flex-col items-center"
        >
          <item.icon className="text-6xl text-orange" />
          <p className="text-white mt-2 text-center">{item.skill}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default AllSkillsSM;
