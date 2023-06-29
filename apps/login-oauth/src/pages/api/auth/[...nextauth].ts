/* eslint-disable @typescript-eslint/require-await */
import NextAuth, { type NextAuthOptions } from 'next-auth';
import KakaoProvider from 'next-auth/providers/kakao';

import { KAKAO_API_KEY, KAKAO_SECRET_KEY, NEXT_AUTH_SECURE } from '@/constants/common';

const COOKIE_PREFIX = NEXT_AUTH_SECURE ? '__Secure-' : '';
const HOST_PREFIX = NEXT_AUTH_SECURE ? '__Host-' : '';

export const authOptions: NextAuthOptions = {
  providers: [
    KakaoProvider({
      clientId: KAKAO_API_KEY,
      clientSecret: KAKAO_SECRET_KEY,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
    maxAge: 120,
  },
  cookies: {
    sessionToken: {
      name: `${COOKIE_PREFIX}ruf.session-token`,
      options: {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        secure: NEXT_AUTH_SECURE,
      },
    },
    callbackUrl: {
      name: `${COOKIE_PREFIX}ruf.callback-url`,
      options: {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        secure: NEXT_AUTH_SECURE,
      },
    },
    csrfToken: {
      // Default to __Host- for CSRF token for additional protection if using NEXT_AUTH_SECURE
      // NB: The `__Host-` prefix is stricter than the `__Secure-` prefix.
      name: `${HOST_PREFIX}ruf.csrf-token`,
      options: {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        secure: NEXT_AUTH_SECURE,
      },
    },
    pkceCodeVerifier: {
      name: `${COOKIE_PREFIX}ruf.pkce.code_verifier`,
      options: {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        secure: NEXT_AUTH_SECURE,
      },
    },
    state: {
      name: `${COOKIE_PREFIX}ruf.state`,
      options: {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        secure: NEXT_AUTH_SECURE,
      },
    },
    nonce: {
      name: `${COOKIE_PREFIX}ruf.nonce`,
      options: {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        secure: NEXT_AUTH_SECURE,
      },
    },
  },
  callbacks: {
    jwt({ token, account }) {
      if (account) token.accessToken = account.access_token;
      return token;
    },
    session({ session, token }) {
      session.user = token;
      return session;
    },
  },
};

export default NextAuth(authOptions);
