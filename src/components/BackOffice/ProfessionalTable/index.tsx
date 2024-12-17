import React, { FC } from 'react'

import {
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
    Table,
} from '@/components/ui/table'
import { IProfessionalTableProps } from './types'
import EditIcon from '../../../../public/images/edit-icon'
import DeleteIcon from '../../../../public/images/delete-icon'

const ProfessionalTable: FC<IProfessionalTableProps> = (props) => {
    const { data } = props
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Profesional</TableHead>
                    <TableHead>Profesión</TableHead>
                    <TableHead>Editar</TableHead>
                    <TableHead>Eliminar</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {data.map((professional) => (
                    <TableRow key={professional.id}>
                        <TableCell className="font-medium">{professional.name}</TableCell>
                        <TableCell>{professional.category}</TableCell>
                        <TableCell className='pl-4 cursor-pointer'><EditIcon /></TableCell>
                        <TableCell className='pl-5 cursor-pointer'><DeleteIcon /></TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default ProfessionalTable