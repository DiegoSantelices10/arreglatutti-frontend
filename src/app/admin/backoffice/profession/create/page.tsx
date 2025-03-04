/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import Button from '@/components/custom/Button';
import ControllerInput from '@/components/custom/ControllerInput';
import HeaderTitle from '@/components/custom/HeaderTitle';
import { toast } from '@/hooks/use-toast';
import { createProfession } from '@/services/profesion';
import React, { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';

const CreateProfession = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    control,
    reset,
    handleSubmit,
    formState: { isValid },
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
    },
  });

  const buttonDisabled = !isValid || isLoading;

  const onSubmit = async (values: any) => {
    setIsLoading(true);
    const response = await createProfession(values);

    if (response.status === 201) {
      reset();
      toast({
        title: 'Profesión creada',
        description: 'Profesión creada con exito',
      });
    }

    setIsLoading(false);
  };

  return (
    <div className="space-y-4">
      <HeaderTitle title="Nueva Profesión" />
      <div className="py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
            <Button
              disabled={buttonDisabled}
              isLoading={isLoading}
              onClick={handleSubmit(onSubmit)}
            >
              Nueva Profesión
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProfession;
