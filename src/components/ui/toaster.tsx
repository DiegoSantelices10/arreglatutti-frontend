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

import SuccessIcon from '@/images/icons/success-icon';
import ErrorIcon from '@/images/icons/error-icon';
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
        const Icon = variant === 'error' ? ErrorIcon : SuccessIcon;
        const iconColor = variant === 'error' ? 'text-red-500' : 'text-primary';
        return (
          <Toast
            key={id}
            className="z-30 md:min-w-96 mx-auto grid grid-cols-12"
            {...props}
          >
            <Icon className={`w-5 h-5 col-span-1 ${iconColor}`} />
            <div className="grid gap-1 col-span-11">
              {title && (
                <ToastTitle className={cn(iconColor)}>{title}</ToastTitle>
              )}
              {description && (
                <ToastDescription className={cn('text-xs', iconColor)}>
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
