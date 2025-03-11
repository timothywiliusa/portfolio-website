"use client";
import { LordIcon } from "@/lib/lord-icon";
import { useTheme } from "@/context/theme-context";
import React from "react";

export default function AnimatedFork() {
  const { theme, toggleTheme } = useTheme();

  if (theme === "light") {
    return (
      <LordIcon
        src="https://cdn.lordicon.com/zywwafpn.json"
        trigger="hover"
        delay={2000}
        colors={{ primary: "#455a64", secondary: "#455a64" }}
        size={40}
        target=".gitHover"
      />
    );
  } else {
    return (
      <LordIcon
        src="https://cdn.lordicon.com/zywwafpn.json"
        trigger="hover"
        delay={2000}
        colors={{ primary: "#ffffff", secondary: "#ffffff" }}
        size={40}
        target=".gitHover"
      />
    );
  }
}
