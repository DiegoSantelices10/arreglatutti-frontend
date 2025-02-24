/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC } from 'react';
import Content from '@/components/Profession/Content';
import { getSession } from '@/actions';

interface IProfessionDetailProps {
  params: Promise<{ profession: string }>;
}

const ProfessionDetail: FC<IProfessionDetailProps> = async ({ params }) => {
  const { profession } = await params;
  const session = await getSession();
  const userId = session?.id;

  return (
    <Content
      profession={profession}
      isLoggedIn={session.isLoggedIn}
      userId={userId}
    />
  );
};

export default ProfessionDetail;
