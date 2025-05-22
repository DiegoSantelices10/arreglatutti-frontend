/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { DeleteModal } from '@/components/BackOffice/MessageClient/DeleteModal';
import HeaderTitle from '@/components/custom/HeaderTitle';
import { getMessages } from '@/services/messageClient';
import React, { FC, useEffect, useState } from 'react';
import DeleteIcon from '../../../../../public/images/delete-icon';

const MessageClient: FC = () => {
  const [renderData, setRenderData] = useState([]);

  useEffect(() => {
    getMessagesData();
  }, []);

  const getMessagesData = async () => {
    const { status, data } = await getMessages();
    if (status !== 200) {
      return;
    }
    setRenderData(data);
  };

  return (
    <div className="space-y-4">
      <HeaderTitle title="Solicitudes de clientes" />
      <div className="space-y-4">
        {renderData &&
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
                <div className="text-sm font-semibold text-primary">
                  <p className="text-textSecondary text-xs">Telefono</p>
                  <span className="font-medium">{item.telephone}</span>
                </div>
                <div className="text-sm font-semibold text-primary">
                  <p className="text-textSecondary text-xs">Correo</p>
                  <span className="font-medium">{item.email}</span>
                </div>
                <div className="text-sm font-semibold text-primary">
                  <p className="text-textSecondary text-xs">Dirección</p>
                  <span className="font-medium">{item.address}</span>
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
          ))}
      </div>
    </div>
  );
};

export default MessageClient;
