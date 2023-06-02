import { Grid } from '@mui/material';

const randomImageUrl = 'https://source.unsplash.com/random?wallpapers';

export const ImageCard = () => (
  <Grid
    item
    xs={false}
    sm={4}
    md={7}
    sx={{
      backgroundImage: `url(${randomImageUrl})`,
      backgroundRepeat: 'no-repeat',
      backgroundColor: (theme) => (theme.palette.mode === 'light' ? theme.palette.grey[50] : theme.palette.grey[900]),
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  />
);
