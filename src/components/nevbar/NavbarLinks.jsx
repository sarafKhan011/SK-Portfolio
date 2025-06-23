import React from 'react';
import { Link } from 'react-scroll';

const links = [
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
];

const NavbarLinks = ({ mode = "inline", onLinkClick = () => {} }) => {
  const isDropdown = mode === "dropdown";

  return (
    <nav>
      <ul
        className={`${
          isDropdown
            ? "flex flex-col items-center py-4 gap-6"
            : "flex gap-8 items-center"
        } text-white font-bold text-lg text-center`}
      >
        {links.map(({ link, section }) => (
          <li key={section} className="group">
            <Link
              to={section}
              smooth={true}
              spy={true}
              duration={500}
              offset={-130}
              onClick={onLinkClick}
              className="cursor-pointer text-white hover:text-orange transition-all duration-500"
              aria-label={`Go to ${link} section`}
            >
              {link}
            </Link>
            <div className="mx-auto bg-cyan w-0 group-hover:w-full h-[1px] transition-all duration-500" />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavbarLinks;
