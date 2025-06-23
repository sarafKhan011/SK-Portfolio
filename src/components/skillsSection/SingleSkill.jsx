import React from 'react';

const SingleSkill = ({ imgSvg, text }) => {
  return (
    <div className="hover:-translate-y-6 transition-all duration-500 relative">
      <div className="flex flex-col items-center gap-2 z-10 relative">
        <div className="bg-white text-cyan h-[100px] w-[100px] flex items-center justify-center rounded-full text-5xl border-4 border-orange hover:text-darkGray hover:scale-105 transition-all duration-500">
          {imgSvg}
        </div>
        <p className="text-white font-bold">{text}</p>
      </div>
      <div className="absolute w-[100px] h-[200px] bg-orange top-[50px] left-0 -z-10 rounded-full opacity-10"></div>
    </div>
  );
};

export default SingleSkill;
