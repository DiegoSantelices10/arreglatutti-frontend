/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { Dispatch, FC, useState } from 'react';
import EditIcon from '../../../../../public/images/edit-icon';
import Modal from '@/components/custom/Modal';
import ControllerInput from '@/components/custom/ControllerInput';
import Button from '@/components/custom/Button';
import { FieldValues, useForm } from 'react-hook-form';
import { editCity } from '@/services/city';
import { toast } from '@/hooks/use-toast';

interface IEditModal {
  city: any;
  setRenderCities: Dispatch<React.SetStateAction<any[]>>;
}

export const EditModal: FC<IEditModal> = (props) => {
  const { city, setRenderCities } = props;

  const [openModal, setOpenModal] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    control,
    reset,
    handleSubmit,
    formState: { isValid },
  } = useForm<FieldValues>({
    defaultValues: {
      name: city?.name,
    },
  });

  const buttonDisabled = !isValid || isLoading;

  const onSubmit = async (values: any) => {
    setIsLoading(true);
    const { status } = await editCity(city._id, values);
    if (status !== 200) {
      toast({
        title: 'Error',
        description: 'Error al actualizar la profesión',
        variant: 'error',
      });
      setIsLoading(false);
    }
    toast({
      title: 'Profesión Actualizada',
      description: 'Profesión actualizada con exito',
    });

    setRenderCities((prev) =>
      prev.map((prof) =>
        prof._id === city._id ? { ...prof, ...values } : prof
      )
    );
    reset(values);
    setIsLoading(false);
    setOpenModal(false);
  };

  return (
    <Modal
      title="Editar Barrio"
      open={openModal}
      onOpenChange={setOpenModal}
      triggerButton={
        <div className="rounded-full cursor-pointer bg-secondary flex justify-center items-center h-8 w-8">
          <EditIcon className="h-5 w-5 text-white" />
        </div>
      }
      childrenFooter={
        <Button
          disabled={buttonDisabled}
          isLoading={isLoading}
          onClick={handleSubmit(onSubmit)}
          className="hover:bg-primary-hover"
        >
          Actualizar
        </Button>
      }
    >
      <div>
        <label
          htmlFor="name"
          className="mb-1 block text-xs font-medium text-primary"
        >
          Barrio
        </label>
        <ControllerInput
          id="name"
          control={control}
          name="name"
          rules={{ required: true }}
        />
      </div>
    </Modal>
  );
};
