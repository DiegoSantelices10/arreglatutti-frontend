import React, { FC, Fragment, useState } from 'react';

import { ICityTableProps } from './types';
import DeleteIcon from '../../../../../public/images/delete-icon';
import { EditModal } from '../EditModal';
import DeleteModal from '../DeleteModal';
import Table from '@/components/custom/Table';
import { TableCell, TableHead, TableRow } from '@/components/ui/table';

const CityTable: FC<ICityTableProps> = (props) => {
  const { cities } = props;

  const [renderCities, setRenderCities] = useState(cities);

  return (
    <Table
      childrenHeader={
        <Fragment>
          <TableHead>Nombre</TableHead>
        </Fragment>
      }
    >
      {renderCities?.map((city) => (
        <TableRow key={city._id}>
          <TableCell className="font-medium">{city.name}</TableCell>
          <TableCell className="text-right w-14">
            <EditModal city={city} setRenderCities={setRenderCities} />
          </TableCell>
          <TableCell className="text-right w-14">
            <DeleteModal
              id={city._id.toString()}
              setRenderCities={setRenderCities}
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
