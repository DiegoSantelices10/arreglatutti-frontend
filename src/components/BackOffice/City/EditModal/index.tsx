import { FC, ReactNode } from 'react';
import ContentModal from './ContentModal';
import { getCityById } from '@/services/city';

interface IEditModal {
  id: string;
  trigger: ReactNode;
}

export const EditModal: FC<IEditModal> = async (props) => {
  const { id, trigger } = props;

  const response = await getCityById(id);

  return <ContentModal id={id} name={response.data.name} trigger={trigger} />;
};
