/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC } from 'react';
import ContentForm from '@/components/BackOffice/Professional/ContentForm';

interface IEditForm {
  params: Promise<{ id: string }>;
}

const EditForm: FC<IEditForm> = async ({ params }) => {
  const { id } = await params;

  return (
    <div className="pt-8">
      <ContentForm id={id} />
    </div>
  );
};

export default EditForm;
