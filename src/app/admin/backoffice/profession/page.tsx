'use client'
import ProfessionTable from '@/components/BackOffice/ProfessionTable'
import Button from '@/components/custom/Button'
import HeaderTitle from '@/components/custom/HeaderTitle'
import { profesionesData } from '@/mocks/profession'
import { useRouter } from 'next/navigation'
import React from 'react'

const Profession = () => {
    const router = useRouter();

    const profession = profesionesData

    const onCreatePress = () => router.push('/admin/backoffice/profession/create')

    return (
        <div className='space-y-8'>
            <HeaderTitle
                title='Profesiones'
            />
            <div>
                <div className='flex flex-col md:flex-row gap-4 justify-between items-center'>
                    <div className='w-full md:w-1/3 flex justify-start'>
                        <Button
                            onClick={onCreatePress}
                            className='w-full md:w-auto'>Agregar profesión</Button>
                    </div>
                </div>
                <div className='py-4'>
                    <ProfessionTable
                        data={profession}
                    />
                </div>
            </div>
        </div>
    )
}

export default Profession