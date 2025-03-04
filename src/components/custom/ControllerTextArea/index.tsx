import { Controller } from 'react-hook-form';

import { ControllerTextAreaProps, RenderTextAreaProps } from './types';
import { Textarea } from '@/components/ui/textarea';

const ControllerTextArea = (props: ControllerTextAreaProps) => {
  const { control, rules, name, ...rest } = props;

  const renderTextArea = ({
    field: { onChange, value, name: textAreaName },
    fieldState: { error },
  }: RenderTextAreaProps) => {
    return (
      <div>
        <Textarea
          rows={6}
          name={textAreaName}
          onChange={onChange}
          value={value}
          {...rest}
        />
        {error && <span className="text-red-500 text-xs">{error.message}</span>}
      </div>
    );
  };

  return (
    <Controller
      control={control}
      name={name}
      render={renderTextArea}
      rules={rules}
    />
  );
};

export default ControllerTextArea;
