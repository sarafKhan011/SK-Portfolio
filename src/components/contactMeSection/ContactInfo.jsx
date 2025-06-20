import React from 'react'
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from './SingleInfo';

const ContactInfo = () => {
  return (
    <div className='flex flex-col gap-4 text-white '>
        <SingleInfo text='sarafkhanmohammed@gmail.com' Image={HiOutlineMail} />
        <SingleInfo text='+94 758196101' Image={FiPhone} />
        <SingleInfo text='65,Bank Road,Ninthavur-14.' Image={IoLocationOutline} />

     
    </div>
  )
}

export default ContactInfo
