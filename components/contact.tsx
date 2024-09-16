"use client";

import {useRef} from 'react'
import SectionHeading from './section-header'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks';
import { sendEmail } from '@/actions/sendEmail'
import toast, { Toaster } from "react-hot-toast";
import SendBtn from './send-btn'


export default function Contact() {

    const {ref} = useSectionInView("Contact");

    
    const formRef = useRef(document.createElement("form"))


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
            <SectionHeading>Say Hi!</SectionHeading>
            <p className="text-gray-700 -mt-6 dark:text-white/80">
                You may message me directly at <a className='underline' href='mailto:work@timothywiliusa.com'>work@timothywiliusa.com</a> or through this form.
            </p>

            <form 
                className="mt-10 flex flex-col dark:text-black"
                ref={formRef}
                action={async (formData) => {
                    let { data, error } = await sendEmail(formData);
                    console.log(error)
                    if (error) {
                        console.log(error)
                        toast.error(error);
                        return;
                    }
                    toast.success("Email sent successfully!");
                    formRef.current.reset()
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
                <SendBtn/>
            </form>
        <Toaster />
    </motion.section>
  )
}