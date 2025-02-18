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
import { deleteMessage } from '@/services/professionalApplication';

interface IDeleteModal {
  id: string;
  name: string;
  trigger: ReactNode;
  setRenderData: (data: any) => void;
}

export const DeleteModal: FC<IDeleteModal> = (props) => {
  const { id, name, trigger, setRenderData } = props;

  const deleteProfesion = async (id: string) => {
    try {
      await deleteMessage(id);
      toast({
        title: 'Mensaje eliminado',
        description: 'Mensaje eliminado con exito',
      });
      setRenderData((prevData: any[]) =>
        prevData.filter((item) => item._id !== id)
      );
    } catch (error) {
      console.log(error);
      toast({
        variant: 'error',
        title: 'Error',
        description: 'Error al eliminar el mensaje',
      });
    }
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
            <Button onClick={() => deleteProfesion(id)}>Aceptar</Button>
          </DialogTrigger>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
