import { FC } from 'react';

import { Button as ShadcnButton, ButtonProps } from '@/components/ui/button';
import { cn } from '@/utils';

const Button: FC<ButtonProps> = ({
  children,
  className,
  ...rest
},
  ref,
) => (
  <ShadcnButton
    className={cn(className)}
    ref={ref}
    {...rest}
  >
    {children}
  </ShadcnButton>
);

export default Button;

