import jwt from 'jsonwebtoken';

import { SECRET_KEY } from '@/constants/common';

export const Token = {
  encode: (data: Record<string, string>, password = SECRET_KEY) => {
    return jwt.sign(data, password, { expiresIn: '6h' });
  },
  decode: <T>(token: string, password = SECRET_KEY): Promise<T> => {
    return new Promise<T>((resolve, reject) => {
      jwt.verify(token, password, (error, decoded) => {
        if (error) {
          console.log(error);
          return reject(error);
        }

        resolve(decoded as T);
      });
    });
  },
};
