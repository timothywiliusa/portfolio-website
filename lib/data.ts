import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact , FaLaptop, FaStackOverflow} from "react-icons/fa";
import { MdOutlineBusinessCenter, MdOutlineWorkspaces} from "react-icons/md";
import { LuGraduationCap } from "react-icons/lu";
import { BsHddNetwork } from "react-icons/bs";
import { PiStackOverflowLogoBold } from "react-icons/pi";

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
    title: "Looking for a full time position",
    employer: "Located",
    location: "USA",
    description:
      "CS Major with a focus in Web Development, Cloud Development & Human-Computer Interactions",
    icon: React.createElement(MdOutlineBusinessCenter),
    date: "Desired start date: October 7, 2024",
  },
  {
    title: "Bachelor of Computer Science",
    employer: "Oregon State University",
    location: "Corvallis, OR",
    description:
      "CS Major with a focus in Web Development, Cloud Development, and Human-Computer Interactions.",
    icon: React.createElement(LuGraduationCap),
    date: "Spring 2024",
  },
  {
    title: "Full Stack Developer",
    employer: "Quantum Vox",
    location: "Portland, OR",
    description:
      "Designed and Deployed custom full stack applications.",
    icon: React.createElement(FaStackOverflow),
    date: "2024 - active",
  },
  {
    title: "Network Analyst",
    employer: "Oregon State University",
    location: "Corvallis, OR",
    description:
      "Provided email based support using the OSU ticketing system. Responsible to set up and managed back-end VoIP and SIP networking.",
    icon: React.createElement(BsHddNetwork),
    date: "2022 - 2024",
  },
  {
    title: "Junior Developer",
    employer: "PT Trisakti Mustika Graphika",
    location: "Semarang, Indonesia",
    description:
      "A 6 month internship where I designed and built aworker tool using C++ & Visual Studio. The tool allows workers to easily create binary files. I also improved UI of other existing tools",
    icon: React.createElement(FaLaptop),
    date: "2021 - 2022",
  },
  {
    title: "IT Intern",
    employer: "Golden Eagle Inc.",
    location: "Philadelphia, PA",
    description:
      "I provided IT support for the company, and managed a team tasked with the migration of paper records to a digital system.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2021",
  },
  {
    title: "React Developer",
    employer: "HazAdapt, Inc.",
    location: "Corvallis, OR",
    description:
      "I provided IT support for the company, and managed a team tasked with the migration of paper records to a digital system.",
    icon: React.createElement(FaReact),
    date: "2020 - 2021",
  },
  
 
  
] as const;

export const projectsData = [

  {
    title: "Full Stack Development",
    description:
      "I design and host websites based on each client's wants and needs. With features such as a customer relationship management (CRM) and content management system (CMS).",
    tags: [  "Framer", "3D animations","Paralax Scrolling","Cal.com"],
    imageUrl: quantumvox,
    href: ""
  },
  {
    title: "Database Replication & Containerization",
    description:
      "\"Yelpy\" is a fully automated and encrypted cloud development application that initiates a yelp-like API and database from your local machine. Tested with Postman API Platform.",
    tags: ["Node.js", "MongoDB", "Docker", "Redis", "bcrypt.js"],
    imageUrl: dbrepl,
    href: ""
  },
  {
    title: "Linear Hashing",
    description:
      "This program takes an xml or csv file and stores its data in a relational data file writen in binary.",
    tags: ["C", "C++", "memory management","encrypt/decrypt", "binary I/O"],
    imageUrl: linearhashing,
    href: ""
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