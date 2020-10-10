import styled from 'styled-components';
import { HomePageRaw } from './HomePageRaw';

export const HomePage = styled(HomePageRaw)`
  color: ${({ theme }) => theme.palette.primary.text};
  background: ${({ theme }) => theme.palette.primary.default};
`;
