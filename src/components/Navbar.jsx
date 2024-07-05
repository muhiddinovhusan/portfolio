import React from 'react'
import { BsTelegram } from 'react-icons/bs'
import {  FaGithub, FaInstagram, FaLinkedin, FaTelegram } from 'react-icons/fa'

const Navbar = () => {
    return (
        <nav className='mb-20  flex items-center justify-between py-6 '>
<div className='flex flex-shrink-0 items-center'>
<h1 className=' text-3xl '>X</h1>
</div>
<div className='m-8 flex items-center justify-center gap-4 text-2xl  '>
  <a href="https://t.me/muhiddinov_husan">
  
    <BsTelegram/>
  </a>
  <a href="">

    <FaLinkedin/>
  </a>
  <a href="https://github.com/muhiddinovhusan">

    <FaGithub/>
  </a>

</div>
        </nav>
        )
}

export default Navbar