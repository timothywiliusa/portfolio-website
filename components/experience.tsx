"use client";

import React from "react";
import SectionHeading from "./section-header";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import { LuGraduationCap } from "react-icons/lu";

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.1);
  const { theme } = useTheme();

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>Timeline</SectionHeading>
      <VerticalTimeline lineColor={theme === "light" ? "#f3f4f6" : "#f9fafb"}>
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 1)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={item.date}
              dateClassName="text-white"
              icon={item.icon}
              iconStyle={{
                background: theme === "light" ? "white" : "#09090b",
                fontSize: "1.5rem",
                color: theme === "dark" ? "#ff0040" : "",
              }}
            >
              <h3 className="fira-code-regular text-[#ff0040] text-lg ">
                {item.title}
              </h3>
              <p className="font-normal text-xs !mt-0 pb-3">
                {item.employer} in {item.location}
              </p>
              <p className="!mt-1 !font-normal pb-5 text-gray-700 dark:text-white/75">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
