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

interface IContentModal {
  id: string;
  name: string;
  trigger: React.ReactNode;
}

const ContentModal: FC<IContentModal> = (props) => {
  const { id, name, trigger } = props;

  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <Dialog open={openModal} onOpenChange={setOpenModal}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white">
        <DialogHeader>
          <DialogTitle className="text-primary text-center">
            Editar Barrio
          </DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <EditForm id={id} name={name} setOpenModal={setOpenModal} />
      </DialogContent>
    </Dialog>
  );
};

export default ContentModal;
