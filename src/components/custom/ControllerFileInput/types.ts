import { IInputProps } from '@/components/ui/input';
import { Control, FieldValues } from 'react-hook-form';

export interface ControllerInputFileProps extends IInputProps {
  control: Control<FieldValues>;
  errorMessage?: string;
  htmlForLabel?: string;
}
