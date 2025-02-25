import React from 'react';
import Select from '@/components/custom/ControllerSelect/Select';
import HeaderTitle from '@/components/custom/HeaderTitle';
import { profesionesData } from '@/mocks/profession';
import Button from '@/components/custom/Button';
import ProfessionalTable from '@/components/BackOffice/Professional/ProfessionalTable';
import Link from 'next/link';
import { getProfessionals } from '@/services/profesional';

interface Professional {
  id: number;
  documentId: string;
  name: string;
  slug: string;
  image: string;
}
const Professional = async () => {
  const selectOptions = profesionesData?.map((item: Professional) => ({
    label: item.name,
    value: item.name,
  }));

  const { data } = await getProfessionals();

  return (
    <div className="space-y-8">
      <HeaderTitle title="Profesionales" />
      <div>
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="w-full md:w-1/3 flex justify-start">
            <Link href={'/admin/backoffice/professional/create'}>
              <Button className="w-full md:w-auto">Agregar profesional</Button>
            </Link>
          </div>
          <Select
            id="profesiones"
            placeholder="Selecciona una profesión"
            className="w-full md:w-1/3"
            options={selectOptions}
          />
        </div>
        <div className="py-4">
          {data.length === 0 ? (
            <h1 className="text-center text-gray-500">
              No se encontraron profesionales
            </h1>
          ) : (
            <ProfessionalTable data={data} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Professional;
