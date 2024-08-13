"use client"
import React from 'react';
import {animate, motion} from 'framer-motion';
import SectionHeading from './section-header';
import { stackData, techData} from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import Link from 'next/link';
import { CgCPlusPlus } from "react-icons/cg";

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
            className=' mb-10 max-w-[53rem] scroll-mt-28 sm:mb-20'
        >

            <div className='mb-7 grid items-center'>
                <div>
                <p className='inline text-2xl font-medium fira-code-regular text-[#ff5555]'>Skills</p> 
                </div>
            </div>
            <p className='text-lg mb-16 '>
                Agile, <Link className='inlineLink' href='https://www.scrum.org/resources/what-scrum-module'>Scrum Master</Link>,  C, C++, <Link className='inlineLink' href='https://www.npmjs.com/package/bcrypt'> Password Encryption</Link>, Responsive Design, <Link className='inlineLink' href='https://gendermag.org'>InclusiveMag</Link>, CSS Animations, Box Model, Lazy Loading, DVC Systems, <Link className='inlineLink' href='https://www.mongodb.com/docs/manual/replication/'>Database Replication</Link>, SEO Optimization, CRM Integration, Content Management System (CMS)
            </p>
            <div className='mb-7 grid  items-center'>
                <div>
                <p className='inline text-xl font-medium fira-code-regular text-[#ff5555]'>Stack</p> 
                </div>
            </div>
            <ul className='flex flex-wrap  gap-2 text-lg text-gray-800 mb-16'>
                {
                    stackData.map((stack,index) => (
                        <Link href={stack.href} target="_blank">
                            <motion.li 
                                key={index}
                                variants={fadeInAnimationVariants}
                                initial="initial"
                                whileInView="animate"
                                viewport={{
                                    once: true,
                                }}
                                custom={index}
                                className='bg-white border borderBlack rounded-md pl-5 pr-6 py-3 text-base dark:bg-white/10 dark:hover:bg-white/20  dark:text-gray-100 flex gap-2 items-center'
                            ><span className='text-xl'>{stack.icon}</span>{stack.title}</motion.li>
                        </Link>
                    ))
                }
            </ul>
            <div className='mb-7 grid  items-center'>
                <div>
                    <p className='inline text-xl font-medium fira-code-regular text-[#ff5555]'>Tech</p> 
                </div>
            </div>
            <ul className='flex flex-wrap gap-2 text-lg text-gray-800'>
                {
                    techData.map((tech,index) => (
                        <Link href={tech.href} target="_blank">
                            <motion.li 
                                key={index}
                                variants={fadeInAnimationVariants}
                                initial="initial"
                                whileInView="animate"
                                viewport={{
                                    once: true,
                                }}
                                custom={index}
                                className='bg-white border borderBlack rounded-md pl-5 pr-6 py-3 text-base dark:bg-white/10 dark:hover:bg-white/20 dark:text-gray-100 flex gap-2 items-center'
                            ><span className='text-xl'>{tech.icon}</span>{tech.title}</motion.li>
                        </Link>
                    ))
                }
            </ul>
    </section>

    </div>
  );
}
