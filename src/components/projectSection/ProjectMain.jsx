import React from 'react'
import ProjectText from './ProjectText'
import SingleProject from './SingleProject'
import {motion} from 'framer-motion';
import { fadeIn } from '../../framerMotion/variants';

const projects = [{
    name: 'Car Rental',
    year: 'Mar2023',
    align: 'right',
    image: '/images/P-1.png',
    link: 'https://github.com/sarafKhan011/car-rental-.git',
},
{
    name: 'Resturant Table Reservation',
    year: 'Dec2024',
    align: 'left',
    image: '/images/lap.jpg',
    link: '#',
},
{
    name: 'Car Sale',
    year: 'Jun2025',
    align: 'right',
    image: '/images/P-3.png',
    link: 'https://github.com/sarafKhan011/Car-Sale',
},
]

const ProjectMain = () => {
  return (
    <div id='projects' className='max-w-[1200px] mx-auto px-4 '>
      <motion.div
      variants={fadeIn('up', 0.2)}
                          initial='hidden'
                          whileInView='show'
                          viewport={{ once: false, amount: 0 }}
      >
      <ProjectText/>
      </motion.div>
      <div className='flex flex-col gap-20 max-w-[900px] mx-auto mt-12  '>
        {projects.map((item,index)=>{
            return <SingleProject key={index} name={item.name} year={item.year} align={item.align} image={item.image} link={item.link} />
        })}
      </div>
    </div>
  )
}

export default ProjectMain
