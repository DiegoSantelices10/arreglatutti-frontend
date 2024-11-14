import React, { FC, ReactNode } from 'react'
import {
    Drawer as DrawerUI,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from '@/components/ui/button'
import { FaUser, FaWhatsapp } from 'react-icons/fa';
import Avatar from '../Avatar';
import Carousel from '../Carousel';

type imageWork = {
    id: number,
    url: string
    documentId: string
}

interface IDrawerProps {
    buttonTrigger?: ReactNode;
    telephone: string;
    avatar: string;
    name: string;
    profession: string;
    email: string;
    imagesWorks: imageWork[]
}


const Drawer: FC<IDrawerProps> = (props) => {
    const {
        avatar,
        telephone,
        email,
        imagesWorks,
        name,
        profession,
    } = props;

    return (
        <DrawerUI>
            <DrawerTrigger className='bg-white flex text-secondary border border-secondary font-semibold justify-center items-center gap-2 px-4 rounded h-9 text-[14px]'>
                Ver perfil
                <FaUser />
            </DrawerTrigger>
            <DrawerContent className='md:w-1/2 mx-auto'>
                <DrawerHeader className='flex justify-start items-center gap-4'>
                    <Avatar image={avatar} />
                    <div>
                        <DrawerTitle className='text-primary'>{name}</DrawerTitle>
                        <DrawerDescription className='text-left'>{profession}</DrawerDescription>
                    </div>
                </DrawerHeader>
                <div>

                    <div className='px-4 text-sm w-full space-y-2'>
                        <div className='flex gap-2 justify-between'>
                            <h2>Zona de cobertatura:</h2>
                            <h2 className='font-medium'>Belgrano, nuñez, Saavedra</h2>
                        </div>
                        <div className='flex gap-2 justify-between'>
                            <h2>DNI:</h2>
                            <h2 className='font-medium'>33781733</h2>
                        </div>
                        <div className='flex gap-2 justify-between'>
                            <h2>Telefono:</h2>
                            <h2 className='font-medium'>{telephone}</h2>
                        </div>
                        <div className='flex gap-2 justify-between'>
                            <h2>Email:</h2>
                            <h2 className='font-medium'>{email}</h2>
                        </div>
                    </div>
                    <div className='w-full px-4 mt-2'>
                        <h2 className='text-primary text-sm font-semibold py-2'>Trabajos Realizados</h2>
                        <Carousel images={imagesWorks} />
                    </div>
                </div>

                <DrawerFooter className='flex justify-end'>
                    <Button className='mt-2 rounded-xl'>
                        <a
                            className='flex justify-end w-auto items-center gap-2'
                            target="_blank"
                            rel="noreferrer"
                            href={`https://api.whatsapp.com/send?phone=549${telephone}&text=Hola,%20necesito%20realizar%20una%20consulta`}
                        >
                            Contactame
                            <FaWhatsapp />
                        </a>
                    </Button>
                </DrawerFooter>
            </DrawerContent>
        </DrawerUI>
    )
}

export default Drawer