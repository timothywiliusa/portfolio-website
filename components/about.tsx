"use client";

import React from 'react';
import {motion} from 'framer-motion';
import SectionHeading from './section-header';
import { useSectionInView } from '@/lib/hooks';


export default function About() {

  const {ref} = useSectionInView("About");
  
  return (              
    <motion.section 
        ref={ref}
        className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
        id="about"
    >
        <SectionHeading>About me</SectionHeading>
        <p className="mb-3">
          As an english speaker to coming to the US, I was feeling very confident in my ability to speak English, but upon arrival, I was rather surprised as many American spoke English rapidly and mumbled. <span className='font-medium'>It wasn't long before I got my grip on certain points of emphasis of certain words and I could start to understand what people were saying. </span>Today, I don't have the need to even translate anymore as I already think in english. For me <span className='italic'>the same goes with computer science and coding. </span> <span className='font-medium'>One can only understand and grasp the ideas and concepts from exposure and presistence.</span> 
        </p>
        <br />
        <p>
          I built my first web application 4 years ago, and since then I've been learning and implementing projects using popular front-end libraries like <span className='underline'>FramerMotion</span> and <span className='underline'>VerticalTimeline</span>. My favorite part of programming is the problem-solving aspect. I <span className='italic'>absolutely love the feeling</span>  of <span className='font-medium'>finally figuring out a solution to a problem</span>. My core stack is <span className='underline'>React, Next.js, Node.js, and Firebase</span>. I am also familiar with <span className='underline'>TypeScript and Figma</span>. I am always looking to learn new technologies. I am currently looking for a full-time position as a software developer.
        </p>
        <br />
        <p>
          <span className="italic">When I'm not coding</span>, you'll find me playing chess, pingpong, and sometimes you'll see me boxing at the gym. I also enjoy <span className="font-medium">learning and exploring new things</span>. I am currently learning about <span className="font-medium">mindful focused meditation</span>. I'm also learning to play the piano!
        </p>
       
    </motion.section>
    
  );
}
