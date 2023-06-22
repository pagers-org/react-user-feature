import Grid from '@mui/material/Grid';

import { BaseLoginPage } from '@/modules';

const BaseLogin = () => (
  <Grid container component="main" sx={{ height: 'calc(100vh - 200px)' }}>
    <BaseLoginPage />
  </Grid>
);

export default BaseLogin;
