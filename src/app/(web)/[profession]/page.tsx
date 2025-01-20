/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React, { FC, useEffect } from 'react';
import { getProfessionals } from '@/services/profesional';
import Button from '@/components/custom/Button';
import { FaWhatsapp } from 'react-icons/fa';
import Drawer from '@/components/custom/Drawer';
import LocationIcon from '../../../../public/images/location-icon';
import { Skeleton } from '@/components/ui/skeleton';
import { FieldValues, useForm } from 'react-hook-form';
import CitiesSelect from '@/components/Profession/CitiesSelect';
import { titleProfessionalEnum } from '@/components/Profession/utils';

interface IProfessionDetail {
  params: Promise<{ profession: string }>;
}

const ProfessionDetail: FC<IProfessionDetail> = ({ params }) => {
  const [professionals, setProfessionals] = React.useState<any[]>([]);
  const [professionSelect, setProfessionSelect] = React.useState<string>('');
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  const { control, watch } = useForm<FieldValues>({
    defaultValues: {
      city: '',
    },
  });

  const citySelected = watch('city');

  useEffect(() => {
    console.log('por aca');

    if (citySelected) {
      getProfessionalsByCity(citySelected);
      return;
    }
    (async () => {
      console.log('aca');

      const { profession } = await params;
      if (profession) {
        console.log('entro');
        setProfessionSelect(profession);
        const { data } = await getProfessionals(profession);
        console.log('data', data);
        setProfessionals(data);
        setIsLoading(false);
      }
    })();
  }, [citySelected]);

  const getProfessionalsByCity = async (city: string) => {
    setIsLoading(true);
    const { data } = await getProfessionals(professionSelect, city);
    setProfessionals(data);
    setIsLoading(false);
  };

  const professionText = decodeURIComponent(professionSelect);

  return (
    <div className="relative z-20 min-h-screen overflow-hidden pt-[80px] bg-[#FAFAFB] pb-10">
      <div className="absolute w-full h-24 rounded-b-3xl bg-primary -z-10" />
      <div className="px-4 md:px-14 space-y-6">
        <CitiesSelect
          control={control}
          name="city"
          placeholder="Selecciona un barrio"
        />
        <div className="space-y-6">
          <div className="w-full">
            <h1 className="text-lg text-primary font-bold">
              {titleProfessionalEnum[professionText]}
            </h1>
            <div className="h-[1px] w-full bg-gray-300" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {isLoading ? (
              <Skeleton className="h-40 w-full bg-gray-200 rounded-md" />
            ) : professionals && professionals?.length > 0 ? (
              professionals.map((professional: any) => (
                <div key={professional._id}>
                  <div className="rounded-md bg-white p-4 shadow-md">
                    <div className="space-y-1">
                      <h1 className="text-primary font-semibold">
                        {professional.name}
                      </h1>
                      <div className="flex gap-1 items-center">
                        <LocationIcon className="size-[14px] text-textSecondary" />
                        {professional.cities.map(
                          (city: string, index: number) => (
                            <h1
                              className="text-xs text-textSecondary"
                              key={index}
                            >
                              {city}
                              {index < professional.cities.length - 1 && ', '}
                            </h1>
                          )
                        )}
                      </div>

                      <p className="text-xs text-textSecondary font-normal">
                        {professional.description}
                      </p>
                    </div>
                    <div className="mt-4 h-[1px] bg-gray-200" />
                    <div className="flex justify-between items-center mt-4">
                      <Drawer
                        cities={professional.cities}
                        dni={professional.dni}
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
                          Contactame
                          <FaWhatsapp />
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-textSecondary">
                Sin resultados para mostrar
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionDetail;
