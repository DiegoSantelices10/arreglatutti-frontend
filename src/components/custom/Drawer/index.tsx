'use client';
import React, { FC } from 'react';
import {
  Drawer as DrawerUI,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { Button } from '@/components/ui/button';
import { FaUser } from 'react-icons/fa';
import Carousel from '../Carousel';
import LocationIcon from '../../../../public/images/location-icon';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import Avatar from '../Avatar';

interface IDrawerProps {
  name: string;
  cities: string[];
  description: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  imagesWorks: any;
}

const Drawer: FC<IDrawerProps> = (props) => {
  const { imagesWorks, name, cities, description } = props;

  return (
    <DrawerUI>
      <DrawerTrigger asChild>
        <Button className="flex text-secondary hover:text-white hover:bg-secondary bg-gray-100 border-secondary font-semibold justify-center items-center gap-2 px-4 text-[14px]">
          Ver perfil
          <FaUser />
        </Button>
      </DrawerTrigger>

      <DrawerContent className="md:w-1/2 mx-auto bg-gray-50">
        <DrawerHeader className="p-0">
          <VisuallyHidden.Root>
            <DrawerTitle className="text-primary text-center font-bold font-roboto">
              {name}
            </DrawerTitle>
          </VisuallyHidden.Root>
        </DrawerHeader>
        <div className="px-4 space-y-12">
          <div>
            <h2 className="text-primary font-bold text-xl text-center pb-2">
              Datos personales
            </h2>
            <div className="bg-white shadow-sm p-4 min-h-32 rounded-lg">
              <div className="flex justify-between items-start  gap-6">
                <Avatar className="w-14 h-14" image={'/images/avatar.png'} />
                <div className="w-full">
                  <div className="flex gap-2 items-center">
                    <h2 className="text-primary font-semibold text-lg">
                      {name}
                    </h2>
                  </div>
                  <div className="flex gap-2 items-center">
                    <LocationIcon className="size-4 text-textSecondary" />
                    {cities.map((city, index) => (
                      <h2
                        key={index}
                        className="text-textSecondary font-normal text-base"
                      >
                        {city}
                        {index < cities.length - 1 && ', '}
                      </h2>
                    ))}
                  </div>
                </div>
              </div>
              {description && (
                <div className="mt-4">
                  <p className="text-textSecondary font-normal text-base">
                    {description}
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="w-full bg-white rounded-lg shadow-sm p-4">
            <Carousel images={imagesWorks} />
          </div>
        </div>

        <DrawerFooter className="flex justify-end pt-10"></DrawerFooter>
      </DrawerContent>
    </DrawerUI>
  );
};

export default Drawer;
