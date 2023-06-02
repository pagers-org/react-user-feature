import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { type FormEvent, useCallback } from 'react';
import { LoginForm, ImageCard, ProfileCard } from 'ui-css-in-js';

import { request } from '@/api';
import { useAuth } from '@/hooks';
import { UserProps } from '@/types';

export const CookieSessionLoginPage = () => {
  const { user, login, logout } = useAuth();

  const handleSubmit = useCallback(async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const email = data.get('email');
    const password = data.get('password');

    const { user } = await request<{ message: string; user: UserProps }>('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    login(user);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {user ? (
        <ProfileCard {...user} onClick={logout} />
      ) : (
        <>
          <ImageCard />
          <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <Box sx={{ my: 8, mx: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <LoginForm onSubmit={handleSubmit} />
            </Box>
          </Grid>
        </>
      )}
    </>
  );
};
