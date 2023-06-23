import { GetServerSidePropsContext } from 'next';

const Kakao = () => <div>카카오 리다이렉트 페이지</div>;

export default Kakao;

export const getServerSideProps = ({ query, params }: GetServerSidePropsContext) => {
  console.log('query: ', query);
  console.log('params: ', params);

  return {
    props: {},
  };
};
