import { FieldValues } from 'react-hook-form';
import { z } from 'zod';

const loginRegisterFormSchema = z.object({
  name: z.string().trim().max(50, { message: 'Máximo 50 caracteres' }),
  password: z
    .string()
    .trim()
    .min(6, { message: 'La contraseña debe tener al menos 6 caracteres.' })
    .max(50, { message: 'Máximo 50 caracteres' }),
  email: z.string().trim().email(),
});

type LoginRegisterSchemaType =
  | z.infer<typeof loginRegisterFormSchema>
  | FieldValues;

export { loginRegisterFormSchema };
export type { LoginRegisterSchemaType };
