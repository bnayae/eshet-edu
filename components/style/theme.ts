// https://material.io/resources/color/#!/?view.left=0&view.right=0&primary.color=880E4F&secondary.color=CE93D8

import { palette } from './palette';

export const theme = {
  palette: {
    presetA: {
      background: {
        b1: palette[0],
        b2: palette[1],
        b3: palette[2],
      } as const,
      primary: {
        default: palette[3],
        light: palette[4],
        dark: palette[5],
        text: palette[6],
      } as const,
      secondary: {
        default: palette[7],
        light: palette[8],
        dark: palette[9],
        text: palette[10],
      } as const,
    } as const,
  } as const,
};
