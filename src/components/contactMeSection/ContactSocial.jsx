import React from 'react'
import SingleContactSocial from './SingleContactSocial'
import { FiGithub } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className='flex gap-4'>
      <SingleContactSocial link='https://www.linkedin.com/in/mohammed-saraf-khan-5404682b8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' Icon={FaLinkedin } />
      <SingleContactSocial link='https://github.com/sarafKhan011' Icon={FiGithub} />
      <SingleContactSocial link='https://www.instagram.com/saraf.musammil?igsh=MXBqODZ0aWF0Y2N5OQ==' Icon={FaInstagram} />
    </div>
  )
}

export default ContactSocial
