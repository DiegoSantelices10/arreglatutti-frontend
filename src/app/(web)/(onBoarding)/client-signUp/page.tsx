/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import Button from '@/components/custom/Button';
import ControllerInput from '@/components/custom/ControllerInput';
import Image from 'next/image';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signUpFormSchema, SignUpSchemaType } from './schema';
import Link from 'next/link';
import { ISignUp, signUp } from '@/services/auth';
import { toast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';

const ClientSignUp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const {
    control,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm<SignUpSchemaType>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
    mode: 'onTouched',
  });

  const isValidForm = !isValid || isLoading;

  const onSubmit = async (values: SignUpSchemaType) => {
    setIsLoading(true);
    const newUser: ISignUp = {
      email: values.email,
      password: values.password,
      name: values.name,
    };
    const reponse: any = await signUp(newUser);

    if (reponse.success) {
      toast({
        title: 'Registro exitoso',
        description: 'Redirigiendo al inicio de sesion',
      });
      reset();
      setIsLoading(false);
      router.push('/user-signIn?type=client');
      return;
    }
    toast({
      title: 'Error',
      description: 'Error al registrar',
      variant: 'error',
    });
    reset();
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex justify-center items-center px-2 md:p-16">
      <div className="flex w-full shadow">
        <div className="bg-blue-950 hidden md:flex justify-center items-center rounded-md w-1/2">
          <div>
            <Image
              src="/images/logo-aquiles.png"
              alt="logo"
              width={200}
              height={200}
            />
          </div>
        </div>
        <div className="bg-white rounded-xl w-full md:w-1/2">
          <div className="space-y-4 px-8 lg:px-14 py-8 md:py-16">
            <h2 className="font-bold text-center text-lg text-primary">
              Registro de usuario
            </h2>
            <div>
              <label
                htmlFor="name"
                className="mb-1 block text-xs font-medium text-primary"
              >
                Nombre y apellido
              </label>
              <ControllerInput
                id="name"
                control={control}
                placeholder="Ingrese su nombre completo"
                name="name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-1 block text-xs font-medium text-primary"
              >
                Correo electronico
              </label>
              <ControllerInput
                id="email"
                control={control}
                placeholder="Ingrese su correo electronico"
                name="email"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="mb-1 block text-xs font-medium text-primary"
              >
                Password
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
            <div className="flex pt-4 space-y-2 flex-col justify-between items-center">
              <Button
                onClick={handleSubmit(onSubmit)}
                className="w-full"
                disabled={isValidForm}
                isLoading={isLoading}
              >
                Iniciar registro
              </Button>
              <p className="text-xs">
                ¿Tienes una cuenta?{' '}
                <Link
                  href={{ pathname: '/user-signIn', query: { type: 'client' } }}
                >
                  <span className="font-semibold text-primary cursor-pointer">
                    Inicia sesión
                  </span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientSignUp;
