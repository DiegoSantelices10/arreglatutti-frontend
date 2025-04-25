'use client';
import CityTable from '@/components/BackOffice/City/CityTable';
import Button from '@/components/custom/Button';
import HeaderTitle from '@/components/custom/HeaderTitle';
import { Skeleton } from '@/components/ui/skeleton';
import { getCities } from '@/services/city';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const City = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    getCitiesData();
  }, []);

  const getCitiesData = async () => {
    setIsLoading(true);
    const { data } = await getCities();
    setCities(data);
    setIsLoading(false);
  };

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
          {isLoading ? (
            <div className="space-y-4 mt-6">
              <Skeleton className="h-8 w-full rounded-md" />
              <Skeleton className="h-8 w-full rounded-md" />
              <Skeleton className="h-8 w-full rounded-md" />
              <Skeleton className="h-8 w-full rounded-md" />
            </div>
          ) : cities.length === 0 ? (
            <p className="text-center text-gray-500">
              No se encontraron profesionales
            </p>
          ) : (
            <CityTable cities={cities} />
          )}
        </div>
      </div>
    </div>
  );
};

export default City;
