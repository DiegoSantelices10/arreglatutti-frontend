import { Controller } from 'react-hook-form';
import MultiSelect from '../MultiSelect';
import { ControllerSelectProps, Option } from '../ControllerSelect/types';

const ControllerMultiSelect = ({
  control,
  name,
  rules,
  placeholder,
  options,
}: ControllerSelectProps & { placeholder: string; options: Option[] }) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { onChange, value } }) => (
        <MultiSelect
          placeholder={placeholder}
          options={options}
          value={value || []}
          onValueChange={onChange}
        />
      )}
    />
  );
};

export default ControllerMultiSelect;
