/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { FC } from 'react';
import { getProfessionals } from '@/services/profesional';
import Content from '@/components/ProfessionDetail/Content';
import { getCities } from '../../../services/city/index';

interface IProfessionDetail {
  params: Promise<{ profession: string }>;
}

const ProfessionDetail: FC<IProfessionDetail> = async ({ params }) => {
  const { profession } = await params;

  const { data } = await getProfessionals(profession);
  const { data: cities } = await getCities();

  return (
    <div className="relative z-20 min-h-screen overflow-hidden pt-[80px] bg-[#FAFAFB] pb-10">
      <div className="absolute w-full h-24 rounded-b-3xl bg-primary -z-10" />
      <Content data={data} cities={cities} profession={profession} />
    </div>
  );
};

export default ProfessionDetail;
