import { FC } from 'react';
import ContentModal from './ContentModal';
import { getProfessionalById } from '@/services/profesional';

interface IEditModal {
  id: string;
}

export const EditModal: FC<IEditModal> = async (props) => {
  const { id } = props;

  const { data } = await getProfessionalById(id);

  return (
    <ContentModal
      id={id}
      name={data.name}
      email={data.email}
      dni={data.dni}
      profession={data.profession}
      telephone={data.telephone}
      cities={data.cities}
      description={data.description}
      image={data.image}
    />
  );
};
