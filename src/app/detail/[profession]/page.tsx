/* eslint-disable @typescript-eslint/no-explicit-any */
''
import React, { FC } from 'react'
import Avatar from '@/components/custom/Avatar'
import Button from '@/components/custom/Button'
// import Carousel from '@/components/custom/Carousel'
import Select from '@/components/custom/ControllerSelect/Select'
import { obtenerProfesionales } from '@/services/profesional'
import { FaWhatsapp } from "react-icons/fa";

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
        // Podrías agregar aquí alguna lógica para mostrar un mensaje de error al usuario
    }
    return (
        <section
            id="home"
            className="relative z-20 min-h-screen overflow-hidden pt-[80px] bg-[#FAFAFB] pb-10"
        >
            <div className='absolute w-full h-24 rounded-b-3xl bg-secondary -z-10' />
            <div className='px-4 md:px-14 space-y-8'>
                <div className='bg-white rounded-xl p-6 shadow mt-10 md:mx-auto md:w-1/2'>
                    <p className='text-sm px-2 text-secondary font-medium pb-1'>En que zona buscas?</p>
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
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                    {professionals.map((professional: any) => (
                        <div key={professional.id}>
                            <div className='rounded-xl bg-white p-4 shadow'>
                                <div className='flex flex-wrap justify-between'>
                                    <div className='flex items-center'>
                                        <div>
                                            <Avatar image={professional.imgProfile.url} />
                                        </div>
                                        <div className='px-4'>
                                            <h1 className='text-primary font-semibold'>{professional.name}</h1>
                                            <h1 className='text-gray-800 text-xs'>zona: {professional.city}</h1>
                                            <h1 className='text-gray-800 text-xs'>especialidad: {professionText}</h1>
                                        </div>
                                    </div>
                                </div>
                                <p className='text-sm md:text-xs text-[#8D94AE] font-semibold mt-2'>{professional.description}</p>
                                <div className='mt-2 h-[1px] bg-gray-200' />
                                {/* <div className='w-full'>
                                    <Carousel images={professional.imgWorks} />
                                </div> */}
                                <div className='flex justify-end mt-2'>
                                    <a
                                        target="_blank"
                                        rel="noreferrer"
                                        href={`https://api.whatsapp.com/send?phone=549${professional.telephone}&text=Hola,%20necesito%20realizar%20una%20consulta`}
                                    >
                                        <Button className='mt-2'>
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