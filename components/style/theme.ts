// https://material.io/resources/color/#!/?view.left=0&view.right=0&primary.color=880E4F&secondary.color=CE93D8

import { palette } from './palette';

export const theme = {
  // todo: shadows
  // todo: border
  font: {
    family: 'Ariel' as const,
    size: {
      h1: {
        size: '8rem' as const,
        height: '9rem' as const,
      } as const,
      h2: {
        size: '6rem' as const,
        height: '7rem' as const,
      } as const,
      h3: {
        size: '4rem' as const,
        height: '5rem' as const,
      } as const,
    } as const,
    weight: {
      default: 500 as const,
      heavy: 800 as const,
    } as const,
    shadow: {
      default: '0.4rem 0.4rem 0.5rem #33333399' as const,
    } as const,
  } as const,
  presetA: {
    border: {
      size: {
        small: '0.2rem' as const,
        medium: '0.3rem' as const,
        large: '0.5rem' as const,
      } as const,
      radius: {
        small: '0.6rem' as const,
        medium: '1.5rem' as const,
        large: '3rem' as const,
      } as const,
      shadow: {
        small: '1rem 1rem 6rem -1rem #00000062' as const,
        large: '0.6rem 2rem 5.7rem -2rem #00000062' as const,
      } as const,
      color: {
        default: palette[10],
        soft: palette[11],
      } as const,
    } as const,
    palette: {
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
