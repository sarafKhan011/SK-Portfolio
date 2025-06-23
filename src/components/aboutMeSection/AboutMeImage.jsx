import React from 'react';

const AboutMeImage = () => {
  return (
    <div className="relative w-[280px] h-[480px] sm:w-[260px] sm:h-[460px] md:w-[300px] md:h-[500px]">
      {/* Profile Image */}
      <div className="absolute w-full h-full rounded-[100px] overflow-hidden z-10">
        <img
          src="/images/Aboutpic.jpg"
          alt="About Me"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Orange Background Blob */}
      <div className="absolute bottom-[-30px] left-[-30px] w-[250px] h-[480px] sm:h-[450px] bg-orange rounded-bl-[120px] rounded-tr-[120px] rounded-br-[20px] rounded-tl-[20px] -z-10" />
    </div>
  );
};

export default AboutMeImage;
