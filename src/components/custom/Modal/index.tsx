import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import React, { FC } from 'react';
import { IModalProps } from './types';

const Modal: FC<IModalProps> = (props) => {
  const {
    children,
    childrenFooter,
    triggerButton,
    title,
    description = '',
    ...rest
  } = props;

  return (
    <Dialog {...rest}>
      <DialogTrigger asChild>{triggerButton}</DialogTrigger>
      <DialogContent className="max-w-screen-md overflow-visible max-h-[90vh]  z-[9999] overflow-y-auto border-0 bg-white rounded-xl">
        <DialogHeader>
          <DialogTitle className="text-primary text-center">
            {title}
          </DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <div className="flex justify-center items-center p-0">{children}</div>
        {childrenFooter && (
          <DialogFooter>
            <DialogTrigger asChild>{childrenFooter}</DialogTrigger>
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
