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

    const {ref} = useSectionInView("Home", 0.5);
    const {setActiveSection, setTimeOfLastClick} = useActiveSectionContext();


    // console.log("printing key")
    // console.log(process.env.NEXT_PUBLIC_API_KEY)

  return (              
    <section 
        ref={ref}
        id="home" 
        className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]'
    >
        <div className='flex items-center justify-center'>
            <div className="relative">
                <motion.div
                    initial={{opacity: 0, scale: 0}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{
                        type: "tween",
                        duration: 0.2,
                    }}
                    // animate to surface from behind 
                >
                    <Image 
                    src="https://github.com/timothywiliusa/digital-resume/blob/master/src/shared/facebookpfp.png?raw=true" 
                    alt="Tim" 
                    width="192" 
                    height="192" 
                    quality="95" 
                    priority={true}
                    className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl dark:border-amber-800"
                    />

                </motion.div>
                
                <motion.span 
                    className="absolute bottom-0 right-0 text-4xl"
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
        </div>

        <motion.h1 className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl dark:text-gray-200"
        initial={{opacity: 0, y: 100}}
        animate={{opacity: 1, y: 0}}
        // animate to appear from bellow 
    
        >
           <span className="font-bold">Hello, I am Tim.</span> I'm a <span className="italic">full-stack developer</span> who recently <span className="font-bold">graduated from Oregon State University</span> as a <span className="italic">Bachelor of Computer Science</span> with a focus in <span className="underline">WebDev and Human-Computer Interactions</span>
        </motion.h1>

        <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{opacity: 0, y: 100}}
        animate={{opacity: 1, y: 0}}
        transition={{
            delay: 0.1,
        }}
        >
            <Link
            href='#contact'
            className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition dark:bg-zinc-950 dark:text-red-600"
            onClick={() => {
                setActiveSection("Contact");
                setTimeOfLastClick(Date.now());
            }}>
                Contact me 
                <BsArrowRight className="opacity-70 group-hover:translate-x-2 transition "/>
            </Link>
            <a 
            className="group bg-white px-7 py-3 text-gray-700 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 hover:text-gray-950 transition cursor-pointer borderBlack dark:bg-red-800 dark:text-gray-300" 
            href="/timothy-wiliusa.pdf">
                Download CV 
                <HiDownload />
            </a>
            <a 
            className="bg-white  p-4 text-gray-700 flex items-center gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-gray-900 text-white dark:bg-zinc-950 dark:text-red-600" 
            href="https://www.linkedin.com/in/timothy-wiliusa-13317418b/"
            target="_blank">
                <BsLinkedin />
            </a>
            <a className="bg-white  p-4 text-gray-700 flex items-center gap-2 text-[1.25rem] rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-zinc-950 dark:text-red-600" 
            href="https://github.com/timothywiliusa"
            target="_blank">
                <FaGithubSquare />
            </a>
        </motion.div>


    </section>
  );
}
