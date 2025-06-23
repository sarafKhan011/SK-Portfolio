import React from 'react';
import HeroText from './HeroText';
import HeroPic from './HeroPic';
import HeroGradient from './HeroGradient';

const HeroMain = () => {
  return (
    <div className='pt-32 pb-16'>
      <div className='flex flex-col md:flex-row items-center justify-between gap-8 max-w-[1200px] mx-auto px-4 relative'>
        <HeroText />
        <HeroPic />
        <HeroGradient />
      </div>
    </div>
  );
};

export default HeroMain;
