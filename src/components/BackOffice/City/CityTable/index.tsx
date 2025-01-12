import React, { FC } from 'react';

import {
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Table,
} from '@/components/ui/table';
import { ICityTableProps } from './types';
import EditIcon from '../../../../../public/images/edit-icon';
import DeleteIcon from '../../../../../public/images/delete-icon';
import { EditModal } from '../EditModal';
import DeleteModal from '../DeleteModal';

const CityTable: FC<ICityTableProps> = (props) => {
  const { data } = props;

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Id</TableHead>
          <TableHead>Barrio</TableHead>
          <TableHead>Editar</TableHead>
          <TableHead>Eliminar</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.map((city, index) => (
          <TableRow key={city._id}>
            <TableCell className="font-medium">{index + 1}</TableCell>
            <TableCell className="font-medium">{city.name}</TableCell>
            <TableCell className="pl-4 cursor-pointer">
              <EditModal
                id={city._id.toString()}
                trigger={
                  <button>
                    <EditIcon />
                  </button>
                }
              />
            </TableCell>
            <TableCell className="pl-5 cursor-pointer">
              <DeleteModal
                id={city._id.toString()}
                name={city.name}
                trigger={<DeleteIcon />}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default CityTable;
