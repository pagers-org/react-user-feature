import type { CustomNextApiRequest } from 'global/custom';
import type { NextApiResponse } from 'next';

import { findUserByEmailPassword } from '@/libs/user';

export default function handler(req: CustomNextApiRequest, res: NextApiResponse) {
  const user = findUserByEmailPassword(req.body);
  if (!user) return res.status(401).json({ message: 'failed', user });

  res.status(200).json({ message: 'success', user });
}
