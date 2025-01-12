import CreateForm from '@/components/BackOffice/Professional/CreateForm';
import HeaderTitle from '@/components/custom/HeaderTitle';
import { getCities } from '@/services/city';
import { getProfessions } from '@/services/profesion';
import React from 'react';

const CreateProfessional = async () => {
  const { data: professions } = await getProfessions();
  const { data: cities } = await getCities();

  return (
    <div className="space-y-4">
      <HeaderTitle title="Nuevo Profesional" />
      <CreateForm professionList={professions} cityList={cities} />
    </div>
  );
};

export default CreateProfessional;
