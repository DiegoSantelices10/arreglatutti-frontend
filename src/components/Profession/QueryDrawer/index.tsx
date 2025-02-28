'use client';
import React, { FC, ReactNode, useState } from 'react';
import {
  Drawer as DrawerUI,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerDescription,
} from '@/components/ui/drawer';
import { FaEnvelope } from 'react-icons/fa';

import ControllerTextArea from '@/components/custom/ControllerTextArea';
import { useForm } from 'react-hook-form';
import { formSchema, FormSchemaType } from './schema';
import { zodResolver } from '@hookform/resolvers/zod';
import ControllerInput from '@/components/custom/ControllerInput';
import Button from '@/components/custom/Button';
import {
  createConsultation,
  IMessage,
  IResponse,
} from '@/services/consultation';
import { toast } from '@/hooks/use-toast';
import axios from 'axios';

interface IQueryDrawerProps {
  buttonTrigger?: ReactNode;
  name: string;
  profession: string;
}

const QueryDrawer: FC<IQueryDrawerProps> = (props) => {
  const { name, profession } = props;

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const {
    control,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      profession: profession || '',
      telephone: '',
      message: '',
      professionalName: name || '',
    },
    mode: 'onTouched',
  });

  const buttonIsDisabled = !isValid || isLoading;

  const sendEmail = async (value: IMessage) => {
    return await axios.post('/api/consultationEmail', value);
  };

  const onSubmit = async (value: FormSchemaType) => {
    setIsLoading(true);
    const { status }: IResponse = await createConsultation(value as IMessage);

    if (status !== 201) {
      toast({
        title: 'Error',
        description:
          'Ocurrio un error al enviar la solicitud, intente nuevamente más tarde.',
        variant: 'error',
      });
      setIsLoading(false);
      return;
    }

    const response = await sendEmail(value as IMessage);

    if (response.status !== 200) {
      toast({
        title: 'Error',
        description:
          'Ocurrio un error al enviar la solicitud, intente nuevamente más tarde.',
        variant: 'error',
      });
      setIsLoading(false);
      return;
    }
    setIsOpen(false);
    toast({
      title: 'Enviado',
      description:
        'Gracias por contactarnos, pronto nos pondremos en contacto con usted.',
    });
    reset();
    setIsLoading(false);
  };

  return (
    <DrawerUI open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>
        <Button className="flex font-semibold justify-center items-center gap-2 px-4 text-[14px]">
          Dejame tu consulta
          <FaEnvelope />
        </Button>
      </DrawerTrigger>

      <DrawerContent className="md:w-1/2 bg-slate-50 mx-auto border-0 border-none z-[999999]">
        <DrawerHeader className="p-3 bg-primary flex items-center justify-center">
          <DrawerTitle className="text-white text-center font-bold text-xl">
            Nueva consulta
          </DrawerTitle>
          <DrawerDescription></DrawerDescription>
        </DrawerHeader>

        <div className="p-2 md:p-4  grid content-center h-full">
          <div className="space-y-6 bg-white shadow-sm rounded-lg p-2 py-6">
            <div>
              <label
                htmlFor="name"
                className="mb-1 block text-xs font-medium text-primary"
              >
                Nombre completo
              </label>
              <ControllerInput
                id="name"
                control={control}
                placeholder="Ingrese su nombre completo"
                name="name"
              />
            </div>
            <div>
              <label
                htmlFor="telephone"
                className="mb-1 block text-xs font-medium text-primary"
              >
                Telefono
              </label>
              <ControllerInput
                id="telephone"
                control={control}
                type="number"
                placeholder="Ingrese su numero telefonico"
                name="telephone"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-1 block text-xs font-medium text-primary"
              >
                Descripción
              </label>
              <ControllerTextArea
                id="message"
                control={control}
                placeholder="Ingrese una breve descripción"
                name="message"
              />
            </div>
          </div>
        </div>

        <DrawerFooter className="md:px-4 px-2 pt-0">
          <div className="p-2 bg-white shadow-sm rounded-lg">
            <Button
              className="w-full"
              disabled={buttonIsDisabled}
              isLoading={isLoading}
              onClick={handleSubmit(onSubmit)}
            >
              Enviar consulta
            </Button>
          </div>
        </DrawerFooter>
      </DrawerContent>
    </DrawerUI>
  );
};

export default QueryDrawer;
