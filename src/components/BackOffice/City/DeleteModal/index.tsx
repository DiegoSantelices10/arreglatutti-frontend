/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { Dispatch, FC, ReactNode, useState } from 'react';
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
import { deleteCity } from '@/services/city';

interface IDeleteModal {
  id: string;
  name: string;
  trigger: ReactNode;
  setRenderCities: Dispatch<React.SetStateAction<any[]>>;
}

const DeleteModal: FC<IDeleteModal> = (props) => {
  const { id, name, trigger, setRenderCities } = props;

  const [isLoading, setIsLoading] = useState(false);

  const deleteItem = async (id: string) => {
    setIsLoading(true);
    const { status } = await deleteCity(id);

    if (status !== 200) {
      toast({
        variant: 'error',
        title: 'Error',
        description: 'Error al eliminar la ciudad',
      });
      return;
    }

    toast({
      title: 'Ciudad eliminada',
      description: 'Ciudad eliminada con exito',
    });

    setRenderCities((prev) => {
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
            Eliminar Barrio
          </DialogTitle>
          <DialogDescription className="pt-4 text-primary/80">
            ¿Deseas eliminar el barrio{' '}
            <span className="font-semibold">{name}</span> ?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogTrigger asChild>
            <Button
              disabled={isLoading}
              isLoading={isLoading}
              onClick={() => deleteItem(id)}
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
