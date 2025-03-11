"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { profileImages } from "@/lib/data";
// lazy loading
import dynamic from "next/dynamic";
const AnimatedEmail = dynamic(() => import("./lordicon/animated-icon-email"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});
const AnimatedCall = dynamic(() => import("./lordicon/animated-icon-call"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

export default function Intro() {
  const { ref } = useSectionInView("Resume", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAlternateBorder, setIsAlternateBorder] = useState(false);
  const [animationCount, setAnimationCount] = useState(0);

  useEffect(() => {
    if (animationCount >= 1) return; // Stop after 3 animations

    const flickerSequence = () => {
      // Initial state change
      setIsAlternateBorder((prev) => !prev);

      // Flicker effect over 1 second
      let flickerCount = 0;
      const flickerInterval = setInterval(() => {
        if (flickerCount < 6) {
          // 5 flickers over 1 second
          setIsAlternateBorder((prev) => !prev);
          flickerCount++;
        } else {
          clearInterval(flickerInterval);
          setAnimationCount((prev) => prev + 1); // Increment animation count
        }
      }, 40); // 200ms between each flicker
    };

    // Main interval for the 3-second cycle
    const interval = setInterval(flickerSequence, 4200);

    return () => {
      clearInterval(interval);
    };
  }, [animationCount]); // Add animationCount as dependency

  return (
    <section
      ref={ref}
      id="resume"
      className="
        pt-36 xs:pt-40 sm:pt-46 lg:pt-52
        w-full max-w-[1100px] 
        
        scroll-mt-[100rem] 
        bg-none 
        
        dark:text-zinc-400 "
    >
      <div className="flex items-end bg-none w-full">
        <div className="inline relative bg-none">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer relative"
            onClick={() => {
              setCurrentImageIndex((prev) => (prev + 1) % profileImages.length);
              console.log(currentImageIndex);
            }}
          >
            <motion.div
              className="block min-h-[100px] min-w-[100px] inset-0 bg-white/20 dark:bg-black/20 rounded-full"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            {profileImages.map((image, index) => {
              return (
                <div key={index}>
                  <Image
                    src={image}
                    alt="Tim"
                    width="192"
                    height="192"
                    quality="95"
                    priority={true}
                    className={`
                      absolute top-0 left-0 
                      bg-transparent h-[100px] min-w-[100px] 
                      rounded-full object-cover 
                      border-[0.35rem] 
                      ${
                        isAlternateBorder
                          ? "border-black dark:border-[#ff0040]"
                          : "border-red-800"
                      }
                      shadow-xl
                      transition-none
                      ${
                        index === currentImageIndex
                          ? "opacity-100"
                          : "opacity-0"
                      }
                    `}
                  />
                </div>
              );
            })}
          </motion.div>
        </div>

        <div className="pl-2 fira-code-regular text-sm text-[#ff0040] mb-4">
          Hi, my name is
        </div>
      </div>

      <motion.div
        className="
        !leading-[1.5] bg-transparent -z-10 
        text-3xl xs:text-5xl lg:text-6xl 
        md:mb-10 "
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span
          className="
             font-bold 
            dark:text-gray-200"
        >
          <h1 className="inline">Timothy Wiliusa</h1>.
        </span>
        <br />
        <span className="text-gray-600 dark:text-gray-400 font-bold">
          I build things for the web.
        </span>
      </motion.div>

      <motion.h2
        className="
        mb-8 !leading-[1.5]  bg-transparent -z-10
        
        md:mb-10"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="max-w-[410px] md:max-w-[550px]">
          I specialize in building (and occasionally designing) full stack web
          applications, with 5 years of experience in React, Next, Node.js, and
          SQL. Currently I'm focused on building accessible, human-centered
          products at{" "}
          <Link
            href="https://quantum-vox.com"
            target="_blank"
            className="text-[#ff5555] dark:text-white dark:hover:text-[#ff5555] hover:text-[#ff5555] hover:underline"
          >
            Quantum Vox
          </Link>
          .
        </div>
      </motion.h2>

      <motion.div
        className="
        flex flex-col gap-2 
        items-center xs:items-start 
        text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <div className="flex gap-2 flex-row justify-start items-start">
          <a
            className="borderBlack min-w-[170px] group bg-white h-12 w-36 justify-center text-gray-700 flex items-center gap-2 rounded-full  outline-none focus:scale-110 hover:scale-110 active:scale-105 hover:text-gray-950 transition cursor-pointer dark:border-red-600 dark:border-4 dark:bg-red-600 dark:text-gray-300 text-sm dark:hover:text-white dark:hover:bg-[#ff0040] dark:hover:border-[#ff0040]"
            href="https://9upxg1g8p4.ufs.sh/f/9pigm30TxnkIXiShHPjj9XkGJcDOFQ186dahuNfWKwebtSAi"
            target="_blank"
          >
            Resume.pdf
            <HiDownload className=" group-hover:translate-y-1 transition text-white" />
          </a>

          <div className="flex flex-row gap-2 w-full justify-center">
            <a
              className="linkedinHover bg-white w-12 h-12 justify-center text-gray-700 flex items-center rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-zinc-950 dark:text-red-600 dark:hover:text-white"
              href="https://www.linkedin.com/in/timothy-wiliusa/"
              target="_blank"
            >
              <BsLinkedin />
            </a>
            <a
              className="gitHover bg-white text-gray-700 w-12 h-12 justify-center flex items-center text-[1.25rem] rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-zinc-950 dark:text-red-600 dark:hover:text-white"
              href="https://github.com/timothywiliusa"
              target="_blank"
            >
              <FaGithubSquare />
            </a>
          </div>
        </div>

        <div
          className="
            flex gap-2 justify-center
            flex-row w-fit
            "
        >
          <div className="flex flex-row gap-2 w-full justify-center">
            <a
              className="emailHover bg-white w-12 h-12 justify-center text-gray-700 flex items-center rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-zinc-950 dark:text-red-600"
              href="mailto:work@timothywiliusa.com"
            >
              <AnimatedEmail />
            </a>
            <a
              className="callHover bg-white w-12 h-12 justify-center text-gray-700 flex items-center rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-zinc-950 dark:text-red-600"
              href="tel:+1-541-248-4595"
            >
              <AnimatedCall />
            </a>
          </div>

          <Link
            href="#contact"
            className="min-w-[170px] group bg-gray-900 text-white justify-center h-12 w-36 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition dark:bg-zinc-950 dark:text-red-600  dark:border-4 dark:border-zinc-950 text-sm dark:hover:text-white"
            onClick={() => {
              setActiveSection("Contact");
              setTimeOfLastClick(Date.now());
            }}
          >
            Contact me
            <BsArrowRight className="opacity-70 group-hover:translate-x-2 transition  " />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
