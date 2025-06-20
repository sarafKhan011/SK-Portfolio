import React from 'react'
import Exprienceinfo from './Exprienceinfo'

const ExperienceTopLeft = () => {
  return (
    <div className='flex flex-col gap-6 w-[300px] '>
      <p className='text-orange font-bold uppercase text-3xl font-special text-center'>Since 2023</p>
      <div className='flex justify-center items-center gap-4'>
        <Exprienceinfo number='1' text='years' />
        <p className='font-bold text-6xl text-lightBrown '></p>
        <Exprienceinfo number='3' text='websites'/>
      </div>
      <p className='text-center text-white '>with 2 years of experience bulding dynamic and user-friendly web-Application </p>
      <Exprienceinfo number='$100k' text='Max Budget'/>
    </div>
  )
}

export default ExperienceTopLeft
