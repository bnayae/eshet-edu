import styled from 'styled-components';
import { WordRaw } from './WordRaw';

export const Word = styled(WordRaw)`
  display: grid;
  direction: rtl;

  grid-template-columns: repeat(${(props) => props.chars.length}, auto);
  justify-content: center;
  grid-column-gap: 0.5rem;
`;
