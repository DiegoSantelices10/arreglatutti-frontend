import { FC } from 'react';

import { Button as ShadcnButton, ButtonProps } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';

interface IButtonProps extends ButtonProps {
  isLoading?: boolean;
}

const Button: FC<IButtonProps> = ({ children, isLoading, ...rest }, ref) => (
  <ShadcnButton ref={ref} {...rest}>
    {children}
    {isLoading && <Loader2 className="animate-spin" />}
  </ShadcnButton>
);

export default Button;
