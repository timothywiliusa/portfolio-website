import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { BsHddNetwork } from "react-icons/bs";
import inclusivemag from "@/public/inclusivemag.png"
import linearhashing from "@/public/linearhashing.png";
import personalportfolio from "@/public/personalportfolio.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  
  {
    title: "IT Intern",
    location: "Philadelphia, PA",
    description:
      "I provided IT support for the company, and managed a team tasked with the migration of paper records to a digital system.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2021",
  },
  {
    title: "Junior Developer",
    location: "Semarang, Indonesia",
    description:
      "Designed and built worker tools using C++ & Visual Studio, also improved UI of existing tools",
    icon: React.createElement(FaReact),
    date: "2021 - 2022",
  },
  {
    title: "Network Analyst",
    location: "Corvallis, OR",
    description:
      "Set up and managed back-end VoIP and SIP networking. Also provided email based support using the OSU ticketing system",
    icon: React.createElement(BsHddNetwork),
    date: "2022 - present",
  },
  {
    title: "Graduated  as a Bachelors of Computer Science from OSU",
    location: "Corvallis, OR",
    description:
      "CS Major with a focus in Web Development, Cloud Development & Human-Computer Interactions",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
] as const;

export const projectsData = [
  {
    title: "Linear Hashing using an encripted external storage",
    description:
      "This program takes accepts an xml or csv file and stores its values into a relational database that is writen in binary.",
    tags: ["C", "C++", "memory management","encrypt/decrypt", "binary I/O"],
    imageUrl: linearhashing,
  },
  {
    title: "GenderMag",
    description:
      "I worked as a student associate in a startup project for a year. We used the GenderMag research and integrated inslusivemag examinations into our scrum.",
    tags: ["Figma", "Inclusivemag", "Scrum", "Agile", "Tailwind"],
    imageUrl: inclusivemag,
  },
  {
    title: "Personal Portfolio",
    description:
      "A public web app for quick overview of what I do. It features smooth scrolling, cross-platform usability, and 100% TypeScript!",
    tags: ["React", "Next.js", "TypeScript", "Tailwind", "Framer", "Vercel"],
    imageUrl: personalportfolio,
  },
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