import { Box, Typography } from '@mui/material';
import { Button } from 'ui-css-in-js';

export const AboutPage = () => {
  return (
    <Box m={5}>
      <Typography variant="h5">About Page</Typography>
      <Button onClick={() => console.log('Boop')}>Boop</Button>
    </Box>
  );
};
