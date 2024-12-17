'use client'
import React from 'react'
import Select from '@/components/custom/ControllerSelect/Select'
import HeaderTitle from '@/components/custom/HeaderTitle'
import { profesionesData } from "@/mocks/profession";
import Button from '@/components/custom/Button';
import { professionalsData } from '@/mocks/professionals';
import { IProfessional } from './types';
import { useRouter } from 'next/navigation';
import ProfessionalTable from '@/components/BackOffice/ProfessionalTable';

interface Professional {
    id: number;
    documentId: string;
    name: string;
    slug: string;
    image: string;
}
const Professional = () => {
    const router = useRouter()

    const selectOptions = profesionesData?.map((item: Professional) => ({
        label: item.name,
        value: item.name,
    }))

    const professionals: IProfessional[] = Object.values(professionalsData).flat();

    const onCreatePress = () => router.push('/admin/backoffice/professional/create')


    return (
        <div className='space-y-8'>
            <HeaderTitle
                title='Profesionales'
            />
            <div>
                <div className='flex flex-col md:flex-row gap-4 justify-between items-center'>
                    <div className='w-full md:w-1/3 flex justify-start'>
                        <Button
                            onClick={onCreatePress}
                            className='w-full md:w-auto'>Agregar profesional</Button>
                    </div>
                    <Select
                        placeholder='Selecciona una profesión'
                        className='w-full md:w-1/3'
                        options={selectOptions}
                    />
                </div>
                <div className='py-4'>
                    <ProfessionalTable
                        data={professionals}
                    />
                </div>
            </div>
        </div>
    )
}

export default Professional