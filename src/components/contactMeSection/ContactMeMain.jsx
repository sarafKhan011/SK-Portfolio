import React from 'react';
import ContactMeLeft from './ContactMeLeft';
import ContactMeRight from './ContactMeRight';

const ContactMeMain = () => {
  return (
    <div id="contact" className="max-w-[1200px] mx-auto mt-[100px] px-4 sm:px-6 md:px-10">
      <h2 className="text-4xl sm:text-5xl md:text-6xl text-cyan mb-10 text-center font-bold">
        Contact Me
      </h2>

      <div className="flex flex-col lg:flex-row justify-between gap-10 sm:gap-12 bg-brown p-4 sm:p-6 md:p-8 rounded-3xl shadow-lg">
        <ContactMeLeft />
        <ContactMeRight />
      </div>
    </div>
  );
};

export default ContactMeMain;
