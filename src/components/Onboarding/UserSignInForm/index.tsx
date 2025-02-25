'use client';
import Button from '@/components/custom/Button';
import ControllerInput from '@/components/custom/ControllerInput';
import React, { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ISignIn } from '@/services/auth';
import { login, professionaLogin } from '@/actions';
import { toast } from '@/hooks/use-toast';
import { signInFormSchema, SignInSchemaType } from './schema';

interface IUserSignInProps {
  type: string;
}
const UserSignInForm: FC<IUserSignInProps> = ({ type }) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const {
    control,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm<SignInSchemaType>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onTouched',
  });

  const isValidForm = !isValid || isLoading;

  const clientLogin = async (values: SignInSchemaType) => {
    const loginUser: ISignIn = {
      email: values.email,
      password: values.password,
    };
    const response = await login(loginUser);
    if (response.success) {
      toast({
        title: 'Bienvenido',
        description: response.message,
      });
      reset();
      setIsLoading(false);
      router.push('/');
      return;
    } else {
      toast({
        title: 'Error',
        description: response.message.message,
        variant: 'error',
      });
      setIsLoading(false);
    }
  };

  const professionalLogin = async (values: SignInSchemaType) => {
    const loginUser: ISignIn = {
      email: values.email,
      password: values.password,
    };
    const response = await professionaLogin(loginUser);

    if (response.success) {
      toast({
        title: 'Bienvenido',
        description: response.message,
      });
      reset();
      setIsLoading(false);
      router.push('/');
      return;
    } else {
      toast({
        title: 'Error',
        description: response?.message.message,
        variant: 'error',
      });
      setIsLoading(false);
    }
  };

  const onSubmit = async (values: SignInSchemaType) => {
    setIsLoading(true);
    if (type === 'client') {
      clientLogin(values);
    } else {
      professionalLogin(values);
    }
  };

  return (
    <div className="bg-white rounded-md w-full md:w-1/2">
      <div className="space-y-4 px-6 lg:px-14 py-8 md:py-16">
        <h2 className="font-bold text-center text-lg text-primary">
          Bienvenido
        </h2>
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
            placeholder="Ingrese su contraseña"
            name="password"
          />
        </div>
        <div className="flex pt-4 space-y-2 flex-col justify-between items-center">
          <Button
            className="w-full"
            onClick={handleSubmit(onSubmit)}
            disabled={isValidForm}
            isLoading={isLoading}
          >
            Iniciar sesión
          </Button>
          {type === 'client' && (
            <p className="text-xs">
              ¿No tienes una cuenta?{' '}
              <Link href={'/client-signUp'}>
                <span className="font-semibold text-primary cursor-pointer">
                  Registrate
                </span>
              </Link>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserSignInForm;
