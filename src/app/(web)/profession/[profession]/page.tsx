/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC } from 'react';
import Content from '@/components/Profession/Content';

interface IProfessionDetailProps {
  params: Promise<{ profession: string }>;
}

const ProfessionDetail: FC<IProfessionDetailProps> = async ({ params }) => {
  const { profession } = await params;

  return <Content profession={profession} />;
};

export default ProfessionDetail;
