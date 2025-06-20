import React from 'react';

const SubHeroSection = () => {
  return (
    <div className='w-full border-y border-lightGray text-lightGray 
      flex flex-col md:flex-row justify-around items-center 
      gap-4 uppercase xl:text-4xl md:text-2xl sm:text-4xl text-white py-8 bg-lightBrown'>

      <p className='w-full text-center md:border-none border-b border-lightGray pb-2'>Fast Learner</p>
      <p className='w-full text-center md:border-none border-b border-lightGray pb-2'>Team Work</p>
      <p className='w-full text-center md:border-none pb-2'>Details Master</p>

    </div>
  );
};

export default SubHeroSection;
