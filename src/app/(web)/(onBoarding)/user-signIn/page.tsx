/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from 'next/image';
import React, { FC } from 'react';
import UserSignInForm from '@/components/Onboarding/UserSignInForm';

interface IUserSignInProps {
  searchParams: { type?: string };
}
const UserSignIn: FC<IUserSignInProps> = async ({ searchParams }) => {
  const type: any = searchParams?.type;

  return (
    <div className="min-h-screen flex justify-center items-center px-2 md:p-16">
      <div className="flex w-full shadow">
        <div className="bg-blue-950 hidden md:flex justify-center items-center rounded-md w-1/2">
          <div>
            <Image
              src="/images/logo-aquiles.png"
              alt="logo"
              width={200}
              height={200}
            />
          </div>
        </div>
        <UserSignInForm type={type} />
      </div>
    </div>
  );
};

export default UserSignIn;
