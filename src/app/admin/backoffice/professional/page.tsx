'use client';
import React, { useEffect, useState } from 'react';
import Select from '@/components/custom/ControllerSelect/Select';
import HeaderTitle from '@/components/custom/HeaderTitle';
import Button from '@/components/custom/Button';
import ProfessionalTable from '@/components/BackOffice/Professional/ProfessionalTable';
import Link from 'next/link';
import { getProfessionals } from '@/services/profesional';
import { getProfessions } from '@/services/profesion';
import { Skeleton } from '@/components/ui/skeleton';
import { getCities } from '@/services/city';

interface Professional {
  id: number;
  documentId: string;
  name: string;
  slug: string;
  image: string;
}
const Professional = () => {
  const [professionals, setProfessionals] = useState([]);
  const [professions, setProfessions] = useState([]);
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProfessionalsData();
    getProfessionsAndCitiesData();
  }, []);

  const getProfessionalsData = async () => {
    setIsLoading(true);
    const { data } = await getProfessionals();
    setProfessionals(data);
    setIsLoading(false);
  };

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

  const selectOptions = professions?.map((item: Professional) => ({
    label: item.name,
    value: item.name,
  }));

  const selectOptionsCities = cities?.map((item: Professional) => ({
    label: item.name,
    value: item.name,
  }));

  return (
    <div className="space-y-8">
      <HeaderTitle title="Profesionales" />
      <div>
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="w-full md:w-1/3 ">
            <Link href={'professional/create'}>
              <Button className="w-full md:w-auto">Agregar profesional</Button>
            </Link>
          </div>
          {professionals.length > 0 && (
            <Select
              id="profesiones"
              placeholder="Selecciona una profesión"
              className="w-full md:w-1/3"
              options={selectOptions}
            />
          )}
        </div>
        <div className="py-4">
          {isLoading ? (
            <div className="space-y-4 mt-6">
              <Skeleton className="h-8 w-full rounded-md" />
              <Skeleton className="h-8 w-full rounded-md" />
              <Skeleton className="h-8 w-full rounded-md" />
              <Skeleton className="h-8 w-full rounded-md" />
            </div>
          ) : professionals.length === 0 ? (
            <h1 className="text-center text-gray-500">
              No se encontraron profesionales
            </h1>
          ) : (
            <ProfessionalTable
              professionals={professionals}
              onSuccess={getProfessionalsData}
              professions={selectOptions}
              cities={selectOptionsCities}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Professional;
