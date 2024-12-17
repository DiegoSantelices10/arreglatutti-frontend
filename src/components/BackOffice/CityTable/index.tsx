import React, { FC } from 'react'

import {
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
    Table,
} from '@/components/ui/table'
import { ICityTableProps } from './types'
import EditIcon from '../../../../public/images/edit-icon'
import DeleteIcon from '../../../../public/images/delete-icon'

const CityTable: FC<ICityTableProps> = (props) => {
    const { data } = props
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
                {data.map((city) => (
                    <TableRow key={city.id}>
                        <TableCell className="font-medium">{city.id}</TableCell>
                        <TableCell className="font-medium">{city.name}</TableCell>
                        <TableCell className='pl-4 cursor-pointer'><EditIcon /></TableCell>
                        <TableCell className='pl-5 cursor-pointer'><DeleteIcon /></TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default CityTable