declare module 'next/app' {
  import type { NextComponentType, NextPageContext } from 'next';
  import type { Router } from 'next/router';
  import type { Session } from 'next-auth';

  type AppProps<P = Record<string, unknown>> = {
    Component: NextComponentType<NextPageContext, unknown, P>;
    router: Router;
    __N_SSG?: boolean;
    __N_SSP?: boolean;
    pageProps: P & {
      session?: Session;
    };
  };
}
