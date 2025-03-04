'use client';
import { Dispatch, FC, ReactNode, useState } from 'react';
import { deleteProfession } from '@/services/profesion';
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
import { IProfession } from '../ProfessionTable/types';

interface IDeleteModal {
  id: string;
  name: string;
  trigger: ReactNode;
  setRenderProfessions: Dispatch<React.SetStateAction<IProfession[]>>;
}

export const DeleteModal: FC<IDeleteModal> = (props) => {
  const { id, name, trigger, setRenderProfessions } = props;

  const [isLoading, setIsLoading] = useState(false);

  const deleteProfesion = async (id: string) => {
    setIsLoading(true);
    const { status } = await deleteProfession(id);

    if (status !== 200) {
      toast({
        variant: 'error',
        title: 'Error',
        description: 'Error al eliminar la profesion',
      });
      return;
    }

    toast({
      title: 'Profesion eliminada',
      description: 'Profesion eliminada con exito',
    });

    setRenderProfessions((prev) => {
      return prev.filter((prof) => prof._id !== id);
    });

    setIsLoading(false);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white">
        <DialogHeader>
          <DialogTitle className="text-primary text-center">
            Eliminar Profesión
          </DialogTitle>
          <DialogDescription className="pt-4 text-primary/80">
            ¿Deseas eliminar la profesión{' '}
            <span className="font-semibold">{name}</span> ?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogTrigger asChild>
            <Button
              disabled={isLoading}
              isLoading={isLoading}
              onClick={() => deleteProfesion(id)}
            >
              Aceptar
            </Button>
          </DialogTrigger>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
