import {
  Control,
  ControllerFieldState,
  ControllerRenderProps,
  FieldValues,
  RegisterOptions,
  UseFormStateReturn,
} from 'react-hook-form';

import { IInputProps } from '@/components/ui/input';

export interface ControllerInputProps extends IInputProps {
  name: string;
  hasSegurity?: boolean;
  control: Control<FieldValues>;
  rules?: RegisterOptions;
}

export interface RenderInputProps {
  field: ControllerRenderProps;
  fieldState: ControllerFieldState;
  formState: UseFormStateReturn<FieldValues>;
}
