/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC } from 'react';
import {
  Carousel as CarouselUI,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

type imageWork = {
  id: number;
  url: string;
};

interface ICarouselProps {
  images: imageWork[];
}

const Carousel: FC<ICarouselProps> = (props) => {
  const { images } = props;

  return (
    <CarouselUI
      opts={{
        align: 'start',
      }}
      className="w-full"
    >
      <CarouselContent>
        {images?.map((image: any, index) => {
          return (
            <CarouselItem className="basis-auto" key={index}>
              <Card className="overflow-hidden h-36 w-52">
                <CardContent className="p-0 overflow-hidden rounded-md h-full w-full">
                  <Image
                    src={`${image.url}`}
                    width={100}
                    height={100}
                    alt={image.url}
                    className="object-cover h-full w-full rounded-md"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          );
        })}
      </CarouselContent>
    </CarouselUI>
  );
};

export default Carousel;
