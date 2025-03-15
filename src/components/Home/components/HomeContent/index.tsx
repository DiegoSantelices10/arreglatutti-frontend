/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React, { FC } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Solid from '@/components/custom/BackgroundDesign/Solid';
import ProfessionButton from '@/components/custom/ProfessionButton';
import Form from '@/components/custom/Form';

interface IHomeContent {
  data: any;
}
const HomeContent: FC<IHomeContent> = (props) => {
  const { data } = props;

  return (
    <motion.div
      className="w-full z-50 inset-0 relative"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <section
        id="home"
        className="z-50 min-h-screen overflow-hidden pt-14 pb-20 md:px-10"
      >
        <Solid />

        <div className="z-50 lg:flex lg:gap-4 lg:justify-between lg:items-center">
          <div className="pb-6 w-full lg:w-1/2">
            {/* Title */}
            <div
              className="flex flex-col items-center fadeInUp mx-auto text-center"
              data-wow-delay=".2s"
            >
              <div className="w-full">
                <h1 className="text-2xl lg:text-[36px] font-bold text-white">
                  Profesionales matriculados
                </h1>
                <p className="mb-12 mt-1 text-sm font-normal text-body-white text-gray-300">
                  Gasistas, plomeros, electricistas, Instaladores de aire
                  acondicionado y mucho mas
                </p>
              </div>
            </div>
            <h1 className="text-white text-center font-semibold pb-4">
              Selecciona el profesional que buscas
            </h1>

            {/* Buttons group */}
            <div className="flex flex-wrap px-4 md:px-0 gap-6 justify-center items-start">
              {data &&
                data?.map((item: any) => (
                  <Link
                    key={item._id}
                    className="cursor-pointer"
                    href={`/profession/${item.name}`}
                  >
                    <ProfessionButton title={item.name} />
                  </Link>
                ))}
            </div>
          </div>

          {/* Form */}

          <div className=" w-full lg:w-1/2 mt-4 md:mt-0 md:pl-10">
            <div
              className="mb-12 rounded-md p-8 bg-white"
              data-wow-delay=".15s"
            >
              <h2 className="mb-3 text-2xl font-bold text-primary text-center">
                Solicita tu cotización
              </h2>
              <Form data={data} />
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default HomeContent;
