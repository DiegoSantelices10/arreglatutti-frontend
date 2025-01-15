/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React, { FC, useEffect } from 'react';
import { getProfessionals } from '@/services/profesional';
import { getCities } from '../../../services/city/index';
import Button from '@/components/custom/Button';
import { FaWhatsapp } from 'react-icons/fa';
import Drawer from '@/components/custom/Drawer';
import LocationIcon from '../../../../public/images/location-icon';
import { Skeleton } from '@/components/ui/skeleton';
import ControllerSelect from '@/components/custom/ControllerSelect';
import { FieldValues, useForm } from 'react-hook-form';

interface IProfessionDetail {
  params: Promise<{ profession: string }>;
}

const ProfessionDetail: FC<IProfessionDetail> = ({ params }) => {
  const [cities, setCities] = React.useState<any[]>([]);
  const [professionals, setProfessionals] = React.useState<any[]>([]);
  const [professionSelect, setProfessionSelect] = React.useState<string>('');
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const { control } = useForm<FieldValues>({
    defaultValues: {
      city: '',
    },
  });

  useEffect(() => {
    (async () => {
      const { profession } = await params;
      if (profession) {
        setIsLoading(true);
        setProfessionSelect(profession);
        const { data } = await getProfessionals(profession);
        const { data: cities } = await getCities();

        setProfessionals(data);
        setCities(cities);
        setIsLoading(false);
      }
    })();
  }, []);

  const citiesList = cities?.map((item: any) => {
    return {
      label: item.name,
      value: item.name,
    };
  });

  const professionText = decodeURIComponent(professionSelect);

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

  // const getProfessionalByCity = async (city: string) => {
  //   const { data } = await getProfessionals(profession, city);
  //   console.log('entro', data);

  //   setProfessionals(data);
  // };

  // useEffect(() => {
  //   setProfessionals(professional);
  //   if (city) getProfessionalByCity(city);
  // }, [city]);

  return (
    <div className="relative z-20 min-h-screen overflow-hidden pt-[80px] bg-[#FAFAFB] pb-10">
      <div className="absolute w-full h-24 rounded-b-3xl bg-primary -z-10" />
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
            ) : professionals && professionals?.length > 0 ? (
              professionals.map((professional: any) => (
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
    </div>
  );
};

export default ProfessionDetail;
