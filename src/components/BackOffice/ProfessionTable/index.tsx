import React, { FC } from 'react'

import {
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
    Table,
} from '@/components/ui/table'
import { IProsessionTable } from './types'
import EditIcon from '../../../../public/images/edit-icon'
import DeleteIcon from '../../../../public/images/delete-icon'

const ProfessionTable: FC<IProsessionTable> = (props) => {
    const { data } = props
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Id</TableHead>
                    <TableHead>Profesión</TableHead>
                    <TableHead>Editar</TableHead>
                    <TableHead>Eliminar</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {data.map((profession) => (
                    <TableRow key={profession.id}>
                        <TableCell>{profession.id}</TableCell>
                        <TableCell className="font-medium">{profession.name}</TableCell>
                        <TableCell className='pl-4 cursor-pointer'><EditIcon /></TableCell>
                        <TableCell className='pl-5 cursor-pointer'><DeleteIcon /></TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default ProfessionTable