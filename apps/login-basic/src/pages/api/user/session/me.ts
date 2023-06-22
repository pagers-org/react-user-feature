import type { NextApiHandler } from 'next';

import { Crypto } from '@/libs/crypto';
import { withSessionRoute } from '@/libs/session';
import { findUserById } from '@/libs/user';

const handler: NextApiHandler = (req, res) => {
  try {
    const { data } = req.session;
    if (!data) return res.status(401).json({ message: 'failed', user: null });

    const userId = Crypto.decrypt(data);
    const user = findUserById(userId);
    if (!user) return res.status(401).json({ message: 'failed', user: null });

    res.status(200).json({ message: 'success', user });
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: 'failed', user: null });
  }
};

export default withSessionRoute(handler);
