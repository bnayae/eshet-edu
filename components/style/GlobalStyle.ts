import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  html {
    font-size: 62.5%;
  }
  
  body{
    margin: 0;
    padding: 0;
    overflow: hidden;
    /* background: ${({ theme }) => theme.presetA.palette.primary.default}; */
  }

  /* @media (max-height: 1000px) {
    html {
      font-size: 53%;
    }
  } */
`;
