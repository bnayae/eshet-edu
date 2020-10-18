import styled from 'styled-components';
import { CharsBlockRaw } from './CharsBlockRaw';

export const CharsBlock = styled(CharsBlockRaw)`
  display: grid;
  direction: rtl;

  grid-template-columns: repeat(${(props) => props.chars.length}, auto);
  justify-content: center;
  grid-column-gap: 0.5rem;
`;
