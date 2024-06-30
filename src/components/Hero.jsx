import React from 'react'
import logo from '../assets/images.jpg'
import { motion } from 'framer-motion'


const container = (delay) => (
  {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5, delay: delay
      }
    }

  })

const Hero = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35 '>
      <div className='flex flex-wrap '>
        <div className='w-full lg:w-1/2'>
          <div className='flex flex-col items-center lg:items-start'>
            <motion.h1
              variants={container(0)}
              initial='hidden'
              animate='visible'
              className='pb-16 text-6xl max-sm:text-4xl font-thin tracking-tight lg:mt-16'>Muhiddinov Husan</motion.h1>
            <motion.span
              variants={container(0.5)}
              initial='hidden'
              animate='visible'
              className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent'>Frontend Developer </motion.span>
            <motion.p
              variants={container(1)}
              initial='hidden'
              animate='visible'

              className='my-2 max-w-xl py-6 font-light tracking-tight '>Lorem ipsum dolor sit amet consectetu. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto unde temporibus rem magni voluptas perspiciatis dolore, fugiat nihil modi provident voluptates cum incidunt, minima culpa quis ipsum quas quia? Dolorem nam perferendis possimus quisquam dolores maxime corrupti mollitia, optio exercitationem.</motion.p>
          </div>

        </div>
        <div className='w-full lg:w-1/2 lg:p-8 '>
          <div className='flex justify-center'>
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{duration: 1, delay: 1.1}}
              src={logo} alt="" />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Hero