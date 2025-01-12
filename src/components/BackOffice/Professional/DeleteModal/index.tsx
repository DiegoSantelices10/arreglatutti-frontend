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
import { deleteProfessional } from '@/services/profesional';

interface IDeleteModal {
  id: string;
  name: string;
  trigger: ReactNode;
}

const DeleteModal: FC<IDeleteModal> = (props) => {
  const { id, name, trigger } = props;

  const router = useRouter();

  const deleteProfesional = async (id: string) => {
    const response = await deleteProfessional(id);
    if (response.status === 200) {
      toast({
        title: 'Profesional eliminado',
        description: 'Profesional eliminado con exito',
      });
      router.push('/admin/backoffice/professional');
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
            Eliminar Profesional
          </DialogTitle>
          <DialogDescription className="pt-4 text-primary/80">
            ¿Deseas eliminar al profesional{' '}
            <span className="font-semibold">{name}</span> ?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogTrigger asChild>
            <Button onClick={() => deleteProfesional(id)}>Aceptar</Button>
          </DialogTrigger>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteModal;
