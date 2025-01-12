'use client';
import React, { FC, ReactNode } from 'react';
import {
  Drawer as DrawerUI,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { Button } from '@/components/ui/button';
import { FaUser, FaWhatsapp } from 'react-icons/fa';
import Carousel from '../Carousel';
import DniIcon from '../../../../public/images/dni-icon';
import TelephoneIcon from '../../../../public/images/telephone-icon';
import EmailIcon from '../../../../public/images/email-icon';
import LocationIcon from '../../../../public/images/location-icon';

interface IDrawerProps {
  buttonTrigger?: ReactNode;
  telephone: string;
  name: string;
  email: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  imagesWorks: any;
}

const Drawer: FC<IDrawerProps> = (props) => {
  const { telephone, email, imagesWorks, name } = props;

  return (
    <DrawerUI>
      <DrawerTrigger asChild>
        <Button className="flex text-secondary hover:text-white hover:bg-secondary bg-gray-100 border-secondary font-semibold justify-center items-center gap-2 px-4 rounded h-9 text-[14px]">
          <FaUser />
          Ver perfil
        </Button>
      </DrawerTrigger>

      <DrawerContent className="md:w-1/2 mx-auto">
        <DrawerHeader>
          <DrawerTitle className="text-primary font-semibold">
            {name}
          </DrawerTitle>
        </DrawerHeader>
        <div className="h-[1px] w-full bg-gray-300" />
        <div className="p-4">
          <div className="text-sm w-full space-y-2">
            <div className="flex gap-2 items-center">
              <LocationIcon className="size-4" />
              <h2>Belgrano, nuñez, Saavedra</h2>
            </div>
            <div className="flex gap-2 items-center">
              <DniIcon className="size-4" />
              <h2>33781733</h2>
            </div>
            <div className="flex gap-2 items-center">
              <TelephoneIcon className="size-4" />
              <h2>{telephone}</h2>
            </div>
            <div className="flex gap-2 items-center">
              <EmailIcon className="size-4" />
              <h2>{email}</h2>
            </div>
          </div>

          <div className="w-full mt-2">
            <h2 className="text-primary text-sm font-semibold py-2 pb-4">
              Trabajos Realizados
            </h2>
            <Carousel images={imagesWorks} />
          </div>
        </div>

        <DrawerFooter className="flex justify-end">
          <Button className="mt-2">
            <a
              className="flex justify-end w-auto items-center gap-2"
              target="_blank"
              rel="noreferrer"
              href={`https://api.whatsapp.com/send?phone=549${telephone}&text=Hola,%20necesito%20realizar%20una%20consulta`}
            >
              Contactame
              <FaWhatsapp />
            </a>
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </DrawerUI>
  );
};

export default Drawer;
