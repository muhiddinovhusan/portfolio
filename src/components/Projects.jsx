import React from 'react'
import { PROJECTS } from '../constants'
import { motion } from 'framer-motion'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

const Projects = () => {
    return (
        <div className='border-b border-neutral-900 pb-4'>
            <motion.h1
            whileInView={{opacity: 1, y: 0}}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5 }}
            className='my-20 text-center text-4xl '>Projects</motion.h1>
            <div>
                {PROJECTS.map((project, i) => (
                    <div className='mb-8 flex flex-wrap  justify-center' key={i}>
                        <motion.div 
                          whileInView={{opacity: 1, x: 0}}
                          initial={{ opacity: 0, x: -100 }}
                          transition={{ duration: 1 }}
                        className='w-full lg:w-1/4  '>
                       <div className='relative w-48 h-40 mb-6'>
                                <img className='w-full h-full rounded object-cover' src={project.image} alt="" />
                                <div className='absolute inset-0 flex flex-col gap-2 items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 hover:opacity-100'>
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className='text-white mb-2 flex items-center gap-2 p-1.5 bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-300'>
                                        <FaExternalLinkAlt /> <span className='font-medium'>View Project</span>
                                    </a>
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className='text-white flex items-center gap-2 p-1.5 bg-gray-800 rounded-lg hover:bg-gray-900 transition duration-300'>
                                        <FaGithub /> <span className=' font-medium'>View Code</span>
                                    </a>
                                </div>

                            </div>
                        </motion.div>
                        <motion.div
                          whileInView={{opacity: 1, x: 0}}
                          initial={{ opacity: 0, x: 100 }}
                          transition={{ duration: 1 }}
                        className='w-full max-w-xl lg:w-3/4'>
                            <h6 className='mb-2 font-semibold'>
                                {project.title}
                            </h6>
                            <p className='mb-4 text-neutral-400'>{project.description}</p>
                            {
                                project.technologies.map((technologies, i) => (
                                    <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-purple-900 text-sm font-medium ' key={i}>{technologies}</span>
                                ))
                            }
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects