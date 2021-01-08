import styled from 'styled-components';
import { Game1Raw } from './Game1Raw';

export const Game1 = styled(Game1Raw)`
  display: grid;

  grid-template-areas:
    'image-area'
    'text';
  /* 'preview image-area'
    'preview text'; */
  justify-content: end;
  /* grid-template-columns: 2fr 5fr; */
  grid-template-rows: 5fr 3fr;
  align-items: center;
  grid-row-gap: 2rem;
  height: 100vh;
  width: 100vw;

  /* &.mobile-view {
    grid-template-areas:
      'image-area'
      'text'
      'preview'
      '.';
    grid-template-columns: 1fr;
    grid-template-rows: auto auto min-content 1fr;
    background: #eeddaa;
  } */

  @media only screen and (max-width: 767px) {
    grid-template-areas:
      'preview image-area'
      'text    text'
      '.       .';
    grid-template-columns: 1fr 3fr;
    grid-template-rows: 1fr max-content 1rem;
  }

  @media only screen and (max-width: 420px) {
    grid-template-areas:
      'image-area'
      '.'
      'text'
      '.'
      'preview'
      '.';
    grid-template-columns: 1fr;
    grid-template-rows: 90vw 2rem auto 2rem min-content 1fr;
  }

  .img-area {
    grid-area: image-area;
    display: grid;
    padding: 3%;
    align-self: stretch;
    justify-items: center;
    max-width: 100vw;
    justify-self: end;
    &.mobile-view {
      justify-self: center;
    }
    grid-auto-flow: column;
    grid-column-gap: 2rem;
  }

  .img {
    width: auto;
    height: 100%;
    max-width: 60vw;
    object-fit: contain;
    justify-self: end;
    /* border-style: solid; */
    /* border-color: ${({ theme }) => theme.presetA.border.color.default}; */
    /* border-width: ${({ theme }) => theme.presetA.border.size.large}; */
    border-radius: ${({ theme }) => theme.presetA.border.radius.large};

    &.mobile-view {
      /* width: 100%;
      height: auto; */
      justify-self: center;
      max-width: 96vw;
      /* border-style: solid;
      box-shadow: ${({ theme }) => theme.presetA.border.shadow.large};
      border-color: ${({ theme }) => theme.presetA.border.color.default};
      border-width: ${({ theme }) => theme.presetA.border.size.large}; */
    }
  }

  .text {
    width: 100%;
    grid-area: text;
    display: grid;
    grid-auto-flow: row;
    grid-row-gap: 2rem;
    justify-content: stretch;
    justify-items: stretch;
    align-self: start;
    padding-right: 2%;
  }

  .char {
    grid-area: preview;
    max-height: 40vh;
    &.mobile-view {
      display: none;
    }
  }
`;
