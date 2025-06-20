import React, { useState } from 'react';
import NavbarLogo from './NavbarLogo';
import NavbarLinks from './NavbarLinks';
import NavbarBtn from './NavbarBtn';
import { GiHamburgerMenu } from "react-icons/gi";

const NavbarMain = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className='max-w-[1300px] mx-auto px-2 w-full fixed left-[50%] -translate-x-[50%] z-20 flex gap-2 mt-1'>
      {/* Orange Glassmorphic Navbar */}
      <div className='flex justify-between w-full max-w-[1200px] mx-auto 
        bg-[rgba(255, 165, 0, 0.15)] backdrop-blur-md 
        items-center px-4 py-2 rounded-full border border-orange/40 
        shadow-[0_4px_20px_rgba(255,165,0,0.25)] transition-all duration-300'>

        <NavbarLogo />

        <div className={`${menuOpen ? 'sm:block' : 'sm:hidden'} lg:block`}>
          <NavbarLinks />
        </div>

        <NavbarBtn />
      </div>

      {/* Mobile Hamburger - orange tint */}
      <div className='flex lg:hidden sm:block p-3 
        bg-[rgba(255, 165, 0, 0.15)] backdrop-blur-md 
        items-center justify-center rounded-full 
        border border-orange/40 shadow-[0_4px_20px_rgba(255,165,0,0.25)]'>

        <button
          className='text-lg p-2 border border-orange rounded-full text-white'
          onClick={toggleMenu}
        >
          <GiHamburgerMenu />
        </button>
      </div>
    </nav>
  );
};

export default NavbarMain;
