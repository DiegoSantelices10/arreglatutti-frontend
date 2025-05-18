import { FC } from 'react';
import { Controller, FieldValues } from 'react-hook-form';

import { Checkbox } from '@/components/ui/checkbox';
import { IControllerCheckbox } from './types';
const ControllerCheckbox: FC<IControllerCheckbox> = (props) => {
  const {
    name = '',
    control,
    label,
    labelDescription,
    rules,
    controllerProps,
    ...rest
  } = props;

  const renderCheckbox = ({ field }: FieldValues) => (
    <div className="items-center flex space-x-2">
      <Checkbox
        id="terms1"
        className="bg-white rounded"
        checked={field.value}
        onCheckedChange={field.onChange}
        {...field}
        {...rest}
      />
      <div className="grid leading-none">
        <label
          htmlFor="terms1"
          className="text-sm text-white font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {label}
        </label>
        <p className="text-sm text-muted-foreground">{labelDescription}</p>
      </div>
    </div>
  );

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={renderCheckbox}
      {...controllerProps}
    />
  );
};

export default ControllerCheckbox;
