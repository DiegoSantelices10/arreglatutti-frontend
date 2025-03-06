'use client';
import CreateForm from '@/components/BackOffice/Professional/CreateForm';
import HeaderTitle from '@/components/custom/HeaderTitle';
import { getCities } from '@/services/city';
import { getProfessions } from '@/services/profesion';
import React, { useEffect, useState } from 'react';

const CreateProfessional = () => {
  const [professions, setProfessions] = useState([]);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    getProfessionsAndCitiesData();
  }, []);

  const getCitiesData = async () => {
    const { data, status } = await getCities();
    if (status !== 200) {
      return;
    }
    setCities(data);
  };

  const getProfessionsAndCitiesData = async () => {
    const { data, status } = await getProfessions();
    if (status !== 200) {
      return;
    }
    setProfessions(data);
    getCitiesData();
  };

  return (
    <div className="space-y-4">
      <HeaderTitle title="Nuevo Profesional" />
      <CreateForm professionList={professions} cityList={cities} />
    </div>
  );
};

export default CreateProfessional;
