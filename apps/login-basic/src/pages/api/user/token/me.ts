import { getCookie } from 'cookies-next';
import type { CustomNextApiRequest } from 'global/custom';
import type { NextApiResponse } from 'next';

import { SECRET_KEY } from '@/constants/common';
import { Token } from '@/libs/token';
import { findUserById } from '@/libs/user';

export default async function handler(req: CustomNextApiRequest, res: NextApiResponse) {
  try {
    const token = getCookie(SECRET_KEY, { req, res }) as string;
    if (!token) return res.status(401).json({ message: 'failed', user: null });

    const { id: userId } = await Token.decode<{ id: string; iat: number; exp: number }>(token);
    const user = findUserById(userId);
    if (!user) return res.status(401).json({ message: 'failed', user: null });

    res.status(200).json({ message: 'success', user });
  } catch (error) {
    res.status(401).json({ message: 'failed', user: null });
  }
}
