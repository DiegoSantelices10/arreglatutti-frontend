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
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';

interface IDrawerProps {
  buttonTrigger?: ReactNode;
  telephone: string;
  name: string;
  email: string;
  cities: string[];
  dni: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  imagesWorks: any;
}

const Drawer: FC<IDrawerProps> = (props) => {
  const { telephone, email, imagesWorks, name, cities, dni } = props;

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
        <div className="px-4 space-y-4">
          <div>
            <h2 className="text-primary font-medium text-center pb-2">
              Datos personales
            </h2>
            <div className="text-sm w-full space-y-3 p-4 bg-white rounded-md">
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
              <div className="flex gap-2 items-center">
                <DniIcon className="size-4 text-textSecondary" />
                <h2 className="text-textSecondary font-normal text-base">
                  {dni}
                </h2>
              </div>
              <div className="flex gap-2 items-center">
                <TelephoneIcon className="size-4 text-textSecondary" />
                <h2 className="text-textSecondary font-normal text-base">
                  {telephone}
                </h2>
              </div>
              <div className="flex gap-2 items-center">
                <EmailIcon className="size-4 text-textSecondary" />
                <h2 className="text-textSecondary font-normal text-base">
                  {email}
                </h2>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-primary font-medium text-center py-2">
              Trabajos Realizados
            </h2>
            <div className="w-full bg-white rounded-md p-4">
              <Carousel images={imagesWorks} />
            </div>
          </div>
        </div>

        <DrawerFooter className="flex justify-end pt-10">
          <Button className="w-full">
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
