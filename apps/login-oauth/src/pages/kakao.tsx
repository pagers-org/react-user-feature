import type { GetServerSidePropsContext } from 'next';
import { getServerSession } from 'next-auth';

import { authOptions } from './api/auth/[...nextauth]';

type KakaoPageProps = {
  user: unknown;
};

const Kakao = ({ user }: KakaoPageProps) => <div>{JSON.stringify(user, undefined, 2)}</div>;

export default Kakao;

export const getServerSideProps = async ({ req, res, query, params }: GetServerSidePropsContext) => {
  const session = await getServerSession(req, res, authOptions);
  console.log('query: ', query);
  console.log('params: ', params);
  console.log('session: ', session);

  return {
    props: { user: session?.user },
  };
};
