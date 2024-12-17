/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { Button } from '@/components/ui/button'
import React, { FC } from 'react'
import { toast } from '@/hooks/use-toast'
import ControllerInput from '@/components/custom/ControllerInput'
import ControllerSelect from '@/components/custom/ControllerSelect'
import ControllerTextArea from '@/components/custom/ControllerTextArea'

const ProfessionalForm: FC<any> = (props) => {
    const {
        data,
        control,
        handleSubmit,
    } = props


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
                            className="mb-1 block text-xs font-medium text-primary"
                        >
                            Nombre
                        </label>
                        <ControllerInput
                            id='name'
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
                            className="mb-1 block text-xs font-medium text-primary"
                        >
                            Telefono
                        </label>
                        <ControllerInput
                            id='email'
                            control={control}
                            placeholder='Ingrese su telefono'
                            name='telephone'
                        />
                    </div>
                </div>
                <div className="w-full px-4 md:w-full">
                    <div className="mb-8">
                        <label
                            htmlFor="profesion"
                            className="mb-1 block text-xs font-medium text-primary"
                        >
                            Profesión
                        </label>
                        <ControllerSelect
                            id='profesion'
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
                            className="mb-1 block text-xs font-medium text-primary"
                        >
                            Descripción de trabajos realizados
                        </label>
                        <ControllerTextArea
                            id='message'
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

export default ProfessionalForm