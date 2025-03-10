"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-header";
import { useSectionInView } from "@/lib/hooks";
import Link from "next/link";
import Image from "next/image";

export default function About() {
  const { ref } = useSectionInView("About", 0.5);

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[53rem] leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>My Story</SectionHeading>
      <div className="flex flex-col-reverse lg:flex-row gap-8 ">
        <div className="flex flex-col gap-4 text-base">
          <p className="">
            Back in 2019, I decided to try my hand at creating a React site for
            a{" "}
            <Link
              href="https://www.hazadapt.com"
              target="_blank"
              className="inlineLink"
            >
              start-up
            </Link>{" "}
            with a couple of college friends and tumbled head first into the
            rabbit hole of coding and web development. Fast-forward to today,
            and I’ve had the privilege of building software for a{" "}
            <Link
              href="https://calvin-church.org"
              target="_blank"
              className="inlineLink"
            >
              church
            </Link>
            , an{" "}
            <Link
              href="https://goldeneaglestaffingservices.com"
              target="_blank"
              className="inlineLink"
            >
              outsourcing company
            </Link>
            , a{" "}
            <Link
              href="https://trisakti.co.id"
              target="_blank"
              className="inlineLink"
            >
              huge corporation
            </Link>
            , and a{" "}
            <Link
              href="https://quantum-vox.com"
              target="_blank"
              className="inlineLink"
            >
              digital marketing agency
            </Link>
            .
          </p>
          <p className="">
            As a software engineer, I enjoy bridging the gap between engineering
            and design — combining my technical knowledge with my keen eye for
            design to create a beautiful product. My goal is to always build
            applications that are scalable and efficient under the hood while
            providing engaging, pixel-perfect user experiences.
            {/* In my free time, I've also released an online video course that covers everything you need to know to build a web app with the Spotify API. */}
          </p>
          <p className="">
            At the end of the day, my primary goal is to create something
            beautiful with people that bring out the best in me. When I'm not in
            front of a computer screen, I'm at the beach surfing, traveling,
            petting dogs, learning a new song on my piano, or simply making
            moves at your local chess tournament.
          </p>
        </div>

        <Image
          src="https://utfs.io/a/9upxg1g8p4/9pigm30TxnkIqnV3F5IIk0gxwCfvrlJiYNSp6quLdDeaF51K"
          alt="Tim"
          width="1000"
          height="1000"
          quality="95"
          priority={true}
          className="bg-transparent h-[420px] w-[350px] rounded-2xl object-cover shadow-2xl hidden lg:block"
        />

        <div className="grid items-center justify-center">
          <Image
            src="https://utfs.io/a/9upxg1g8p4/9pigm30TxnkIxyyQWh5tjZ1hk6EKMJYlriD7wN8ebx2Aqgno"
            alt="Tim"
            width="500"
            height="500"
            quality="100"
            priority={true}
            className="bg-transparent w-full rounded-2xl object-cover shadow-2xl lg:hidden"
          />
        </div>
      </div>

      {/* add photo here  */}

      {/* resume
          As an english speaker coming to the US, I was feeling very confident in my ability to speak English, but upon arrival, I was rather surprised as many American spoke English rapidly and mumbled. <span className='font-medium'>It wasn't long before I got my grip on certain points of emphasis of certain words and I could start to understand what people were saying. </span>Today, I don't have the need to even translate anymore as I already think in english. For me <span className='italic'>the same goes with computer science and coding. </span> <span className='font-medium'>One can only understand and grasp the ideas and concepts from exposure and presistence.</span>  */}

      {/* <br />
        <p>
          I built my first web application 4 years ago, and since then I've been learning and implementing projects using popular front-end libraries like <span className='underline'>FramerMotion</span> and <span className='underline'>VerticalTimeline</span>. My favorite part of programming is the problem-solving aspect. I <span className='italic'>absolutely love the feeling</span>  of <span className='font-medium'>finally figuring out a solution to a problem</span>. My core stack is <span className='underline'>React, Next.js, Node.js, and Firebase</span>. I am also familiar with <span className='underline'>TypeScript and Figma</span>. I am always looking to learn new technologies. I am currently looking for a full-time position as a software developer.
        </p>
        <br />
        <p>
          <span className="italic">When I'm not coding</span>, you'll find me playing chess, pingpong, and sometimes you'll see me boxing at the gym. I also enjoy <span className="font-medium">learning and exploring new things</span>. I am currently learning about <span className="font-medium">mindful focused meditation</span>. I'm also learning to play the piano!
        </p> */}
    </motion.section>
  );
}
