import { FieldValues } from 'react-hook-form';
import { z } from 'zod';

const signUpFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: 'El nombre debe tener al menos 2 caracteres' })
    .max(30, { message: 'Máximo 30 caracteres' }),
  password: z
    .string()
    .trim()
    .min(6, { message: 'La contraseña debe tener al menos 6 caracteres.' })
    .max(50, { message: 'Máximo 50 caracteres' }),
  email: z.string().trim().email({ message: 'Correo electrónico inválido' }),
});

type SignUpSchemaType = z.infer<typeof signUpFormSchema> | FieldValues;

export { signUpFormSchema };
export type { SignUpSchemaType };
