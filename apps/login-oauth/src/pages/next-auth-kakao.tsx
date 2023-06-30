import type { GetServerSidePropsContext } from 'next';
import { getServerSession } from 'next-auth';

import { authOptions } from './api/auth/[...nextauth]';

const Kakao = () => <div>카카오 리다이렉트 페이지</div>;

export default Kakao;

export const getServerSideProps = async ({ req, res }: GetServerSidePropsContext) => {
  const session = await getServerSession(req, res, authOptions);
  console.log(session);

  return {
    props: {},
  };
};
