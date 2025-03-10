/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC } from 'react';
import {
  Carousel as CarouselUI,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';
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
    <CarouselUI className="w-full">
      <CarouselContent>
        {images?.map((image: any, index) => {
          return (
            <CarouselItem key={index}>
              <Card className="h-full">
                <CardContent className=" flex h-full justify-center items-center p-0">
                  <img
                    src={`${image.url}`}
                    alt={image.url}
                    className="object-contain rounded-md"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious className="ml-14 " />

      <CarouselNext className="mr-14" />
    </CarouselUI>
  );
};

export default Carousel;
