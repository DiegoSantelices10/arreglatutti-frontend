/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { useForm } from 'react-hook-form';
import Solid from '../custom/BackgroundDesign/Solid';
import ProfessionalForm from './ProfessionalForm';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { ContactFormSchema, ContactSchemaType } from './schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { FC } from 'react';

const Contact: FC<any> = (props) => {
  const { professions } = props;
  const [ref, inView] = useInView({
    triggerOnce: true, // Solo activa la animación la primera vez que aparece
    threshold: 0.2, // Cuánto de la sección debe estar visible (0.2 = 20%)
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const {
    control,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm<ContactSchemaType>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: '',
      telephone: '',
      message: '',
      profession: '',
      acceptTerms: false,
    },
    mode: 'onSubmit',
  });

  return (
    <section id="contact" className="md:px-10 w-full ">
      <Solid />
      <motion.div
        ref={ref}
        variants={variants}
        animate={inView ? 'visible' : 'hidden'}
        className="w-full"
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
      >
        <div>
          <div className="lg:flex lg:justify-between lg:items-center lg:gap-4 space-y-4 lg:space-y-0">
            <div className=" text-white  text-center lg:text-left w-full  lg:w-1/2">
              <h2 className="text-white font-bold text-2xl">
                Formulario de selección
              </h2>
              <h2>Envianos tus datos para ser contactado.</h2>
            </div>
            <div
              className=" md:rounded-xl p-8 lg:bg-white/10 lg:w-1/2"
              data-wow-delay=".15s"
            >
              <ProfessionalForm
                control={control}
                handleSubmit={handleSubmit}
                professions={professions}
                isValid={isValid}
                reset={reset}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
