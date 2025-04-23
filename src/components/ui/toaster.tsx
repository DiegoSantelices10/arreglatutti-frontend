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
          <Toast key={id} className="w-full" {...props}>
            <div className="w-full">
              {title && (
                <ToastTitle className={cn(iconColor)}>{title}</ToastTitle>
              )}
              {description && (
                <ToastDescription
                  className={cn('text-xs text-wrap', iconColor)}
                >
                  {description}
                </ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
