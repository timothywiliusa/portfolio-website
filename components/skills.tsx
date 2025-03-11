"use client";
import React from "react";
import { animate, motion } from "framer-motion";
import SectionHeading from "./section-header";
import { stackData, techData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import Link from "next/link";
import { CgCPlusPlus } from "react-icons/cg";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const splitTextVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills", 0.3);

  const skillsText =
    "Agile, Scrum Master, C, C++, Password Encryption, Responsive Design, InclusiveMag, CSS Animations, Box Model, Lazy Loading, DVC Systems, Database Replication, SEO Optimization, CRM Integration, Content Management System (CMS)";
  const words = skillsText.split(", ");

  return (
    <div>
      <section
        ref={ref}
        id="skills"
        className=" mb-10 max-w-[53rem] scroll-mt-28 sm:mb-20"
      >
        <div className="mb-7 grid items-center">
          <div>
            <p className="inline text-2xl font-medium fira-code-regular text-[#ff0040]">
              Skills
            </p>
          </div>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-lg mb-16 flex flex-wrap gap-2"
        >
          {words.map((word, i) => {
            if (word === "Scrum Master") {
              return (
                <motion.div key={i} custom={i} variants={splitTextVariants}>
                  <Link
                    className="inlineLink"
                    href="https://www.scrum.org/resources/what-scrum-module"
                    target="_blank"
                  >
                    {word}
                  </Link>
                  {i < words.length - 1 && ","}
                </motion.div>
              );
            } else if (word === "Password Encryption") {
              return (
                <motion.div key={i} custom={i} variants={splitTextVariants}>
                  <Link
                    className="inlineLink"
                    href="https://www.npmjs.com/package/bcrypt"
                    target="_blank"
                  >
                    {word}
                  </Link>
                  {i < words.length - 1 && ","}
                </motion.div>
              );
            } else if (word === "InclusiveMag") {
              return (
                <motion.div key={i} custom={i} variants={splitTextVariants}>
                  <Link
                    className="inlineLink"
                    href="https://gendermag.org"
                    target="_blank"
                  >
                    {word}
                  </Link>
                  {i < words.length - 1 && ","}
                </motion.div>
              );
            } else if (word === "Database Replication") {
              return (
                <motion.div key={i} custom={i} variants={splitTextVariants}>
                  <Link
                    className="inlineLink"
                    href="https://www.mongodb.com/docs/manual/replication/"
                    target="_blank"
                  >
                    {word}
                  </Link>
                  {i < words.length - 1 && ","}
                </motion.div>
              );
            } else {
              return (
                <motion.div key={i} custom={i} variants={splitTextVariants}>
                  {word}
                  {i < words.length - 1 && ","}
                </motion.div>
              );
            }
          })}
        </motion.div>
        <div className="mb-7 grid  items-center">
          <div>
            <p className="inline text-xl font-medium fira-code-regular text-[#ff0040]">
              Stack
            </p>
          </div>
        </div>
        <ul className="flex flex-wrap  gap-2 text-lg text-gray-800 mb-16">
          {stackData.map((stack, index) => (
            <Link href={stack.href} target="_blank" key={index}>
              <motion.li
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: true,
                }}
                custom={index}
                className="bg-white border borderBlack rounded-md pl-5 pr-6 py-3 text-base dark:bg-white/10 dark:hover:bg-white/20  dark:text-gray-100 flex gap-2 items-center"
              >
                <span className="text-xl">{stack.icon}</span>
                {stack.title}
              </motion.li>
            </Link>
          ))}
        </ul>
        <div className="mb-7 grid  items-center">
          <div>
            <p className="inline text-xl font-medium fira-code-regular text-[#ff0040]">
              Tech
            </p>
          </div>
        </div>
        <ul className="flex flex-wrap gap-2 text-lg text-gray-800">
          {techData.map((tech, index) => (
            <Link href={tech.href} target="_blank" key={index}>
              <motion.li
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: true,
                }}
                custom={index}
                className="bg-white border borderBlack rounded-md pl-5 pr-6 py-3 text-base dark:bg-white/10 dark:hover:bg-white/20 dark:text-gray-100 flex gap-2 items-center"
              >
                <span className="text-xl">{tech.icon}</span>
                {tech.title}
              </motion.li>
            </Link>
          ))}
        </ul>
      </section>
    </div>
  );
}
