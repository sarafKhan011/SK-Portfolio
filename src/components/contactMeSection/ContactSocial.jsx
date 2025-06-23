import React from 'react'
import SingleContactSocial from './SingleContactSocial'
import { FiGithub } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://www.linkedin.com/in/mohammed-saraf-khan-5404682b8" Icon={FaLinkedin} />
      <SingleContactSocial link="https://github.com/sarafKhan011" Icon={FiGithub} />
      <SingleContactSocial link="https://www.instagram.com/saraf.musammil" Icon={FaInstagram} />
    </div>
  );
};

export default ContactSocial;
