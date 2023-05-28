import { Box, Typography } from '@mui/material';
import { Button, Header } from 'ui-atomic-css';

export const HomePage = () => {
  return (
    <>
      <Header />
      <Box m={5}>
        <Typography variant="h5">Home Page</Typography>
        <Button onClick={() => console.log('Boop')}>Boop</Button>
      </Box>
    </>
  );
};
