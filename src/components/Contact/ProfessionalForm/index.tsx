/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React, { FC, useState } from 'react';
import { toast } from '@/hooks/use-toast';
import ControllerInput from '@/components/custom/ControllerInput';
import ControllerSelect from '@/components/custom/ControllerSelect';
import ControllerTextArea from '@/components/custom/ControllerTextArea';
import { profesionesData } from '@/mocks/profession';
import axios from 'axios';
import { createMessage } from '@/services/professionalApplication';
import Button from '@/components/custom/Button';

const ProfessionalForm: FC<any> = (props) => {
  const { control, handleSubmit, reset, isValid } = props;

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const selectOptions = profesionesData?.map((item: any) => ({
    label: item.name,
    value: item.name, // ajusta `item.id` si deseas usar otro campo como valor
  }));

  const submitIsvalid = !isValid || isLoading;

  const sendEmail = async (value: any) => {
    return await axios.post('/api/professionalEmail', value);
  };

  const onSubmit = async (value: any) => {
    setIsLoading(true);
    try {
      const { status } = await createMessage(value);
      if (status === 201) {
        const { status } = await sendEmail(value);

        if (status === 200) {
          reset();
          toast({
            title: 'Envío exitoso',
            description:
              'Gracias por contactarnos, pronto nos pondremos en contacto con usted.',
          });
        }
      }
      setIsLoading(false);
    } catch (error) {
      console.log('error::', error);
    }
  };

  return (
    <form>
      <div className="-mx-4 flex flex-wrap">
        <div className="w-full px-2 md:px-4 md:w-1/2">
          <div className="mb-8">
            <label
              htmlFor="name"
              className="mb-1 block text-xs font-medium text-primary"
            >
              Nombre
            </label>
            <ControllerInput
              id="name"
              control={control}
              placeholder="Ingrese su nombre"
              name="name"
            />
          </div>
        </div>
        <div className="w-full px-2 md:px-4 md:w-1/2">
          <div className="mb-8">
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
              placeholder="Ingrese su telefono"
              name="telephone"
            />
          </div>
        </div>
        <div className="w-full px-2 md:px-4 md:w-full">
          <div className="mb-8">
            <label
              htmlFor="profession"
              className="mb-1 block text-xs font-medium text-primary"
            >
              Profesión
            </label>
            <ControllerSelect
              id="profession"
              options={selectOptions}
              placeholder="Seleccione una profesión"
              control={control}
              name="profession"
            />
          </div>
        </div>
        <div className="w-full px-2 md:px-4">
          <div className="mb-8">
            <label
              htmlFor="message"
              className="mb-1 block text-xs font-medium text-primary"
            >
              Descripción de trabajos realizados
            </label>
            <ControllerTextArea
              id="message"
              control={control}
              placeholder="Ingrese una breve descripción"
              name="message"
            />
          </div>
        </div>
        <div className="w-full px-4 flex justify-end">
          <Button
            onClick={handleSubmit(onSubmit)}
            disabled={submitIsvalid}
            isLoading={isLoading}
          >
            Enviar solicitud
          </Button>
        </div>
      </div>
    </form>
  );
};

export default ProfessionalForm;
