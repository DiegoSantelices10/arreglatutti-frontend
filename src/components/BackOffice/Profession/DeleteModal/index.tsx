'use client';
import { FC, ReactNode } from 'react';
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
import { useRouter } from 'next/navigation';

interface IDeleteModal {
  id: string;
  name: string;
  trigger: ReactNode;
}

export const DeleteModal: FC<IDeleteModal> = (props) => {
  const { id, name, trigger } = props;

  const router = useRouter();

  const deleteProfesion = async (id: string) => {
    try {
      await deleteProfession(id);
      toast({
        title: 'Profesión eliminada',
        description: 'Profesión eliminada con exito',
      });
      router.push('/admin/backoffice/profession');
    } catch (error) {
      console.log('error', error);
      toast({
        title: 'Error',
        description: 'Error al eliminar la profesión',
      });
    }
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
            <Button onClick={() => deleteProfesion(id)}>Aceptar</Button>
          </DialogTrigger>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
