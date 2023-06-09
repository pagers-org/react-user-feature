import { Box, Typography } from '@mui/material';

const Status404 = () => (
  <Box textAlign="center" mt={24}>
    <Typography variant="title2">404</Typography>
    <Typography variant="h6" mt={1} mb={2}>
      Page not found
    </Typography>
    <img src="/assets/missing-piece.png" alt="404 page" width={150} />
  </Box>
);

export default Status404;
