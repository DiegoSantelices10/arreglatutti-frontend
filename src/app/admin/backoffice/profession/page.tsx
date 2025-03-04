/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import ProfessionTable from '@/components/BackOffice/Profession/ProfessionTable';
import Button from '@/components/custom/Button';
import HeaderTitle from '@/components/custom/HeaderTitle';
import { Skeleton } from '@/components/ui/skeleton';
import { getProfessions } from '@/services/profesion';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Profession = () => {
  const [professions, setProfessions] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProfessionsData();
  }, []);

  const getProfessionsData = async () => {
    setIsLoading(true);
    const { data } = await getProfessions();
    setProfessions(data);
    setIsLoading(false);
  };

  return (
    <div className="space-y-8">
      <HeaderTitle title="Profesiones" />
      <div>
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="w-full md:w-1/3 flex justify-start">
            <Link href={'/admin/backoffice/profession/create'}>
              <Button className="w-full md:w-auto">Agregar profesión</Button>
            </Link>
          </div>
        </div>
        <div className="py-4">
          {isLoading ? (
            <div className="space-y-4 mt-6">
              <Skeleton className="h-8 w-full rounded-md" />
              <Skeleton className="h-8 w-full rounded-md" />
              <Skeleton className="h-8 w-full rounded-md" />
              <Skeleton className="h-8 w-full rounded-md" />
            </div>
          ) : professions.length === 0 ? (
            <h1 className="text-center text-gray-500">
              No se encontraron profesionales
            </h1>
          ) : (
            <ProfessionTable professions={professions} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Profession;
