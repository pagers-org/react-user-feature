import type { User } from 'global/literal';
import { useCallback, useState } from 'react';

let localUserStore: User | null = null;

export const useAuth = (init = false) => {
  const [user, setUser] = useState<User | null>(init ? null : localUserStore);

  const login = useCallback((user: User) => {
    setUser(user);
    localUserStore = user;
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    localUserStore = null;
  }, []);

  return { user, login, logout };
};
