declare module 'http' {
  import type { SessionData } from 'global/literal';

  type IronSessionData = {
    data?: SessionData;
  };

  type IronSession = IronSessionData & {
    destroy: () => void;
    save: () => Promise<void>;
  };

  type IncomingMessage = {
    session: IronSession;
  };
}
