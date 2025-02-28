/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React, { FC, useState } from 'react';
import ControllerTextArea from '../ControllerTextArea';
import ControllerInput from '../ControllerInput';
import { useForm } from 'react-hook-form';
import ControllerSelect from '../ControllerSelect';
import { toast } from '@/hooks/use-toast';
import { formSchema, FormSchemaType } from './schema';
import { zodResolver } from '@hookform/resolvers/zod';
import Button from '../Button';
import {
  createConsultation,
  IMessage,
  IResponse,
} from '@/services/consultation';
import axios from 'axios';

interface IForm {
  data: any;
  professionalName?: string;
  professionalType?: string;
}

const Form: FC<IForm> = (props) => {
  const { data, professionalName, professionalType } = props;

  const [isLoading, setIsLoading] = useState(false);

  const {
    control,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      client: '',
      telephoneClient: '',
      messageClient: '',
      professionalType: professionalType || '',
      professionalName: '',
    },
    mode: 'onTouched',
  });

  const selectOptions = data?.map((item: any) => ({
    label: item.name,
    value: item.name,
  }));

  const buttonDisabled = !isValid || isLoading;

  const sendEmail = async (value: IMessage) => {
    return await axios.post('/api/consultationEmail', value);
  };

  const onSubmit = async (value: FormSchemaType) => {
    setIsLoading(true);

    const messageCliente: IMessage = {
      name: value.client,
      telephone: value.telephoneClient,
      profession: value.professionalType,
      message: value.messageClient,
      ...(professionalName && { professionalName }),
    };

    const { status }: IResponse = await createConsultation(messageCliente);

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

    const response = await sendEmail(messageCliente);

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

    toast({
      title: 'Enviado',
      description:
        'Gracias por contactarnos, pronto nos pondremos en contacto con usted.',
    });
    reset();
    setIsLoading(false);
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
              type="number"
              placeholder="Ingrese su telefono"
              name="telephoneClient"
            />
          </div>
        </div>
        <div className="w-full px-2 md:px-4 md:w-full">
          <div className="mb-8">
            <label
              htmlFor="professionalType"
              className="mb-1 block text-xs font-medium text-primary"
            >
              Profesión
            </label>
            <ControllerSelect
              id="professionalType"
              options={selectOptions}
              placeholder="Seleccione una profesión"
              control={control}
              name="professionalType"
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
          <Button
            isLoading={isLoading}
            disabled={buttonDisabled}
            onClick={handleSubmit(onSubmit)}
          >
            Enviar solicitud
          </Button>
        </div>
      </div>
    </form>
  );
};

export default Form;
