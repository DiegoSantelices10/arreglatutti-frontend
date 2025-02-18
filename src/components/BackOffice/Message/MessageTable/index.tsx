/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import Table from '@/components/custom/Table';
import { TableCell, TableHead, TableRow } from '@/components/ui/table';
import React, { FC, Fragment, useState } from 'react';
import EditModal from '../EditModal';
import { DeleteModal } from '../DeleteModal';
import DeleteIcon from '../../../../../public/images/delete-icon';

interface IMessageProps {
  data: any;
}
const MessageTable: FC<IMessageProps> = (props) => {
  const { data, ...rest } = props;

  console.log('data:::', data);

  const [renderData, setRenderData] = useState(data);

  return renderData.length > 0 ? (
    <Table
      childrenHeader={
        <Fragment>
          <TableHead>Nombre</TableHead>
          <TableHead>Profesión</TableHead>
        </Fragment>
      }
      {...rest}
    >
      {renderData.map((item: any) => (
        <TableRow key={item._id}>
          <TableCell className="font-medium">{item.name}</TableCell>
          <TableCell className="font-medium">{item.profession}</TableCell>
          <TableCell className="text-right w-14">
            <EditModal item={item} />
          </TableCell>
          <TableCell className="text-right w-14">
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
          </TableCell>
        </TableRow>
      ))}
    </Table>
  ) : (
    <div className="flex justify-center items-center pt-6">
      <h1 className="text-lg font-semibold text-textSecondary">
        No hay mensajes
      </h1>
    </div>
  );
};

export default MessageTable;
