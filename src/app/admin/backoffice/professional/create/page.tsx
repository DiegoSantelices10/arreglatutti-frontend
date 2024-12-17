'use client'
import Button from '@/components/custom/Button'
import ControllerInput from '@/components/custom/ControllerInput'
import HeaderTitle from '@/components/custom/HeaderTitle'
import React from 'react'
import { FieldValues, useForm } from 'react-hook-form'

const CreateProfessional = () => {
    const {
        control
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            profession: '',
            email: '',
            telephone: '',
            dni: '',
            cities: [],
            description: '',
            images: []
        }
    })

    return (
        <div className='space-y-4'>
            <HeaderTitle
                title='Nuevo Profesional'
            />
            <div className='py-8'>
                <div className='grid grid-cols-2 gap-4'>
                    <div className='col-span-2 md:col-span-1'>
                        <label
                            htmlFor="name"
                            className="mb-1 block text-xs font-medium text-primary"
                        >
                            Nombre
                        </label>
                        <ControllerInput
                            id='name'
                            control={control}
                            name='name'
                            rules={{ required: true }}
                        />
                    </div>
                    <div className='col-span-2 md:col-span-1'>
                        <label
                            htmlFor="profession"
                            className="mb-1 block text-xs font-medium text-primary"
                        >
                            Profesión
                        </label>
                        <ControllerInput
                            id='profession'
                            control={control}
                            name='profession'
                            rules={{ required: true }}
                        />
                    </div>
                    <div className='col-span-2 md:col-span-1'>
                        <label
                            htmlFor="email"
                            className="mb-1 block text-xs font-medium text-primary"
                        >
                            Email
                        </label>
                        <ControllerInput
                            id='email'
                            control={control}
                            name='email'
                            rules={{ required: true }}
                        />
                    </div>
                    <div className='col-span-2 md:col-span-1'>
                        <label
                            htmlFor="telephone"
                            className="mb-1 block text-xs font-medium text-primary"
                        >
                            Nombre
                        </label>
                        <ControllerInput
                            id='telephone'
                            control={control}
                            name='telephone'
                            rules={{ required: true }}
                        />
                    </div>
                    <div className='col-span-2 md:col-span-1'>
                        <label
                            htmlFor="dni"
                            className="mb-1 block text-xs font-medium text-primary"
                        >
                            Dni
                        </label>
                        <ControllerInput
                            id='dni'
                            control={control}
                            name='dni'
                            rules={{ required: true }}
                        />
                    </div>
                    <div className='col-span-2 md:col-span-1'>
                        <label
                            htmlFor="cities"
                            className="mb-1 block text-xs font-medium text-primary"
                        >
                            Barrio
                        </label>
                        <ControllerInput
                            id='cities'
                            control={control}
                            name='cities'
                            rules={{ required: true }}
                        />
                    </div>
                    <div className='col-span-2 md:col-span-1'>
                        <label
                            htmlFor="description"
                            className="mb-1 block text-xs font-medium text-primary"
                        >
                            Descripción
                        </label>
                        <ControllerInput
                            id='description'
                            control={control}
                            name='description'
                            rules={{ required: true }}
                        />
                    </div>
                    <div className='col-span-2 md:col-span-1'>
                        <label
                            htmlFor="images"
                            className="mb-1 block text-xs font-medium text-primary"
                        >
                            Imagenes
                        </label>
                        <ControllerInput
                            id='images'
                            control={control}
                            name='images'
                            rules={{ required: true }}
                        />
                    </div>
                    <div className='flex justify-end col-span-2'>
                        <Button>Agregar</Button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CreateProfessional