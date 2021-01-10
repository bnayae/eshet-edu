import styled from 'styled-components';
import { Game1AllRaw } from './Game1AllRaw';

export const Game1All = styled(Game1AllRaw)`
  display: grid;
  justify-content: center;
  grid: column;
  /* grid-auto-flow: column; */
  grid-row-gap: 2rem;
  grid-column-gap: 2rem;

  grid-template-columns: repeat(auto-fit, 15rem);
  max-width: '92vw';

  .img-area {
    display: grid;
    padding: 2rem;
    align-self: stretch;
    justify-items: center;
    cursor: pointer;
  }

  .img {
    width: auto;
    height: 10rem;
    object-fit: contain;
  }
`;
