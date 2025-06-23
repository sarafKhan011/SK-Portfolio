import React from 'react';

const SingleContactSocial = ({ Icon, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-2xl h-12 w-12 border border-orange text-orange rounded-full flex items-center justify-center hover:bg-orange hover:text-white transition-all duration-300"
    >
      <Icon />
    </a>
  );
};

export default SingleContactSocial;