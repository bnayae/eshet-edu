import { keyframes } from 'styled-components';

export const aniChar1 = keyframes`
  0%{
    opacity: 1;
    transform: translateY(0) rotate(0) scale(1);
  }
  20% {
     transform: translateY(1rem) scale(0.8) rotate(25deg);
  }

  30% {
     opacity: 0.8;
     transform: rotate(15deg);
  }

  50% {
     opacity: 1;
     transform: scale(1.3) rotate(-20deg);
  }

  70% {
     opacity: 0.7;
     transform: rotate(210deg) scale(0.6);
  }

  100% {
     opacity: 1;
     transform: rotate(-30deg);
  }
`;
