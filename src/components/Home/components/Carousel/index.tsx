/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC } from 'react'
import {
    Carousel as CarouselUI,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import Autoplay from 'embla-carousel-autoplay'

type imageWork = {
    id: number,
    url: string
}

interface ICarouselProps {
    images: imageWork[]
}

const Carousel: FC<ICarouselProps> = (props) => {
    const { images } = props

    return (
        <div className='relative w-full h-screen'>
            <div className="absolute h-full bg-gradient-to-t from-primary md:from-primary md:via-transparent via-primary to-transparent z-20 inset-0" />
            <div className="absolute h-full bg-primary bg-opacity-30 z-20 inset-0" />

            <CarouselUI
                plugins={[Autoplay({ delay: 4000 })]}
                className="w-full absolute"
            >
                <CarouselContent
                    className='h-screen z-0'
                >
                    {images?.map((image: any) => (
                        <CarouselItem className="border-none w-full h-full flex justify-center items-center" key={image.id}>
                            <Card className="overflow-hidden w-full h-full">
                                <CardContent className="p-0 overflow-hidden border-none w-auto h-auto">

                                    <Image
                                        src={image.url}
                                        width={1920}
                                        height={1080}
                                        objectFit="cover" // Para que la imagen se recorte adecuadamente
                                        alt={image.url}
                                        className="border-none"
                                    />
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </CarouselUI>
        </div>

    )
}

export default Carousel
