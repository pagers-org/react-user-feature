import type { CustomNextApiRequest } from 'global/custom';
import type { NextApiResponse } from 'next';

import { Token } from '@/libs/token';
import { findUserById } from '@/libs/user';

export default async function handler(req: CustomNextApiRequest, res: NextApiResponse) {
  try {
    const { authorization } = req.headers;
    const parsedToken = authorization?.replace('Bearer ', '');
    if (!parsedToken || typeof parsedToken !== 'string') return res.status(401).json({ message: 'failed', user: null });

    const { id: userId } = await Token.decode<{ id: string; iat: number; exp: number }>(parsedToken);
    const user = findUserById(userId);
    if (!user) return res.status(401).json({ message: 'failed', user: null });

    res.status(200).json({ message: 'success', user });
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: 'failed', user: null });
  }
}
