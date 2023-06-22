declare module 'global/literal' {
  type SessionData = {
    iv: string;
    encryptedData: string;
  };

  type LoginParams = {
    email: string;
    password: string;
  };

  type User = {
    id: string;
    password: string;
    name: string;
    age: number;
    profileImage: string;
    email: string;
    jobs: string;
  };

  type LoginResponse = {
    message: 'success' | 'failed';
    user: User | null;
  };
}

declare module 'global/custom' {
  import type { LoginParams } from 'global/literal';
  import type { NextApiRequest } from 'next';

  type CustomNextApiRequest = Omit<NextApiRequest, 'body'> & {
    body: LoginParams;
  };
}
