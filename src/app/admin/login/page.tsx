'use client'
import Button from '@/components/custom/Button'
import ControllerInput from '@/components/custom/ControllerInput'
import { toast } from '@/hooks/use-toast'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { FC } from 'react'
import { FieldValues, useForm } from 'react-hook-form'

const Login: FC = () => {

    const router = useRouter();


    const {
        control,
        handleSubmit,
    } = useForm<FieldValues>({
        defaultValues: {
            username: '',
            password: '',
        }
    })

    const onSubmit = (values: FieldValues) => {
        if (values.username === 'aquiles123' && values.password === 'aquiles123') {
            toast({
                title: 'Bienvenido',
                description: 'Ingresando al home de Aquiles',
                variant: 'success'

            })
            router.push('/admin/backoffice')
        } else {
            toast({
                title: 'Credenciales invalidas',
                description: 'El usuario o contraseña son incorrectos.',
                variant: 'error'
            })
        }

    }

    return (
        <div className='min-h-screen w-full grid content-center space-y-4 px-4 md:px-12 md:flex md:justify-center md:items-center'>
            <div className='absolute md:hidden'>
                <Image
                    src="/images/logo-aquiles.png"
                    alt="logo"
                    width={160}
                    height={160}
                />
            </div>
            <div className='flex w-full shadow'>
                <div className='bg-blue-950 hidden md:flex justify-center items-center rounded w-1/2'>
                    <div>
                        <Image
                            src="/images/logo-aquiles.png"
                            alt="logo"
                            width={200}
                            height={200}
                        />
                    </div>
                </div>
                <div className='bg-white rounded w-full md:w-1/2'>
                    <div className='space-y-4 px-6 lg:px-14 py-8 md:py-24'>

                        <h2 className='font-bold text-center text-lg text-primary'>Bienvenido</h2>
                        <div>
                            <label
                                htmlFor="username"
                                className="mb-1 block text-xs font-medium text-primary"
                            >
                                Usuario
                            </label>
                            <ControllerInput
                                id='username'
                                control={control}
                                placeholder='Ingrese su usuario'
                                name='username'
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
                                id='password'
                                control={control}
                                type='password'
                                placeholder='Ingrese su contraseña'
                                name='password'
                            />
                        </div>
                        <div className='flex justify-end'>
                            <Button onClick={handleSubmit(onSubmit)}>
                                Ingresar
                            </Button>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Login