"use client"

import React from 'react'
import SectionHeading from './section-header'
import { FaPaperPlane } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks';
import { sendEmail } from '@/actions/sendEmail'


export default function Contact() {

    const {ref} = useSectionInView("Contact");

  return (
    <motion.section 
        id="contact" 
        ref={ref}
        className='mb-20 sm:mb-28 w-[min(100%,38rem)] text-center'
        initial={{
            opacity: 0, 
        }}
        whileInView={{
            opacity: 1,
        }}
        transition={{
            duration: 1,
        }}
    >
        <SectionHeading>Hire me</SectionHeading>
        <p className="text-gray-700 -mt-6 dark:text-white/80">
            Please contact me directly at <a className='underline' href='mailto:tim.wiliusa@gmail.com'>tim.wiliusa@gmail.com</a> and do not use this form.
        </p>

        <form 
            className="mt-10 flex flex-col dark:text-black"
            action={async (data) => {
                console.log(data.get("senderEmailRef"));
                console.log(data.get("messageRef"));
                await sendEmail(data);
            }}    
        >
            <input 
            name="senderEmailRef"
            type="email" 
            required
            maxLength={500}
            placeholder='Your email'
            className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
            />
            <textarea 
            name="messageRef"
            required
            maxLength={500}
            placeholder='Your message'
            className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
            />
            <button 
            type='submit' 
            className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65"
            >
                Send <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 "/>
            </button>
        </form>
    </motion.section>
  )
}
