"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { BiSolidPhoneCall } from "react-icons/bi";
import { TfiEmail } from "react-icons/tfi";
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

// const AnimatedLinkedIn = dynamic(
//   () => import("./lordicon/animated-icon-linkedin"),
//   {
//     loading: () => <p>Loading...</p>,
//     ssr: false,
//   }
// );

// const AnimatedFork = dynamic(() => import("./lordicon/animated-icon-fork"), {
//   loading: () => <p>Loading...</p>,
//   ssr: false,
// });

export default function Intro() {
  const { ref } = useSectionInView("Resume", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const [currentImage, setCurrentImage] = useState(
    "https://utfs.io/a/9upxg1g8p4/9pigm30TxnkIU019bDxyuPjTikwFVz7msMQptAfdqrJX6n9c"
  );
  // console.log("printing key")
  // console.log(process.env.NEXT_PUBLIC_API_KEY)

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
      {/* <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-orange-900"></div>

        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-red-900"></div> */}
      <div className="flex items-end bg-none w-full">
        <div className="inline relative bg-none">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer relative"
            onClick={() => {
              const currentIndex = profileImages.indexOf(currentImage);
              const nextIndex = (currentIndex + 1) % profileImages.length;
              setCurrentImage(profileImages[nextIndex]);
            }}
          >
            <motion.div
              className="absolute inset-0 bg-white/20 dark:bg-black/20 rounded-full"
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
            <Image
              src={currentImage}
              alt="Tim"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="bg-transparent h-[100px] w-[100px] rounded-full object-cover border-[0.35rem] border-black shadow-xl dark:border-[#cc4629] transition-all duration-500"
            />
          </motion.div>

          {/* <motion.span
            className=" bg-transparent absolute bottom-[-15px] right-[-25px] text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
              // waving emoji animation
            }}
          >
            👋
          </motion.span> */}
        </div>

        <div className="sm:pl-2 fira-code-regular text-sm text-[#ff5555] mb-4">
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
        // animate to appear from bellow
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
        // animate to appear from bellow
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
            className="borderBlack min-w-[170px] group bg-white h-12 w-36 justify-center text-gray-700 flex items-center gap-2 rounded-full  outline-none focus:scale-110 hover:scale-110 active:scale-105 hover:text-gray-950 transition cursor-pointer dark:border-red-800 dark:border-4 dark:bg-red-800 dark:text-gray-300 text-sm"
            href="/timothy-wiliusa.pdf"
            target="_blank"
          >
            Resume.pdf
            <HiDownload className="opacity-70 group-hover:translate-y-1 transition " />
          </a>

          <div className="flex flex-row gap-2 w-full justify-center">
            <a
              className="linkedinHover bg-white w-12 h-12 justify-center text-gray-700 flex items-center rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-zinc-950 dark:text-red-600"
              href="https://www.linkedin.com/in/timothy-wiliusa/"
              target="_blank"
            >
              <BsLinkedin />
            </a>
            <a
              className="gitHover bg-white text-gray-700 w-12 h-12 justify-center flex items-center text-[1.25rem] rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-zinc-950 dark:text-red-600"
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
            className="min-w-[170px] group bg-gray-900 text-white justify-center h-12 w-36 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition dark:bg-zinc-950 dark:text-red-600  dark:border-4 dark:border-zinc-950 text-sm"
            onClick={() => {
              setActiveSection("Contact");
              setTimeOfLastClick(Date.now());
            }}
          >
            Contact me
            <BsArrowRight className="opacity-70 group-hover:translate-x-2 transition " />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
