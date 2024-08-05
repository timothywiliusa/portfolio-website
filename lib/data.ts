import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { LuGraduationCap } from "react-icons/lu";
import { BsHddNetwork } from "react-icons/bs";
import inclusivemag from "@/public/inclusivemag.png"
import dbrepl from "@/public/dockermongo.png"

import linearhashing from "@/public/linearhashing.png";
import personalportfolio from "@/public/personalportfolio.png";
import quantumvox from "@/public/quantum-vox.png";


export const links = [
  {
    name: "Resume",
    hash: "#resume",
  },

  {
    name: "Projects",
    hash: "#projects",
  },
 
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "React Developer",
    employer: "HazAdapt, Inc.",
    location: "Corvallis, OR",
    description:
      "I provided IT support for the company, and managed a team tasked with the migration of paper records to a digital system.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2021",
  },
  {
    title: "IT Intern",
    employer: "HazAdapt, Inc.",
    location: "Philadelphia, PA",
    description:
      "I provided IT support for the company, and managed a team tasked with the migration of paper records to a digital system.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2021",
  },
  {
    title: "Junior Developer",
    employer: "HazAdapt, Inc.",
    location: "Semarang, Indonesia",
    description:
      "Designed and built worker tools using C++ & Visual Studio, also improved UI of existing tools",
    icon: React.createElement(FaReact),
    date: "2021 - 2022",
  },
  {
    title: "Network Analyst",
    employer: "HazAdapt, Inc.",
    location: "Corvallis, OR",
    description:
      "Set up and managed back-end VoIP and SIP networking. Also provided email based support using the OSU ticketing system",
    icon: React.createElement(BsHddNetwork),
    date: "2022 - present",
  },
  {
    title: "Graduated, Bachelors of Computer Science, Oregon State University",
    employer: "HazAdapt, Inc.",
    location: "Corvallis, OR",
    description:
      "CS Major with a focus in Web Development, Cloud Development & Human-Computer Interactions",
    icon: React.createElement(LuGraduationCap),
    date: "Spring 2024",
  },
  {
    title: "Looking for a full time Position",
    employer: "HazAdapt, Inc.",
    location: "Portland, OR",
    description:
      "CS Major with a focus in Web Development, Cloud Development & Human-Computer Interactions",
    icon: React.createElement(MdOutlineBusinessCenter),
    date: "Desired start date: August 12",
  },
] as const;

export const projectsData = [
  {
    title: "Database Replication",
    description:
      "I worked as a student associate in a startup project for a year. We used the GenderMag research and integrated inslusivemag examinations into our scrum.",
    tags: ["Figma", "Inclusivemag", "Scrum", "Agile", "Tailwind"],
    imageUrl: dbrepl,
    href: "https://gendermag.org"
  },
  {
    title: "Quantum Vox",
    description:
      "This is a CRM-integrated web page with functionalities such as call scheduling, contact me form, and 3D paralax scrolling",
    tags: ["Framer", "Formspark", "Cal.com", "Paralax Scrolling", "3D animation"],
    imageUrl: quantumvox,
    href: "https://sustained-europe-864696.framer.app"
  },
  {
    title: "Linear Hashing",
    description:
      "This program takes an xml or csv file and stores its data in a relational data file writen in binary.",
    tags: ["C", "C++", "memory management","encrypt/decrypt", "binary I/O"],
    imageUrl: linearhashing,
    href: "https://sustained-europe-864696.framer.app"
  },
 
] as const;

export const stackData = [
  "TypeScript",
  "React",
  "Vercel",
  "MongoDB",
  "Docker"
] as const;

export const skillsData = [
  "Responsive Design", 
  "Agile",
  "Scrum Master",
  "InclusiveMag", 
  "Binary Storage", 
  "XML", 
  "Automation", 
  "DVC Systems",
  "Git",
  "ssh",
  "C#",
  "C++",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Docker",
  "Figma",
  "PowerBI",
  "Apollo",
  "Vercel",
  "Express",
  "REST",
  "SQL",
  "NSQL",
  "Framer Motion",
  "Avaya",
  "MIFARE"
] as const;