import type { LoginParams, User } from 'global/literal';
import { userList } from 'mock-data';

export const findUserByEmailPassword = ({ email, password }: LoginParams): User | null =>
  userList.find((user) => user.email === email && user.password === password) ?? null;

export const findUserById = (userId: string): User | null => userList.find(({ id }) => id === userId) ?? null;
