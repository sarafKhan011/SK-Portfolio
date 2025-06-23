import React from 'react';
import ContactMeLeft from './ContactMeLeft';
import ContactMeRight from './ContactMeRight';

const ContactMeMain = () => {
  return (
    <div id="contact" className="max-w-[1200px] mx-auto mt-[100px] px-4">
      <h2 className="text-5xl sm:text-6xl text-cyan mb-10 text-center">Contact Me</h2>
      <div className="flex flex-col lg:flex-row justify-between gap-12 bg-brown p-6 sm:p-4 rounded-2xl">
        <ContactMeLeft />
        <ContactMeRight />
      </div>
    </div>
  );
};

export default ContactMeMain;
