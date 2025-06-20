import React from 'react';

const links = [
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Experience", section: "experience" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
];

const FooterMain = () => {
  return (
    <footer className="px-4 mt-24 text-lightGray">
      {/* Divider Line */}
      <div className="w-full h-[1px] bg-lightGray mb-6"></div>

      {/* Footer Content */}
      <div className="max-w-[1200px] mx-auto md:flex justify-between items-center">
        <p className="text-2xl font-semibold">Mohammed Saraf Khan</p>

        <ul className="flex flex-col sm:flex-row gap-4 text-lg items-center justify-center mt-4 sm:mt-4 ">
          {links.map((item, index) => (
            <li key={index}>
              <a
                href={`#${item.section}`}
                className="hover:text-lightBrown  transition-all duration-300 cursor-pointer"
              >
                {item.link}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Copyright */}
      <div className="max-w-[1200px] mx-auto text-center md:text-right mt-6 mb-12">
        <p className="text-sm text-lightBrown">
          © {new Date().getFullYear()} Mohammed Saraf Khan. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default FooterMain;
