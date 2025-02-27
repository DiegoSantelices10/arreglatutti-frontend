/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { useForm } from 'react-hook-form';
import SectionTitle from '../custom/SectionTitle';
import CheckIcon from '@/images/icons/check-icon';
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
    },
    mode: 'onSubmit',
  });

  return (
    <section
      id="contact"
      className="relative overflow-hidden pt-16 md:pt-20 lg:pt-28 md:px-10 w-full "
    >
      <Solid />
      <motion.div
        ref={ref}
        variants={variants}
        animate={inView ? 'visible' : 'hidden'}
        className="w-full"
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
      >
        <div className="container">
          <SectionTitle
            title="Trabaja con nosotros"
            textClassName="md:text-[36px] lg:text-[40px]"
            center
          />
          <div className="lg:flex lg:justify-between lg:items-start lg:gap-4">
            <div
              className="mb-12 rounded-md p-8 bg-white lg:w-1/2"
              data-wow-delay=".15s"
            >
              <h2 className="mb-3 text-2xl font-bold text-primary text-center">
                Profesional matriculado
              </h2>

              <ProfessionalForm
                control={control}
                handleSubmit={handleSubmit}
                professions={professions}
                isValid={isValid}
                reset={reset}
              />
            </div>
            <div className="hidden lg:block lg:w-1/2  text-white space-y-8 pt-28 text-center ">
              <h2 className="text-white font-bold text-3xl">
                Proceso de selección
              </h2>
              <div className="flex justify-center items-center gap-4 px-6">
                <CheckIcon className="text-white size-6" />
                <h2>Envianos tus datos para ser contactado.</h2>
              </div>
              <div className="flex justify-center items-center gap-4 px-6">
                <CheckIcon className="text-white size-6" />
                <h2>Sera respondida en el menor tiempo posible.</h2>
              </div>
              <div className="flex justify-center items-center gap-4 px-6">
                <CheckIcon className="text-white size-6" />
                <h2>
                  Si sos profesional matriculado, podras ingresar a nuestra red.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
