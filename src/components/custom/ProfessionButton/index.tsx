import React, { FC } from 'react';
import { IProfessionButtonProps } from './types';

import PainterIcon from '@/images/icons/paint-brush-04-stroke-rounded';
import ElectricianIcon from '@/images/icons/zap-stroke-rounded';
import FireIcon from '@/images/icons/fire-03-stroke-rounded';

import RainDoubleDropIcon from '@/images/icons/rain-double-drop-stroke-rounded';
import ThermometerColdIcon from '@/images/icons/thermometer-cold-stroke-rounded';
import Mining02Icon from '@/images/icons/mining-02-stroke-rounded';
import Configuration01Icon from '@/images/icons/configuration-01-stroke-rounded';
import TruckIcon from '../../../../public/images/truck-icon';
const ProfessionButton: FC<IProfessionButtonProps> = (props) => {
  const { title } = props;

  const typeProfession: Record<string, FC<{ className?: string }>> = {
    Gasista: FireIcon,
    Pintor: PainterIcon,
    Electricista: ElectricianIcon,
    'Técnico aire acondicionado': ThermometerColdIcon,
    Albañil: Mining02Icon,
    Plomero: RainDoubleDropIcon,
    Mecanico: Configuration01Icon,
    Fletes: TruckIcon,
  };

  const IconComponent = typeProfession[title] || ThermometerColdIcon;

  return (
    <div className="flex flex-col items-center justify-start gap-1 rounded-md w-20">
      <div className="bg-white rounded-md p-3">
        <IconComponent className="text-blue-950" />
      </div>
      <h3 className="uppercase tracking-wide font-semibold text-xs text-white text-center">
        {title}
      </h3>
    </div>
  );
};

export default ProfessionButton;
