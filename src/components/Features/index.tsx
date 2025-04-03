'use client';
import Solid from '../custom/BackgroundDesign/Solid';
import SectionTitle from '../custom/SectionTitle';
import SingleFeature from './SingleFeature';
import featuresData from './featuresData';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Features = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Solo activa la animación la primera vez que aparece
    threshold: 0.2, // Cuánto de la sección debe estar visible (0.2 = 20%)
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <>
      <section id="features" className="md:pb-0 pb-10 md:pt-12">
        <Solid />
        <motion.div
          ref={ref}
          variants={variants}
          animate={inView ? 'visible' : 'hidden'}
          className="w-full"
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1.5 }}
        >
          <SectionTitle
            title="Servicio garantizado"
            textClassName="text-white md:text-[36px] lg:text-[40px] "
            center
          />

          <div className="container pt-10">
            <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
              {featuresData.map((feature) => (
                <SingleFeature key={feature.id} feature={feature} />
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Features;
