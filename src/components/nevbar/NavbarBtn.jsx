import React from 'react';
import { LuArrowDownRight } from "react-icons/lu";

const NavbarBtn = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={scrollToContact}
      className='px-4 py-2 rounded-full text-xl font-bold text-white border-cyan border flex items-center gap-1 bg-gradient-to-r from-cyan to-orange hover:border-orange hover:scale-110 transition-all duration-500'
    >
      Hire Me
      <div className='sm:hidden md:block'>
        <LuArrowDownRight />
      </div>
    </button>
  );
};

export default NavbarBtn;
