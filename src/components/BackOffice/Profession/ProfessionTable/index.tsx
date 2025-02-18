import React, { FC, Fragment } from 'react';

import { IProsessionTable } from './types';
import DeleteIcon from '../../../../../public/images/delete-icon';
import { EditModal } from '../EditModal';
import { DeleteModal } from '../DeleteModal';
import Table from '@/components/custom/Table';
import { TableCell, TableHead, TableRow } from '@/components/ui/table';

const ProfessionTable: FC<IProsessionTable> = (props) => {
  const { data } = props;
  return (
    <Table
      childrenHeader={
        <Fragment>
          <TableHead>Profesión</TableHead>
        </Fragment>
      }
    >
      {data?.map((profession) => (
        <TableRow key={profession._id}>
          <TableCell className="font-medium">{profession.name}</TableCell>
          <TableCell className="text-right w-14">
            <EditModal profession={profession} />
          </TableCell>
          <TableCell className="text-right w-14">
            <DeleteModal
              id={profession._id.toString()}
              name={profession.name}
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

export default ProfessionTable;
