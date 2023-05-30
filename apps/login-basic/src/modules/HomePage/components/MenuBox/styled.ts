import { Box, styled } from '@mui/material';

export const TiltContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '50px 40px',
  borderRadius: '5px',
  boxShadow: theme.shadows[3],
}));
