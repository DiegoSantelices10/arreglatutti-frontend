import { Controller } from 'react-hook-form';

import Select from './Select';
import { ControllerSelectProps, RenderSelectProps } from './types';

const ControllerSelect = ({
  control,
  name,
  rules,
  ...rest
}: ControllerSelectProps) => {

  const renderInput = ({
    field: {
      onChange,
      value,
      name: inputName,
    },
  }: RenderSelectProps) => (
    <Select
      name={inputName}
      onValueChange={onChange}
      value={value}
      {...rest}
    />
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

export default ControllerSelect;
