import React from 'react'
import about from '../assets/about.jpg'
import { motion } from 'framer-motion'
import { ABOUT } from '../constants'



const About = () => {
  return (
    <div className='border-b border-neutral-900 ob04 '>

      <h1 className='my-20 text-center text-4xl'>About

        <span className='text-neutral-500 '>Me</span></h1>
      <div
   
      className='flex flex-wrap '>
        <motion.div 
           whileInView={{opacity:1 , x:0}}
           initial={{x:-100 , opacity:0}}
           transition={{duration:0.5}}
           
        className='w-full lg:w-1/2 lg:p-8'>
          <div className='flex items-center justify-center'>
            <img className='rounded-2xl' src={about} alt="" />
          </div>
        </motion.div>
          <motion.div
             whileInView={{opacity:1 , x:0}}
             initial={{x:100 , opacity:0}}
             transition={{duration:0.4}}
             
          
          className='w-full lg:w-1/2 '>
<div className='flex justify-center lg:justify-start'>
<p className='my-2 py-6 max-w-xl text-xl max-md:text-lg max-sm:text-base '>{ABOUT}</p>
</div>
          </motion.div>
      </div>
    </div>
  )
}

export default About