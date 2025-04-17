import ScrollUp from '@/components/custom/ScrollUp';
import React, { FC } from 'react';
import Features from '@/components/Features';
import HomeUI from '@/components/Home';
import { getProfessions } from '@/services/profesion';
import InstallPrompt from '@/components/PushNotificationManager';

const Home: FC = async () => {
  const { data } = await getProfessions();

  return (
    <>
      <ScrollUp />
      <HomeUI professions={data} />
      <InstallPrompt />
      <Features />
    </>
  );
};

export default Home;
