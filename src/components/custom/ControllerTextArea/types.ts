import {
  Control,
  ControllerFieldState,
  ControllerRenderProps,
  FieldValues,
  RegisterOptions,
  UseFormStateReturn,
} from 'react-hook-form';

export interface ControllerTextAreaProps {
  id: string;
  name: string;
  control: Control<FieldValues>;
  placeholder?: string;
  rules?: RegisterOptions;
  className: HTMLElement['className'];
}

export interface RenderTextAreaProps {
  field: ControllerRenderProps;
  fieldState: ControllerFieldState;
  formState: UseFormStateReturn<FieldValues>;
}
