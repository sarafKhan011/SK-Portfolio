import React from 'react'
import { FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from 'react-icons/io';
import { RiTailwindCssFill } from 'react-icons/ri';
import { SiMysql, SiVite } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import SingleSkill from './SingleSkill';
import { FaBootstrap } from "react-icons/fa6";
import {motion} from 'framer-motion';
import { fadeIn } from '../../framerMotion/variants';
import { FaNodeJs } from "react-icons/fa";

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
},
{
  skill: 'Node',
  icon:  FaNodeJs,
}

]

const AllSkills = () => {
  return (
    <div className='flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto '>
        {skills.map((item,index)=>{
            return <motion.div
             variants={fadeIn('up', index * 0.2)}
                      initial='hidden'
                      whileInView='show'
                      viewport={{ once: false, amount: 0 }}
            > <SingleSkill key={index} text={item.skill} imgSvg={<item.icon/>}/>
            </motion.div>
        })}
    </div>
  )
}

export default AllSkills
