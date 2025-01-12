/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import Button from '@/components/custom/Button';
import ControllerInput from '@/components/custom/ControllerInput';
import HeaderTitle from '@/components/custom/HeaderTitle';
import { toast } from '@/hooks/use-toast';
import { createCity } from '@/services/city';
import { useRouter } from 'next/navigation';
import React from 'react';
import { FieldValues, useForm } from 'react-hook-form';

const CreateCity = () => {
  const { control, reset, handleSubmit } = useForm<FieldValues>({
    defaultValues: {
      name: '',
    },
  });

  const router = useRouter();

  const onSubmit = async (values: any) => {
    const response = await createCity(values);

    if (response.status === 201) {
      reset();
      toast({
        title: 'Barrio creado',
        description: 'Barrio creado con exito',
      });
      router.push('/admin/backoffice/city');
    }
  };
  return (
    <div className="space-y-4">
      <HeaderTitle title="Nuevo Barrio" />
      <div className="py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="name"
              className="mb-1 block text-xs font-medium text-primary"
            >
              Ciudad
            </label>
            <ControllerInput
              id="name"
              control={control}
              name="name"
              rules={{ required: true }}
            />
          </div>
          <div className="flex justify-end items-end">
            <Button onClick={handleSubmit(onSubmit)}>Agregar</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCity;
