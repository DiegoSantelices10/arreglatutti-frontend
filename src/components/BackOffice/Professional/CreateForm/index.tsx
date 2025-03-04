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

interface ISelectOptions {
  _id: string;
  name: string;
}
interface ICreateForm {
  professionList: ISelectOptions[];
  cityList: ISelectOptions[];
}

const CreateForm: FC<ICreateForm> = (props) => {
  const { professionList, cityList } = props;

  const [isLoading, setIsLoading] = useState<boolean>(false);

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
      city: '',
      email: '',
      telephone: '',
      dni: '',
      description: '',
      imageUser: '',
      images: [],
    },
    mode: 'onChange',
  });

  const imagesList = watch('images');
  const imageUser = watch('imageUser');

  const buttonDisabled = !isValid || isLoading;

  const profession = professionList?.map((item) => {
    return {
      label: item.name,
      value: item.name,
    };
  });

  const cities = cityList?.map((item) => {
    return {
      label: item.name,
      value: item.name,
    };
  });

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

    toast({
      title: 'Profesional creado',
      description: 'Profesional creado con exito',
    });
    reset();
    setIsLoading(false);
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
    <div className="pt-8">
      <div className="grid grid-cols-6 gap-4">
        <div className="col-span-6 md:col-span-2">
          <label
            htmlFor="name"
            className="mb-1 block text-xs font-medium text-primary"
          >
            Nombre
          </label>
          <ControllerInput id="name" control={control} name="name" />
        </div>
        <div className="col-span-6 md:col-span-2">
          <label
            htmlFor="profession"
            className="mb-1 block text-xs font-medium text-primary"
          >
            Profesión
          </label>
          <ControllerSelect
            id="profession"
            placeholder="Selecciona una profesión"
            options={profession}
            control={control}
            name="profession"
          />
        </div>
        <div className="col-span-6 md:col-span-2">
          <label
            htmlFor="city"
            className="mb-1 block text-xs font-medium text-primary"
          >
            Barrio
          </label>
          <ControllerSelect
            id="city"
            name="city"
            placeholder="selecciona un barrio"
            options={cities}
            control={control}
          />
        </div>
        <div className="col-span-6 md:col-span-2">
          <label
            htmlFor="email"
            className="mb-1 block text-xs font-medium text-primary"
          >
            Email
          </label>
          <ControllerInput id="email" control={control} name="email" />
        </div>
        <div className="col-span-6 md:col-span-2">
          <label
            htmlFor="telephone"
            className="mb-1 block text-xs font-medium text-primary"
          >
            Telefono
          </label>
          <ControllerInput id="telephone" control={control} name="telephone" />
        </div>
        <div className="col-span-6 md:col-span-2">
          <label
            htmlFor="dni"
            className="mb-1 block text-xs font-medium text-primary"
          >
            Dni
          </label>
          <ControllerInput id="dni" control={control} name="dni" />
        </div>

        <div className="col-span-6">
          <label
            htmlFor="description"
            className="mb-1 block text-xs font-medium text-primary"
          >
            Descripción
          </label>
          <ControllerTextArea
            id="description"
            control={control}
            name="description"
          />
        </div>
        <div className="col-span-6 md:col-span-3 space-y-4">
          <ControllerInputFile
            id="imageUser"
            htmlForLabel="imageUser"
            control={control}
            name="imageUser"
          >
            <div className="w-full cursor-pointer p-4 border rounded-lg border-gray-200 flex justify-center items-center gap-2">
              <h3 className="text-sm text-textSecondary">
                Subir imagen de perfil
              </h3>
              <CloudUploadIcon className="size-6 text-textSecondary" />
            </div>
          </ControllerInputFile>
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
        </div>
        <div className="col-span-6 md:col-span-3 space-y-4">
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
          <div className="grid grid-cols-2 content-center  gap-2">
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

        <div className="flex justify-end col-span-6">
          <Button
            isLoading={isLoading}
            disabled={buttonDisabled}
            onClick={handleSubmit(onSubmit)}
          >
            Nuevo profesional
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreateForm;
