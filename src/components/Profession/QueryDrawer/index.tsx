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
import { FaEnvelope } from 'react-icons/fa';

import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import ControllerTextArea from '@/components/custom/ControllerTextArea';
import { FieldValues, useForm } from 'react-hook-form';

interface IQueryDrawerProps {
  buttonTrigger?: ReactNode;
  name: string;
  profession: string;
}

const QueryDrawer: FC<IQueryDrawerProps> = (props) => {
  const { name, profession } = props;
  const { control, handleSubmit } = useForm<FieldValues>({
    defaultValues: {
      professionalName: '',
      profession: '',
      description: '',
    },
  });

  const onSubmit = (value: FieldValues) => {
    const newQuery = {
      professionalName: name,
      profession,
      description: value.description,
    };
    console.log('newQuery', newQuery);
  };

  return (
    <DrawerUI>
      <DrawerTrigger asChild>
        <Button className="flex   font-semibold justify-center items-center gap-2 px-4 text-[14px]">
          Dejame tu consulta
          <FaEnvelope />
        </Button>
      </DrawerTrigger>

      <DrawerContent className="md:w-1/2 mx-auto bg-gray-50">
        <DrawerHeader className="p-0">
          <VisuallyHidden.Root>
            <DrawerTitle className="text-primary text-center font-bold font-roboto"></DrawerTitle>
          </VisuallyHidden.Root>
        </DrawerHeader>
        <div className="px-4 space-y-4">
          <div>
            <h2 className="text-primary font-bold text-xl text-center pb-2">
              Dejame tu consulta
            </h2>
          </div>
          <div className="pb-10">
            <label
              htmlFor="description"
              className="mb-1 block text-xs font-medium text-primary"
            >
              Descripción
            </label>
            <ControllerTextArea
              id="description"
              control={control}
              placeholder="Ingrese una descripción del inconveniente a solucionar"
              name="description"
            />
          </div>
        </div>

        <DrawerFooter className="flex justify-end pt-10">
          <Button className="w-full" onClick={handleSubmit(onSubmit)}>
            Enviar consulta
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </DrawerUI>
  );
};

export default QueryDrawer;
