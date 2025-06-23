import React, { useState, useEffect } from 'react';
import NavbarLogo from './NavbarLogo';
import NavbarLinks from './NavbarLinks';
import NavbarBtn from './NavbarBtn';
import { GiHamburgerMenu } from "react-icons/gi";

const NavbarMain = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 1024); // lg
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  return (
    <nav className=' p-2 w-full  fixed top-0 left-0 z-50'>
      {/* Navbar Top Bar */}
      <div className='flex items-center justify-between 
        px-4 py-2 max-w-[1200px] mx-auto 
        bg-[rgba(255,165,0,0.15)] backdrop-blur-md 
        border border-orange/40 rounded-none sm:rounded-full 
        shadow-[0_4px_20px_rgba(255,165,0,0.25)]'>

        {/* Logo */}
        <NavbarLogo />

        {/* Desktop Links */}
        {!isMobile && <NavbarLinks />}

        {/* Right Side: Button + Mobile Hamburger */}
        <div className='flex items-center gap-2'>
          <NavbarBtn />

          {isMobile && (
            <button
              className='p-2 border border-orange rounded-full text-white 
              bg-[rgba(255,165,0,0.15)] backdrop-blur-md flex items-center justify-center'
              onClick={toggleMenu}
              aria-label="Toggle navigation menu"
            >
              <GiHamburgerMenu className="text-xl" />
            </button>
          )}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobile && menuOpen && (
        <div className='w-full bg-[rgba(255,165,0,0.2)] backdrop-blur-md border-t border-orange/30 shadow-md'>
          <div className='max-w-[1200px] mx-auto px-4 py-4'>
            <NavbarLinks />
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavbarMain;
