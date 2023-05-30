import { CacheProvider } from '@emotion/react';
import { ThemeProvider, CssBaseline, Box, Typography } from '@mui/material';
import { theme } from 'config-mui';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Version } from 'ui-css-in-js';
import { createEmotionCache } from 'utils-mui';
import { getVersionInfo } from 'utils-version';

const clientSideEmotionCache = createEmotionCache();

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Basic Login</title>
        <meta name="description" content="Basic Login" />
        <meta name="version" content={getVersionInfo()} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CacheProvider value={clientSideEmotionCache}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box textAlign="center" mt={4} mb={4}>
            <Typography variant="title1">Basic Login</Typography>
            <Version version={getVersionInfo()} />
          </Box>
          {<Component {...pageProps} />}
        </ThemeProvider>
      </CacheProvider>
    </>
  );
};

export default App;
