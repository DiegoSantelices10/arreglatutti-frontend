import React, { FC, Fragment, useState } from 'react';

import { IProsessionTable } from './types';
import DeleteIcon from '../../../../../public/images/delete-icon';
import { EditModal } from '../EditModal';
import { DeleteModal } from '../DeleteModal';
import Table from '@/components/custom/Table';
import { TableCell, TableHead, TableRow } from '@/components/ui/table';

const ProfessionTable: FC<IProsessionTable> = (props) => {
  const { professions } = props;

  const [renderProfessions, setRenderProfessions] = useState(professions);
  return (
    <Table
      childrenHeader={
        <Fragment>
          <TableHead>Profesión</TableHead>
        </Fragment>
      }
    >
      {renderProfessions?.map((profession) => (
        <TableRow key={profession._id}>
          <TableCell className="font-medium">{profession.name}</TableCell>
          <TableCell className="text-right w-14">
            <EditModal
              profession={profession}
              setRenderProfessions={setRenderProfessions}
            />
          </TableCell>
          <TableCell className="text-right w-14">
            <DeleteModal
              id={profession._id.toString()}
              setRenderProfessions={setRenderProfessions}
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
