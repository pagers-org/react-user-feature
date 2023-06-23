import { setCookie } from 'cookies-next';
import type { CustomNextApiRequest } from 'global/custom';
import type { NextApiResponse } from 'next';

import { SECRET_KEY, ONE_DAY } from '@/constants/common';
import { Token } from '@/libs/token';
import { findUserByEmailPassword } from '@/libs/user';

export default function handler(req: CustomNextApiRequest, res: NextApiResponse) {
  const user = findUserByEmailPassword(req.body);
  if (!user) return res.status(401).json({ message: 'failed' });

  try {
    const token = Token.encode({ id: user.id });
    setCookie(SECRET_KEY, token, { req, res, maxAge: ONE_DAY, path: '/', httpOnly: true, secure: true });

    res.status(200).json({ message: 'success' });
  } catch (error) {
    console.error(error);
    return res.status(401).json({ message: 'failed' });
  }
}
