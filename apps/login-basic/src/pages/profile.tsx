import Grid from '@mui/material/Grid';
import { getCookie } from 'cookies-next';
import type { LoginResponse, User } from 'global/literal';
import { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';
import { useCallback, useEffect } from 'react';
import { ProfileCard } from 'ui-css-in-js';

import { nodeRequest, request } from '@/api';
import { SECRET_KEY } from '@/constants/common';
import { useAuth } from '@/hooks/useBaseAuth';

type ProfileProps = {
  pageKey: 'session' | 'token';
  ssrUser?: User;
};

const Profile = ({ pageKey, ssrUser }: ProfileProps) => {
  const router = useRouter();
  const { user, login, logout } = useAuth(true);

  useEffect(() => {
    if (ssrUser) {
      login(ssrUser);
      return;
    }

    const fetchUserData = async () => {
      const { user } = await request<LoginResponse>(`/api/user/${pageKey}/me`);
      if (!user) return router.replace('/');
      login(user);
    };

    void fetchUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLogout = useCallback(() => {
    request('/api/logout')
      .then(() => {
        logout();
        void router.push('/');
      })
      .catch((error) => {
        console.log(error);
        alert('로그아웃 중 에러가 발생했습니다.');
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Grid container component="main" sx={{ height: 'calc(100vh - 200px)' }}>
      {user && <ProfileCard {...user} onClick={handleLogout} />}
    </Grid>
  );
};

export default Profile;

export const getServerSideProps = async ({ query, req, res }: GetServerSidePropsContext) => {
  const pageKey = queryParser(query);
  if (!pageKey) return { redirect: { destination: '/', permanent: false } };
  if (pageKey === 'token') {
    const token = getCookie(SECRET_KEY, { req, res });
    if (!token || typeof token !== 'string') return { redirect: { destination: '/', permanent: false } };

    const { user } = await nodeRequest<LoginResponse>(`http://localhost:3100/api/user/token/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!user) return { redirect: { destination: '/', permanent: false } };
    return { props: { pageKey, ssrUser: user } };
  }

  return { props: { pageKey } };
};

const queryParser = (query: NodeJS.Dict<string | Array<string>>) => {
  const { auth } = query as { auth?: string };
  if (!auth) return null;
  return auth === 'session' || auth === 'token' ? auth : null;
};
