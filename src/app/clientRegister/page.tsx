'use client';
import CreateForm from '@/components/BackOffice/ClientRegister/CreateForm';
import { getProfessions } from '@/services/profesion';
import React, { FC, useEffect, useState } from 'react';

const ClientRegister: FC = () => {
  const [professions, setProfessions] = useState([]);

  useEffect(() => {
    getProfessionData();
  }, []);

  const getProfessionData = async () => {
    const { data, status } = await getProfessions();
    if (status !== 200) {
      return;
    }
    setProfessions(data);
  };

  return (
    <div className="space-y-4 w-full md:w-8/12 grid content-center mx-auto">
      <div className="rounded-md bg-white px-4 min-h-screen">
        <CreateForm professionList={professions} />
      </div>
    </div>
  );
};

export default ClientRegister;
