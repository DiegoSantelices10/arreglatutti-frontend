import React, { FC, Fragment } from 'react';
import { IProfessionalTableProps } from './types';
import DeleteIcon from '../../../../../public/images/delete-icon';
import { EditModal } from '../EditModal';
import DeleteModal from '../DeleteModal';
import Table from '@/components/custom/Table';
import { TableCell, TableHead, TableRow } from '@/components/ui/table';

const ProfessionalTable: FC<IProfessionalTableProps> = (props) => {
  const { data } = props;
  return (
    <Table
      childrenHeader={
        <Fragment>
          <TableHead>Profesional</TableHead>
          <TableHead>Profesión</TableHead>
        </Fragment>
      }
    >
      {data?.map((professional) => (
        <TableRow key={professional._id}>
          <TableCell className="font-medium">{professional.name}</TableCell>
          <TableCell>{professional.profession}</TableCell>
          <TableCell className="text-right w-14">
            <EditModal professional={professional} />
          </TableCell>
          <TableCell className="text-right">
            <DeleteModal
              id={professional._id.toString()}
              name={professional.name}
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

export default ProfessionalTable;
