import { useCallback, useState } from 'react';

import { UserProps } from '@/types';

export const useAuth = () => {
  const [user, setUser] = useState<UserProps | null>(null);

  const login = useCallback((user: UserProps) => {
    setUser(user);
  }, []);

  const logout = useCallback(() => {
    setUser(null);
  }, []);

  return { user, login, logout };
};
