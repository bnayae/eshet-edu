import styled from 'styled-components';
import { SentenceRaw } from './SentenceRaw';

export const Sentence = styled(SentenceRaw)`
  display: grid;
  direction: rtl;
  width: 100%;

  grid-auto-flow: row;
  justify-content: stretch;
  grid-row-gap: 4rem;
`;
