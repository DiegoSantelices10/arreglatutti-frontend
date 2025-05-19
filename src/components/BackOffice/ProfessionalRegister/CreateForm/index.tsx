/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import Button from '@/components/custom/Button';
import ControllerInputFile from '@/components/custom/ControllerFileInput';
import ControllerInput from '@/components/custom/ControllerInput';
import ControllerSelect from '@/components/custom/ControllerSelect';
import { toast } from '@/hooks/use-toast';
import { createProfessional } from '@/services/profesional';
import React, { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import ControllerTextArea from '@/components/custom/ControllerTextArea';
import { ProfessionalFormSchema, ProfessionalSchemaType } from './schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { uploadImages, uploadImageUser } from '@/services/cloudinary';
import CloudUploadIcon from '@/images/icons/cloud-upload-icon';
import Image from 'next/image';
import Avatar from '@/components/custom/Avatar';
import DeleteIcon from '../../../../../public/images/delete-icon';
import ControllerCheckbox from '@/components/custom/ControllerCheckbox';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
// import ControllerInputFilePDF from '@/components/custom/ControllerFileInputPDF';

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
    getValues,
    setValue,
    watch,
    formState: { isValid },
  } = useForm<ProfessionalSchemaType>({
    resolver: zodResolver(ProfessionalFormSchema),
    defaultValues: {
      name: '',
      profession: '',
      email: '',
      telephone: '',
      cuit: '',
      registrationNumber: '',
      reasonSocial: '',
      description: '',
      imageUser: '',
      images: [],
      monotributo: '',
      acceptTerms: false,
      acceptPrivacyPolicy: false,
    },
    mode: 'onChange',
  });

  const imagesList = watch('images');
  const imageUser = watch('imageUser');

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

  const removeImage = (image: string) => {
    const imagesForm = getValues('images');
    const newImages = imagesForm.filter((item: any) => item.fileName !== image);
    setValue('images', newImages);
  };

  const removeImageUser = () => {
    setValue('imageUser', '');
  };

  return (
    <div className="py-8 mt-20">
      <h1 className="text-2xl font-bold text-primary">
        Formulario de registro
      </h1>
      <p className="text-sm text-textSecondary">
        Completa el formulario para registrarte como profesional en la
        plataforma.
      </p>
      <div className="pt-8 flex flex-col  md:flex-row w-full justify-between gap-4">
        <div className="space-y-4 md:w-1/4 w-full">
          {imageUser && imageUser.url && (
            <div className="flex justify-center items-center">
              <div className="relative inline-block">
                <div
                  onClick={() => removeImageUser()}
                  className="absolute z-[9999] inline-block cursor-pointer rounded-full p-1 bottom-5 left-1/2 -translate-x-1/2 translate-y-1/2 bg-white/60"
                >
                  <DeleteIcon className="text-white transition-all size-6 duration-150 hover:text-red-400" />
                </div>
                <Avatar className="mx-auto size-32" image={imageUser.url} />
              </div>
            </div>
          )}
          <ControllerInputFile
            id="imageUser"
            htmlForLabel="imageUser"
            control={control}
            name="imageUser"
          >
            <div className="cursor-pointer p-2 mt-5 flex flex-col justify-center items-center w-full border rounded-md border-gray-200  gap-2">
              <CloudUploadIcon className="size-6 text-textSecondary" />
            </div>
            <h3 className="text-xs text-center text-textSecondary py-2">
              Subir imagen de perfil
            </h3>
          </ControllerInputFile>
        </div>
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
              Profesión
            </label>
            <ControllerSelect
              id="profession"
              triggerClassName="shadow-none"
              placeholder="Selecciona una profesión"
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
              htmlFor="cuit"
              className="mb-1 block text-xs font-medium text-primary"
            >
              CUIT
            </label>
            <ControllerInput id="cuit" control={control} name="cuit" />
          </div>
          <div className="col-span-6 md:col-span-3">
            <label
              htmlFor="registrationNumber"
              className="mb-1 block text-xs font-medium text-primary"
            >
              Numero de matricula
            </label>
            <ControllerInput
              id="registrationNumber"
              control={control}
              name="registrationNumber"
            />
          </div>
          <div className="col-span-6 ">
            <label
              htmlFor="reasonSocial"
              className="mb-1 block text-xs font-medium text-primary"
            >
              Razon social
            </label>
            <ControllerInput
              id="reasonSocial"
              control={control}
              name="reasonSocial"
            />
          </div>
          <div className="col-span-6 ">
            <label
              htmlFor="description"
              className="mb-1 block text-xs font-medium text-primary"
            >
              Descripción
            </label>
            <ControllerTextArea
              id="description"
              control={control}
              placeholder="Escribe una breve descripción sobre tu trabajo."
              name="description"
            />
          </div>

          <div className="col-span-6">
            <ControllerInputFile
              id="images"
              htmlForLabel="images"
              multiple
              control={control}
              name="images"
            >
              <div className="w-full cursor-pointer p-4 border rounded-lg border-gray-200 flex justify-center items-center gap-2">
                <h3 className="text-sm text-textSecondary">
                  Subir imagenes de trabajos
                </h3>
                <CloudUploadIcon className="size-6 text-textSecondary" />
              </div>
            </ControllerInputFile>
            <div className="grid grid-cols-2 content-center  gap-2 mt-2">
              {imagesList?.length > 0 &&
                imagesList.map((item: any, index: number) => (
                  <div
                    key={index}
                    className="flex mx-auto  gap-2 col-span-2 lg:col-span-1  rounded-xl"
                  >
                    <div className="inline-block relative">
                      <div
                        onClick={() => removeImage(item.fileName)}
                        className="absolute cursor-pointer rounded-full p-1 bg-white/60 top-2 right-2"
                      >
                        <DeleteIcon className="text-white size-6 transition-all duration-150 hover:text-red-400" />
                      </div>
                      <Image
                        src={item.url}
                        alt={item.fileName}
                        className="rounded-xl"
                        layout="intrinsic"
                        width={500} // Se ajustará automáticamente manteniendo la proporción
                        height={500}
                      />
                    </div>
                  </div>
                ))}
            </div>
          </div>
          {/* <div className="col-span-6 space-y-4">
            <ControllerInputFilePDF
              id="monotributo"
              htmlForLabel="monotributo"
              control={control}
              name="monotributo"
            >
              <div className="w-full cursor-pointer p-4 border rounded-lg border-gray-200 flex justify-center items-center gap-2">
                <h3 className="text-sm text-textSecondary">
                  Subir comprobante de monotributo
                </h3>
                <CloudUploadIcon className="size-6 text-textSecondary" />
              </div>
            </ControllerInputFilePDF>
          </div> */}

          <p className="col-span-6 text-sm text-textSecondary">
            Enviar{' '}
            <span className="font-semibold ">Seguro contra terceros</span> y{' '}
            <span className="font-semibold ">Alta de monotributo</span> al
            siguiente correo:{' '}
            <a
              href="mailto:asuarez@aquilessoluciones.com.ar"
              className=" text-primary hover:text-blue-600"
            >
              asuarez@aquilessoluciones.com.ar
            </a>
          </p>

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
