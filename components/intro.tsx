"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi"
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from '@/context/active-section-context';





export default function Intro() {

    const {ref} = useSectionInView("Resume", 0.5);
    const {setActiveSection, setTimeOfLastClick} = useActiveSectionContext();


    // console.log("printing key")
    // console.log(process.env.NEXT_PUBLIC_API_KEY)

  return (              
    <section 
        ref={ref}
        id="resume" 
        className='mt-[15vh] sm:mt-[5vh] first-letter:mb-28 w-full max-w-[1100px] sm:mb-0 px-[50px] sm:px-[100px] scroll-mt-[100rem] bg-none dark:text-zinc-400 '
    >
        {/* <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-orange-900"></div>

        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-red-900"></div> */}
        <div className='flex items-end bg-none w-full'>
            <div className="hidden sm:inline relative bg-none">
                <motion.div
                    initial={{opacity: 0, scale: 0}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{
                        type: "tween",
                        duration: 0.2,
                    }}
                >
                    <Image 
                    src="https://github.com/timothywiliusa/digital-resume/blob/master/src/shared/facebookpfp.png?raw=true" 
                    alt="Tim" 
                    width="192" 
                    height="192" 
                    quality="95" 
                    priority={true}
                    className=" bg-transparent h-[100px] w-[100px] rounded-full object-cover border-[0.35rem] border-black shadow-xl dark:border-[#cc4629]"
                    />

                </motion.div>
                
                <motion.span 
                    className=" bg-transparent absolute bottom-[-15px] right-[-25px] text-4xl"
                    initial={{opacity: 0, scale: 0}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{
                        type: "spring",
                        stiffness: 125,
                        delay: 0.1,
                        duration: 0.7,
                        // waving emoji animation
                    }}
                >
                    👋
                </motion.span>
            </div>

            <div className="pl-4 sm:pl-8 fira-code-regular text-xs text-[#FF5733]">Hi, my name is</div>
        </div>

        <motion.div className="bg-transparent -z-10 md:mb-10 pt-1 mt-1 px-4 !leading-[1.5] text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
        initial={{opacity: 0, y: 100}}
        animate={{opacity: 1, y: 0}}
        // animate to appear from bellow 
        >
            
            <h1 className="font-bold  dark:text-gray-200 pt-[10px]">Timothy Wiliusa.
            <br/>
            <span className="text-gray-600 dark:text-gray-400">I build things for the web.</span> 
            </h1> 
        
        </motion.div>

       
        <motion.h2 className="bg-transparent -z-10 mb-5 md:mb-10 px-4 !leading-[1.5]  dark:text-gray"
        initial={{opacity: 0, y: 100}}
        animate={{opacity: 1, y: 0}}
        // animate to appear from bellow 
        >
            <div className="max-w-[410px] md:max-w-[550px]">I specialize in building (and occasionally designing) full stack web applications, with 3 years of experience in React, Next, Node.js, and SQL. Ready to create inovative web sulutions!</div>

           
        </motion.h2>


        <motion.div className="flex flex-col md:flex-row items-center xs:items-start justify-start gap-2 px-4 text-lg font-medium"
        initial={{opacity: 0, y: 100}}
        animate={{opacity: 1, y: 0}}
        transition={{
            delay: 0.1,
        }}
        >
    

            <div className="flex xs:flex-row gap-2 flex-col text-sm">

            <a 
            className="group bg-white px-7 py-3 text-gray-700 flex items-center gap-2 rounded-full  outline-none focus:scale-110 hover:scale-110 active:scale-105 hover:text-gray-950 transition cursor-pointer dark:border-red-800 dark:border-4 dark:bg-red-800 dark:text-gray-300 " 
            href="/timothy-wiliusa.pdf">
                Download CV 
                <HiDownload />
            </a>

            <Link
            href='#contact'
            className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition dark:bg-zinc-950 dark:text-red-600  dark:border-4 dark:border-zinc-950 "
            onClick={() => {
                setActiveSection("Contact");
                setTimeOfLastClick(Date.now());
            }}>
                Contact me 
                <BsArrowRight className="opacity-70 group-hover:translate-x-2 transition "/>
            </Link>

            </div>
            
            <div className="flex flex-row gap-2">
                <a 
                    className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-gray-900 dark:bg-zinc-950 dark:text-red-600" 
                    href="https://www.linkedin.com/in/timothy-wiliusa-13317418b/"
                    target="_blank"
                >
                    <BsLinkedin />
                </a>
                <a 
                    className="bg-white  p-4 text-gray-700 flex items-center gap-2 text-[1.25rem] rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-zinc-950 dark:text-red-600" 
                    href="https://github.com/timothywiliusa"
                    target="_blank"
                >
                    <FaGithubSquare />
                </a>

            </div>
          
           
        </motion.div>


    </section>
  );
}
