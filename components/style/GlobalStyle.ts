import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  html {
    font-size:62.5%;
    -webkit-text-size-adjust: 100%;
  }
  
  body{
    margin: 0;
    padding: 0;
    overflow: hidden;

    display: grid;

justify-content: stretch;
justify-items: stretch;
align-items: stretch;

height: 101vh;
width: 101vw;
background: ${({ theme }) => theme.presetA.palette.primary.default};

  }

  * {
    line-height: normal !important;
  }

  *:focus{
    outline: none;
  }
  
  @media only screen and (max-width: 767px)   {
    html {
    font-size: 35%;
    }
  }

  @media only screen and (max-width: 420px)   {
    html {
    font-size: 21%;
    }
  }
`;
