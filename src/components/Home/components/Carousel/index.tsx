/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React, { useEffect, useState } from 'react';
import {
  Carousel as CarouselUI,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import Autoplay from 'embla-carousel-autoplay';

const Carousel = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const imagesDesktop = [
    {
      id: 1,
      url: '/images/carousel1.jpg',
    },
    {
      id: 2,
      url: '/images/carousel2.jpg',
    },
  ];

  const imagesMobile = [
    {
      id: 1,
      url: '/images/carousel1movil.jpg',
    },
    {
      id: 2,
      url: '/images/carousel2movil.jpg',
    },
  ];

  const images = windowWidth > 768 ? imagesDesktop : imagesMobile;

  return (
    <div className="absolute w-full h-screen">
      <div className="absolute h-full bg-gradient-to-t from-primary md:from-primary md:via-transparent via-primary to-transparent z-20 inset-0" />
      <div className="absolute h-full bg-primary bg-opacity-30 z-20 inset-0" />

      <CarouselUI
        plugins={[Autoplay({ delay: 4000 })]}
        className="w-full absolute"
      >
        <CarouselContent className="h-screen z-0">
          {images?.map((image: any) => (
            <CarouselItem
              className="border-none w-full h-full flex justify-center items-center"
              key={image.id}
            >
              <Card className="overflow-hidden w-full h-full">
                <CardContent className="p-0 overflow-hidden border-none w-auto h-auto">
                  <Image
                    src={image.url}
                    width={1920}
                    height={1080}
                    alt={image.url}
                    className="border-none object-cover"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </CarouselUI>
    </div>
  );
};

export default Carousel;
