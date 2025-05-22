/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import HeaderTitle from '@/components/custom/HeaderTitle';
import React, { FC, useEffect, useState } from 'react';
import DeleteIcon from '../../../../../public/images/delete-icon';
import { getConsultations } from '@/services/consultation';
import { DeleteModal } from '@/components/BackOffice/Consultation/DeleteModal';

const Consultation: FC = () => {
  const [renderData, setRenderData] = useState([]);

  useEffect(() => {
    getMessagesData();
  }, []);

  const getMessagesData = async () => {
    const { status, data } = await getConsultations();
    if (status !== 200) {
      return;
    }
    setRenderData(data);
  };

  return (
    <div className="space-y-4">
      <HeaderTitle title="Consultas de clientes" />
      <div className="space-y-4">
        {renderData.length > 0 ? (
          renderData?.map((item: any) => (
            <div
              key={item._id}
              className="p-4 w-full rounded-md shadow-sm bg-gray-100 gap-2 flex justify-between"
            >
              <div className="space-y-2">
                <div className="text-sm font-semibold text-primary">
                  <p className="text-textSecondary text-xs">Nombre Cliente</p>
                  <span className="font-medium">{item.name}</span>
                </div>
                <div className="text-sm font-semibold text-primary">
                  <p className="text-textSecondary text-xs">Tipo de servicio</p>
                  <span className="font-medium">{item.profession}</span>
                </div>
                {item.professionalName && (
                  <div className="text-sm font-semibold text-primary">
                    <p className="text-textSecondary text-xs">
                      Profesional asignado
                    </p>
                    <span className="font-medium">{item.professionalName}</span>
                  </div>
                )}
                <div className="text-sm font-semibold text-primary">
                  <p className="text-textSecondary text-xs">Telefono</p>
                  <span className="font-medium">{item.telephone}</span>
                </div>
                <div className="text-sm font-semibold text-primary">
                  <p className="text-textSecondary text-xs">Mensaje</p>
                  <span className="font-medium">{item.message}</span>
                </div>
              </div>
              <div>
                <DeleteModal
                  id={item._id}
                  name={item.name}
                  setRenderData={setRenderData}
                  trigger={
                    <div className="rounded-full cursor-pointer bg-red-600 h-8 w-8 flex justify-center items-center">
                      <DeleteIcon className="h-5 w-5 text-white" />
                    </div>
                  }
                />
              </div>
            </div>
          ))
        ) : (
          <div className="flex justify-center items-center pt-6">
            <p className="text-lg font-semibold text-textSecondary">
              No hay mensajes
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Consultation;
