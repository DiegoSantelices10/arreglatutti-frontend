'use client';
import { useToast } from '@/hooks/use-toast';
import { FC, ReactNode, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import {
  loginRegisterFormSchema,
  LoginRegisterSchemaType,
} from '../Header/Authentication/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { ISignIn, ISignUp, signUp } from '@/services/auth';
import { login } from '@/actions';
import Modal from '../custom/Modal';
import { cn } from '@/utils';
import Button from '../custom/Button';
import ControllerInput from '../custom/ControllerInput';

interface ISignInSignUpProps {
  triggerButton: ReactNode;
}
const SignInSignUp: FC<ISignInSignUpProps> = (props) => {
  const { triggerButton } = props;
  const [register, setRegister] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const {
    control,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm<LoginRegisterSchemaType>({
    resolver: zodResolver(loginRegisterFormSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const isValidForm = !isValid || isLoading;

  const onSubmit = async (values: FieldValues) => {
    setIsLoading(true);
    const newUser: ISignUp = {
      email: values.email,
      password: values.password,
      name: values.name,
    };

    if (register) {
      const { data } = await signUp(newUser);
      toast({ title: data.message });
      reset();
      setRegister(false);
      setIsLoading(false);
      return;
    }

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
      setIsOpen(false);
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

  const onChangeRegister = () => {
    setRegister(!register);
    reset();
  };
  return (
    <Modal
      open={isOpen}
      onOpenChange={setIsOpen}
      triggerButton={triggerButton}
      title={register ? 'Registrate' : 'Inicia Sesión'}
      childrenFooter={
        <div className={cn('flex w-full justify-between items-center')}>
          {register ? (
            <p className="text-xs">
              ¿Tenes una cuenta?{' '}
              <span
                onClick={onChangeRegister}
                className="font-semibold text-primary cursor-pointer"
              >
                Inicia Sesión
              </span>
            </p>
          ) : (
            <p className="text-xs">
              ¿No tienes una cuenta?{' '}
              <span
                onClick={onChangeRegister}
                className="font-semibold text-primary cursor-pointer"
              >
                Registrate
              </span>
            </p>
          )}
          <Button
            onClick={handleSubmit(onSubmit)}
            disabled={isValidForm}
            isLoading={isLoading}
          >
            {register ? 'Registrate' : 'Iniciar Sesión'}
          </Button>
        </div>
      }
    >
      {register && (
        <div>
          <label
            htmlFor="name"
            className="mb-1 block text-xs font-medium text-primary"
          >
            Nombre y Apellido
          </label>
          <ControllerInput
            id="name"
            control={control}
            placeholder="Ingrese su nombre y apellido"
            name="name"
          />
        </div>
      )}
      <div>
        <label
          htmlFor="email"
          className="mb-1 block text-xs font-medium text-primary"
        >
          Correo Electronico
        </label>
        <ControllerInput
          id="email"
          control={control}
          placeholder="Ingrese su correo"
          name="email"
        />
      </div>
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
          placeholder={
            register ? 'Ingrese una contraseña' : 'Ingrese su contraseña'
          }
          name="password"
        />
      </div>
    </Modal>
  );
};

export default SignInSignUp;
