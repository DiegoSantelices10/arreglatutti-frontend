import React, { FC, Fragment } from 'react';

import { ICityTableProps } from './types';
import DeleteIcon from '../../../../../public/images/delete-icon';
import { EditModal } from '../EditModal';
import DeleteModal from '../DeleteModal';
import Table from '@/components/custom/Table';
import { TableCell, TableHead, TableRow } from '@/components/ui/table';

const CityTable: FC<ICityTableProps> = (props) => {
  const { data } = props;

  return (
    <Table
      childrenHeader={
        <Fragment>
          <TableHead>Nombre</TableHead>
        </Fragment>
      }
    >
      {data?.map((city) => (
        <TableRow key={city._id}>
          <TableCell className="font-medium">{city.name}</TableCell>
          <TableCell className="text-right w-14">
            <EditModal city={city} />
          </TableCell>
          <TableCell className="text-right w-14">
            <DeleteModal
              id={city._id.toString()}
              name={city.name}
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
  );
};

export default CityTable;
