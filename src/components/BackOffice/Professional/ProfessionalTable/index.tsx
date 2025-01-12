import React, { FC } from 'react';

import {
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Table,
} from '@/components/ui/table';
import { IProfessionalTableProps } from './types';
import DeleteIcon from '../../../../../public/images/delete-icon';
import { EditModal } from '../EditModal';
import DeleteModal from '../DeleteModal';

const ProfessionalTable: FC<IProfessionalTableProps> = (props) => {
  const { data } = props;
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Id</TableHead>
          <TableHead>Profesional</TableHead>
          <TableHead>Profesión</TableHead>
          <TableHead>Editar</TableHead>
          <TableHead>Eliminar</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.map((professional, index) => (
          <TableRow key={professional._id}>
            <TableCell className="font-medium">{index + 1}</TableCell>
            <TableCell className="font-medium">{professional.name}</TableCell>
            <TableCell>{professional.profession}</TableCell>
            <TableCell className="pl-4 cursor-pointer">
              <EditModal id={professional._id.toString()} />
            </TableCell>
            <TableCell className="pl-5 cursor-pointer">
              <DeleteModal
                id={professional._id.toString()}
                name={professional.name}
                trigger={<DeleteIcon />}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ProfessionalTable;
