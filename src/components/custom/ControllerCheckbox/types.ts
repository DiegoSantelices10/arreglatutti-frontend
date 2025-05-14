import {
  Control,
  ControllerProps,
  FieldValues,
  RegisterOptions,
} from 'react-hook-form';

import { CheckboxProps } from '@radix-ui/react-checkbox';
import { ReactNode } from 'react';

export interface IControllerCheckbox extends CheckboxProps {
  control: Control<FieldValues>;
  controllerProps?: ControllerProps;
  rules?: RegisterOptions;
  label?: ReactNode;
  labelDescription?: string;
}
