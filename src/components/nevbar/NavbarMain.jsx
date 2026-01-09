import React, { useState, useEffect } from 'react';
import NavbarLogo from './NavbarLogo';
import NavbarLinks from './NavbarLinks';
import NavbarBtn from './NavbarBtn';
import { GiHamburgerMenu } from "react-icons/gi";

const NavbarMain = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [screenSize, setScreenSize] = useState('large'); // 'large', 'medium', 'small'

  const toggleMenu = () => setMenuOpen(prev => !prev);

  useEffect(() => {
    const checkScreen = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setScreenSize('large');
        setMenuOpen(false);
      } else if (width >= 500) {
        setScreenSize('medium');
      } else {
        setScreenSize('small');
      }
    };

    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  const handleLinkClick = () => {
    if (screenSize !== 'large') setMenuOpen(false);
  };

  const isMobile = screenSize !== 'large';

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 p-2 bg-transparent">
        {/* Navbar container */}
        <div className="w-full max-w-[95%] sm:max-w-[90%] lg:max-w-[1200px] mx-auto
          bg-[rgba(255,165,0,0.15)] backdrop-blur-md
          border border-orange/40 rounded-full
          shadow-[0_4px_20px_rgba(255,165,0,0.25)]
          px-4 py-2 flex items-center justify-between box-border relative"
        >
          {screenSize === 'small' ? (
            <div className="flex items-center gap-2 min-w-0 overflow-visible">
              <button
                onClick={toggleMenu}
                className="p-2 border border-orange rounded-full text-white 
                bg-[rgba(255,165,0,0.15)] backdrop-blur-md transition-transform duration-300"
              >
                <GiHamburgerMenu className={`text-xl ${menuOpen ? 'rotate-90' : 'rotate-0'}`} />
              </button>
              <NavbarLogo />
            </div>
          ) : screenSize === 'medium' ? (
            <>
              <NavbarLogo />
              <div className="flex items-center gap-2">
                <NavbarBtn />
                <button
                  onClick={toggleMenu}
                  className="p-2 border border-orange rounded-full text-white 
                  bg-[rgba(255,165,0,0.15)] backdrop-blur-md"
                >
                  <GiHamburgerMenu className="text-xl" />
                </button>
              </div>
            </>
          ) : (
            <>
              <NavbarLogo />
              <div className="flex items-center gap-6">
                <NavbarLinks mode="inline" />
                <NavbarBtn />
              </div>
            </>
          )}
        </div>

        {/* =========================
            Mobile Dropdown Menu
            ========================= */}
        {isMobile && menuOpen && (
          <div className="absolute top-full left-0 w-full bg-[rgba(255,165,0,0.2)] backdrop-blur-md border-t border-orange/30 shadow-md z-50">
            <div className="w-full px-4 py-6 flex flex-col items-center gap-4">
              <NavbarLinks mode="dropdown" onLinkClick={handleLinkClick} />
              {screenSize === 'small' && <NavbarBtn />}
            </div>
          </div>
        )}
      </nav>

      {/* Spacer to prevent content hiding behind fixed navbar */}
      <div className="h-[72px] sm:h-[80px]" />
    </>
  );
};

export default NavbarMain;
