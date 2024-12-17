'use client'
import Button from '@/components/custom/Button'
import ControllerInput from '@/components/custom/ControllerInput'
import HeaderTitle from '@/components/custom/HeaderTitle'
import React from 'react'
import { FieldValues, useForm } from 'react-hook-form'

const CreateProfession = () => {
    const {
        control
    } = useForm<FieldValues>({
        defaultValues: {
            profession: '',
        }
    })

    return (
        <div className='space-y-4'>
            <HeaderTitle
                title='Nueva Profesión'
            />
            <div className='py-8'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div>
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
                    <div className='flex justify-end items-end'>
                        <Button>Agregar</Button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CreateProfession