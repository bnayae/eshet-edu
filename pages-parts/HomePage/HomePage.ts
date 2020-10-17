import styled from 'styled-components';
import { CharBlockRaw } from './HomePageRaw';

export const HomePage = styled(CharBlockRaw)`
  display: grid;

  justify-content: stretch;
  justify-items: stretch;
  align-items: stretch;

  height: 100vh;
  background: ${({ theme }) => theme.presetA.palette.primary.default};
`;
