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

export default function Demo() {
  const { ref } = useSectionInView("Resume", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAlternateBorder, setIsAlternateBorder] = useState(false);
  const [animationCount, setAnimationCount] = useState(0);

  useEffect(() => {
    if (animationCount >= 1) return; // Stop after 1 animation

    const flickerSequence = () => {
      // Initial state change with easing

      setIsAlternateBorder((prev) => !prev);

      // Flicker effect with easing
      let flickerCount = 0;
      const totalFlickers = 24;
      const flickerInterval = setInterval(() => {
        if (flickerCount < totalFlickers) {
          setIsAlternateBorder((prev) => !prev);
          flickerCount++;
        } else {
          clearInterval(flickerInterval);
          setAnimationCount((prev) => prev + 1);
        }
      }, (40 + Math.sin((flickerCount / totalFlickers) * Math.PI) * 20) / 3);

      // Wait 3 seconds then do it again with 25 flickers before waiting for another 2 seconds then do it again with 25 flickers
      setTimeout(() => {
        let flickerCount = 0;
        const totalFlickers = 50; // 25 flickers before waiting for another second then 25 flickers
        const flickerInterval = setInterval(() => {
          if (flickerCount < totalFlickers) {
            if (flickerCount === 25) {
              // Pause for 2 second after 25 flickers
              clearInterval(flickerInterval);
              setTimeout(() => {
                setIsAlternateBorder((prev) => !prev);
                flickerCount++;
                // Resume flickering after pause
                const resumeInterval = setInterval(() => {
                  if (flickerCount < totalFlickers) {
                    setIsAlternateBorder((prev) => !prev);
                    flickerCount++;
                  } else {
                    clearInterval(resumeInterval);
                    setAnimationCount((prev) => prev + 1);
                  }
                }, (40 + Math.sin((flickerCount / totalFlickers) * Math.PI) * 20) / 3);
              }, 2000); // 2 seconds between each cycle
            } else {
              setIsAlternateBorder((prev) => !prev);
              flickerCount++;
            }
          } else {
            clearInterval(flickerInterval);
            setAnimationCount((prev) => prev + 1);
          }
        }, (40 + Math.sin((flickerCount / totalFlickers) * Math.PI) * 20) / 3);
      }, 3000); // 3 seconds between each cycle
    };

    // this animation only runs one time

    // Main interval for the animation cycle
    const interval = setInterval(flickerSequence, 2200);
    // const interval = setInterval(flickerSequence, 4000);

    return () => {
      clearInterval(interval);
    };
  }, [animationCount]);

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
          microservices architecture. Currently I'm focused on building
          accessible, human-centered products at{" "}
          <Link
            href="https://quantum-vox.com"
            target="_blank"
            className="text-[#ff5555] dark:text-white dark:hover:text-[#ff5555] hover:text-[#ff5555] hover:underline"
          >
            Quantum Vox
          </Link>
        </div>
      </motion.h2>
    </section>
  );
}
