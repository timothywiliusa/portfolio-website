"use client"

// import React from 'react';

import dynamic from 'next/dynamic';

// const Lottie = dynamic<{}>(
//   () => import("lottie-web"), { 
//     ssr: false 
//   }
// );


import lottie from 'lottie-web';
// import {defineElement} from 'lord-icon-element';
import {defineElement} from '@lordicon/element';


// register lottie and define custom element
defineElement(lottie.loadAnimation);

export type LordIconTrigger =
  | 'in'
  | 'hover'
  | 'loop'
  | 'loop-on-hover'
  | 'click'
  | 'morph'
  | 'Boomerang';

export type LordIconColors = {
  primary?: string;
  secondary?: string;
};

export type LordIconProps = {
  src?: string;
  trigger?: LordIconTrigger;
  colors?: LordIconColors;
  delay?: number;
  size?: number;
  target?: string;
};

export const LordIcon = ({
  colors,
  src,
  size,
  trigger,
  delay,
  target,
}: LordIconProps) => {
  return (
    <lord-icon
      colors={`primary:${colors?.primary},secondary:${colors?.secondary}`}
      src={src}
      trigger={trigger}
      delay={delay}
      style={{
        width: size,
        height: size,
      }}
      target={target}
    />
  );
};