import styled from 'styled-components';
import { Game1Raw } from './Game1Raw';

export const Game1 = styled(Game1Raw)`
  display: grid;

  grid-template-areas:
    'keyboard image'
    'keyboard text';
  justify-content: center;
  justify-items: center;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 2fr 1fr;
  align-items: center;

  height: 100vh;
  background: ${({ theme }) => theme.presetA.palette.primary.default};

  .img {
    grid-area: image;
    height: 35rem;
    border-style: solid;
    border-radius: ${({ theme }) => theme.presetA.border.radius.large};
    border-width: ${({ theme }) => theme.presetA.border.size};
    border-color: ${({ theme }) => theme.presetA.border.color};
    box-shadow: ${({ theme }) => theme.presetA.border.shadow.large};
  }
`;
