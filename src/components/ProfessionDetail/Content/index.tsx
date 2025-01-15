/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import Button from '@/components/custom/Button';
import Drawer from '@/components/custom/Drawer';
import React, { FC, useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import LocationIcon from '../../../../public/images/location-icon';
import { getProfessionals } from '@/services/profesional';
import { FieldValues, useForm } from 'react-hook-form';
import ControllerSelect from '@/components/custom/ControllerSelect';
import { Skeleton } from '@/components/ui/skeleton';

const Content: FC<any> = (props) => {
  const { data, cities, profession, isLoading } = props;

  const { control, watch } = useForm<FieldValues>({
    defaultValues: {
      city: '',
    },
  });

  const city = watch('city');

  const [professionals, setProfessionals] = useState(data);

  const getProfessionalByCity = async (city: string) => {
    const { data } = await getProfessionals(profession, city);
    console.log('entro', data);

    setProfessionals(data);
  };

  useEffect(() => {
    if (city) getProfessionalByCity(city);
  }, [city]);

  const citiesList = cities?.map((item: any) => {
    return {
      label: item.name,
      value: item.name,
    };
  });

  const professionText = decodeURIComponent(profession);

  const titleProfessionalEnum: Record<string, string> = {
    Gasista: 'Gasistas',
    Electricista: 'Electricistas',
    Pintor: 'Pintores',
    Albañil: 'Albañiles',
    Plomero: 'Plomeros',
    Mecanico: 'Mecanicos',
    'Técnico aire acondicionado': 'Técnicos aire acondicionado',
    'Técnico de refrigeracion': 'Técnicos de refrigeracion',
    Fletes: 'Fletes',
  };
  return (
    <div className="px-4 md:px-14 space-y-6">
      <div className="bg-white rounded p-6 shadow-md mt-10 md:mx-auto md:w-1/2">
        <p className="text-sm px-1 font-medium pb-1">En que zona buscas?</p>
        {isLoading ? (
          <Skeleton className="h-8 w-full bg-gray-200" />
        ) : (
          <ControllerSelect
            id="city"
            placeholder="Selecciona un barrio"
            options={citiesList}
            control={control}
            name="city"
          />
        )}
      </div>
      <div className="space-y-6">
        <div className="w-full">
          <h1 className="text-lg text-primary font-bold">
            {titleProfessionalEnum[professionText]}
          </h1>
          <div className="h-[1px] w-full bg-gray-300" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading ? (
            <Skeleton className="h-40 w-full bg-gray-200" />
          ) : professionals?.length > 0 ? (
            data.map((professional: any) => (
              <div key={professional._id}>
                <div className="rounded bg-white p-4 shadow-md">
                  <div className="space-y-1">
                    <h1 className="text-primary font-semibold">
                      {professional.name}
                    </h1>
                    <div className="flex gap-1 items-center">
                      <LocationIcon className="size-4 text-textSecondary" />
                      <h1 className="text-xs text-textSecondary">
                        {professional.cities[0]}
                      </h1>
                    </div>
                    <p className="text-xs text-textSecondary font-normal pt-2">
                      {professional.description}
                    </p>
                  </div>
                  <div className="mt-4 h-[1px] bg-gray-200" />
                  <div className="flex justify-between items-center mt-4">
                    <Drawer
                      name={professional.name}
                      imagesWorks={professional.image}
                      email={professional.email}
                      telephone={professional.telephone}
                    />
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={`https://api.whatsapp.com/send?phone=549${professional.telephone}&text=Hola,%20necesito%20realizar%20una%20consulta`}
                    >
                      <Button>
                        <FaWhatsapp />
                        Contactame
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-textSecondary">
              No hay resultados disponibles.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Content;
