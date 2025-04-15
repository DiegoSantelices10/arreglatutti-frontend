import ScrollUp from '@/components/custom/ScrollUp';
import React, { FC } from 'react';
import Features from '@/components/Features';
// import Testimonials from '@/components/Testimonials';
import HomeUI from '@/components/Home';
import { getProfessions } from '@/services/profesion';
// import HomeNotification from '@/components/PushNotificationManager';

const Home: FC = async () => {
  const { data } = await getProfessions();

  return (
    <>
      {/* <HomeNotification /> */}
      <ScrollUp />
      <HomeUI professions={data} />
      <Features />
    </>
  );
};

export default Home;
