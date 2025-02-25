import ContentForm from '@/components/EstablishPassword/ContentForm';
import React, { FC } from 'react';

const EstablishPassword: FC = () => {
  return (
    <div className="relative z-20 min-h-screen overflow-hidden pt-[80px] bg-[#FAFAFB] pb-10">
      <div className="absolute w-full h-20 rounded-b-3xl bg-primary -z-10" />
      <div className="bg-white rounded-md p-6 shadow-md mt-10 md:mx-auto md:w-1/2 space-y-8">
        <h1 className="text-lg text-primary text-center font-bold">
          Establecer contraseña
        </h1>
        <ContentForm />
      </div>
    </div>
  );
};

export default EstablishPassword;
