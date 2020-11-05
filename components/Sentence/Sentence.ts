import styled from 'styled-components';
import { SentenceRaw } from './SentenceRaw';

export const Sentence = styled(SentenceRaw)`
  display: grid;
  direction: rtl;

  grid-auto-flow: row;
  justify-content: start;
  grid-row-gap: 1rem;
`;
