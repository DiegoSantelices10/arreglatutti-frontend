/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { FC, useState } from 'react';
import { editProfession } from '@/services/profesion';
import { useRouter } from 'next/navigation';
import { toast } from '@/hooks/use-toast';
import { FieldValues, useForm } from 'react-hook-form';
import Modal from '@/components/custom/Modal';
import EditIcon from '../../../../../public/images/edit-icon';
import Button from '@/components/custom/Button';
import ControllerInput from '@/components/custom/ControllerInput';

interface IEditModal {
  profession: any;
}

export const EditModal: FC<IEditModal> = (props) => {
  const { profession } = props;
  const [openModal, setOpenModal] = useState<boolean>(false);

  const { control, reset, handleSubmit } = useForm<FieldValues>({
    defaultValues: {
      name: profession.name || '',
    },
  });

  const router = useRouter();

  const onSubmit = async (values: any) => {
    const { status } = await editProfession(profession._id, values);
    if (status === 200) {
      reset();
      toast({
        title: 'Profesión Actualizada',
        description: 'Profesión actualizada con exito',
      });
      setOpenModal(false);
      router.push('/admin/backoffice/profession');
    }
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
        <Button onClick={handleSubmit(onSubmit)}>Actualizar</Button>
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
