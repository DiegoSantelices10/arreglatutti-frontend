/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { FC, ReactNode } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { toast } from '@/hooks/use-toast';
import Button from '@/components/custom/Button';
import { deleteMessage } from '@/services/messageClient';

interface IDeleteModal {
  id: string;
  name: string;
  trigger: ReactNode;
  setRenderData: (data: any) => void;
}

export const DeleteModal: FC<IDeleteModal> = (props) => {
  const { id, name, trigger, setRenderData } = props;

  const deleteMessageProfesion = async (id: string) => {
    const response = await deleteMessage(id);

    if (response.status !== 200) {
      toast({
        variant: 'error',
        title: 'Error',
        description: 'Error al eliminar el mensaje',
      });
      return;
    }

    toast({
      title: 'Mensaje Eliminado',
      description: 'Mensaje eliminado con exito',
    });

    setRenderData((prev: any) => prev.filter((item: any) => item._id !== id));
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white">
        <DialogHeader>
          <DialogTitle className="text-primary text-center">
            Eliminar Mensaje
          </DialogTitle>
          <DialogDescription className="pt-4 text-primary/80">
            ¿Deseas eliminar el mensaje de{' '}
            <span className="font-semibold">{name}</span> ?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogTrigger asChild>
            <Button onClick={() => deleteMessageProfesion(id)}>Aceptar</Button>
          </DialogTrigger>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
