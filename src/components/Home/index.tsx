/* eslint-disable @typescript-eslint/no-explicit-any */
import Carousel from './components/Carousel';
import HomeContent from './components/HomeContent';
import { FC, Fragment } from 'react';

const HomeUI: FC<any> = async (props) => {
  const { professions } = props;

  return (
    <Fragment>
      <Carousel />
      <HomeContent data={professions} />
    </Fragment>
  );
};

export default HomeUI;
