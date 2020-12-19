import styled from 'styled-components';
import { HomePageRaw } from './HomePageRaw';

export const HomePage = styled(HomePageRaw)`
  display: grid;

  justify-content: stretch;
  justify-items: stretch;
  align-items: stretch;

  height: 101vh;
  width: 101vw;
  background: ${({ theme }) => theme.presetA.palette.primary.default};
`;
