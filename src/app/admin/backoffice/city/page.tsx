import CityTable from '@/components/BackOffice/City/CityTable';
import Button from '@/components/custom/Button';
import HeaderTitle from '@/components/custom/HeaderTitle';
import { getCities } from '@/services/city';
import Link from 'next/link';
import React from 'react';

const City = async () => {
  const { data } = await getCities();

  return (
    <div className="space-y-8">
      <HeaderTitle title="Barrios" />
      <div>
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="w-full md:w-1/3 flex justify-start">
            <Link href={'/admin/backoffice/city/create'}>
              <Button className="w-full md:w-auto">Agregar barrio</Button>
            </Link>
          </div>
        </div>
        <div className="py-4">
          <CityTable data={data} />
        </div>
      </div>
    </div>
  );
};

export default City;
