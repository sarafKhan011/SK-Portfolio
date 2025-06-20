import React from 'react';
import SingleExperience from './SingleExperience';
import { FaArrowRight } from "react-icons/fa";
import {motion} from 'framer-motion';
import { fadeIn } from '../../framerMotion/variants';

// ✅ Corrected variable name from `experinces` to `experiences`
const experiences = [
  {
    job: 'Front-End Developer',
    company: 'Alex Apps',
    date: '2022 - Present',
    responsibility: [
      'Implement reusable components.',
      'Participating in large scale applications.',
      'Working on the performance of web applications.',
      'Generating new ideas for better user experience.',
    ],
  },
  {
    job: 'Front-End Developer',
    company: 'Alex Apps',
    date: '2022 - Present',
    responsibility: [
      'Implement reusable components.',
      'Participating in large scale applications.',
      'Working on the performance of web applications.',
      'Generating new ideas for better user experience.',
    ],
  },
  {
    job: 'Front-End Developer',
    company: 'Alex Apps',
    date: '2022 - Present',
    responsibility: [
      'Implement reusable components.',
      'Participating in large scale applications.',
      'Working on the performance of web applications.',
      'Generating new ideas for better user experience.',
    ],
  },
];

const AllExperience = () => {
  return (
    <div className="flex sm:flex-col md:flex-row items-start justify-between ">
      {experiences.map((experience, index) => (
        <div key={index} className="flex items-center gap-4">
          <SingleExperience experience={experience} />
          {index < experiences.length - 1 && (
            <motion.div
             variants={fadeIn('right', 0.2)}
                    initial='hidden'
                    whileInView='show'
                    viewport={{ once: false, amount: 0 }}
            >
            <FaArrowRight className="text-6xl text-orange lg:block sm:hidden" />
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AllExperience;
