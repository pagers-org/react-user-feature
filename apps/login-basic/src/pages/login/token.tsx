import Grid from '@mui/material/Grid';
import { getCookie } from 'cookies-next';
import type { GetServerSidePropsContext } from 'next';

import { COOKIE_KEY } from '@/constants/common';
import { Token } from '@/libs/token';
import { TokenLoginPage } from '@/modules';

const TokenLogin = () => (
  <Grid container component="main" sx={{ height: 'calc(100vh - 200px)' }}>
    <TokenLoginPage />
  </Grid>
);

export default TokenLogin;

export const getServerSideProps = async ({ req, res }: GetServerSidePropsContext) => {
  const cookie = getCookie(COOKIE_KEY, { req, res });
  const isValid = await hasValidToken(cookie as string);
  return isValid ? { redirect: { destination: '/profile?auth=token', permanent: false } } : { props: {} };
};

const hasValidToken = async (token?: string) => {
  if (!token) return false;
  const { id } = await Token.decode<{ id: string }>(token);
  return !!id;
};
