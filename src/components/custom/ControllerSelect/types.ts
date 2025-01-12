import { HTMLAttributes, Ref } from 'react';
import {
  Control,
  ControllerFieldState,
  ControllerRenderProps,
  FieldValues,
  RegisterOptions,
  UseFormStateReturn,
} from 'react-hook-form';

import { SelectProps as RadixSelectProps } from '@radix-ui/react-select';

export type Option = {
  value: string;
  label: string;
};

export interface SelectProps extends RadixSelectProps {
  className?: HTMLAttributes<HTMLDivElement>['className'];
  ref?: Ref<HTMLSelectElement>;
  placeholder: string;
  options: Option[];
  triggerClassName?: HTMLAttributes<HTMLDivElement>['className'];
}

export interface ControllerSelectProps extends SelectProps {
  id: string;
  name: string;
  control: Control<FieldValues>;
  rules?: RegisterOptions;
}

export interface RenderSelectProps {
  field: ControllerRenderProps;
  fieldState: ControllerFieldState;
  formState: UseFormStateReturn<FieldValues>;
}
