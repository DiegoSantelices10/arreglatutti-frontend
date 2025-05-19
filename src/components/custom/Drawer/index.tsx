/* eslint-disable @typescript-eslint/no-explicit-any */
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
import Avatar from '../Avatar';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';

interface IDrawerProps {
  name: string;
  description: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  imagesWorks: any;
  imageUser: any;
}

const Drawer: FC<IDrawerProps> = (props) => {
  const { imagesWorks, name, description, imageUser } = props;

  return (
    <DrawerUI>
      <DrawerTrigger asChild>
        <Button className="flex text-secondary hover:text-white hover:bg-secondary bg-gray-100 border-secondary font-semibold justify-center items-center gap-2 px-4 text-[14px]">
          Ver perfil
          <FaUser />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="md:max-w-xl z-[99999] mx-auto border-0 border-none bg-slate-50 ">
        <DrawerHeader className="bg-primary p-3 flex justify-center items-center">
          <DrawerTitle className="text-white text-center text-xl font-bold">
            Perfil
          </DrawerTitle>
          <DrawerDescription></DrawerDescription>
        </DrawerHeader>
        <div className="p-2 md:p-4 space-y-4 gap-4 h-full max-h-[70vh] overflow-y-auto">
          <div className="bg-white shadow-sm p-4 w-full rounded-lg">
            <div className="flex flex-col justify-center items-center gap-4">
              <Avatar className="w-24 h-24" image={imageUser.url} />
              <h2 className="text-primary font-semibold text-lg">{name}</h2>
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
    </DrawerUI>
  );
};

export default Drawer;
