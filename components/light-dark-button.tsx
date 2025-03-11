"use client";

import { useTheme } from "@/context/theme-context";
import React from "react";

import dynamic from "next/dynamic";
const AnimatedLamp = dynamic(() => import("./lordicon/animated-icon-lamp"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});
const AnimatedBat = dynamic(() => import("./lordicon/animated-icon-bat"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

export default function LightDarkButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="fixed bottom-5 right-5 text-white bg-slate-800 w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:text-yellow-200 dark:bg-red-800 dark:hover:bg-[#ff0040]  dark:bg-opacity-50 dark:hover:text-yellow-100"
      onClick={toggleTheme}
    >
      {theme === "light" ? <AnimatedBat /> : <AnimatedLamp />}
    </button>
  );
}
