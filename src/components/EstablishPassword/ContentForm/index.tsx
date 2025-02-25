/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import Button from '@/components/custom/Button';
import ControllerInput from '@/components/custom/ControllerInput';
import React, { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ContentFormSchema, ContentFormSchemaType } from '../schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { resetPassword } from '@/services/auth';
import { toast } from '@/hooks/use-toast';
import { useRouter } from 'next/router';

interface IContentFormProps {
  token: string;
}

const ContentForm: FC<IContentFormProps> = ({ token }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const {
    control,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm<ContentFormSchemaType>({
    resolver: zodResolver(ContentFormSchema),
    defaultValues: {
      password: '',
    },
    mode: 'onChange',
  });

  const buttonIsDisabled = !isValid || isLoading;

  const onSubmit = async (values: ContentFormSchemaType) => {
    setIsLoading(true);

    const data: any = await resetPassword({
      token,
      password: values.password,
    });

    if (data?.status === 201) {
      toast({
        title: 'Contraseña actualizada',
        description: 'Contraseña actualizada con exito',
      });
      reset();
      setIsLoading(false);
      router.push('/user-signIn?type=professional');
    } else {
      toast({
        title: 'Error al actualizar la contraseña',
        description: 'Error al actualizar la contraseña',
        variant: 'error',
      });
    }
  };

  return (
    <div className="space-y-8 flex flex-col">
      <div>
        <label
          htmlFor="password"
          className="mb-1 block text-xs font-medium text-primary"
        >
          Contraseña
        </label>
        <ControllerInput
          id="password"
          control={control}
          type="password"
          hasSegurity
          placeholder="Ingrese una contraseña"
          name="password"
        />
      </div>
      <Button
        disabled={buttonIsDisabled}
        onClick={handleSubmit(onSubmit)}
        isLoading={isLoading}
      >
        Guardar
      </Button>
    </div>
  );
};

export default ContentForm;
