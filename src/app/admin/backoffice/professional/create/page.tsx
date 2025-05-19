'use client';
import CreateForm from '@/components/BackOffice/Professional/CreateForm';
import HeaderTitle from '@/components/custom/HeaderTitle';
import { getProfessions } from '@/services/profesion';
import React, { useEffect, useState } from 'react';

const CreateProfessional = () => {
  const [professions, setProfessions] = useState([]);

  useEffect(() => {
    getProfessionsAndCitiesData();
  }, []);

  const getProfessionsAndCitiesData = async () => {
    const { data, status } = await getProfessions();
    if (status !== 200) {
      return;
    }
    setProfessions(data);
  };

  return (
    <div className="space-y-4">
      <HeaderTitle title="Nuevo Profesional" />
      <CreateForm professionList={professions} />
    </div>
  );
};

export default CreateProfessional;
