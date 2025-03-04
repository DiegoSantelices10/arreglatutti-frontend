/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { FC, ReactNode, useState } from 'react';
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
import { deleteProfessional } from '@/services/profesional';

interface IDeleteModal {
  id: string;
  name: string;
  trigger: ReactNode;
  onSuccess: () => Promise<void>;
}

const DeleteModal: FC<IDeleteModal> = (props) => {
  const { id, name, trigger, onSuccess } = props;

  const [isLoading, setIsLoading] = useState(false);

  const deleteProfesional = async (id: string) => {
    setIsLoading(true);
    const { status } = await deleteProfessional(id);

    if (status !== 200) {
      toast({
        variant: 'error',
        title: 'Error',
        description: 'Error al eliminar el profesional',
      });
      return;
    }

    toast({
      title: 'Profesional eliminado',
      description: 'Profesional eliminado con exito',
    });
    onSuccess();
    setIsLoading(false);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white">
        <DialogHeader>
          <DialogTitle className="text-primary text-center">
            Eliminar Profesional
          </DialogTitle>
          <DialogDescription className="pt-4 text-primary/80">
            ¿Deseas eliminar al profesional{' '}
            <span className="font-semibold">{name}</span> ?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogTrigger asChild>
            <Button
              disabled={isLoading}
              isLoading={isLoading}
              onClick={() => deleteProfesional(id)}
            >
              Aceptar
            </Button>
          </DialogTrigger>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteModal;
