import styled from 'styled-components';
import { Game1Raw } from './Game1Raw';

export const Game1 = styled(Game1Raw)`
  display: grid;

  grid-template-areas:
    'keyboard image'
    'keyboard text';
  justify-items: center;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 5fr 3fr;
  align-items: center;
  grid-row-gap: 2rem;

  height: 100vh;
  /* background: ${({ theme }) => theme.presetA.palette.primary.default}; */
  .img {
    grid-area: image;
    height: 80%;
    border-style: solid;
    border-radius: ${({ theme }) => theme.presetA.border.radius.large};
    border-width: ${({ theme }) => theme.presetA.border.size.large};
    border-color: ${({ theme }) => theme.presetA.border.color.default};
    box-shadow: ${({ theme }) => theme.presetA.border.shadow.large};
  }

  .text {
    width: 100%;
    grid-area: text;
    display: grid;
    grid-auto-flow: row;
    grid-row-gap: 2rem;
    justify-content: stretch;
    align-self: start;
  }
`;
