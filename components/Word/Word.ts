import styled from 'styled-components';
import { charSize } from '..';
import { WordRaw } from './WordRaw';

export const Word = styled(WordRaw)`
  display: grid;
  direction: rtl;
  width: 100%;
  height: ${charSize}rem;
  grid-template-columns: repeat(auto-fill, ${charSize}rem);
  grid-auto-rows: ${charSize}rem;
  justify-content: center;
  grid-column-gap: 2rem;
  grid-row-gap: 1rem;

  /* &.completed {
    background: green;
  } */
`;
