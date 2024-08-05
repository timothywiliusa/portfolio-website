"use client"

import React, { useRef } from 'react';
import SectionHeading from './section-header';
import { projectsData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import Image from "next/image";
import { motion, useScroll, useTransform } from 'framer-motion';
import Project from './project';

export default function Projects() {

  const {ref} = useSectionInView("Projects", 0.5);
  
  return (
    <section 
      ref={ref}
      id="projects" 
      className='scroll-mt-28 mb-28'
    >
      <SectionHeading number='01.'>My Latest Projects</SectionHeading>
      <div>
        {
          projectsData.map((project, index) => (
            <React.Fragment key={index}>
              <Project {...project} />
            </React.Fragment>
          ))
        }
      </div>
    </section>
    
  );
}