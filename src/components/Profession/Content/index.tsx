/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import Button from '@/components/custom/Button';
import Drawer from '@/components/custom/Drawer';
import React, { FC, useEffect, useState } from 'react';
import LocationIcon from '../../../../public/images/location-icon';
import { Skeleton } from '@/components/ui/skeleton';
import { titleProfessionalEnum } from '../utils';
import CitiesSelect from '../CitiesSelect';
import { getProfessionals } from '@/services/profesional';
import { FieldValues, useForm } from 'react-hook-form';
import SignInSignUp from '@/components/Header/SignInSignUp';
import ModalOfConsultation from './ModalOfConsultation';

interface IContentProps {
  profession: string;
  isLoggedIn: boolean;
  userId?: string;
}

const Content: FC<IContentProps> = (props) => {
  const { profession, isLoggedIn, userId } = props;

  const [professionals, setProfessionals] = useState<any[]>([]);
  const [professionSelect, setProfessionSelect] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const { control, watch } = useForm<FieldValues>({
    defaultValues: {
      city: '',
    },
  });

  const citySelected = watch('city');

  useEffect(() => {
    if (citySelected) {
      getProfessionalsByCity(citySelected);
      return;
    }
    (async () => {
      if (profession) {
        setProfessionSelect(profession);
        const { data } = await getProfessionals(profession);
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
                      {isLoggedIn && userId ? (
                        <ModalOfConsultation
                          professional={professional}
                          userId={userId}
                        />
                      ) : (
                        <SignInSignUp
                          triggerButton={<Button>Dejame tu consulta</Button>}
                        />
                      )}
                      {/* <a
                          target="_blank"
                          rel="noreferrer"
                          href={`https://api.whatsapp.com/send?phone=549${professional.telephone}&text=Hola,%20necesito%20realizar%20una%20consulta`}
                        >
                          <Button>Dejame tu consulta</Button>
                        </a> */}
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

export default Content;
