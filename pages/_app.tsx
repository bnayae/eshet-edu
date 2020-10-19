import AOS from 'aos';
import { AppProps } from 'next/app';
import React, { useEffect } from 'react';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from '../components';

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    AOS.init({
      offset: -50,
      duration: 600,
      easing: 'ease-in-out',
      anchorPlacement: 'top-bottom',
    });
  });

  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </RecoilRoot>
  );
};

export default MyApp;
