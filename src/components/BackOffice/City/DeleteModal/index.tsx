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
import { useRouter } from 'next/navigation';
import { deleteCity } from '@/services/city';

interface IDeleteModal {
  id: string;
  name: string;
  trigger: ReactNode;
}

const DeleteModal: FC<IDeleteModal> = (props) => {
  const { id, name, trigger } = props;

  const router = useRouter();

  const deleteItem = async (id: string) => {
    console.log('id', id);

    const response = await deleteCity(id);
    console.log('response', response);

    if (response.status === 200) {
      toast({
        title: 'Barrio eliminado',
        description: 'Barrio eliminado con exito',
      });
      router.push('/admin/backoffice/city');
    } else {
      console.log(response);
    }
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
            <Button onClick={() => deleteItem(id)}>Aceptar</Button>
          </DialogTrigger>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteModal;
