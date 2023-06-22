import { deleteCookie } from 'cookies-next';
import type { NextApiHandler } from 'next';

import { COOKIE_KEY } from '@/constants/common';
import { withSessionRoute } from '@/libs/session';

const handler: NextApiHandler = (req, res) => {
  try {
    req.session.destroy();

    deleteCookie(COOKIE_KEY, { req, res, path: '/' });

    return res.status(200).json({ message: 'Delete the Token' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

export default withSessionRoute(handler);
