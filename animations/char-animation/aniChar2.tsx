import { keyframes } from 'styled-components';

export const aniChar2Definition = {
  duration: '0.5s' as const,
  timing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)' as const,
  mode: 'both' as const,
} as const;

export const aniChar2 = keyframes`
  0% {
    transform: translateY(0) translateZ(0) rotateX(0);
    transform-origin: 50% 0%;
  }
  100% {
    transform: translateY(-100%) translateZ(-260px) rotateX(180deg);
    transform-origin: 50% 100%;
  }
`;
