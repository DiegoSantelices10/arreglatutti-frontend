import React, { FC } from 'react';
import UserIcon from '../../../../public/images/user-icon';
import DropdownMenu from '@/components/custom/DropdownMenu';
import SignInSignUp from '@/components/SignInSignUp';

interface IAuthenticationProps {
  isLoggedIn: boolean;
}

const Authentication: FC<IAuthenticationProps> = (props) => {
  const { isLoggedIn } = props;

  return isLoggedIn ? (
    <DropdownMenu trigger={<UserIcon className="w-6 h-6 text-white" />} />
  ) : (
    <SignInSignUp triggerButton={<UserIcon className="w-6 h-6 text-white" />} />
  );
};

export default Authentication;
