import { Controller } from 'react-hook-form';


import { ControllerTextAreaProps, RenderTextAreaProps } from './types';
import { Textarea } from '@/components/ui/textarea';

const ControllerTextArea = (props: ControllerTextAreaProps) => {
  const {
    control,
    rules,
    name,
    ...rest
  } = props;

  const renderTextArea = ({
    field: {
      onChange,
      value,
      name: textAreaName,
    },
  }: RenderTextAreaProps) => (
    <Textarea
      name={textAreaName}
      onChange={onChange}
      value={value}
      {...rest}
    />
  );

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
