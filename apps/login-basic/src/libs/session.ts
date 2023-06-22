import { IronSessionOptions } from 'iron-session';
import { withIronSessionApiRoute, withIronSessionSsr } from 'iron-session/next';
import { NextApiHandler, GetServerSidePropsContext, GetServerSidePropsResult } from 'next';

export const sessionOptions: IronSessionOptions = {
  cookieName: process.env.NEXT_PUBLIC_SECRET_KEY ?? 'login-user-feature',
  password: process.env.SECRET_COOKIE_PASSWORD ?? 'complex_password_at_least_32_characters_long',
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
  },
};

export const withSessionRoute = (handler: NextApiHandler) => withIronSessionApiRoute(handler, sessionOptions);

export const withSessionSSR = <P extends Record<string, unknown> = Record<string, unknown>>(
  handler: (context: GetServerSidePropsContext) => GetServerSidePropsResult<P> | Promise<GetServerSidePropsResult<P>>,
) => withIronSessionSsr(handler, sessionOptions);
