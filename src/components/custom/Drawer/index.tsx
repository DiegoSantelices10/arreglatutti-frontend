'use client';
import React, { FC } from 'react';
import {
  Drawer as DrawerUI,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerDescription,
} from '@/components/ui/drawer';
import { Button } from '@/components/ui/button';
import { FaUser } from 'react-icons/fa';
import Carousel from '../Carousel';
import LocationIcon from '../../../../public/images/location-icon';
import Avatar from '../Avatar';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';

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
      <div className="mx-auto w-full max-w-sm">
        <DrawerContent className="md:w-1/2 mx-auto border-0 border-none bg-slate-50">
          <DrawerHeader className="bg-primary p-3 flex justify-center items-center">
            <DrawerTitle className="text-white text-center text-xl font-bold">
              Perfil
            </DrawerTitle>
            <DrawerDescription></DrawerDescription>
          </DrawerHeader>
          <div className="p-2 md:p-4 grid content-center gap-4 h-full">
            <div className="bg-white shadow-sm p-4 min-h-32 rounded-lg">
              <div className="flex justify-between items-start  gap-4">
                <Avatar className="w-14 h-14" image={'/images/avatar.png'} />
                <div className="w-full">
                  <div className="flex gap-2 items-center">
                    <h2 className="text-primary font-semibold text-lg">
                      {name}
                    </h2>
                  </div>
                  <div className="flex gap-1 items-center">
                    <LocationIcon className="size-4 text-textSecondary" />
                    {cities.map((city, index) => (
                      <h2
                        key={index}
                        className="text-textSecondary font-normal text-sm"
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
                  <p className="text-textSecondary font-normal text-sm">
                    {description}
                  </p>
                </div>
              )}
            </div>
            <div className="w-full bg-white rounded-lg shadow-sm p-4">
              <Carousel images={imagesWorks} />
            </div>
          </div>
          <VisuallyHidden.Root>
            <DrawerFooter></DrawerFooter>
          </VisuallyHidden.Root>
        </DrawerContent>
      </div>
    </DrawerUI>
  );
};

export default Drawer;
