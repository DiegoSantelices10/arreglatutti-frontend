/* eslint-disable @typescript-eslint/no-explicit-any */
import Carousel from './components/Carousel';
import { getProfessions } from '@/services/profesion';
import HomeContent from './components/HomeContent';

const HomeUI = async () => {
  const { data } = await getProfessions();

  return (
    <>
      <Carousel />
      <HomeContent data={data} />
    </>
  );
};

export default HomeUI;
