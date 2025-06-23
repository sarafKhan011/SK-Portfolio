import React from 'react';
import ContactInfo from './ContactInfo';
import ContactSocial from './ContactSocial';

const ContactMeRight = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-12 w-full">
      <img src="/images/Email.jpg" alt="email" className="w-full max-w-[300px] h-auto object-contain" />
      <ContactInfo />
      <ContactSocial />
    </div>
  );
};

export default ContactMeRight;
