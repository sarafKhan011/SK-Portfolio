import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';

const links = [
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  // { link: "Experience", section: "experience" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
];

const NavbarLinks = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check screen width
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 1024); // less than lg breakpoint
    };

    checkScreen(); // run once on mount
    window.addEventListener('resize', checkScreen); // update on resize
    return () => window.removeEventListener('resize', checkScreen); // cleanup
  }, []);

  return (
    <nav>
     <ul
  className="flex flex-col sm:flex-row lg:flex-row items-center justify-center 
  gap-6 text-white font-bold text-center 
  text-lg sm:text-xl lg:text-md 
  w-full 
  mt-4 
  py-4 
  absolute top-[120%] left-1/2 -translate-x-1/2 
  lg:relative lg:top-auto lg:left-auto lg:translate-x-0"


       
        style={
          isMobile
            ? {
                backgroundColor: 'rgba(255, 165, 0, 0.2)',  // orange glass
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 165, 0, 0.3)',
                borderRadius: '12px',
              }
            : {} // desktop = no background
        }
      >
        {links.map(({ link, section }) => (
          <li key={section} className='group'>
            <Link
              to={section}
              smooth={true}
              spy={true}
              duration={500}
              offset={-130}
              className='cursor-pointer text-white hover:text-orange transition-all duration-500'
              aria-label={`Go to ${link} section`}
            >
              {link}
            </Link>
            <div className='mx-auto bg-cyan w-0 group-hover:w-full h-[1px] transition-all duration-500' />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavbarLinks;
