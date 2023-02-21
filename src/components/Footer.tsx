import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
  const linkedinUrl: string = 'https://www.linkedin.com/in/kangcm'

  return (
    <footer className='h-24 bg-[#7e4e6a]'>
      <div className='w-5/6 mx-auto'>
        <div className='justify-center text-center pt-8'>
          <a href={linkedinUrl} target='_blank'><AiFillLinkedin size={40} className='inline mb-3 mr-2' /></a>
          <p className='inline font-lato font-semibold text-2xl text-[#d1ccb0]'>I am open to new opportunities! Feel free to send me an <a href='mailto:mattkcw@outlook.com' className='font-semibold text-[#9ab0ee]'>email</a>.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer