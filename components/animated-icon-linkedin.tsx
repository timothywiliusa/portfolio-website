"use client"
import { LordIcon } from '../lib/lord-icon'
import { useTheme } from "@/context/theme-context";
import React from "react";


export default function AnimatedEmail() {
  const { theme, toggleTheme } = useTheme();


  if(theme === "light"){
    return (
        <LordIcon
            src="https://cdn.lordicon.com/dsdlqjde.json"
            trigger="hover"
            delay={2000}
            colors={{primary: '#455a64', secondary: '#455a64'}}
            size={25}
            target=".linkedinHover"
        />
      )
    
  }
  else {
    return (
        <LordIcon
            src="https://cdn.lordicon.com/dsdlqjde.json"
            trigger="hover"
            delay={2000}
            colors={{primary: '#e53935', secondary: '#e53935'}}
            size={25}
            target=".linkedinHover"
        />
        
    )
  }
}