"use client";
import { LordIcon } from "@/lib/lord-icon";
import { useTheme } from "@/context/theme-context";
import React from "react";

export default function AnimatedFork() {
  const { theme, toggleTheme } = useTheme();

  if (theme === "light") {
    return (
      <LordIcon
        src="https://cdn.lordicon.com/gefbyrmg.json"
        trigger="hover"
        delay={2000}
        colors={{ primary: "#455a64", secondary: "#455a64" }}
        size={35}
        target=".gitHover"
      />
    );
  } else {
    return (
      <LordIcon
        src="https://cdn.lordicon.com/gefbyrmg.json"
        trigger="hover"
        delay={2000}
        colors={{ primary: "#ffffff", secondary: "#ffffff" }}
        size={35}
        target=".gitHover"
      />
    );
  }
}
