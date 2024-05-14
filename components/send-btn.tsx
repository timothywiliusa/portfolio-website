"use client"
import React, {useState} from 'react'
import { useFormStatus } from 'react-dom'
//import { useFormStatus } from 'react-dom/canary'
// import { useFormState } from 'react-dom';
import { FaPaperPlane } from 'react-icons/fa'


// const initialState = { message:null}

export default function SendBtn() {

  // const {state, formaction } = useFormState(initialState);
  const{pending} = useFormStatus()


  return (
    <button 
      type='submit' 
      className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65"
      >
        Send <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 "/>
    </button>
  )
}
