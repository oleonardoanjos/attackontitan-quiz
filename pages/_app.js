import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Head from 'next/head';
import db from '../db.json';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    color: ${({ theme }) => theme.colors.contrastText};
  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

const { theme } = db;

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
        <meta name="title" content={db.title} key="title" />
        <meta name="description" content={db.description} key="description" />

        <meta property="og:type" content="website" key="type" />
        <meta property="og:url" content="https://attackontitan-quiz.oleonardoanjos.vercel.app/" key="url" />
        <meta property="og:title" content={db.title} key="ogtitle" />
        <meta property="og:description" content={db.description} key="ogdescription" />
        <meta property="og:image" content={db.bg} key="ogimage" />

        <meta property="twitter:card" content="summary_large_image" key="twittercard" />
        <meta property="twitter:url" content="https://attackontitan-quiz.oleonardoanjos.vercel.app/" key="twitterurl" />
        <meta property="twitter:title" content={db.title} key="twittertitle" />
        <meta property="twitter:description" content={db.description} key="twitterdescription" />
        <meta property="twitter:image" content={db.bg} key="twitterimage" />

        <link rel="icon" type="image/png" sizes="32x32" href={db.favicon} />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
