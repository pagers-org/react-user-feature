import crypto from 'crypto';

import { COOKIE_KEY } from '@/constants/common';

type CryptoProps = {
  encrypt: (data: string, password?: string) => { iv: string; encryptedData: string };
  decrypt: (data: { encryptedData: string; iv: string }, password?: string) => string;
};

export const Crypto: CryptoProps = {
  encrypt: (data, password = COOKIE_KEY) => {
    const key = crypto.scryptSync(password, 'salt', 32);
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
    let encrypted = cipher.update(data, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return { iv: iv.toString('hex'), encryptedData: encrypted };
  },
  decrypt: ({ encryptedData, iv }, password = COOKIE_KEY) => {
    const key = crypto.scryptSync(password, 'salt', 32);
    const decipher = crypto.createDecipheriv('aes-256-cbc', key, Buffer.from(iv, 'hex'));
    let decrypted = decipher.update(encryptedData, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
  },
};
