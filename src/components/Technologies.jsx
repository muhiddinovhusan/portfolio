import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RiReactjsLine, RiNextjsLine } from 'react-icons/ri';
import typescript from '../assets/typescript.svg';
import html from '../assets/html.svg';
import ant from '../assets/ant-design.svg';
import bootstrap from '../assets/bootstrap.svg';
import github from '../assets/github.png';
import css from '../assets/css.png';
import js from '../assets/js.png';
import materialui from '../assets/material-ui.svg';
import sass from '../assets/sass.png';
import figma from '../assets/figma.png';
import tailwind from '../assets/tailwind-css.png';
import netlify from '../assets/netlify.svg';

const Technologies = () => {
    const [showMore, setShowMore] = useState(false);

    const technologies = [
        { src: typescript, alt: "TypeScript" },
        { src: html, alt: "HTML" },
        { src: ant, alt: "Ant Design" },
        { src: bootstrap, alt: "Bootstrap" },
        { src: github, alt: "GitHub" },
        { src: css, alt: "CSS" },
        { src: js, alt: "JavaScript" },
        { src: materialui, alt: "Material UI" },
        { src: sass, alt: "Sass" },
        { src: figma, alt: "Figma" },
        { src: tailwind, alt: "Tailwind CSS" },
        { src: netlify, alt: "Netlify" },
        { src: null, icon: <RiReactjsLine className='text-7xl text-cyan-400' />, alt: "React" },
        { src: null, icon: <RiNextjsLine className='text-7xl' />, alt: "Next.js" }
    ];

    const visibleTechnologies = showMore ? technologies : technologies.slice(0, 8);

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <div className='border-b border-neutral-800 pb-24'>
            <h1 className='my-20 text-center text-4xl'>Technologies</h1>
            <div className='flex flex-wrap items-center overflow-x-scroll justify-center gap-4'>
                <AnimatePresence>
                    {visibleTechnologies.map((tech, index) => (
                        <motion.div
                            key={index}
                            className='rounded-2xl hover:bg-gray-700 border-4 border-neutral-800 p-4'
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                        >
                            {tech.src ? (
                                <img src={tech.src} className='h-[72px]' alt={tech.alt} />
                            ) : (
                                tech.icon
                            )}
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
            <div className='flex justify-center mt-4'>
                <motion.button
                    className='px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700'
                    onClick={() => setShowMore(!showMore)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    
                >
                    {showMore ? 'Show Less' : 'Show More'}
                </motion.button>
            </div>
        </div>
    );
}

export default Technologies;
