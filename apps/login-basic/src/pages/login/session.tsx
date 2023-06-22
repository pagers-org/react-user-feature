import Grid from '@mui/material/Grid';

import { withSessionSSR } from '@/libs/session';
import { SessionLoginPage } from '@/modules';

const SessionLogin = () => (
  <Grid container component="main" sx={{ height: 'calc(100vh - 200px)' }}>
    <SessionLoginPage />
  </Grid>
);

export default SessionLogin;

export const getServerSideProps = withSessionSSR(({ req }) => {
  const data = req.session.data ?? null;
  return data ? { redirect: { destination: '/profile?auth=session', permanent: false } } : { props: {} };
});
