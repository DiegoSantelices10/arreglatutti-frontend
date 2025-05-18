import React, { FC, Fragment } from 'react';
import { IProfessionalTableProps } from './types';
import DeleteIcon from '../../../../../public/images/delete-icon';
import DeleteModal from '../DeleteModal';
import Table from '@/components/custom/Table';
import { TableCell, TableHead, TableRow } from '@/components/ui/table';
import Link from 'next/link';
import EditIcon from '../../../../../public/images/edit-icon';

const ProfessionalTable: FC<IProfessionalTableProps> = (props) => {
  const { professionals, onSuccess } = props;

  return (
    <Table
      childrenHeader={
        <Fragment>
          <TableHead>Profesional</TableHead>
          <TableHead>Profesión</TableHead>
        </Fragment>
      }
    >
      {professionals?.map((professional) => (
        <TableRow key={professional._id}>
          <TableCell className="font-medium">{professional.name}</TableCell>
          <TableCell>{professional.profession}</TableCell>
          <TableCell className="text-right w-14">
            <Link href={`/admin/backoffice/professional/${professional._id}`}>
              <div className="cursor-pointer bg-secondary flex justify-center items-center rounded-full h-8 w-8">
                <EditIcon className="text-white h-5 w-5" />
              </div>
            </Link>
          </TableCell>
          <TableCell className="text-right w-14">
            <DeleteModal
              id={professional._id.toString()}
              name={professional.name}
              professional={professional}
              onSuccess={onSuccess}
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
