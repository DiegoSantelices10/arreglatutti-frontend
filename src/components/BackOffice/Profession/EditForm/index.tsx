/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import Button from '@/components/custom/Button';
import ControllerInput from '@/components/custom/ControllerInput';
import { DialogClose } from '@/components/ui/dialog';
import { toast } from '@/hooks/use-toast';
import { editProfession } from '@/services/profesion';
import { useRouter } from 'next/navigation';
import React, { FC } from 'react';
import { FieldValues, useForm } from 'react-hook-form';

interface IEditForm {
  id: string;
  name: string;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditForm: FC<IEditForm> = (props) => {
  const { id, name, setOpenModal } = props;

  const { control, reset, handleSubmit } = useForm<FieldValues>({
    defaultValues: {
      name: name || '',
    },
  });

  const router = useRouter();

  const onSubmit = async (values: any) => {
    const { status } = await editProfession(id, values);
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
    <div className="py-8">
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
        <div className="flex justify-end items-end">
          <Button asChild onClick={handleSubmit(onSubmit)}>
            <DialogClose>Aceptar</DialogClose>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EditForm;
