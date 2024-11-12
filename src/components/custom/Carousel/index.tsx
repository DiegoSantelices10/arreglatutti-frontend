/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC } from 'react'
import {
    Carousel as CarouselUI,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'

type imageWork = {
    id: number,
    url: string
    documentId: string
}

interface ICarouselProps {
    images: imageWork[]
}

const Carousel: FC<ICarouselProps> = (props) => {
    const {
        images
    } = props


    return (
        <CarouselUI
            opts={{
                align: "start",
            }}
            className="w-full max-w-sm"
        >
            <CarouselContent>
                {images.map((image: any) => {
                    return (
                        <CarouselItem
                            className="basis-auto lg:basis-1/3"
                            key={image.id}
                        >
                            <Card className="overflow-hidden h-32 w-44">
                                <CardContent className="p-0 overflow-hidden rounded-md h-full w-full">
                                    <Image
                                        src={`${image.url}`}
                                        width={150}
                                        height={150}
                                        alt={image.url}
                                        className="object-cover h-full w-full rounded-md"
                                    />
                                </CardContent>
                            </Card>


                        </CarouselItem>
                    )
                })
                }

            </CarouselContent>

        </CarouselUI>

    )
}

export default Carousel