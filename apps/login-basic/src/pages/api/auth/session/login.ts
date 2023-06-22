import type { CustomNextApiRequest } from 'global/custom';
import type { NextApiHandler } from 'next';

import { Crypto } from '@/libs/crypto';
import { withSessionRoute } from '@/libs/session';
import { findUserByEmailPassword } from '@/libs/user';

const handler: NextApiHandler = async (req, res) => {
  try {
    const body = (req as CustomNextApiRequest).body;
    const user = findUserByEmailPassword(body);
    if (!user) return res.status(401).json({ message: 'failed' });

    req.session.data = Crypto.encrypt(user.id);

    await req.session.save();

    res.status(200).json({ message: 'success' });
  } catch (error) {
    res.status(401).json({ message: 'failed' });
  }
};

export default withSessionRoute(handler);
