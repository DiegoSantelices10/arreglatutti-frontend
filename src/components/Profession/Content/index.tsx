/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React, { FC, useEffect, useState } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { titleProfessionalEnum } from '../utils';
import { getProfessionals } from '@/services/profesional';
import QueryDrawer from '../QueryDrawer';
import Modal from '@/components/custom/Modal';
import Button from '@/components/custom/Button';
import Carousel from '@/components/custom/Carousel';
import { FaRegImage } from 'react-icons/fa6';

interface IContentProps {
  profession: string;
}

const Content: FC<IContentProps> = (props) => {
  const { profession } = props;

  const [professionals, setProfessionals] = useState<any[]>([]);
  const [professionSelect, setProfessionSelect] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      if (profession) {
        setProfessionSelect(profession);
        const { data } = await getProfessionals(profession);

        setProfessionals(data);
        setIsLoading(false);
      }
    })();
  }, []);

  const professionText = decodeURIComponent(professionSelect);

  return (
    <div className="relative z-20 min-h-screen overflow-hidden pt-[40px] bg-[#FAFAFB] pb-10">
      <div className="p-4 md:px-14 space-y-6 max-w-[80vw] mx-auto">
        <div className="space-y-6">
          <div className="w-full">
            <h2 className="text-lg text-primary font-bold">
              {titleProfessionalEnum[professionText]}
            </h2>
            <div className="h-[1px] w-full bg-gray-300" />
          </div>
          <div className="w-full grid grid-cols-1 gap-6">
            {isLoading ? (
              <Skeleton className="h-40 w-full bg-gray-200 rounded-md" />
            ) : professionals && professionals?.length > 0 ? (
              professionals?.map((professional: any) => (
                <div key={professional._id}>
                  <div className="rounded-md flex flex-col justify-between bg-white p-4 shadow-sm h-full">
                    <div className="space-y-1">
                      <h2 className="text-primary font-semibold">
                        {professional.name}
                      </h2>

                      <div>
                        <p className="text-xs text-textSecondary font-normal">
                          {professional.description}
                        </p>
                      </div>
                    </div>
                    <div>
                      <div className="mt-4 h-[1px] bg-gray-200" />
                      <div className="flex justify-between items-center mt-4">
                        <QueryDrawer
                          name={professional.name}
                          profession={professional.profession}
                        />

                        <Modal
                          title="Imagenes de trabajos"
                          triggerButton={
                            <Button className="flex text-secondary hover:text-white hover:bg-secondary bg-gray-100 border-secondary font-semibold justify-center items-center gap-2 px-4 text-[14px]">
                              Ver trabajos
                              <FaRegImage size={20} />
                            </Button>
                          }
                        >
                          <Carousel images={professional.images} />
                        </Modal>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center col-span-2 text-textSecondary">
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
