import HeaderTitle from '@/components/custom/HeaderTitle';
import Image from 'next/image';
import React, { FC } from 'react';

const Home: FC = () => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <HeaderTitle title="Bienvenido" />
      <div className="absolute bottom-10">
        <Image
          src="/images/logo-secondary.png"
          alt="logo"
          width={160}
          height={160}
        />
      </div>
    </div>
  );
};

export default Home;
