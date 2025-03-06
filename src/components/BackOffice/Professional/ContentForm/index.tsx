/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import Button from '@/components/custom/Button';
import React, { FC, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  ProfessionalFormSchema,
  ProfessionalSchemaType,
} from '../CreateForm/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from '@/hooks/use-toast';
import {
  deleteImage,
  updateImageUser,
  uploadImages,
} from '@/services/cloudinary';
import {
  deleteImageMongo,
  editProfessional,
  getProfessionalById,
} from '@/services/profesional';
import ControllerInput from '@/components/custom/ControllerInput';
import ControllerSelect from '@/components/custom/ControllerSelect';
import ControllerTextArea from '@/components/custom/ControllerTextArea';
import ControllerInputFile from '@/components/custom/ControllerFileInput';
import CloudUploadIcon from '@/images/icons/cloud-upload-icon';
import Avatar from '@/components/custom/Avatar';
import DeleteIcon from '../../../../../public/images/delete-icon';
import Image from 'next/image';
import { getCities } from '@/services/city';
import { getProfessions } from '@/services/profesion';
import { redirect } from 'next/navigation';
import { Loader2 } from 'lucide-react';

interface IContentFormProps {
  id: string;
}

export interface IProfessional {
  _id: string;
  name: string;
  profession: string;
  email: string;
  telephone: string;
  dni: string;
  city: string;
  description: string;
  imageUser: image;
  images: image[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface image {
  url: string;
  fileName: string;
  public_id: string;
}

const ContentForm: FC<IContentFormProps> = ({ id }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [professional, setProfessional] = useState<IProfessional>({
    _id: '',
    name: '',
    profession: '',
    email: '',
    telephone: '',
    dni: '',
    city: '',
    description: '',
    imageUser: { url: '', fileName: '', public_id: '' },
    images: [],
    createdAt: '',
    updatedAt: '',
    __v: 0,
  });
  const [cities, setCities] = useState([]);
  const [professions, setProfessions] = useState([]);

  const {
    control,
    handleSubmit,
    watch,
    getValues,
    setValue,
    reset,
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

  const buttonDisabled = isLoading || !isValid;

  useEffect(() => {
    getProfessionsAndCitiesData();
    getProfessional();
  }, []);

  const getProfessional = async () => {
    const response = await getProfessionalById(id!);

    setProfessional({ ...response.data });
    reset(response.data);
  };

  const getCitiesData = async () => {
    const { data, status } = await getCities();
    if (status !== 200) {
      return;
    }
    setCities(data);
  };

  const getProfessionsAndCitiesData = async () => {
    const { data, status } = await getProfessions();
    if (status !== 200) {
      return;
    }
    setProfessions(data);
    getCitiesData();
  };

  const professionsOptions = professions?.map((item: any) => ({
    label: item.name,
    value: item.name,
  }));

  const citiesOptions = cities?.map((item: any) => ({
    label: item.name,
    value: item.name,
  }));

  const errorToast = () => {
    toast({
      title: 'Error al actualizar profesional',
      description: 'Error al actualizar profesional',
      variant: 'error',
    });
  };

  const onSubmit = async (values: any) => {
    setIsLoading(true);

    const imageUserUpdate = values.imageUser.url.startsWith('data');

    let valuesSubmit = { ...values };

    if (imageUserUpdate) {
      const response = await updateImageUser(
        professional.imageUser.public_id,
        values.imageUser.url
      );

      if (response.status !== 200) {
        errorToast();

        setIsLoading(false);
        return;
      }

      valuesSubmit = {
        ...valuesSubmit,
        imageUser: {
          public_id: response.public_id,
          url: response.url,
        },
      };
    }

    const resImages = await uploadImages(values.images);

    if (resImages.status !== 200) return errorToast();

    valuesSubmit = {
      ...valuesSubmit,
      images: resImages.data,
    };

    const { status } = await editProfessional(professional._id, valuesSubmit);

    if (status !== 200) return errorToast();

    toast({
      title: 'Profesional actualizado',
      description: 'Profesional actualizado con exito',
    });
    redirect('/admin/backoffice/professional');
  };

  const removeImage = async (image: any) => {
    setIsLoading(true);
    let newImages: any[] = [];
    const imagesForm = getValues('images');
    if (image?.url.startsWith('https')) {
      const response = await deleteImageMongo(
        professional._id,
        image?.public_id
      );

      if (response.status !== 200) {
        toast({
          title: 'Error al eliminar imagen',
          description: 'Error al eliminar imagen',
          variant: 'error',
        });
        return;
      }

      const res = await deleteImage(image.public_id);

      if (res.status !== 200) {
        toast({
          title: 'Error al eliminar imagen',
          description: 'Error al eliminar imagen',
          variant: 'error',
        });
        return;
      }

      newImages = imagesForm.filter(
        (item: any) => item.fileName !== image.fileName
      );

      toast({
        title: 'Imagen eliminada',
        description: 'Imagen eliminada con exito',
      });
    } else {
      newImages = imagesForm.filter(
        (item: any) => item.fileName !== image.fileName
      );
    }

    setValue('images', newImages);
    setIsLoading(false);
  };
  return (
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
          options={professionsOptions}
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
          options={citiesOptions}
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
              Cambiar imagen de perfil
            </h3>
            <CloudUploadIcon className="size-6 text-textSecondary" />
          </div>
        </ControllerInputFile>
        {imageUser && imageUser.url && (
          <div className="flex justify-center items-center">
            <div className="relative inline-block">
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
                    onClick={() => removeImage(item)}
                    className="absolute cursor-pointer rounded-full p-1 bg-white/60 top-2 right-2"
                  >
                    {isLoading ? (
                      <Loader2 className="animate-spin" />
                    ) : (
                      <DeleteIcon className="text-white size-6 transition-all duration-150 hover:text-red-400" />
                    )}
                  </div>
                  <Image
                    src={item.url}
                    alt={item.fileName}
                    className="rounded-xl"
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
          Actualizar profesional
        </Button>
      </div>
    </div>
  );
};

export default ContentForm;
