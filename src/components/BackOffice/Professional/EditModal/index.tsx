/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { FC, useState } from 'react';
import { editProfessional } from '@/services/profesional';
import Modal from '@/components/custom/Modal';
import EditIcon from '../../../../../public/images/edit-icon';
import { FieldValues, useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { toast } from '@/hooks/use-toast';
import CancelIcon from '../../../../../public/images/cancel-icon';
import ControllerInputFile from '@/components/custom/ControllerFileInput';
import ControllerInput from '@/components/custom/ControllerInput';
import ControllerSelect from '@/components/custom/ControllerSelect';
import { profesionesData } from '@/mocks/profession';
import Button from '@/components/custom/Button';
import ControllerTextArea from '@/components/custom/ControllerTextArea';

interface IEditModal {
  professional: any;
}

export const EditModal: FC<IEditModal> = (props) => {
  const { professional } = props;

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { control, reset, handleSubmit, watch, getValues, setValue } =
    useForm<FieldValues>({
      defaultValues: {
        name: professional?.name || '',
        profession: professional?.profession || '',
        email: professional?.email || '',
        telephone: professional?.telephone || '',
        dni: professional?.dni || '',
        cities: professional?.cities || [],
        description: professional?.description || '',
        image: professional?.image || [],
      },
    });

  const router = useRouter();
  const imagesList = watch('image');

  const onSubmit = async (values: any) => {
    const { status } = await editProfessional(professional._id, values);
    if (status === 200) {
      reset();
      toast({
        title: 'Profesional Actualizado',
        description: 'Profesional actualizado con exito',
      });
      setIsOpen(false);
      router.push('/admin/backoffice/professional');
    }
  };

  const professions = profesionesData.map((profession) => ({
    value: profession.name,
    label: profession.name,
  }));

  const removeImage = (image: string) => {
    const imagesForm = getValues('image');
    const newImages = imagesForm.filter((item: any) => item.fileName !== image);
    setValue('image', newImages);
  };

  return (
    <Modal
      open={isOpen}
      onOpenChange={setIsOpen}
      title="Editar Profesional"
      triggerButton={
        <div className="cursor-pointer bg-secondary flex justify-center items-center rounded-full h-8 w-8">
          <EditIcon className="text-white h-5 w-5" />
        </div>
      }
      childrenFooter={
        <Button onClick={handleSubmit(onSubmit)}>Actualizar</Button>
      }
    >
      <div className="py-8">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-3 md:col-span-1">
            <label
              htmlFor="name"
              className="mb-1 block text-xs font-medium text-primary"
            >
              Nombre
            </label>
            <ControllerInput id="name" control={control} name="name" />
          </div>
          <div className="col-span-3 md:col-span-1">
            <label
              htmlFor="profession"
              className="mb-1 block text-xs font-medium text-primary"
            >
              Profesión
            </label>
            <ControllerSelect
              placeholder="Selecciona una profesión"
              options={professions}
              value={professional?.profession}
              id="profession"
              control={control}
              name="profession"
            />
          </div>
          <div className="col-span-3 md:col-span-1">
            <label
              htmlFor="email"
              className="mb-1 block text-xs font-medium text-primary"
            >
              Email
            </label>
            <ControllerInput id="email" control={control} name="email" />
          </div>
          <div className="col-span-3 md:col-span-1">
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
          <div className="col-span-3 md:col-span-1">
            <label
              htmlFor="dni"
              className="mb-1 block text-xs font-medium text-primary"
            >
              Dni
            </label>
            <ControllerInput id="dni" control={control} name="dni" />
          </div>
          <div className="col-span-3 md:col-span-1">
            <label
              htmlFor="cities"
              className="mb-1 block text-xs font-medium text-primary"
            >
              Barrio
            </label>
            <ControllerInput id="cities" control={control} name="cities" />
          </div>
          <div className="col-span-3">
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
          <div className="col-span-3">
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
        </div>
      </div>
    </Modal>
  );
};
