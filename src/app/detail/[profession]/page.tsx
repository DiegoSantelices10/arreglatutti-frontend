/* eslint-disable @typescript-eslint/no-explicit-any */
''
import React, { FC } from 'react'
import Avatar from '@/components/custom/Avatar'
import Button from '@/components/custom/Button'
// import Carousel from '@/components/custom/Carousel'
import Select from '@/components/custom/ControllerSelect/Select'
import { obtenerProfesionales } from '@/services/profesional'
import { FaWhatsapp } from "react-icons/fa";
import Drawer from '@/components/custom/Drawer'

interface IProfessionDetail {
    params: Promise<{ profession: string }>
}

const ProfessionDetail: FC<IProfessionDetail> = async ({ params }) => {

    const { profession } = await params

    const titleProfession = profession.includes('%C3%B1') || profession.includes('%20')
        ? decodeURIComponent(profession)
            .replace(/ñ/g, 'n') // Reemplaza todas las "ñ" con "n"
            .replace(/ /g, '-')  // Reemplaza todos los espacios con "-"
        : profession;


    const professionText = decodeURIComponent(profession)

    let professionals = [];

    try {
        const { data } = await obtenerProfesionales(titleProfession);
        professionals = data;
    } catch (error) {
        console.error('Error fetching professionals:', error);
    }

    return (
        <section
            id="home"
            className="relative z-20 min-h-screen overflow-hidden pt-[80px] bg-[#FAFAFB] pb-10"
        >
            <div className='absolute w-full h-24 rounded-b-3xl bg-primary -z-10' />
            <div className='px-4 md:px-14 space-y-8'>
                <div className='bg-white rounded-xl p-6 shadow-md mt-10 md:mx-auto md:w-1/2'>
                    <p className='text-sm px-2 text-primary font-medium pb-1'>En que zona buscas?</p>
                    <Select
                        placeholder='Selecciona un barrio'
                        className='bg-white'
                        options={[
                            {
                                value: 'Nuñez',
                                label: 'Nuñez'
                            },
                            {
                                value: 'Belgrano',
                                label: 'Belgrano'
                            },
                            {
                                value: 'Palermo',
                                label: 'Palermo'
                            },
                        ]}
                    />
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {professionals.map((professional: any) => (
                        <div key={professional.id}>
                            <div className='rounded-xl bg-white p-4 shadow-md'>
                                <div className='flex flex-wrap justify-between'>
                                    <div className='flex items-center'>
                                        <div>
                                            <Avatar image={professional.imgProfile.url} />
                                        </div>
                                        <div className='px-4'>
                                            <h1 className='text-primary font-semibold'>{professional.name}</h1>
                                            <div className='flex gap-1'>
                                                <h1 className='text-xs'>Especialidad: </h1>
                                                <h1 className='text-xs'>{professionText}</h1>
                                            </div>
                                            <div className='flex gap-1'>
                                                <h1 className='text-xs'>Zona: </h1>
                                                <h1 className='text-xs'>{professional.city}</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <p className='text-xs text-textSecondary font-normal mt-2'>{professional.description}</p>
                                <div className='mt-2 h-[1px] bg-gray-200' />
                                <div className='flex justify-between items-center mt-4'>
                                    <Drawer
                                        name={professional.name}
                                        imagesWorks={professional.imgWorks}
                                        email={professional.email}
                                        profession={professionText}
                                        avatar={professional.imgProfile.url}
                                        telephone={professional.telephone}
                                    />
                                    <a
                                        target="_blank"
                                        rel="noreferrer"
                                        href={`https://api.whatsapp.com/send?phone=549${professional.telephone}&text=Hola,%20necesito%20realizar%20una%20consulta`}
                                    >
                                        <Button>
                                            Contactame
                                            <FaWhatsapp />
                                        </Button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProfessionDetail