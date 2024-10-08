"use client";

import { useTheme } from "@/context/theme-context";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function LightDarkButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="fixed bottom-5 right-5 text-white bg-slate-800 w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:text-yellow-200 dark:bg-red-600 dark:hover:bg-red-500 dark:bg-opacity-75 dark:hover:text-yellow-100"
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsMoon /> : <BsSun /> }
    </button>
  );
}