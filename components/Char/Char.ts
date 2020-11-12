import styled from 'styled-components';
import { aniChar1, aniChar2, aniChar2Definition } from '../../animations';
import { CharRaw } from './CharRaw';

export const Char = styled(CharRaw)`
  display: grid;

  justify-content: center;
  justify-items: center;
  align-items: center;
  vertical-align: center;
  text-align: center;
  color: ${({ theme }) => theme.presetA.palette.background.b1};
  cursor: pointer;

  &.disable {
    background: ${({ theme }) => theme.presetA.palette.background.b4};
  }

  &.completed {
    animation: ${aniChar1} 0.9s 0.3s ease-in-out 2 alternate;
    animation-direction: alternate;
    /* animation: ${aniChar2} 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955) both; */
    /* animation: ${aniChar2};
    animation-duration: ${aniChar2Definition.duration};
    animation-timing-function: ${aniChar2Definition.timing};
    animation-fill-mode: ${aniChar2Definition.mode}; */
    background: ${({ theme }) => theme.presetA.palette.background.b5};
  }

  background: ${({ theme }) => theme.presetA.palette.secondary.default};

  font-size: ${({ theme }) => theme.font.size.h1.size};
  line-height: ${({ theme }) => theme.font.size.h1.height};
  font-weight: ${({ theme }) => theme.font.weight.heavy};
  font-family: ${({ theme }) => theme.font.family};
  text-shadow: ${({ theme }) => theme.font.shadow.default};

  border-style: solid;
  border-radius: ${({ theme }) => theme.presetA.border.radius.small};
  border-width: ${({ theme }) => theme.presetA.border.size.medium};
  border-color: ${({ theme }) => theme.presetA.border.color.soft};
  box-shadow: ${({ theme }) => theme.presetA.border.shadow.small};
`;
