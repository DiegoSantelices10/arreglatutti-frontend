/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { Button } from '@/components/ui/button'
import React, { FC } from 'react'
import ControllerTextArea from '../ControllerTextArea'
import ControllerInput from '../ControllerInput'
import { FieldValues, useForm } from 'react-hook-form'
import ControllerSelect from '../ControllerSelect'
import { toast } from '@/hooks/use-toast'

const Form: FC<any> = (props) => {
    const {
        data,
    } = props

    const {
        control,
        handleSubmit
    } = useForm<FieldValues>({
        defaultValues: {
            name: "",
            telephone: "",
            message: "",
            profesional: "",
        },
    })

    const selectOptions = data?.map((item: any) => ({
        label: item.name,
        value: item.name, // ajusta `item.id` si deseas usar otro campo como valor
    }))

    const onSubmit = (value: any) => {
        console.log('value', value);
        toast({
            title: 'Enviado',
            description: 'Gracias por contactarnos, pronto nos pondremos en contacto con usted.',

        })

    }

    return (
        <form>
            <div className="-mx-4 flex flex-wrap">
                <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                        <label
                            htmlFor="name"
                            className="mb-1 block text-sm font-medium text-secondary"
                        >
                            Nombre
                        </label>
                        <ControllerInput
                            control={control}
                            placeholder='Ingrese su nombre'
                            name='name'
                        />
                    </div>
                </div>
                <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                        <label
                            htmlFor="email"
                            className="mb-1 block text-sm font-medium text-secondary"
                        >
                            Telefono
                        </label>
                        <ControllerInput
                            control={control}
                            placeholder='Ingrese su telefono'
                            name='telephone'
                        />
                    </div>
                </div>
                <div className="w-full px-4 md:w-full">
                    <div className="mb-8">
                        <label
                            htmlFor="email"
                            className="mb-1 block text-sm font-medium text-secondary"
                        >
                            Profesión
                        </label>
                        <ControllerSelect
                            options={selectOptions}
                            placeholder='Seleccione una profesión'
                            control={control}
                            name='profesional'
                        />
                    </div>
                </div>
                <div className="w-full px-4">
                    <div className="mb-8">
                        <label
                            htmlFor="message"
                            className="mb-1 block text-sm font-medium text-secondary"
                        >
                            Descripción del problema
                        </label>
                        <ControllerTextArea
                            control={control}
                            placeholder='Ingrese una breve descripcion del problema'
                            name='message'
                        />
                    </div>
                </div>
                <div className="w-full px-4">
                    <Button onClick={handleSubmit(onSubmit)}>
                        Enviar solicitud
                    </Button>
                </div>
            </div>
        </form>
    )
}

export default Form