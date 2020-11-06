import styled from 'styled-components';
import { charSize } from '..';
import { WordRaw } from './WordRaw';

export const Word = styled(WordRaw)`
  display: grid;
  direction: rtl;
  width: 100%;
  grid-template-columns: repeat(auto-fill, ${charSize}rem);
  justify-content: center;
  grid-column-gap: 2rem;
`;
