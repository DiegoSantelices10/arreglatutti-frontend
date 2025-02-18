/* eslint-disable @typescript-eslint/no-explicit-any */
import Carousel from './components/Carousel';
import { getProfessions } from '@/services/profesion';
import HomeContent from './components/HomeContent';
import { Fragment } from 'react';

const HomeUI = async () => {
  const { data } = await getProfessions();

  return (
    <Fragment>
      <Carousel />
      <HomeContent data={data} />
    </Fragment>
  );
};

export default HomeUI;
