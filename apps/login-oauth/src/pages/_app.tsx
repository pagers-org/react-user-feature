import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../global.css';
import 'tw-elements/dist/css/tw-elements.min.css';
// import { SessionProvider } from 'next-auth/react';
import { getVersionInfo } from 'utils-version';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Turborepo Boilerplate - Website</title>
        <meta name="description" content="Turborepo boilerplate." />
        <meta name="version" content={getVersionInfo()} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <SessionProvider> */}
      {<Component {...pageProps} />}
      {/* </SessionProvider> */}
    </>
  );
};

export default App;
