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
    id,
    triggerClassName,
    defaultValue,
    value,
    ...rest
  } = props;

  return (
    <SelectGroup className={className}>
      <ShadcnSelect {...rest}>
        <SelectTrigger
          data-value={!!value || !!defaultValue}
          id={id}
          className={cn(
            'rounded-md',
            value ? 'text-gray-500' : 'text-gray-300',
            triggerClassName
          )}
        >
          <SelectValue placeholder={value || placeholder} />
        </SelectTrigger>
        <SelectContent className="space-y-2">
          {options?.map((option) => (
            <SelectItem
              key={option.value}
              className=" text-gray-400"
              value={option.value}
            >
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </ShadcnSelect>
    </SelectGroup>
  );
};

export default Select;
