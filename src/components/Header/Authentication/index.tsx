import React, { FC, Fragment } from 'react';
import UserIcon from '../../../../public/images/user-icon';
import DropdownMenu from '@/components/custom/DropdownMenu';
import {
  DropdownMenu as DropdownMenuPrimitive,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';

interface IAuthenticationProps {
  isLoggedIn: boolean;
}

const Authentication: FC<IAuthenticationProps> = (props) => {
  const { isLoggedIn } = props;

  return isLoggedIn ? (
    <DropdownMenu trigger={<UserIcon className="w-6 h-6 text-white" />} />
  ) : (
    <DropdownMenuPrimitive>
      <DropdownMenuTrigger className=" focus:ring-0 focus:ring-offset-0 focus:outline-none">
        <UserIcon className="w-6 h-6 text-white" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white w-56 absolute z-[99999999]">
        <DropdownMenuLabel>Inicio de sesión</DropdownMenuLabel>
        <Fragment>
          <Link
            href={{
              pathname: '/user-signIn',
              query: { type: 'professional' },
            }}
          >
            <DropdownMenuItem className="cursor-pointer">
              Profesionales
            </DropdownMenuItem>
          </Link>
          <Link
            href={{
              pathname: '/user-signIn',
              query: { type: 'client' },
            }}
          >
            <DropdownMenuItem className="cursor-pointer">
              Clientes
            </DropdownMenuItem>
          </Link>
        </Fragment>
      </DropdownMenuContent>
    </DropdownMenuPrimitive>
  );
};

export default Authentication;
