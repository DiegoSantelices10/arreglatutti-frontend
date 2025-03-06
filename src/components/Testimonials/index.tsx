'use client';
import SingleTestimonial from './SingleTestimonial';
import SectionTitle from '../custom/SectionTitle';
import Solid from '../custom/BackgroundDesign/Solid';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const testimonialData = [
  {
    id: 1,
    name: 'Roberto Gutiérrez',
    content:
      'Muy buen servicio, resolvió el problema con rapidez y profesionalismo.',
    star: 5,
  },
  {
    id: 2,
    name: 'Marta Rodríguez',
    content: 'Trabajo impecable, dejó todo en perfecto estado. Lo recomiendo.',
    star: 4,
  },
  {
    id: 3,
    name: 'Fernando Castillo',
    content:
      'Muy detallista y profesional. Cumplió con los tiempos y el resultado fue excelente.',
    star: 5,
  },
];

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Solo activa la animación la primera vez que aparece
    threshold: 0.2, // Cuánto de la sección debe estar visible (0.2 = 20%)
  });

  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };
  return (
    <section className="relative bg-white z-10 bg-primary/[.03] pt-20 pb-10 md:pb-0 md:px-10">
      <Solid />
      <motion.div
        ref={ref}
        variants={variants}
        initial={{ opacity: 0, x: 100 }}
        animate={inView ? 'visible' : 'hidden'}
        className="w-full"
      >
        <div className="container">
          <SectionTitle
            title="Testimonios"
            textClassName="md:text-[36px] lg:text-[40px] text-primary"
            center
          />
          <div className="lg:flex lg:justify-between lg:items-center lg:gap-4">
            <div className="lg:w-1/2 px-4 hidden lg:block">
              <h2 className="text-primary font-bold text-3xl">
                Nuestros clientes
              </h2>
              <p className="text-textSecondary">
                Estos son algunos de los testimonios de nuestros clientes.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:w-1/2 gap-y-6">
              {testimonialData.map((testimonial) => (
                <SingleTestimonial
                  key={testimonial.id}
                  testimonial={testimonial}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
