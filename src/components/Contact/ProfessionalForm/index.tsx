/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React, { FC, useState } from 'react';
import { toast } from '@/hooks/use-toast';
import ControllerInput from '@/components/custom/ControllerInput';
import ControllerSelect from '@/components/custom/ControllerSelect';
import ControllerTextArea from '@/components/custom/ControllerTextArea';
import { createMessage } from '@/services/professionalApplication';
import Button from '@/components/custom/Button';
import ControllerCheckbox from '@/components/custom/ControllerCheckbox';
import Link from 'next/link';

const ProfessionalForm: FC<any> = (props) => {
  const { control, handleSubmit, reset, isValid, professions } = props;

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const selectOptions = [
    ...(professions?.map((item: any) => ({
      label: item.name,
      value: item.name,
    })) || []),
    {
      label: 'Otra profesión',
      value: 'otra',
    },
  ];

  const submitIsvalid = !isValid || isLoading;

  const onSubmit = async (value: any) => {
    setIsLoading(true);
    const { status } = await createMessage(value);

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
          <div className="mb-6">
            <label
              htmlFor="name"
              className="mb-1 block text-xs font-medium text-white"
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
          <div className="mb-6">
            <label
              htmlFor="telephone"
              className="mb-1 block text-xs font-medium text-white"
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
          <div className="mb-6">
            <label
              htmlFor="profession"
              className="mb-1 block text-xs font-medium text-white"
            >
              Profesión
            </label>
            <ControllerSelect
              id="profession"
              options={selectOptions}
              placeholder="Seleccione una profesión"
              control={control}
              className="bg-white rounded-md h-10"
              name="profession"
            />
          </div>
        </div>
        <div className="w-full px-2 md:px-4">
          <div className="mb-6">
            <label
              htmlFor="message"
              className="mb-1 block text-xs font-medium text-white"
            >
              Descripción de trabajos realizados
            </label>
            <ControllerTextArea
              id="message"
              control={control}
              placeholder="Ingrese una breve descripción"
              name="message"
              className="bg-white rounded-md"
            />
          </div>
        </div>
        <div className="w-full px-2 md:px-4">
          <ControllerCheckbox
            name="acceptTerms"
            control={control}
            label={
              <div>
                Acepto los{' '}
                <span className="font-semibold hover:underline">
                  <Link
                    href="/termsAndConditions"
                    className="text-white hover:text-blue-600"
                  >
                    Terminos y condiciones
                  </Link>
                </span>
              </div>
            }
          />
        </div>
        <div className="w-full px-4 flex justify-end pt-4">
          <Button
            onClick={handleSubmit(onSubmit)}
            disabled={submitIsvalid}
            isLoading={isLoading}
            className="bg-white text-primary hover:text-white"
          >
            Enviar solicitud
          </Button>
        </div>
      </div>
    </form>
  );
};

export default ProfessionalForm;
