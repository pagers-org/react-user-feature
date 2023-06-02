import Grid from '@mui/material/Grid';

import { JWTLoginPage } from '@/modules';

const JWTLogin = () => (
  <Grid container component="main" sx={{ height: 'calc(100vh - 200px)' }}>
    <JWTLoginPage />
  </Grid>
);

export default JWTLogin;
