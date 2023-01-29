import React from 'react'
import Image from 'next/image'
const Footer = () => {
  return (
    <div className='flex text-center justify-between  lg:mb-80'>
      <div className='flex text-center justify-between '>
        <p className='text-lg text'>
          Carrers
        </p>
        <button className=' h-7 sm:p-1 lg:p-1 md:p-1 text-[10px] px-2 text-white bg-indigo-500 ml-1'>WE'RE HIRING</button>
      </div>
      <div className='flex text-center'>
        <Image src='/instagram.4d27f9ed.svg' alt='' width={20} height={20} className='ml-3 h-7 w-7'/>
        <Image src='/twitter.96833171.svg' alt='' width={20} height={20} className='ml-3 h-7 w-7'/>
        <Image src='/linkedin.4ac682a6 (1).svg' alt='' width={20} height={20} className='ml-3 h-7 w-7'/>
      </div>
      <div className='flex'>
        <p className='text  lg:px-5 md:px-5 sm:px-5 ml-10'>privacy</p>
        <Image src='\logo-icon.bacfc46d (1).svg' width={40} height={40} alt='' className='invisible lg:visible'/>
      </div>
    </div>
  )
}

export default Footer