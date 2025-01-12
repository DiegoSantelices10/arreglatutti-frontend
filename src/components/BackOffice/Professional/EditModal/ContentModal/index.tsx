'use client';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import React, { FC, useState } from 'react';
import EditForm from '../../EditForm';
import EditIcon from '../../../../../../public/images/edit-icon';

export interface IImage {
  fileName: string;
  url: string;
}

interface IContentModal {
  id: string;
  name: string;
  profession: string;
  email: string;
  telephone: string;
  dni: string;
  cities: string[];
  description: string;
  image: IImage[];
}

const ContentModal: FC<IContentModal> = (props) => {
  const {
    id,
    name,
    profession,
    email,
    telephone,
    dni,
    cities,
    description,
    image,
  } = props;

  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <Dialog open={openModal} onOpenChange={setOpenModal}>
      <DialogTrigger asChild>
        <EditIcon />
      </DialogTrigger>
      <DialogContent className="max-w-[625px] bg-white overflow-y-auto max-h-screen py-4">
        <DialogHeader>
          <DialogTitle className="text-primary text-center">
            Editar Profesión
          </DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <EditForm
          id={id}
          name={name}
          profession={profession}
          email={email}
          telephone={telephone}
          dni={dni}
          cities={cities}
          description={description}
          image={image}
          setOpenModal={setOpenModal}
        />
      </DialogContent>
    </Dialog>
  );
};

export default ContentModal;
