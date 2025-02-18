/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { FC, useState } from 'react';
import EditIcon from '../../../../../public/images/edit-icon';
import Modal from '@/components/custom/Modal';
import ControllerInput from '@/components/custom/ControllerInput';
import Button from '@/components/custom/Button';
import { FieldValues, useForm } from 'react-hook-form';
import { editCity } from '@/services/city';
import { toast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';

interface IEditModal {
  city: any;
}

export const EditModal: FC<IEditModal> = (props) => {
  const { city } = props;

  const router = useRouter();

  const [openModal, setOpenModal] = useState<boolean>(false);
  const { control, reset, handleSubmit } = useForm<FieldValues>({
    defaultValues: {
      name: city?.name,
    },
  });

  const onSubmit = async (values: any) => {
    const { status } = await editCity(city._id, values);
    if (status === 200) {
      toast({
        title: 'Barrio Actualizado',
        description: 'Barrio actualizado con exito',
      });
      reset();
      setOpenModal(false);
      router.push('/admin/backoffice/city');
    }
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
