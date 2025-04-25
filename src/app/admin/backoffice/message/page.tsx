/* eslint-disable @typescript-eslint/no-explicit-any */
import MessageTable from '@/components/BackOffice/Message/MessageTable';
import HeaderTitle from '@/components/custom/HeaderTitle';
import { getProfessionalApplication } from '@/services/professionalApplication';
import React, { FC } from 'react';

const Message: FC = async () => {
  const { status, data } = await getProfessionalApplication();

  if (status !== 200)
    return (
      <div className="space-y-4">
        <HeaderTitle title="Bandeja de entrada" />
        <p className="text-3xl font-bold text-primary">
          No hay mensajes disponibles
        </p>
      </div>
    );

  return (
    <div className="space-y-4">
      <HeaderTitle title="Bandeja de entrada" />
      <MessageTable data={data} />
    </div>
  );
};

export default Message;
