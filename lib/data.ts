import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact , FaLaptop, FaStackOverflow, FaDocker, FaGithub, FaGitSquare} from "react-icons/fa";
import { MdOutlineBusinessCenter} from "react-icons/md";
import { LuGraduationCap } from "react-icons/lu";
import { BsHddNetwork } from "react-icons/bs";
import { LiaFigma } from "react-icons/lia";
import { BiLogoTypescript, BiLogoRedux, BiLogoPostgresql, BiChip } from "react-icons/bi";
import { GiRotaryPhone } from "react-icons/gi";
import { TbBrandNextjs, TbBrandVercel } from "react-icons/tb";
import { SiTailwindcss, SiMongodb, SiExpress, SiGraphql, SiFirebase, SiApollographql, SiPowerbi, SiPowershell, SiWarp} from "react-icons/si";
import { RxFramerLogo } from "react-icons/rx";
import { VscVscode } from "react-icons/vsc";

import dbrepl from "@/public/dockermongo.png"
import linearhashing from "@/public/linearhashing.png";
import quantumvox from "@/public/quantum-vox.png";
import calvin from "@/public/project-calvin.png";''


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
      "Full stack developer - Cloud API developer - Mobile application developer - React developer - Angular developer ",
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
      "Quantum Vox is a digital marketing agency based in Portland, Oregon, where I managed a collaboration of designers and other developers to ensure thoughtful and consistent user experience for their clients.",
    icon: React.createElement(FaStackOverflow),
    date: "2024 - active",
  },
  {
    title: "Network Analyst",
    employer: "Oregon State University",
    location: "Corvallis, OR",
    description:
      "This was my campus job. I provided phone and email based support using the OSU ticketing system and was responsible to set up and manage back-end VoIP and SIP networking.",
    icon: React.createElement(BsHddNetwork),
    date: "2022 - 2024",
  },
  {
    title: "Junior Developer",
    employer: "PT Trisakti",
    location: "Semarang, Indonesia",
    description:
      "In this 6 month internship I designed and built worker tools using C++ & Visual Studio. The tool allows workers to easily create binary files. I also improved UI of other existing tools",
    icon: React.createElement(FaLaptop),
    date: "2021 - 2022",
  },
  {
    title: "IT Intern",
    employer: "Golden Eagle Inc.",
    location: "Philadelphia, PA",
    description:
      "A 9 month internship where I provided IT support for the company and managed a team tasked with the migration of paper records to a digital system.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2021",
  },
  {
    title: "Intern React Developer",
    employer: "HazAdapt, Inc.",
    location: "Corvallis, OR",
    description:
      "This start-up was my first introduction to React. They had a Wix site and wanted to create their own scalable site and hired student interns looking to learn web development.",
    icon: React.createElement(FaReact),
    date: "2019",
  },
] as const;

export const projectsData = [

  {
    title: "Full Stack Development",
    description:
      "I design and host websites based on each client's wants and needs. With features such as a customer relationship management (CRM) and content management system (CMS).",
    tags: [  "Framer", "3D animations","Paralax Scrolling","Cal.com"],
    imageUrl: quantumvox,
    href: "https://quantum-vox.com"
  },
  {
    title: "Cloud API",
    description:
      "\"Yelpy\" is a fully automated and encrypted cloud development application that initiates a yelp-like API and database from your local machine. Tested with Postman API.",
    tags: ["Node.js", "MongoDB", "Docker", "Redis", "bcrypt.js"],
    imageUrl: dbrepl,
    href: "https://github.com/timothywiliusa/mongodb-replication"
  },
  {
    title: "Linear Hashing",
    description:
       "\"Hashy\" is a C++ program that I created for my Database Management class. It uses linear hashing to create memory buckets and order them to minimize the load time of data searching.",
    tags: ["C", "C++", "memory management","encrypt/decrypt", "binary I/O"],
    imageUrl: linearhashing,
    href: "https://github.com/timothywiliusa/DBMS-external-sorting"
  },
  {
    title: "Microservice Architechture",
    description:
      "I designed and built a web-application for a church. This project implements Next Auth Beta using PostgreSql and Prisma, and audio files are stored using Firebase storage.",
    tags: [  "Next.Js", "Next/Auth","Firebase","Lazy Loading"],
    imageUrl: calvin,
    href: "https://calvin-presbyterian.vercel.app/"
  },

 
] as const;





export const stackData = [
  {
    title: "Next.js",
    icon: React.createElement(TbBrandNextjs),
    href: "https://nextjs.org"
  },
  {
    title: "TypeScript",
    icon: React.createElement(BiLogoTypescript),
    href: "https://www.typescriptlang.org"
  },
  {
    title: "React",
    icon: React.createElement(FaReact),
    href: "https://react.dev"
  },
  {
    title: "Vercel",
    icon: React.createElement(TbBrandVercel),
    href: "https://vercel.com/"
  },
  {
    title: "MongoDB",
    icon: React.createElement(SiMongodb),
    href: "https://www.mongodb.com"
  },
  {
    title: "Docker",
    icon: React.createElement(FaDocker),
    href: "https://www.docker.com"
  }
] as const;

export const techData = [
  {
    title: "Git",
    icon: React.createElement(FaGitSquare),
    href: "https://git-scm.com"
  },
  {
    title: "Github",
    icon: React.createElement(FaGithub),
    href: "https://github.com/timothywiliusa"
  },
  {
    title: "Tailwind",
    icon: React.createElement(SiTailwindcss),
    href: "https://tailwindcss.com"
  },
  {
    title: "Figma",
    icon: React.createElement(LiaFigma),
    href: "https://www.figma.com/"
  },
  {
    title: "Framer",
    icon: React.createElement(RxFramerLogo),
    href: "https://framer.com/"
  },
  {
    title: "Redux",
    icon: React.createElement(BiLogoRedux),
    href: "https://redux.js.org"
  },
  {
    title: "Express",
    icon: React.createElement(SiExpress),
    href: "https://expressjs.com"
  },
  {
    title: "PostgreSQL",
    icon: React.createElement(BiLogoPostgresql),
    href: "https://www.postgresql.org"
  },
  {
    title: "Firebase",
    icon: React.createElement(SiFirebase),
    href: "https://firebase.google.com"
  },
  {
    title: "GraphQL",
    icon: React.createElement(SiGraphql),
    href: "https://graphql.org"
  },
  {
    title: "Apollo",
    icon: React.createElement(SiApollographql),
    href: "https://www.apollographql.com/why-graphql"
  },
  {
    title: "PowerBI",
    icon: React.createElement(SiPowerbi),
    href: "https://www.microsoft.com/en-us/power-platform/products/power-bi"
  },
  {
    title: "Avaya",
    icon: React.createElement(GiRotaryPhone),
    href: "https://www.avaya.com/en/"
  },
  {
    title: "MIFARE",
    icon: React.createElement(BiChip),
    href: "https://www.mifare.net"
  },
  {
    title: "VS Code",
    icon: React.createElement(VscVscode),
    href: "https://code.visualstudio.com"
  },
  {
    title: "SSH",
    icon: React.createElement(SiPowershell),
    href: "https://www.openssh.com"
  },
  {
    title: "Warp",
    icon: React.createElement(SiWarp),
    href: "https://www.warp.dev"
  },
] as const;