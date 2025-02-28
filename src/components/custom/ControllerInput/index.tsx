import { Controller } from 'react-hook-form';

import { ControllerInputProps, RenderInputProps } from './types';
import { Input } from '@/components/ui/input';
import OpenEyesIcon from '@/images/icons/open-eyes-icon';
import { useState } from 'react';
import CloseEyesIcon from '@/images/icons/close-eyes-icon';

const ControllerInput = ({
  control,
  name,
  type,
  hasSegurity,
  rules,
  ...rest
}: ControllerInputProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const typeCurrent = showPassword ? 'text' : type;

  const isSetShowPassword = () => setShowPassword(!showPassword);

  const hideRightIcon = hasSegurity && (
    <div className="cursor-pointer" onClick={isSetShowPassword}>
      {showPassword ? (
        <OpenEyesIcon className="text-gray-300" />
      ) : (
        <CloseEyesIcon className="text-gray-300" />
      )}
    </div>
  );

  const renderInput = ({
    field: { onChange, onBlur, value, name: inputName },
    fieldState: { error },
  }: RenderInputProps) => {
    return (
      <div>
        <div className="flex px-3 justify-between items-center rounded-md overflow-hidden border  border-gray-200 bg-transparent">
          <Input
            name={inputName}
            onChange={onChange}
            onBlur={onBlur}
            type={typeCurrent}
            value={value}
            {...rest}
          />
          {hideRightIcon}
        </div>
        {error && <span className="text-red-500 text-xs">{error.message}</span>}
      </div>
    );
  };

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
