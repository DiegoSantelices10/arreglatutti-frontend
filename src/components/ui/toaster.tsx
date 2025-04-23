'use client';

import { useToast } from '@/hooks/use-toast';
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from '@/components/ui/toast';

import { cn } from '@/utils';

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(function ({
        id,
        title,
        description,
        action,
        variant,
        ...props
      }) {
        const iconColor =
          variant === 'error'
            ? 'text-red-500'
            : variant === 'default'
              ? 'text-white'
              : 'text-primary';
        return (
          <Toast key={id} className="z-30" {...props}>
            <div className="w-full">
              {title && (
                <ToastTitle className={cn(iconColor)}>{title}</ToastTitle>
              )}
              {description && (
                <ToastDescription className={cn('text-xs', iconColor)}>
                  {description}
                </ToastDescription>
              )}
            </div>
            {action && <div className="flex justify-end  w-full">{action}</div>}
            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
