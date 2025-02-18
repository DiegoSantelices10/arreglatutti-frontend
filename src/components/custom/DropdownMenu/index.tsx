import React, { FC, Fragment } from 'react';
import {
  DropdownMenu as DropdownMenuPrimitive,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { logout } from '@/actions';
import Link from 'next/link';

interface IDropdownMenuProps {
  trigger?: React.ReactNode;
}

const DropdownMenu: FC<IDropdownMenuProps> = (props) => {
  const { trigger } = props;
  return (
    <DropdownMenuPrimitive>
      <DropdownMenuTrigger>{trigger}</DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white w-56 absolute z-[99999999]">
        <Fragment>
          <Link href={'/queries'}>
            <DropdownMenuItem className="cursor-pointer">
              Mis consultas
            </DropdownMenuItem>
          </Link>
          <DropdownMenuItem className="cursor-pointer" onClick={() => logout()}>
            Cerrar sesión
          </DropdownMenuItem>
        </Fragment>
      </DropdownMenuContent>
    </DropdownMenuPrimitive>
  );
};

export default DropdownMenu;
