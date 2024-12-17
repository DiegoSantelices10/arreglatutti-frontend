'use client'
import CityTable from '@/components/BackOffice/CityTable'
import Button from '@/components/custom/Button'
import HeaderTitle from '@/components/custom/HeaderTitle'
import { useRouter } from 'next/navigation'
import React from 'react'

const citiesData = [
    {
        id: 1,
        name: 'Belgrano',
    },
    {
        id: 2,
        name: 'Nuñez',
    },
    {
        id: 3,
        name: 'Palermo',
    },
    {
        id: 4,
        name: 'Saavedra',
    },
    {
        id: 5,
        name: 'Colegiales',
    },
    {
        id: 6,
        name: 'Villa urquiza',
    }
]

const City = () => {
    const router = useRouter();

    const cities = citiesData

    const onCreatePress = () => router.push('/admin/backoffice/city/create')

    return (
        <div className='space-y-8'>
            <HeaderTitle
                title='Barrios'
            />
            <div>
                <div className='flex flex-col md:flex-row gap-4 justify-between items-center'>
                    <div className='w-full md:w-1/3 flex justify-start'>
                        <Button
                            onClick={onCreatePress}
                            className='w-full md:w-auto'>Agregar barrio</Button>
                    </div>
                </div>
                <div className='py-4'>
                    <CityTable
                        data={cities}
                    />
                </div>
            </div>
        </div>
    )
}

export default City