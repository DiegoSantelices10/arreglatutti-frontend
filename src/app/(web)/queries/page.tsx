import React, { FC } from 'react';

const MyQueries: FC = () => {
  console.log('MyQueries');

  return (
    <div className="relative z-20 min-h-screen overflow-hidden pt-[80px] bg-[#FAFAFB] pb-10">
      <div className="absolute w-full h-20 rounded-b-3xl bg-primary -z-10" />
      <div className="px-4 md:px-14 space-y-6">
        <div className="bg-white rounded-md p-6 shadow-md mt-10 md:mx-auto md:w-1/2">
          <h1 className="text-lg text-primary md:text-center font-bold">
            Mis consultas
          </h1>
        </div>
      </div>
    </div>
  );
};

export default MyQueries;
