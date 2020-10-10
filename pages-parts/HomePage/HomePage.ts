import styled from 'styled-components';
import { HomePageRaw } from './HomePageRaw';

export const HomePage = styled(HomePageRaw)`
  color: ${({ theme }) => theme.palette.presetA.primary.text};
  background: ${({ theme }) => theme.palette.p.primary.default};
`;
