import * as React from 'react';
import '../styles/globals.css'
import { ThemeProvider } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'bootstrap/dist/css/bootstrap.min.css'
import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';
import theme from '../../lib/theme';


function MyApp({ Component, pageProps }: AppProps) {
  
  return (
    <>
      <Head>
        <title>DPA</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        ></meta>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
