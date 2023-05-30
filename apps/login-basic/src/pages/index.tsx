import { Container } from '@mui/material';

import { HomePage } from '../modules';

const Home = () => (
  <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <HomePage />
  </Container>
);

export default Home;
