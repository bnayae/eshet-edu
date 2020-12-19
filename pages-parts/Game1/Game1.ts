import styled from 'styled-components';
import { Game1Raw } from './Game1Raw';

export const Game1 = styled(Game1Raw)`
  display: grid;

  grid-template-areas:
    'preview image-area'
    'preview text';
  justify-items: center;
  grid-template-columns: 2fr 5fr;
  grid-template-rows: 5fr 3fr;
  align-items: center;
  grid-row-gap: 2rem;
  height: 100vh;
  width: 100vw;

  &.mobile-view {
    grid-template-areas:
      'image-area'
      'text'
      'preview';
    grid-template-columns: 1fr;
    grid-template-rows: 10fr auto 5fr;
  }

  .img-area {
    grid-area: image-area;
    display: grid;
    padding: 3%;
    align-self: stretch;
    justify-items: center;
  }

  .img {
    width: auto;
    height: 100%;
    object-fit: contain;

    &.mobile-view {
      /* justify-self: end; */
      /* margin: 4rem;
      height: 80%; */
      border-style: solid;
      border-radius: ${({ theme }) => theme.presetA.border.radius.large};
      border-width: ${({ theme }) => theme.presetA.border.size.large};
      border-color: ${({ theme }) => theme.presetA.border.color.default};
      box-shadow: ${({ theme }) => theme.presetA.border.shadow.large};
    }
  }

  .text {
    width: 100%;
    grid-area: text;
    display: grid;
    grid-auto-flow: row;
    grid-row-gap: 2rem;
    justify-content: stretch;
    align-self: start;
    padding-right: 2%;
  }

  .char {
    grid-area: preview;
  }
`;
