import { cn } from '@/utils';
import { SelectProps } from './types';
import {
  SelectGroup,
  Select as ShadcnSelect,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const Select = (props: SelectProps) => {
  const {
    placeholder = 'Selecciona una opción',
    options,
    className,
    triggerClassName,
    defaultValue,
    value,
    ...rest
  } = props;
  return (
    <SelectGroup className={className}>
      <ShadcnSelect defaultValue={defaultValue} {...rest}>
        <SelectTrigger
          data-value={!!value || !!defaultValue}
          className={cn('text-gray-500', triggerClassName)}
        >
          <SelectValue placeholder={value || placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options?.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </ShadcnSelect>
    </SelectGroup>
  );
};

export default Select;
