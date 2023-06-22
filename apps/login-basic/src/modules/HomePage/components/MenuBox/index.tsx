import { Box, SxProps, Button } from '@mui/material';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import Tilt from 'react-parallax-tilt';

import { TiltContent } from './styled';

type MenuSelection = 'base' | 'session' | 'token';

type MenuProps = {
  isTiltEnabled: boolean;
  sx?: SxProps;
};

export const MenuBox = ({ isTiltEnabled, sx }: MenuProps) => {
  const router = useRouter();

  const handleMenuSelected = useCallback(
    (menuSelection: MenuSelection) => () => void router.push(`/login/${menuSelection}`, undefined, { shallow: true }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return (
    <Tilt
      tiltEnable={isTiltEnabled}
      tiltMaxAngleX={20}
      tiltMaxAngleY={20}
      scale={1.03}
      style={{ maxWidth: '600px', width: '100%' }}
    >
      <TiltContent sx={sx}>
        <Box
          gap={10}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '60%',
            marginTop: 2,
          }}
        >
          <Button color="success" variant="contained" size="large" onClick={handleMenuSelected('base')}>
            Base
          </Button>
          <Button color="secondary" variant="contained" size="large" onClick={handleMenuSelected('session')}>
            Session
          </Button>
          <Button variant="contained" size="large" onClick={handleMenuSelected('token')}>
            Token(JWT)
          </Button>
        </Box>
      </TiltContent>
    </Tilt>
  );
};
