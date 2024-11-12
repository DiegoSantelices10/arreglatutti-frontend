import {
  Control,
  ControllerFieldState,
  ControllerRenderProps,
  FieldValues,
  RegisterOptions,
  UseFormStateReturn,
} from 'react-hook-form';


export interface ControllerTextAreaProps {
  name: string;
  control: Control<FieldValues>;
  placeholder?: string;
  rules?: RegisterOptions;
}

export interface RenderTextAreaProps {
  field: ControllerRenderProps;
  fieldState: ControllerFieldState;
  formState: UseFormStateReturn<FieldValues>;
}
