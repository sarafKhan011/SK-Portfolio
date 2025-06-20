import React from 'react'
import { FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from 'react-icons/io';
import { RiTailwindCssFill } from 'react-icons/ri';
import { SiVite } from "react-icons/si";
import { SiMongodb, SiMysql } from "react-icons/si";
import SingleSkill from './SingleSkill';
import { FaBootstrap } from "react-icons/fa6";
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
    <div className='grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12 '>
      {skills.map((item,index)=>{
        return <motion.div 
        variants={fadeIn('up', index * 0.2)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.7 }}
        key={index} className='flex flex-col items-center '>
            <item.icon className='text-7xl text-orange '/>
            <p className='text-center mt-4 text-white '>{item.skill}</p>
        </motion.div>
      })}
    </div>
  )
}

export default AllSkillsSM
