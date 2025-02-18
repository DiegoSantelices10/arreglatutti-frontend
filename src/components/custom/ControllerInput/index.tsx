import { Controller } from 'react-hook-form';

import { ControllerInputProps, RenderInputProps } from './types';
import { Input } from '@/components/ui/input';

const ControllerInput = ({
  control,
  name,
  rules,
  ...rest
}: ControllerInputProps) => {
  const renderInput = ({
    field: { onChange, onBlur, value, name: inputName },
    fieldState: { error },
  }: RenderInputProps) => (
    <div>
      <Input
        name={inputName}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        {...rest}
      />
      {error && <span className="text-red-500 text-xs">{error.message}</span>}
    </div>
  );

  return (
    <Controller
      control={control}
      name={name}
      render={renderInput}
      rules={rules}
    />
  );
};

export default ControllerInput;
