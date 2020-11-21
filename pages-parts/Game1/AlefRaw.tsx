import React from 'react';
import { ISvgProps } from '../../interfaces';

export const AlefRaw = ({ className, ...other }: ISvgProps) => (
  <svg
    className={className}
    {...other}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 400 400"
  >
    <g stroke="#000" fill="none" strokeWidth="20" strokeLinecap="round">
      <title>Layer 1</title>
      <line id="svg_2" y2="337.04375" x2="344.5" y1="71.04375" x1="50.5" />
      <line id="svg_3" y2="272.04375" x2="272.5" y1="69.04375" x1="300.5" />
      <line id="svg_4" y2="340.04375" x2="98.5" y1="123.04375" x1="106.5" />
    </g>
  </svg>
);
