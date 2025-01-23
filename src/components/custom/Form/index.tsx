/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { Button } from '@/components/ui/button';
import React, { FC } from 'react';
import ControllerTextArea from '../ControllerTextArea';
import ControllerInput from '../ControllerInput';
import { FieldValues, useForm } from 'react-hook-form';
import ControllerSelect from '../ControllerSelect';
import { toast } from '@/hooks/use-toast';

const Form: FC<any> = (props) => {
  const { data } = props;

  const { control, handleSubmit } = useForm<FieldValues>({
    defaultValues: {
      client: '',
      telephoneClient: '',
      messageClient: '',
      professional: '',
    },
  });

  const selectOptions = data?.map((item: any) => ({
    label: item.name,
    value: item.name, // ajusta `item.id` si deseas usar otro campo como valor
  }));

  const onSubmit = (value: any) => {
    console.log('response', value);

    toast({
      title: 'Enviado',
      description:
        'Gracias por contactarnos, pronto nos pondremos en contacto con usted.',
    });
  };

  return (
    <form>
      <div className="-mx-4 flex flex-wrap">
        <div className="w-full px-2 md:px-4 md:w-1/2">
          <div className="mb-8">
            <label
              htmlFor="client"
              className="mb-1 block text-xs font-medium text-primary"
            >
              Nombre
            </label>
            <ControllerInput
              id="client"
              control={control}
              placeholder="Ingrese su nombre"
              name="client"
            />
          </div>
        </div>
        <div className="w-full px-2 md:px-4 md:w-1/2">
          <div className="mb-8">
            <label
              htmlFor="telephoneClient"
              className="mb-1 block text-xs font-medium text-primary"
            >
              Telefono
            </label>
            <ControllerInput
              id="telephoneClient"
              control={control}
              placeholder="Ingrese su telefono"
              name="telephoneClient"
            />
          </div>
        </div>
        <div className="w-full px-2 md:px-4 md:w-full">
          <div className="mb-8">
            <label
              htmlFor="professional"
              className="mb-1 block text-xs font-medium text-primary"
            >
              Profesión
            </label>
            <ControllerSelect
              id="professional"
              options={selectOptions}
              placeholder="Seleccione una profesión"
              control={control}
              name="professional"
            />
          </div>
        </div>
        <div className="w-full px-2 md:px-4">
          <div className="mb-8">
            <label
              htmlFor="messageClient"
              className="mb-1 block text-xs font-medium text-primary"
            >
              Descripción
            </label>
            <ControllerTextArea
              id="messageClient"
              control={control}
              placeholder="Ingrese una breve descripción"
              name="messageClient"
            />
          </div>
        </div>
        <div className="w-full px-2 md:px-4 flex justify-end">
          <Button onClick={handleSubmit(onSubmit)}>Enviar solicitud</Button>
        </div>
      </div>
    </form>
  );
};

export default Form;
