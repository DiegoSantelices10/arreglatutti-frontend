/* eslint-disable @typescript-eslint/no-explicit-any */
import { Metadata } from 'next';
import InstallPrompt from '../PushNotificationManager';
import Carousel from './components/Carousel';
import HomeContent from './components/HomeContent';
import { FC, Fragment } from 'react';

export const metadata: Metadata = {
  title:
    'Aquiles Soluciones | Brindamos servicios de profesionales matriculados.',
  description: 'Los mejores profesionales en un solo lugar.',
  applicationName: 'Aquiles Soluciones |',
  openGraph: {
    images: '/logo-pwa-192x192.png',
  },
};

const HomeUI: FC<any> = async (props) => {
  const { professions } = props;

  return (
    <Fragment>
      <Carousel />
      <InstallPrompt />
      <HomeContent data={professions} />
    </Fragment>
  );
};

export default HomeUI;
