import Contact from '@/components/Contact';
import { getProfessions } from '@/services/profesion';
import React, { FC } from 'react';

const Registration: FC = async () => {
  const { data } = await getProfessions();

  return (
    <div className="min-h-screen grid content-between pt-28 ">
      <Contact professions={data} />
    </div>
  );
};

export default Registration;
