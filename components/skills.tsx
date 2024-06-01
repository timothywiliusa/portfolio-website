"use client"
import React from 'react';
import {animate, motion} from 'framer-motion';
import SectionHeading from './section-header';
import { skillsData } from '@/lib/data';
import { stackData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks';

const  fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05*index,
        }
    }) ,
};

export default function Skills() {

    const {ref} = useSectionInView("Skills");

    return (        
        <div>      
        <section 
            ref={ref}
            id='skills'
            className=' mb-10 max-w-[53rem] scroll-mt-28 text-center sm:mb-20'
        >
            <SectionHeading>I continually improve my stack</SectionHeading>
            <ul className='flex flex-wrap justify-center gap-2 text-lg text-gray-800'>
                {
                    stackData.map((stack,index) => (
                        <motion.li 
                            key={index}
                            variants={fadeInAnimationVariants}
                            initial="initial"
                            whileInView="animate"
                            viewport={{
                                once: true,
                            }}
                            custom={index}
                            className='bg-white border borderBlack rounded-xl px-5 py-3 dark:bg-red-900 dark:text-yellow-200'
                        >{stack}</motion.li>
                    ))
                }
            </ul>
        </section>
        <section 
            ref={ref}
            id='skills'
            className=' mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40'
        >
            <SectionHeading>Other software skills and experiences</SectionHeading>
            <ul className='flex flex-wrap justify-center gap-2 text-lg text-gray-800'>
                {
                    skillsData.map((skill,index) => (
                        <motion.li 
                            key={index}
                            variants={fadeInAnimationVariants}
                            initial="initial"
                            whileInView="animate"
                            viewport={{
                                once: true,
                            }}
                            custom={index}
                            className='bg-white border borderBlack rounded-xl px-5 py-3 dark:bg-red-900 dark:text-yellow-200'
                        >{skill}</motion.li>
                    ))
                }
            </ul>
    </section>

    </div>
  );
}
