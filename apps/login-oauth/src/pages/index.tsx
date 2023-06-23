import dynamic from 'next/dynamic';

const HomePage = dynamic(() => import('../modules').then((module) => module.HomePage), { ssr: false });

const Home = () => <HomePage />;

export default Home;
