/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import ProfessionButton from "../custom/ProfessionButton";
import Form from "../custom/Form";
import Link from "next/link";
import ProfessionSkeleton from "./Skeleton";
import { motion } from "framer-motion";
import Solid from "../custom/BackgroundDesign/Solid";
import { profesionesData } from "@/mocks/profession";
import { useEffect, useState } from "react";
import Carousel from "./components/Carousel";

const HomeUI = () => {

  const professions = profesionesData;
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

  // try {
  //   const { data } = await obtenerProfesiones();
  //   console.log('profesiones', data);

  //   professions = data;
  // } catch (error) {
  //   console.error('Error fetching professionals:', error);
  //   // Podrías agregar aquí alguna lógica para mostrar un mensaje de error al usuario
  // }


  // if (!professions) return <div> <h1 className="text-white">No hay profesiones</h1> </div>

  const imagesDesktop = [{
    id: 1,
    url: '/images/carousel1.jpg'
  },
  {
    id: 2,
    url: '/images/carousel2.jpg'
  }];

  const imagesMobile = [{
    id: 1,
    url: '/images/carousel1movil.jpg'
  },
  {
    id: 2,
    url: '/images/carousel2movil.jpg'
  }];

  return (
    <>
      {/* <div className="absolute h-full bg-gradient-to-t from-primary md:from-primary md:via-transparent via-primary to-transparent z-20 inset-0" /> */}
      {/* <div className="absolute h-full bg-primary bg-opacity-30 z-20 inset-0" /> */}

      <Carousel images={windowWidth > 768 ? imagesDesktop : imagesMobile} />
      <motion.div
        className="w-full z-50 inset-0 relative"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}>
        <section
          id="home"
          className="z-50 min-h-screen overflow-hidden pt-[120px] md:px-10 "
        >
          <Solid />

          <div className="z-50 lg:flex lg:gap-4 lg:justify-between lg:items-center">

            <div className="pb-6 w-full lg:w-1/2">
              {/* Title */}
              <div className="flex flex-col items-center fadeInUp mx-auto text-center"
                data-wow-delay=".2s"
              >
                <div className="w-full">
                  <h1 className="text-2xl lg:text-[36px] font-bold text-white">
                    Profesionales matriculados
                  </h1>
                  <p className="mb-12 mt-1 text-sm font-normal text-body-white text-[#C0C0CF]">
                    Gasistas, plomeros, electricistas, Instaladores de aire acondicionado y mucho mas
                  </p>
                </div>
              </div>
              <h1 className="text-white text-center font-semibold pb-4">Selecciona el profesional que buscas</h1>

              {/* Buttons group */}
              {professions.length === 0 ? <ProfessionSkeleton /> : (
                <div className="flex flex-wrap px-4 md:px-0 gap-6 justify-center items-start">
                  {professions.map((item: any) => (
                    <Link
                      key={item.id}
                      className="cursor-pointer"
                      href={{
                        pathname: `/${item.name}`,
                      }}
                    >
                      <ProfessionButton
                        title={item.name}
                      />
                    </Link>
                  ))}
                </div>
              )}
            </div>


            {/* Form */}

            <div className="container w-full lg:w-1/2 mt-4 md:mt-0 md:pl-10">
              <div
                className="mb-12 rounded p-8 bg-white"
                data-wow-delay=".15s"
              >
                <h2 className="mb-3 text-2xl font-bold text-primary text-center">
                  Solicita tu cotización
                </h2>
                <Form data={professions} />
              </div>
            </div>
          </div>

        </section>
      </motion.div>

    </>
  );
};

export default HomeUI;
