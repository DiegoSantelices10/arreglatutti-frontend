import { FC, ReactNode } from 'react';
import { getProfessionById } from '@/services/profesion';
import ContentModal from './ContentModal';

interface IEditModal {
  id: string;
  trigger: ReactNode;
}

export const EditModal: FC<IEditModal> = async (props) => {
  const { id, trigger } = props;

  const response = await getProfessionById(id);

  return <ContentModal id={id} name={response.data.name} trigger={trigger} />;
};
