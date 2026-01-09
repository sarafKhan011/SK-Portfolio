import React from 'react';

const links = [
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
];

const FooterMain = () => {
  return (
    <footer className="w-full px-4 sm:px-6 lg:px-8 mt-24 text-lightGray">
      <div className="w-full h-[1px] bg-lightGray mb-6" />

      <div className="w-full max-w-full mx-auto flex flex-col md:flex-row justify-between items-center flex-wrap gap-4">
        <p className="text-2xl font-semibold">Mohammed Saraf Khan</p>

        <ul className="flex flex-wrap justify-center gap-4 text-lg items-center">
          {links.map((item) => (
            <li key={item.section} className="group">
              <a
                href={`#${item.section}`}
                className="cursor-pointer text-white hover:text-lightBrown transition-all duration-300"
              >
                {item.link}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-full max-w-full mx-auto text-center md:text-right mt-6 mb-12">
        <p className="text-sm text-lightBrown">
          © {new Date().getFullYear()} Mohammed Saraf Khan. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default FooterMain;
