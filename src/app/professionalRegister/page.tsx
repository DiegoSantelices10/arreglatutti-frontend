'use client';
import CreateForm from '@/components/BackOffice/ProfessionalRegister/CreateForm';
import { getCities } from '@/services/city';
import { getProfessions } from '@/services/profesion';
import React, { FC, useEffect, useState } from 'react';

const ProfessionalRegister: FC = () => {
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
    <div className="space-y-4 w-full md:w-8/12 grid content-center mx-auto">
      <div className="rounded-md bg-white px-4 min-h-screen">
        <CreateForm professionList={professions} cityList={cities} />
      </div>
    </div>
  );
};

export default ProfessionalRegister;
