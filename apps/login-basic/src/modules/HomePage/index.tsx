import Typography from '@mui/material/Typography';

import { MenuBox } from './components/MenuBox';

export const HomePage = () => (
  <>
    <Typography variant="h5">Menu</Typography>
    <MenuBox isTiltEnabled={true} sx={{ mt: 3 }} />
  </>
);
