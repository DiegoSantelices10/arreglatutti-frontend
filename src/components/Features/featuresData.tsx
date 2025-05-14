import { ReactNode } from 'react';
import DolarIcon from '../../../public/images/dolar-icon';
import CheckIcon from '@/images/icons/check-icon';
import TimeIcon from '../../../public/images/time-icon';

interface IFeaturesData {
  id: number;
  icon: ReactNode;
  title: string;
  paragraph: string;
}

const featuresData: IFeaturesData[] = [
  {
    id: 1,
    icon: <DolarIcon className="size-10 text-white" />,
    title: 'Solicita tu cotización',
    paragraph:
      'Evaluaremos tus necesidades, para ofrecerte la mejor solución a tu presupuesto.',
  },
  {
    id: 2,
    icon: <CheckIcon className="size-10 text-white" />,
    title: 'Calidad de servicio',
    paragraph:
      'Los profesionales de la plataforma son verificados y expertos en sus respectivas áreas de conocimiento.',
  },
  {
    id: 3,
    icon: <TimeIcon className="size-10 text-white" />,
    title: 'Respuesta inmediata',
    paragraph:
      'Damos la mejor solución para tus consultas. Respondemos al instante.',
  },
];
export default featuresData;
