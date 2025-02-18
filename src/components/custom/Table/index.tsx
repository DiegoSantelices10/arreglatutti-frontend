import {
  Table as TableUI,
  TableBody,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { FC, ReactNode } from 'react';

interface ITableProps {
  childrenHeader: ReactNode;
  children: ReactNode;
}
const Table: FC<ITableProps> = (props) => {
  const { childrenHeader, children, ...rest } = props;
  return (
    <TableUI {...rest}>
      <TableHeader>
        <TableRow>{childrenHeader}</TableRow>
      </TableHeader>
      <TableBody>{children}</TableBody>
    </TableUI>
  );
};

export default Table;
