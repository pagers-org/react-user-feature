import { userList } from 'mock-data';
import type { NextApiRequest, NextApiResponse } from 'next';

type CustomNextApiRequest = Omit<NextApiRequest, 'body'> & {
  body: { email: string; password: string };
};

const findUser = ({ email, password }: { email: string; password: string }) => {
  return userList.find((user) => user.email === email && user.password === password) ?? null;
};

export default function handler(req: CustomNextApiRequest, res: NextApiResponse) {
  const user = findUser(req.body);
  if (!user) return res.status(401).json({ message: 'failed', user });

  res.status(200).json({ message: 'success', user });
}
