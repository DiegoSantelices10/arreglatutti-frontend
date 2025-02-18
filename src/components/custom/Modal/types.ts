import { ReactNode } from 'react';

export interface IModalProps {
  children: ReactNode;
  childrenFooter?: ReactNode;
  triggerButton: ReactNode;
  title: string;
  description?: string;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}
