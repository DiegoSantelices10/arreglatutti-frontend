/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import Button from '@/components/custom/Button';
import ControllerInputFile from '@/components/custom/ControllerFileInput';
import ControllerInput from '@/components/custom/ControllerInput';
import ControllerMultiSelect from '@/components/custom/ControllerMultiSelect';
import ControllerSelect from '@/components/custom/ControllerSelect';
import { toast } from '@/hooks/use-toast';
import { createProfessional } from '@/services/profesional';
import { useRouter } from 'next/navigation';
import React, { FC } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import CancelIcon from '../../../../../public/images/cancel-icon';

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

  const router = useRouter();

  const { control, reset, handleSubmit, getValues, setValue, watch } =
    useForm<FieldValues>({
      defaultValues: {
        name: '',
        profession: '',
        email: '',
        telephone: '',
        dni: '',
        cities: [],
        description: '',
        image: [],
      },
    });

  const imagesList = watch('image');

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

  const onSubmit = async (value: any) => {
    const { status } = await createProfessional(value);

    if (status === 201) {
      reset();
      toast({
        title: 'Profesional creado',
        description: 'Profesional creado con exito',
      });
      router.push('/admin/backoffice/professional');
    }
  };

  const removeImage = (image: string) => {
    const imagesForm = getValues('image');
    const newImages = imagesForm.filter((item: any) => item.fileName !== image);
    setValue('image', newImages);
  };

  return (
    <div className="py-8">
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2 md:col-span-1">
          <label
            htmlFor="name"
            className="mb-1 block text-xs font-medium text-primary"
          >
            Nombre
          </label>
          <ControllerInput id="name" control={control} name="name" />
        </div>
        <div className="col-span-2 md:col-span-1">
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
        <div className="col-span-2 md:col-span-1">
          <label
            htmlFor="cities"
            className="mb-1 block text-xs font-medium text-primary"
          >
            Barrio
          </label>
          <ControllerMultiSelect
            id="cities"
            name="cities"
            placeholder="selecciona un barrio"
            options={cities}
            control={control}
          />
        </div>
        <div className="col-span-2 md:col-span-1">
          <label
            htmlFor="email"
            className="mb-1 block text-xs font-medium text-primary"
          >
            Email
          </label>
          <ControllerInput id="email" control={control} name="email" />
        </div>
        <div className="col-span-2 md:col-span-1">
          <label
            htmlFor="telephone"
            className="mb-1 block text-xs font-medium text-primary"
          >
            Telefono
          </label>
          <ControllerInput id="telephone" control={control} name="telephone" />
        </div>
        <div className="col-span-2 md:col-span-1">
          <label
            htmlFor="dni"
            className="mb-1 block text-xs font-medium text-primary"
          >
            Dni
          </label>
          <ControllerInput id="dni" control={control} name="dni" />
        </div>

        <div className="col-span-2 md:col-span-1">
          <label
            htmlFor="description"
            className="mb-1 block text-xs font-medium text-primary"
          >
            Descripción
          </label>
          <ControllerInput
            id="description"
            control={control}
            name="description"
          />
        </div>
        <div className="col-span-2 md:col-span-1">
          <label
            htmlFor="image"
            className="mb-1 block text-xs font-medium text-primary"
          >
            Imagenes
          </label>
          <ControllerInputFile
            id="image"
            multiple
            control={control}
            name="image"
          />
          <div className="flex flex-wrap gap-2">
            {imagesList?.length > 0 &&
              imagesList.map((item: any, index: number) => (
                <div
                  key={index}
                  className="flex items-end gap-2 mt-2 p-1 px-2 bg-gray-100 rounded-xl"
                >
                  <h2 className="text-xs">{item.fileName}</h2>
                  <CancelIcon
                    onClick={() => removeImage(item.fileName)}
                    className="size-[14px] cursor-pointer"
                  />
                </div>
              ))}
          </div>
        </div>
        <div className="flex justify-end col-span-2">
          <Button onClick={handleSubmit(onSubmit)}>Agregar</Button>
        </div>
      </div>
    </div>
  );
};

export default CreateForm;
