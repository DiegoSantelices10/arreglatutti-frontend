/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import Button from '@/components/custom/Button';
import ControllerInput from '@/components/custom/ControllerInput';
import ControllerSelect from '@/components/custom/ControllerSelect';
import { toast } from '@/hooks/use-toast';
import { createProfessional } from '@/services/profesional';
import React, { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { uploadImages, uploadImageUser } from '@/services/cloudinary';
import ControllerCheckbox from '@/components/custom/ControllerCheckbox';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ClientFormSchema, ClientSchemaType } from './schema';

interface ISelectOptions {
  _id: string;
  name: string;
}
interface ICreateForm {
  professionList: ISelectOptions[];
}

const CreateForm: FC<ICreateForm> = (props) => {
  const { professionList } = props;

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();

  const {
    control,
    reset,
    handleSubmit,
    formState: { isValid },
  } = useForm<ClientSchemaType>({
    resolver: zodResolver(ClientFormSchema),
    defaultValues: {
      name: '',
      profession: '',
      address: '',
      email: '',
      telephone: '',
      acceptTerms: false,
      acceptPrivacyPolicy: false,
    },
    mode: 'onChange',
  });

  const buttonDisabled = !isValid || isLoading;

  const profession = [
    ...(professionList?.map((item) => ({
      label: item.name,
      value: item.name,
    })) || []),
    {
      label: 'Otra profesión',
      value: 'otra',
    },
  ];

  const toastError = () =>
    toast({
      title: 'Error',
      description: 'Error al crear profesional',
      variant: 'error',
    });

  const onSubmit = async (values: any) => {
    setIsLoading(true);

    const response = await uploadImages(values.images);

    if (response.status !== 200) {
      toastError();
      setIsLoading(false);
      return;
    }

    const imageUser = await uploadImageUser(values.imageUser);

    if (imageUser.status !== 200) {
      toastError();
      setIsLoading(false);
      return;
    }

    const newValues = {
      ...values,
      images: response.data,
      imageUser: {
        fileName: values.imageUser.fileName,
        public_id: imageUser.public_id,
        url: imageUser.url,
      },
    };

    const { status } = await createProfessional(newValues);

    if (status !== 201) {
      toastError();
      setIsLoading(false);
      return;
    }

    reset();
    setIsLoading(false);

    router.push('/sendSuccess');
  };

  return (
    <div className="py-8 mt-20">
      <h1 className="text-2xl font-bold text-primary">Solicitud de servicio</h1>
      <p className="text-sm text-textSecondary">
        Completa el formulario para solicitar el servicio.
      </p>
      <div className="pt-8 flex flex-col  md:flex-row w-full justify-between gap-4">
        <div className="grid grid-cols-6 gap-4 w-full">
          <div className="col-span-6 md:col-span-3">
            <label
              htmlFor="name"
              className="mb-1 block text-xs font-medium text-primary"
            >
              Nombre y apellido
            </label>
            <ControllerInput id="name" control={control} name="name" />
          </div>
          <div className="col-span-6 md:col-span-3">
            <label
              htmlFor="profession"
              className="mb-1 block text-xs font-medium text-primary"
            >
              Tipo de servicio
            </label>
            <ControllerSelect
              id="profession"
              triggerClassName="shadow-none"
              placeholder="Selecciona un servicio"
              options={profession}
              control={control}
              name="profession"
            />
          </div>

          <div className="col-span-6 md:col-span-3">
            <label
              htmlFor="email"
              className="mb-1 block text-xs font-medium text-primary"
            >
              Correo electrónico
            </label>
            <ControllerInput id="email" control={control} name="email" />
          </div>
          <div className="col-span-6 md:col-span-3">
            <label
              htmlFor="telephone"
              className="mb-1 block text-xs font-medium text-primary"
            >
              Telefono
            </label>
            <ControllerInput
              id="telephone"
              control={control}
              name="telephone"
            />
          </div>
          <div className="col-span-6 md:col-span-3">
            <label
              htmlFor="address"
              className="mb-1 block text-xs font-medium text-primary"
            >
              Dirección
            </label>
            <ControllerInput id="address" control={control} name="address" />
          </div>

          <div className="w-full col-span-6 space-y-4">
            <div className="w-full">
              <ControllerCheckbox
                name="acceptTerms"
                control={control}
                label={
                  <div className="text-primary text-xs">
                    Acepto los{' '}
                    <span className="font-semibold underline">
                      <Link
                        href="/termsAndConditions"
                        target="_blank"
                        className="text-primary text-xs hover:text-blue-600"
                      >
                        Terminos y condiciones
                      </Link>
                    </span>
                  </div>
                }
              />
            </div>
            <div className="w-full">
              <ControllerCheckbox
                name="acceptPrivacyPolicy"
                control={control}
                label={
                  <div className="text-primary text-xs">
                    Acepto las{' '}
                    <span className="font-semibold underline">
                      <Link
                        href="/privacyPolicy"
                        target="_blank"
                        className="text-primary hover:text-blue-600"
                      >
                        Politicas de privacidad
                      </Link>
                    </span>
                  </div>
                }
              />
            </div>
          </div>

          <div className="flex justify-start col-span-6 mt-4">
            <Button
              isLoading={isLoading}
              disabled={buttonDisabled}
              onClick={handleSubmit(onSubmit)}
            >
              Enviar formulario
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateForm;
