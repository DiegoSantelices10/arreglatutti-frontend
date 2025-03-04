/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { Dispatch, FC, useState } from 'react';
import { editProfession } from '@/services/profesion';
import { toast } from '@/hooks/use-toast';
import { FieldValues, useForm } from 'react-hook-form';
import Modal from '@/components/custom/Modal';
import EditIcon from '../../../../../public/images/edit-icon';
import Button from '@/components/custom/Button';
import ControllerInput from '@/components/custom/ControllerInput';
import { IProfession } from '../ProfessionTable/types';

interface IEditModal {
  profession: any;
  setRenderProfessions: Dispatch<React.SetStateAction<IProfession[]>>;
}

export const EditModal: FC<IEditModal> = (props) => {
  const { profession, setRenderProfessions } = props;

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);

  const {
    control,
    reset,
    handleSubmit,
    formState: { isValid },
  } = useForm<FieldValues>({
    defaultValues: {
      name: profession.name || '',
    },
  });

  const buttonDisabled = !isValid || isLoading;

  const onSubmit = async (values: any) => {
    setIsLoading(true);
    const { status } = await editProfession(profession._id, values);
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

    setRenderProfessions((prev) =>
      prev.map((prof) =>
        prof._id === profession._id ? { ...prof, ...values } : prof
      )
    );
    reset(values);
    setIsLoading(false);
    setOpenModal(false);
  };

  return (
    <Modal
      title="Editar Profesión"
      open={openModal}
      onOpenChange={setOpenModal}
      triggerButton={
        <div className="cursor-pointer bg-secondary flex justify-center items-center rounded-full h-8 w-8">
          <EditIcon className="text-white h-5 w-5" />
        </div>
      }
      childrenFooter={
        <Button
          disabled={buttonDisabled}
          isLoading={isLoading}
          onClick={handleSubmit(onSubmit)}
        >
          Actualizar
        </Button>
      }
    >
      <div className="grid grid-cols-1 gap-4">
        <div>
          <label
            htmlFor="name"
            className="mb-1 block text-xs font-medium text-primary"
          >
            Profesión
          </label>
          <ControllerInput
            id="name"
            control={control}
            name="name"
            rules={{ required: true }}
          />
        </div>
      </div>
    </Modal>
  );
};
